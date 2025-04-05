
import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-ios-blue text-white"
    >
      <div 
        className={`container mx-auto px-4 text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Campus Life?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Download our app now and discover everything your college has to offer
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button 
            className="bg-white text-ios-blue hover:bg-white/90 px-8 py-6 h-auto text-lg rounded-xl flex items-center"
          >
            <div className="mr-3">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.5564 12.4494L20.1407 8.0764C20.3271 7.75838 20.2915 7.35698 20.0558 7.07641L12.4411 0L9.99981 4.0824L17.1531 12.5069C17.2867 12.658 17.4443 12.5785 17.5564 12.4494Z" />
                <path d="M2.97623 7.96884C2.86512 8.31682 2.86512 8.68313 2.97623 9.03112L7.43024 19.2653C7.53996 19.5407 7.75254 19.752 8.02912 19.8599L13.3913 13.1229L6.22064 4.64806L2.97623 7.96884Z" />
                <path d="M8.5 20.1079L15.6871 23.9037C16.0499 24.0312 16.4444 24.0312 16.8072 23.9037C17.1692 23.7766 17.4777 23.5243 17.678 23.1884L18.34 21.9134L13.8913 16.3799L8.5 20.1079Z" />
                <path d="M19.9925 11.0274L18.7634 9.10511L14 16.0767L18.5541 21.6374L19.9504 19.2191C20.372 18.4776 20.4292 17.6044 20.1062 16.8153L19.1361 14.7327C18.9384 14.3032 18.9384 13.8216 19.1361 13.3921L20.1062 11.3094C20.2755 10.9618 20.2412 10.5564 19.9925 11.0274Z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block text-xs">Download on the</span>
              <span className="font-semibold">App Store</span>
            </div>
          </Button>
        </div>
        
        <p className="mt-8 text-white/70 text-sm">
          Available for iPhone and iPad devices running iOS 14 or later
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;
