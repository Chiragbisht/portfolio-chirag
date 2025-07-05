
"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;
  switch (side) {
    case 0: return { x: offset, y: 0, angle: 45 };
    case 1: return { x: window.innerWidth, y: offset, angle: 135 };
    case 2: return { x: offset, y: window.innerHeight, angle: 225 };
    case 3: return { x: 0, y: offset, angle: 315 };
    default: return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars = () => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      setStar({
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * 20 + 10,
        distance: 0,
      });
      setTimeout(createStar, Math.random() * 3000 + 1200);
    };
    createStar();
  }, []);

  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prev) => {
          if (!prev) return null;
          const newX = prev.x + prev.speed * Math.cos((prev.angle * Math.PI) / 180);
          const newY = prev.y + prev.speed * Math.sin((prev.angle * Math.PI) / 180);
          const newDistance = prev.distance + prev.speed;
          const newScale = 1 + newDistance / 100;
          if (newX < -20 || newX > window.innerWidth + 20 || newY < -20 || newY > window.innerHeight + 20) return null;
          return { ...prev, x: newX, y: newY, distance: newDistance, scale: newScale };
        });
      }
      requestAnimationFrame(moveStar);
    };
    moveStar();
  }, [star]);

  return (
    <svg ref={svgRef} className={cn("w-full h-full absolute inset-0")}>
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={10 * star.scale}
          height={1}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${star.x + (10 * star.scale) / 2}, ${star.y + 0.5})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#2EB9DF", stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: "#9E00FF", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
