import React from "react";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { SparklesCore } from "@/components/ui/sparkles";
import ProfileCard from "@/components/profile-card";
import SkillsDock from "@/components/skills-dock";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-900 relative overflow-x-hidden">
      <a
        href="https://drive.google.com/file/d/1rvr8R6B8M1w6zCFfHJyMN6fmqFk5TfXQ/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 right-8 text-white underline font-extrabold z-20 text-lg"
      >
        Resume
      </a>
      {/* Twinkling stars background for entire site */}
      <StarsBackground />
      <ShootingStars />
      
      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col items-center justify-center text-white px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-extrabold mb-4 text-white bg-gradient-to-b from-white to-gray-800 bg-clip-text text-transparent">CHIRAG BISHT</h1>
        
        {/* Sparkles effect with gradient lines - reduced gap */}
        <div className="relative w-[40rem] h-40 max-w-full">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 w-full h-full bg-neutral-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
        </div>
      </section>

      {/* Profile Card Section */}
      <section id="profile" className="min-h-screen flex flex-col items-center justify-center py-20 relative z-10">
        {/* Skills Dock positioned above profile card */}
        <SkillsDock />
        
        <div className="container mx-auto px-4 flex items-center justify-start pl-10 md:pl-20">
          <ProfileCard
            name="Chirag Bisht"
            title="Full Stack Developer"
            handle="chiragbisht"
            status="Online"
            avatarUrl="/lovable-uploads/f713cdee-d0b7-4c10-956e-b156cd81dd46.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
