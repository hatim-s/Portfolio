import { useEffect, useRef } from "react";

type MissionScopeProps = { mode: "signal" | "route"; active: boolean };

const MissionScope = ({ mode, active }: MissionScopeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      if (!active) return;
      const phase = reduced.matches ? 1800 : time;
      context.lineWidth = 1.6;
      context.strokeStyle = "rgba(180, 255, 113, .92)";
      context.shadowColor = "rgba(130, 255, 81, .7)";
      context.shadowBlur = 8;
      context.beginPath();
      for (let x = 0; x <= width; x += 2) {
        const t = x / Math.max(width, 1);
        const pulse = Math.exp(-Math.pow(((t * 9.5 + phase * 0.00045) % 1) - 0.5, 2) * 75);
        const carrier = Math.sin(t * (mode === "signal" ? 38 : 16) + phase * 0.0013) * 0.11;
        const harmonic = Math.sin(t * 83 - phase * 0.0007) * 0.035;
        const route = mode === "route" ? Math.sin(t * Math.PI * 4) * 0.18 : 0;
        const y = height * (0.52 + carrier * pulse + harmonic + route);
        if (x === 0) context.moveTo(x, y); else context.lineTo(x, y);
      }
      context.stroke();
      context.shadowBlur = 0;
      context.fillStyle = "rgba(239, 184, 57, .9)";
      const markerX = width * (0.18 + ((phase * 0.000025) % 0.64));
      context.fillRect(markerX, height * 0.15, 1, height * 0.7);
      if (!reduced.matches) frame = window.requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(() => { resize(); draw(0); });
    observer.observe(canvas);
    resize();
    draw(0);
    return () => { observer.disconnect(); window.cancelAnimationFrame(frame); };
  }, [active, mode]);

  return <canvas className="mission-scope" ref={canvasRef} aria-hidden="true" />;
};

export default MissionScope;
