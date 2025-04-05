
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-ios-gray/50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className={`md:w-1/2 text-center md:text-left mb-12 md:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Discover Your <span className="text-ios-blue">Campus Life</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            Experience everything your college has to offer through our intuitive iOS app designed for students like you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-ios-blue hover:bg-ios-blue/90 text-white px-8 py-6 rounded-xl text-lg">
              Download Now
            </Button>
            <Button variant="outline" className="border-ios-blue text-ios-blue hover:bg-ios-blue/10 px-8 py-6 rounded-xl text-lg">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="relative w-64 md:w-80">
            <div className="absolute inset-0 bg-ios-blue/20 rounded-[3rem] blur-2xl transform translate-y-2"></div>
            <div className="relative bg-black rounded-[2.5rem] p-3 shadow-2xl overflow-hidden animate-float">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Campus App Screenshot" 
                className="rounded-[2rem] w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="flex flex-col items-center text-ios-blue">
          <span className="mb-2 text-sm font-medium">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
