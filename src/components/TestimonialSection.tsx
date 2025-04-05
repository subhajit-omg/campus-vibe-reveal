
import React, { useRef, useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  avatar: string;
  delay: number;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "This app has completely transformed my college experience. I've discovered so many events and opportunities I would have missed otherwise!",
    author: "Jessica Chen",
    position: "Junior, Computer Science",
    avatar: "JC",
    delay: 0
  },
  {
    quote: "The virtual campus tour helped me get familiar with the campus before I even moved in. Highly recommend for all incoming freshmen!",
    author: "Marcus Johnson",
    position: "Freshman, Business Administration",
    avatar: "MJ",
    delay: 200
  },
  {
    quote: "I use the app daily to check campus events and connect with other students. It's become an essential part of my college life.",
    author: "Sophia Rodriguez",
    position: "Senior, Psychology",
    avatar: "SR",
    delay: 400
  }
];

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, position, avatar, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

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

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={testimonialRef}
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Card className="p-6 h-full shadow-md hover:shadow-lg transition-all duration-300 border-none bg-white">
        <div className="flex flex-col h-full">
          <div className="mb-4 text-ios-blue">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.667 13.333H6.66699C6.66699 8.10667 10.667 3.33333 16.667 3.33333V7.33333C14.667 7.33333 10.667 8.66667 10.667 13.333ZM22.667 13.333H18.667C18.667 8.10667 22.667 3.33333 28.667 3.33333V7.33333C26.667 7.33333 22.667 8.66667 22.667 13.333ZM26.667 18.6667V26.6667C26.667 28 25.3337 29.3333 24.0003 29.3333H8.00033C6.66699 29.3333 5.33366 28 5.33366 26.6667V18.6667C5.33366 17.3333 6.66699 16 8.00033 16H10.667V20C10.667 21.3333 12.0003 22.6667 13.3337 22.6667C14.667 22.6667 16.0003 21.3333 16.0003 20V16H18.667V20C18.667 21.3333 20.0003 22.6667 21.3337 22.6667C22.667 22.6667 24.0003 21.3333 24.0003 20V16H26.667C28.0003 16 29.3337 17.3333 29.3337 18.6667V26.6667C29.3337 28 28.0003 29.3333 26.667 29.3333H26.667Z" fill="currentColor"/>
            </svg>
          </div>

          <p className="text-gray-600 mb-6 flex-grow">{quote}</p>

          <div className="flex items-center mt-auto">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src="" alt={author} />
              <AvatarFallback className="bg-ios-blue text-white">{avatar}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold">{author}</h4>
              <p className="text-sm text-gray-500">{position}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Students Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students who have transformed their college experience with our app
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              avatar={testimonial.avatar}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
