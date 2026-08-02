import { useEffect, useRef } from "react";

type Root = {
  x: number;
  y: number;
  angle: number;
  length: number;
  width: number;
  depth: number;
  hue: "cyan" | "green" | "moon" | "ember";
  seed: number;
};

const palette = {
  cyan: [73, 232, 236],
  green: [128, 226, 112],
  moon: [239, 237, 217],
  ember: [244, 125, 63],
} as const;

const fract = (value: number) => value - Math.floor(value);
const random = (seed: number) => fract(Math.sin(seed * 91.733) * 43758.5453);

const MemoryGarden = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    let frame = 0;
    let raf = 0;
    let width = 0;
    let height = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { rootMargin: "120px" },
    );
    observer.observe(canvas);

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw(0);
    };

    const drawBranch = (root: Root, time: number) => {
      const color = palette[root.hue];
      const sway = reduceMotion.matches ? 0 : Math.sin(time * 0.00045 + root.seed) * 0.025;
      const pointerPull = coarsePointer.matches
        ? 0
        : (pointerRef.current.x / Math.max(width, 1)) * 0.12 * (1 - root.depth / 8);
      const angle = root.angle + sway + pointerPull;
      const ex = root.x + Math.cos(angle) * root.length;
      const ey = root.y + Math.sin(angle) * root.length;
      const normalX = Math.cos(angle + Math.PI / 2);
      const normalY = Math.sin(angle + Math.PI / 2);
      const bend = (random(root.seed + 2) - 0.5) * root.length * 0.7;
      const cx = (root.x + ex) / 2 + normalX * bend;
      const cy = (root.y + ey) / 2 + normalY * bend;

      context.beginPath();
      context.moveTo(root.x, root.y);
      context.quadraticCurveTo(cx, cy, ex, ey);
      context.strokeStyle = `rgba(${color.join(",")},${0.12 + (8 - root.depth) * 0.045})`;
      context.lineWidth = root.width;
      context.lineCap = "round";
      context.shadowColor = `rgba(${color.join(",")},0.28)`;
      context.shadowBlur = Math.max(0, 13 - root.depth);
      context.stroke();

      context.shadowBlur = 0;
      for (let fiber = -1; fiber <= 1; fiber += 1) {
        context.beginPath();
        context.moveTo(root.x + normalX * fiber * root.width * 0.28, root.y + normalY * fiber * root.width * 0.28);
        context.quadraticCurveTo(cx, cy, ex, ey);
        context.strokeStyle = `rgba(${color.join(",")},${0.1 + (fiber === 0 ? 0.24 : 0.06)})`;
        context.lineWidth = Math.max(0.35, root.width * 0.11);
        context.stroke();
      }

      if (root.depth > 1 && root.length > 18) {
        const childCount = root.depth > 5 ? 2 : random(root.seed + 8) > 0.35 ? 2 : 1;
        for (let child = 0; child < childCount; child += 1) {
          const direction = child === 0 ? -1 : 1;
          drawBranch(
            {
              x: ex,
              y: ey,
              angle:
                angle +
                direction * (0.28 + random(root.seed + child * 7) * 0.42),
              length: root.length * (0.61 + random(root.seed + child * 13) * 0.14),
              width: Math.max(0.55, root.width * 0.67),
              depth: root.depth - 1,
              hue:
                root.depth < 4 && random(root.seed + child * 17) > 0.84
                  ? "ember"
                  : root.hue,
              seed: root.seed * 1.77 + child * 19.1,
            },
            time,
          );
        }
      } else if (random(root.seed + 44) > 0.42) {
        const pulse = reduceMotion.matches ? 1 : 0.72 + Math.sin(time * 0.0014 + root.seed) * 0.28;
        const radius = 1.2 + random(root.seed + 70) * 2.7;
        const glow = context.createRadialGradient(ex, ey, 0, ex, ey, radius * 5);
        glow.addColorStop(0, `rgba(${color.join(",")},${0.82 * pulse})`);
        glow.addColorStop(0.2, `rgba(${color.join(",")},${0.44 * pulse})`);
        glow.addColorStop(1, `rgba(${color.join(",")},0)`);
        context.fillStyle = glow;
        context.beginPath();
        context.arc(ex, ey, radius * 5, 0, Math.PI * 2);
        context.fill();
      }
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const roots: Root[] = [
        { x: width * 0.8, y: height * 1.02, angle: -Math.PI / 2.2, length: height * 0.31, width: 12, depth: 7, hue: "cyan", seed: 12 },
        { x: width * 0.94, y: height * 0.88, angle: -Math.PI / 1.7, length: height * 0.25, width: 9, depth: 6, hue: "moon", seed: 31 },
        { x: width * 0.7, y: height * 0.93, angle: -Math.PI / 2.55, length: height * 0.23, width: 8, depth: 6, hue: "green", seed: 53 },
        { x: width * 1.03, y: height * 0.43, angle: Math.PI, length: width * 0.17, width: 7, depth: 5, hue: "cyan", seed: 77 },
        { x: width * 0.88, y: height * 0.66, angle: Math.PI * 0.93, length: width * 0.14, width: 6, depth: 5, hue: "ember", seed: 91 },
      ];
      roots.forEach((root) => drawBranch(root, time));

      const spores = Math.max(30, Math.round((width * height) / 16000));
      for (let index = 0; index < spores; index += 1) {
        const seed = index + 102;
        const drift = reduceMotion.matches ? 0 : time * (0.001 + random(seed) * 0.0015);
        const x = fract(random(seed * 2) + Math.sin(drift + seed) * 0.025) * width;
        const y = fract(random(seed * 5) - drift * 0.006) * height;
        const radius = 0.45 + random(seed * 8) * 1.25;
        const hue = palette[random(seed * 11) > 0.8 ? "green" : "cyan"];
        context.fillStyle = `rgba(${hue.join(",")},${0.12 + random(seed * 17) * 0.36})`;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }

      frame += 1;
      if (!reduceMotion.matches && visibleRef.current) raf = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: (event.clientX - bounds.left - bounds.width / 2) / Math.max(bounds.width, 1),
        y: (event.clientY - bounds.top - bounds.height / 2) / Math.max(bounds.height, 1),
      };
    };

    const onMotionChange = () => {
      cancelAnimationFrame(raf);
      draw(0);
    };

    resize();
    if (!reduceMotion.matches) raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointerMove);
    reduceMotion.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
      reduceMotion.removeEventListener("change", onMotionChange);
      void frame;
    };
  }, []);

  return <canvas className="memory-garden-canvas" ref={canvasRef} aria-hidden="true" />;
};

export default MemoryGarden;
