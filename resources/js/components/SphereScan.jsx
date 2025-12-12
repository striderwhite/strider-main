import React, { useEffect, useRef } from "react";

export default function SphereScan({ size = 500, className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const width = size;
    const height = size;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const cx = width / 2;
    const cy = height / 2;
    const radius = (Math.min(width, height) / 2) * 0.8;

    // Generate points on a sphere using a golden spiral
    const points = [];
    const pointCount = 900; // adjust for density

    for (let i = 0; i < pointCount; i++) {
      const t = i / (pointCount - 1);
      const y = 1 - 2 * t; // -1..1
      const r = Math.sqrt(1 - y * y);
      const phi = Math.PI * (1 + Math.sqrt(5)) * i; // golden angle
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;
      points.push({ x, y, z });
    }

    let animationFrameId;
    let lastTime = 0;
    let time = 0;

    function draw(now) {
      if (!lastTime) lastTime = now;
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      time += dt;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      const rotY = time * 0.5; // rotate around Y
      const rotX = Math.sin(time * 0.25) * 0.3; // small wobble
      const scanSpeed = 0.8;
      const scanCenter = Math.sin(time * scanSpeed) * Math.PI * 0.5; // latitudinal band

      const sinY = Math.sin(rotY);
      const cosY = Math.cos(rotY);
      const sinX = Math.sin(rotX);
      const cosX = Math.cos(rotX);

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // rotate around Y
        let x = p.x * cosY - p.z * sinY;
        let z = p.x * sinY + p.z * cosY;
        let y = p.y;

        // rotate around X
        const y2 = y * cosX - z * sinX;
        const z2 = y * sinX + z * cosX;
        y = y2;
        z = z2;

        // simple perspective
        const depth = z + 3; // move forward so z is positive-ish
        const fov = radius * 1.2;
        const px = cx + (x / depth) * fov;
        const py = cy + (y / depth) * fov;

        // compute "latitude" for scan band (angle from equator)
        const lat = Math.asin(y); // -pi/2..pi/2
        const bandWidth = 0.35; // thickness of scan band
        const bandDist = Math.abs(lat - scanCenter);
        const bandFactor = Math.max(
          0,
          1 - (bandDist * bandDist) / (bandWidth * bandWidth)
        );

        // base brightness from depth
        const depthNorm = (z + 1) / 4; // roughly 0..1
        const baseAlpha = 0.08 + (1 - depthNorm) * 0.35;

        const alpha = Math.min(1, baseAlpha + bandFactor * 0.7);
        if (alpha <= 0.02) continue;

        const rPoint = 1 + bandFactor * 1.2;

        ctx.beginPath();
        ctx.arc(px, py, rPoint, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(70, 120, 230, ${alpha})`; // lighter blue
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(draw);
    }

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
