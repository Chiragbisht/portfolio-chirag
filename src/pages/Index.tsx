
import React from "react";
import ShootingStarsAndStarsBackgroundDemo from "@/components/shooting-stars-and-stars-background-demo";
import SparklesPreview from "@/components/sparkles-demo";
import ProfileCard from "@/components/profile-card";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Landing Section with Shooting Stars */}
      <section id="hero" className="h-screen">
        <ShootingStarsAndStarsBackgroundDemo />
      </section>

      {/* Sparkles Section */}
      <section id="sparkles" className="h-[40rem]">
        <SparklesPreview />
      </section>

      {/* Profile Card Section */}
      <section id="profile" className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get to know more about my background, skills, and passion for development.
            </p>
          </div>
          <ProfileCard />
        </div>
      </section>
    </div>
  );
};

export default Index;
