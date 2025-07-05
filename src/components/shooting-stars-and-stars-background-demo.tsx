
"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-screen w-full bg-neutral-900 relative flex flex-col items-center justify-center text-white px-4 text-center">
      <h1 className="text-5xl md:text-8xl font-extrabold z-10 mb-6">CHIRAG BISHT</h1>
      <pre className="z-10 text-sm md:text-base text-gray-300 max-w-3xl">
{`You are given a task to integrate a React component into your codebase.
Please verify your project has the following setup:
- shadcn/ui project structure
- Tailwind CSS v4.0
- TypeScript

If any of these are missing, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder`}
      </pre>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
