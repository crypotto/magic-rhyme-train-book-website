
import React from 'react';
import { BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-rhyme-blue via-rhyme-purple/10 to-rhyme-pink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-10 w-20 h-20 bg-rhyme-orange rounded-full opacity-40 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-rhyme-green rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-rhyme-red rounded-full opacity-40 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Book Cover & Train */}
          <div className="md:w-1/2 relative mb-10 md:mb-0">
            <div className="max-w-md mx-auto relative">
              {/* Real Book Cover */}
              <div className="transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-xl rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/5d61fc6b-9ec3-4d50-8ea8-42996be051c4.png" 
                  alt="The Magic Rhyme Train Book Cover" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Animated Train */}
              <div className="absolute -bottom-10 -left-5 animate-chug">
                <div className="w-16 h-12 bg-rhyme-purple rounded-lg relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rhyme-purple rounded-full"></div>
                  <div className="absolute -right-8 bottom-0 w-8 h-8 bg-rhyme-purple rounded-tr-lg rounded-br-lg"></div>
                  <div className="absolute bottom-0 left-1 w-3 h-3 bg-black rounded-full"></div>
                  <div className="absolute bottom-0 right-4 w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-rhyme-purple">The Magic Rhyme Train</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-rhyme-orange font-bold">All Aboard for a Journey Through Giggles and Tunes!</p>
            <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Join us on a whimsical journey through magical lands, meeting curious characters, and learning playful rhymes along the way.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="#buy" className="btn-primary flex items-center justify-center space-x-2">
                <span>Buy Now</span>
              </a>
              <a href="#preview" className="btn-secondary flex items-center justify-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Peek Inside</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
