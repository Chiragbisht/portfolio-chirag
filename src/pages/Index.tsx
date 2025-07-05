
import React from "react";
import { StarsBackground } from "@/components/ui/stars-background";
import { SparklesCore } from "@/components/ui/sparkles";
import ProfileCard from "@/components/profile-card";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-900 relative">
      {/* Twinkling stars background for entire site */}
      <StarsBackground />
      
      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col items-center justify-center text-white px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-extrabold mb-8">CHIRAG BISHT</h1>
        
        {/* Sparkles effect right below the name */}
        <div className="relative w-[40rem] h-32 max-w-full">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </section>

      {/* Profile Card Section */}
      <section id="profile" className="min-h-screen flex items-center justify-center py-20 relative z-10">
        <div className="container mx-auto px-4 flex justify-center">
          <ProfileCard
            name="Chirag Bisht"
            title="Full Stack Developer"
            handle="chiragbisht"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/placeholder.svg"
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
