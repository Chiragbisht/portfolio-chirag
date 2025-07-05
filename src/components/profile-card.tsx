
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileCard() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
      <div className="relative px-6 py-4">
        <div className="absolute -top-16 left-6">
          <Avatar className="w-24 h-24 border-4 border-white">
            <AvatarImage src="/placeholder.svg" alt="Chirag Bisht" />
            <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white">CB</AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">Chirag Bisht</h2>
          <p className="text-gray-600 mt-1">Full Stack Developer</p>
          <p className="text-gray-500 text-sm mt-2">
            Passionate about creating beautiful, functional web applications with modern technologies.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">TypeScript</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Tailwind CSS</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Next.js</span>
          </div>
          <div className="flex space-x-4 mt-6">
            <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
              Connect
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
