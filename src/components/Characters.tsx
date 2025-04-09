
import React from 'react';
import { Card } from '@/components/ui/card';

const Characters = () => {
  const characters = [
    {
      name: "Conductor Charlie",
      description: "The friendly train conductor with a magical whistle",
      color: "bg-rhyme-blue"
    },
    {
      name: "Ellie the Elephant",
      description: "A gentle elephant who loves poetry and flowers",
      color: "bg-rhyme-purple"
    },
    {
      name: "Freddie the Frog",
      description: "A jumpy frog who collects colorful pebbles",
      color: "bg-rhyme-green"
    },
    {
      name: "Ollie the Owl",
      description: "A wise owl who knows all the best rhymes",
      color: "bg-rhyme-peach"
    },
  ];
  
  return (
    <section id="characters" className="py-20 rainbow-gradient">
      <div className="section-container">
        <h2 className="section-title">Meet the Characters</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <div key={index} className="transform transition-all duration-300 hover:scale-105 hover:-rotate-2">
              <Card className="overflow-hidden h-full border-2 border-white shadow-lg">
                <div className={`${character.color} h-48 flex items-center justify-center p-6`}>
                  <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-4xl">{character.name.charAt(0)}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-fredoka text-xl mb-2 text-rhyme-purple">{character.name}</h3>
                  <p className="text-gray-700">{character.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-6">
            Follow these delightful characters on their rhyming adventure through magical lands!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Characters;
