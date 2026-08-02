import { useEffect, useRef } from "react";

type EventChamberProps = {
  className?: string;
};

const TAU = Math.PI * 2;

const EventChamber = ({ className = "" }: EventChamberProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const pointer = { x: 0, y: 0 };
    let frame = 0;
    let visible = true;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const seeded = (seed: number) => {
      const value = Math.sin(seed * 12.9898) * 43758.5453;
      return value - Math.floor(value);
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = (time: number) => {
      frame = 0;
      context.clearRect(0, 0, width, height);
      const radius = Math.min(width, height) * 0.46;
      const centerX = width * 0.52 + pointer.x * 9;
      const centerY = height * 0.51 + pointer.y * 9;
      const phase = reducedMotion.matches ? 0.18 : time * 0.000035;

      context.save();
      context.translate(centerX, centerY);

      for (let ring = 1; ring <= 9; ring += 1) {
        context.beginPath();
        context.arc(0, 0, radius * (ring / 9), 0, TAU);
        context.strokeStyle = ring % 3 === 0 ? "rgba(238, 234, 216, .28)" : "rgba(42, 91, 255, .3)";
        context.lineWidth = ring % 3 === 0 ? 1 : 0.6;
        context.stroke();
      }

      for (let tick = 0; tick < 96; tick += 1) {
        const angle = (tick / 96) * TAU;
        const major = tick % 8 === 0;
        context.beginPath();
        context.moveTo(Math.cos(angle) * radius * (major ? 0.88 : 0.94), Math.sin(angle) * radius * (major ? 0.88 : 0.94));
        context.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
        context.strokeStyle = major ? "rgba(255, 86, 0, .9)" : "rgba(238, 234, 216, .45)";
        context.lineWidth = major ? 2 : 0.7;
        context.stroke();
      }

      const trackCount = width < 700 ? 72 : 132;
      for (let i = 0; i < trackCount; i += 1) {
        const startAngle = seeded(i + 1) * TAU + phase * (seeded(i + 9) - 0.5);
        const travel = radius * (0.34 + seeded(i + 2) * 0.68);
        const curl = (seeded(i + 3) - 0.5) * radius * 0.62;
        const endX = Math.cos(startAngle) * travel;
        const endY = Math.sin(startAngle) * travel;
        const midAngle = startAngle + (seeded(i + 4) - 0.5) * 1.4;
        const controlX = Math.cos(midAngle) * travel * 0.56 + Math.cos(startAngle + Math.PI / 2) * curl;
        const controlY = Math.sin(midAngle) * travel * 0.56 + Math.sin(startAngle + Math.PI / 2) * curl;

        context.beginPath();
        context.moveTo(0, 0);
        context.quadraticCurveTo(controlX, controlY, endX, endY);
        const orange = i % 11 === 0 || i % 17 === 0;
        context.strokeStyle = orange ? "rgba(255, 86, 0, .72)" : "rgba(70, 118, 255, .58)";
        context.lineWidth = orange ? 1.35 : 0.72;
        context.stroke();

        if (i % 3 === 0) {
          const pointX = endX * (0.5 + seeded(i + 5) * 0.5);
          const pointY = endY * (0.5 + seeded(i + 5) * 0.5);
          context.fillStyle = orange ? "#ff5600" : i % 7 === 0 ? "#d7ff1f" : "rgba(238, 234, 216, .75)";
          context.fillRect(pointX - 1.3, pointY - 1.3, 2.6, 2.6);
        }
      }

      const core = context.createRadialGradient(0, 0, 0, 0, 0, radius * 0.13);
      core.addColorStop(0, "rgba(255, 239, 207, 1)");
      core.addColorStop(0.18, "rgba(255, 86, 0, .95)");
      core.addColorStop(0.5, "rgba(33, 82, 255, .55)");
      core.addColorStop(1, "rgba(3, 12, 27, 0)");
      context.fillStyle = core;
      context.beginPath();
      context.arc(0, 0, radius * 0.14, 0, TAU);
      context.fill();

      context.beginPath();
      context.arc(0, 0, radius * 0.035, 0, TAU);
      context.fillStyle = "#061129";
      context.fill();
      context.strokeStyle = "#ff5600";
      context.lineWidth = 2;
      context.stroke();
      context.restore();

      if (visible && !reducedMotion.matches) frame = window.requestAnimationFrame(draw);
    };

    const updatePointer = (event: PointerEvent) => {
      if (coarsePointer.matches) return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / bounds.width - 0.5;
      pointer.y = (event.clientY - bounds.top) / bounds.height - 0.5;
    };

    const observer = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible && frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      } else if (visible && !reducedMotion.matches && !frame) {
        frame = window.requestAnimationFrame(draw);
      }
    });
    const updateMotionPreference = () => {
      if (reducedMotion.matches) {
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0;
        draw(0);
      } else if (visible && !frame) {
        frame = window.requestAnimationFrame(draw);
      }
    };
    observer.observe(canvas);
    visibilityObserver.observe(canvas);
    canvas.addEventListener("pointermove", updatePointer);
    reducedMotion.addEventListener("change", updateMotionPreference);
    resize();
    draw(0);

    return () => {
      observer.disconnect();
      visibilityObserver.disconnect();
      canvas.removeEventListener("pointermove", updatePointer);
      reducedMotion.removeEventListener("change", updateMotionPreference);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default EventChamber;
