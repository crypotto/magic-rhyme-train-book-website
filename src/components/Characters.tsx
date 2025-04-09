
import React from 'react';
import { Card } from '@/components/ui/card';
import { Train, Elephant, Frog, CloudMoon, Dragon, Music, Unicorn } from 'lucide-react';

const Characters = () => {
  const characters = [
    {
      name: "Magic Rhyme Train",
      description: "The cheerful train engine that takes everyone on a magical journey through 40 rhyming stations",
      color: "bg-rhyme-purple",
      icon: <Train className="h-12 w-12 text-white" />
    },
    {
      name: "Ellie the Elephant",
      description: "A gentle elephant who loves dancing to rhymes in the Jungle Jamboree and making new friends at every station",
      color: "bg-rhyme-blue",
      icon: <Elephant className="h-12 w-12 text-white" />
    },
    {
      name: "Freddie the Frog",
      description: "A jumpy frog who wears red boots and tells wobbly jokes that make even the owls croak in The Forest of Giggles",
      color: "bg-rhyme-green",
      icon: <Frog className="h-12 w-12 text-white" />
    },
    {
      name: "The Queen of Clouds",
      description: "She lives in The Cloud Castle and paints the sky from morning to night, creating rainbow slides instead of streets",
      color: "bg-rhyme-peach",
      icon: <CloudMoon className="h-12 w-12 text-white" />
    },
    {
      name: "The Friendly Dragon",
      description: "Lives in Dragon Hollow where dragons rhyme and breathe out flames shaped like hearts while toasting marshmallows",
      color: "bg-rhyme-red",
      icon: <Dragon className="h-12 w-12 text-white" />
    },
    {
      name: "Jungle Musicians",
      description: "Animals who dance and play in perfect time during the Jungle Jamboree - from tiger's bongo beat to lion's roar",
      color: "bg-rhyme-orange",
      icon: <Music className="h-12 w-12 text-white" />
    },
    {
      name: "Unicorns of the Meadow",
      description: "They prance in silver streams with manes aglow with moonbeam dreams, leaping through clouds and sipping star-tea",
      color: "bg-rhyme-pink",
      icon: <Unicorn className="h-12 w-12 text-white" />
    },
    {
      name: "The Sleepytime Teddy",
      description: "Waves with drowsy eyes at The Sleepytime Station where lullabies are everywhere and blankets float through the air",
      color: "bg-rhyme-yellow",
      icon: <CloudMoon className="h-12 w-12 text-white" />
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
                    {character.icon}
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
            Follow these delightful characters on their rhyming adventure through 40 magical lands!
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
                Climb aboard The Magic Rhyme Train as it chugs through 40 fantastical destinations! From Candy Canyon to Dragon Hollow, from Jungle Jamboree to The Sleepytime Station, this whimsical picture book invites young readers on a delightful journey filled with playful rhymes and enchanting scenes.
              </p>
              <p className="text-sm text-gray-600">Available on Amazon in Paperback and Kindle formats</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
