
import React from 'react';
import { Card } from '@/components/ui/card';

const Characters = () => {
  const characters = [
    {
      name: "Friendly Train",
      description: "The cheerful train engine that takes everyone on a magical journey",
      color: "bg-rhyme-purple",
      image: "train"
    },
    {
      name: "Ellie the Elephant",
      description: "A gentle elephant who loves adventures and making new friends",
      color: "bg-rhyme-blue",
      image: "elephant"
    },
    {
      name: "Freddie the Frog",
      description: "A jumpy frog who wears red boots and has the biggest smile",
      color: "bg-rhyme-green",
      image: "frog"
    },
    {
      name: "Ollie the Owl",
      description: "A wise owl who watches over everyone from above",
      color: "bg-rhyme-peach",
      image: "owl"
    },
  ];
  
  // Character images based on book cover
  const getCharacterElement = (character) => {
    switch(character.image) {
      case 'train':
        return <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-500 rounded-lg relative">
            <div className="absolute -top-3 w-6 h-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 rounded-full"></div>
            <div className="absolute bottom-1 left-1 w-3 h-3 bg-black rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>;
      case 'elephant':
        return <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
          <div className="w-14 h-14 bg-gray-400 rounded-full relative">
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-400 rounded-full"></div>
          </div>
        </div>;
      case 'frog':
        return <div className="w-24 h-24 rounded-full bg-green-400 flex items-center justify-center">
          <div className="w-16 h-10 bg-green-500 rounded-full relative">
            <div className="absolute -top-4 left-2 w-4 h-4 bg-white rounded-full">
              <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
            </div>
            <div className="absolute -top-4 right-2 w-4 h-4 bg-white rounded-full">
              <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>;
      case 'owl':
        return <div className="w-24 h-24 rounded-full bg-amber-200 flex items-center justify-center">
          <div className="w-16 h-16 bg-amber-400 rounded-full relative">
            <div className="absolute top-3 left-2 w-4 h-4 bg-white rounded-full">
              <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
            </div>
            <div className="absolute top-3 right-2 w-4 h-4 bg-white rounded-full">
              <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
            </div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-orange-500 rounded-full"></div>
          </div>
        </div>;
      default:
        return <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
          <span className="text-4xl">{character.name.charAt(0)}</span>
        </div>;
    }
  };
  
  return (
    <section id="characters" className="py-20 rainbow-gradient">
      <div className="section-container">
        <h2 className="section-title">Meet the Characters</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <div key={index} className="transform transition-all duration-300 hover:scale-105 hover:-rotate-2">
              <Card className="overflow-hidden h-full border-2 border-white shadow-lg">
                <div className={`${character.color} h-48 flex items-center justify-center p-6`}>
                  {getCharacterElement(character)}
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

        <div className="mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-md max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3">
              <img 
                src="/lovable-uploads/948bf926-4d31-40da-970a-faf3608a516b.png"
                alt="The Magic Rhyme Train - Back Cover"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-fredoka text-2xl mb-3 text-rhyme-purple">About the Journey</h3>
              <p className="mb-4">
                Climb aboard The Magic Rhyme Train, where every stop brings a new adventure to life with 
                playful rhymes and enchanting scenes! This whimsical picture book invites young readers 
                on a delightful journey through fantastical locations.
              </p>
              <p className="text-sm text-gray-600">ISBN: 978-1-7345-6789-0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
