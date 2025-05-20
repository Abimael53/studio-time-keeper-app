
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-studio-dark to-transparent opacity-90"></div>
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1520451644838-906a72aa7c86?q=80&w=1950&auto=format&fit=crop')] 
          bg-cover bg-center"
        ></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Book Your <span className="gradient-text">Studio Time</span> Today
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Professional studios for your creative projects. Easy booking, flexible hours, top-notch equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-studio-purple hover:bg-studio-darkPurple text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('studios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </Button>
            <Button 
              variant="outline" 
              className="border-studio-purple text-studio-purple hover:bg-studio-purple/10 px-8 py-6 text-lg"
            >
              Take a Tour
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
