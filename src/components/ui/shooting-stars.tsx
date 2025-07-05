
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
  opacity: number;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random();
  switch (side) {
    case 0: return { x: offset * window.innerWidth, y: -20, angle: 45 + Math.random() * 90 };
    case 1: return { x: window.innerWidth + 20, y: offset * window.innerHeight, angle: 135 + Math.random() * 90 };
    case 2: return { x: offset * window.innerWidth, y: window.innerHeight + 20, angle: 225 + Math.random() * 90 };
    case 3: return { x: -20, y: offset * window.innerHeight, angle: 315 + Math.random() * 90 };
    default: return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars = () => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now() + Math.random(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * 15 + 10,
        distance: 0,
        opacity: 1,
      };
      
      setStars(prev => [...prev, newStar]);
      
      // Schedule next star
      setTimeout(createStar, Math.random() * 2000 + 800);
    };
    
    // Start creating stars
    createStar();
  }, []);

  useEffect(() => {
    const animateStars = () => {
      setStars(prevStars => 
        prevStars
          .map(star => {
            const newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = Math.max(0.1, 1 - newDistance / 500);
            const newOpacity = Math.max(0, 1 - newDistance / 400);
            
            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: newScale,
              opacity: newOpacity,
            };
          })
          .filter(star => 
            star.x > -100 && 
            star.x < window.innerWidth + 100 && 
            star.y > -100 && 
            star.y < window.innerHeight + 100 &&
            star.opacity > 0.01
          )
      );
      
      requestAnimationFrame(animateStars);
    };
    
    animateStars();
  }, []);

  return (
    <svg ref={svgRef} className={cn("w-full h-full absolute inset-0 pointer-events-none")}>
      {stars.map(star => (
        <g key={star.id}>
          <rect
            x={star.x}
            y={star.y}
            width={20 * star.scale}
            height={2}
            fill="url(#shootingGradient)"
            opacity={star.opacity}
            transform={`rotate(${star.angle}, ${star.x + (20 * star.scale) / 2}, ${star.y + 1})`}
          />
          <circle
            cx={star.x + 10 * star.scale}
            cy={star.y + 1}
            r={1.5 * star.scale}
            fill="#ffffff"
            opacity={star.opacity}
          />
        </g>
      ))}
      <defs>
        <linearGradient id="shootingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 0 }} />
          <stop offset="50%" style={{ stopColor: "#60a5fa", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
