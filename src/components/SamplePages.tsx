
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SamplePages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = [
    {
      station: "Crystal Confetti Station",
      rhyme: "At Crystal Confetti Station, so sparkly and bright,\nWe toss rainbow flecks that twinkle with light.\nThey flutter and fall like snowflakes of hue,\nAnd coat our train cars with a glittery view!",
      color: "bg-gradient-to-br from-purple-100 to-blue-100"
    },
    {
      station: "Bubble Bath Bay",
      rhyme: "In Bubble Bath Bay, we float and we play,\nOn mountains of bubbles throughout the day.\nThey pop and they fizz, they tickle our nose,\nAs soft soapy rainbows arch overhead in rows!",
      color: "bg-gradient-to-br from-blue-100 to-purple-100"
    },
    {
      station: "Jelly Bean Jungle",
      rhyme: "In Jelly Bean Jungle, the flavors abound,\nWith bean-shaped delights just waiting to be found.\nGreen apple, grape, cherry, and more,\nWe stuff all our pockets and still find some more!",
      color: "bg-gradient-to-br from-green-100 to-yellow-100"
    },
  ];
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };
  
  return (
    <section id="preview" className="py-20 bg-rhyme-peach/30">
      <div className="section-container">
        <h2 className="section-title">Peek Inside</h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Main Card */}
          <Card className={`${pages[currentPage].color} p-8 rounded-xl shadow-lg border-2 border-rhyme-purple/20 aspect-[4/3] flex items-center justify-center transition-all duration-300`}>
            <div className="text-center max-w-md mx-auto">
              <h3 className="font-fredoka text-3xl mb-4 text-rhyme-purple">
                {pages[currentPage].station}
              </h3>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-inner mb-4">
                <p className="text-lg whitespace-pre-line leading-relaxed">
                  {pages[currentPage].rhyme}
                </p>
              </div>
              
              <p className="text-sm text-gray-600">
                Page {currentPage + 1} of {pages.length}
              </p>
            </div>
          </Card>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
            <button 
              onClick={prevPage}
              className="bg-white rounded-full p-2 shadow-md hover:bg-rhyme-purple hover:text-white transition-colors"
              aria-label="Previous page"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextPage}
              className="bg-white rounded-full p-2 shadow-md hover:bg-rhyme-purple hover:text-white transition-colors"
              aria-label="Next page"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Page Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentPage === index ? 'bg-rhyme-purple scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-lg mb-6">Want to see more magical destinations?</p>
          <a href="#buy" className="btn-primary inline-flex">Get Your Copy Today</a>
        </div>
      </div>
    </section>
  );
};

export default SamplePages;
