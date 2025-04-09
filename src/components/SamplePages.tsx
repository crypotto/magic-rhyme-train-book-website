
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Train, Star, Candy, MountainSnow, Rocket, CloudSun } from 'lucide-react';

const SamplePages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = [
    {
      station: "All Aboard the Magic Train!",
      rhyme: "All aboard! It's time to go,\nTo lands of laughter, sun, and snow!\nWith choo-choo cheer and wheels that sing,\nWe're off to see what rhymes will bring!\nHop inside and find your seat,\nA rhyming treat is hard to beat!\nFrom silly songs to starry skies,\nThis magic train is full of surprises!",
      color: "bg-gradient-to-br from-purple-100 to-blue-100",
      icon: <Train className="h-8 w-8 text-rhyme-purple" />
    },
    {
      station: "Candy Canyon",
      rhyme: "Down in the valley of Candy Canyon,\nLollipops grow in a rainbow companion.\nGumdrops giggle and jellybeans hop,\nWhile peppermint trees go plip-plop-plop!\nThe chocolate river flows with cheer,\nCarrying marshmallow boats far and near.\nCotton candy clouds float up so high,\nAs cookie birds flutter through frosting sky.",
      color: "bg-gradient-to-br from-pink-100 to-orange-100",
      icon: <Candy className="h-8 w-8 text-rhyme-red" />
    },
    {
      station: "Magic Hat Mountain",
      rhyme: "Climb up high to Hat Mountain's peak,\nWhere hats can talk and rabbits sneak.\nA wizard waves his rhyming wand,\nAnd out jumps sparkles from a magic pond!\nTop hats twirl with doves inside,\nFezzes float and bowler hats glide.\nSpells and giggles fill the air,\nWith a poof of rhyme just everywhere!",
      color: "bg-gradient-to-br from-blue-100 to-purple-100",
      icon: <MountainSnow className="h-8 w-8 text-rhyme-blue" />
    },
    {
      station: "Rocket Ramp",
      rhyme: "We zoomed up high from Rocket Ramp,\nWhere rockets blast and stars go blamp!\nEngines roar with a rhyming beat,\nWhile astronauts bounce on moon-made street.\nThe countdown starts with "Ten, Nine, Eight!"\nAliens cheer behind the gate.\nWith "Three, Two, One!" the rocket flies,\nAnd poems swirl across the skies!",
      color: "bg-gradient-to-br from-blue-100 to-green-100",
      icon: <Rocket className="h-8 w-8 text-rhyme-orange" />
    },
    {
      station: "The Cloud Castle",
      rhyme: "We puffed through skies so soft and wide,\nWhere marshmallow clouds begin to glide.\nUp above where dream birds fly,\nWe found a castle in the sky!\nIts towers twirled like cotton treats,\nWith rainbow slides instead of streets.\nThe Queen of Clouds waved with delight,\nShe paints the sky from morning to night!",
      color: "bg-gradient-to-br from-blue-50 to-purple-50",
      icon: <CloudSun className="h-8 w-8 text-rhyme-blue" />
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
              <div className="flex justify-center mb-4">
                {pages[currentPage].icon}
              </div>
              
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
          <p className="text-lg mb-6">Want to see all 40 magical destinations?</p>
          <a href="#buy" className="btn-primary inline-flex">Get Your Copy Today</a>
        </div>
      </div>
    </section>
  );
};

export default SamplePages;
