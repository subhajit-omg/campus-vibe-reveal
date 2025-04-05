
import React, { useRef, useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Camera, Image, Images, Play } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={featureRef}
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Card className="p-6 h-full border-none bg-white shadow-md hover:shadow-lg transition-shadow rounded-xl">
        <div className="mb-4 bg-ios-gray inline-block p-3 rounded-full text-ios-blue">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Card>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover everything your college has to offer through our feature-rich mobile experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature 
            icon={<Camera size={24} />} 
            title="Virtual Tours" 
            description="Take virtual tours of campus facilities and dorms before you even arrive." 
            delay={0}
          />
          <Feature 
            icon={<Image size={24} />} 
            title="Event Gallery" 
            description="Browse through photos of campus events, clubs, and activities." 
            delay={200}
          />
          <Feature 
            icon={<Play size={24} />} 
            title="Live Streams" 
            description="Watch live streams of campus events, sports, and lectures." 
            delay={400}
          />
          <Feature 
            icon={<Images size={24} />} 
            title="Community Posts" 
            description="See and share photos and stories from your college community." 
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
