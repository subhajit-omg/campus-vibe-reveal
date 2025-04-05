
import React, { useState, useEffect, useRef } from 'react';

// College images array
const collegeImages = [
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    caption: "Tech Labs"
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    caption: "Study Groups"
  },
  {
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    caption: "Digital Learning"
  },
  {
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    caption: "Coding Classes"
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    caption: "Research Projects"
  },
  {
    url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
    caption: "Campus Library"
  },
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    caption: "Student Dorms"
  },
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    caption: "Campus Buildings"
  },
  {
    url: "https://images.unsplash.com/photo-1560439514-4e9645039924",
    caption: "Sports Facilities"
  },
  {
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1",
    caption: "Student Events"
  },
  {
    url: "https://images.unsplash.com/photo-1601504787384-a34be6cd6931",
    caption: "Science Labs"
  },
  {
    url: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6",
    caption: "Art Studios"
  }
];

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % collegeImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-ios-gray/30">
      <div 
        ref={galleryRef}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience life at our college through these amazing snapshots
          </p>
        </div>

        <div className="relative">
          {/* Main Featured Image */}
          <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            {collegeImages.map((image, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  idx === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{image.caption}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Thumbnail Gallery */}
          <div className="mt-6 grid grid-cols-4 md:grid-cols-6 gap-2">
            {collegeImages.slice(0, 12).map((image, idx) => (
              <div 
                key={idx} 
                className={`h-16 md:h-24 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-200 ${
                  idx === activeIndex ? 'scale-105 ring-2 ring-ios-blue' : 'opacity-60 hover:opacity-100'
                }`}
                onClick={() => handleDotClick(idx)}
              >
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {collegeImages.slice(0, 12).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-ios-blue w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
