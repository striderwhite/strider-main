import { useEffect, useRef } from "react";

export default function NetworkBackground({ className = "" }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const nodesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // regenerate nodes on resize
      const numNodes = Math.floor((innerWidth * innerHeight) / 18000);
        nodesRef.current = Array.from({ length: numNodes }, () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        vx: (Math.random() - 0.5) * 0.08,  // slow dx
        vy: (Math.random() - 0.5) * 0.08,  // slow dy
        }));
    }

    resize();
    window.addEventListener("resize", resize);

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const maxLineDistance = 160;
    const influenceRadius = 260; // how far the bright spot spreads

    function draw() {
      const { innerWidth, innerHeight } = window;
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      // Move nodes
        for (let n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        // wrap around screen edges
        if (n.x < 0) n.x = innerWidth;
        if (n.x > innerWidth) n.x = 0;
        if (n.y < 0) n.y = innerHeight;
        if (n.y > innerHeight) n.y = 0;
        }

      // Background is already dark from your hero container; keep this transparent
      // so we just draw dots + lines

      // Draw lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > maxLineDistance) continue;

          // Line alpha based on distance between nodes
          let baseAlpha = 0.05 * (1 - dist / maxLineDistance);

          // Boost alpha if near mouse
          if (mouse.x != null && mouse.y != null) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mdx = midX - mouse.x;
            const mdy = midY - mouse.y;
            const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
            const boost = Math.max(
              0,
              1 - mouseDist / influenceRadius
            ); // 0 → 1
            baseAlpha += 0.25 * boost;
          }

          if (baseAlpha <= 0) continue;

          ctx.strokeStyle = `rgba(53,102,238,${baseAlpha})`; // #3566ee
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        let alpha = 0.18; // base faded
        let radius = 2.2;

        if (mouse.x != null && mouse.y != null) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const boost = Math.max(0, 1 - dist / influenceRadius); // 0 → 1

          alpha += 0.5 * boost;
          radius += 1.4 * boost;
        }

        ctx.fillStyle = `rgba(226,239,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={
        "pointer-events-auto absolute inset-0 h-full w-full" + // pointer events for mouse tracking
        (className ? " " + className : "")
      }
    />
  );
}
