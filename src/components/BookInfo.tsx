
import React from 'react';
import { Star, BookOpen, Clock, Users, BookMarked } from 'lucide-react';

const BookInfo = () => {
  return (
    <section id="about" className="py-20 cloud-background">
      <div className="section-container">
        <h2 className="section-title">About The Book</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed">
              <span className="font-fredoka text-rhyme-purple text-xl">The Magic Rhyme Train</span> is a whimsical children's picture book filled with colorful illustrations and playful rhymes. The story follows a magical train journey through 40 imaginative destinations — from Candy Canyon to Rainbow's End, from Jungle Jamboree to The Sleepytime Station.
            </p>
            
            <p className="text-lg leading-relaxed">
              Each stop on this enchanting journey has its own unique rhyme and visual charm. Children will delight in exploring fantastical landscapes like Dino Valley, Unicorn Meadow, Dragon Hollow, and The Cloud Castle while enjoying the rhythmic language that makes reading aloud so much fun!
            </p>
            
            <div className="flex items-center space-x-1 text-yellow-500">
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <span className="ml-2 text-gray-700">Perfect for bedtime reading!</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="bg-rhyme-purple/20 p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-rhyme-purple" />
                </div>
                <div>
                  <h4 className="font-bold">40 Rhyming Adventures</h4>
                  <p className="text-sm">Each with unique characters</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-rhyme-purple/20 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-rhyme-purple" />
                </div>
                <div>
                  <h4 className="font-bold">Perfect Bedtime Length</h4>
                  <p className="text-sm">Read one stop or many</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-rhyme-purple/20 p-2 rounded-full">
                  <Users className="h-5 w-5 text-rhyme-purple" />
                </div>
                <div>
                  <h4 className="font-bold">Age-Appropriate</h4>
                  <p className="text-sm">Ideal for ages 3-7</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-rhyme-purple/20 p-2 rounded-full">
                  <BookMarked className="h-5 w-5 text-rhyme-purple" />
                </div>
                <div>
                  <h4 className="font-bold">Language Development</h4>
                  <p className="text-sm">Builds phonological awareness</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-rhyme-purple/20">
              <h3 className="font-fredoka text-2xl mb-4 text-rhyme-purple">Book Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-bold">Age Range:</p>
                  <p>3-7 years</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-bold">Available Formats:</p>
                  <p>Paperback, Kindle Edition</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-bold">Coming Soon:</p>
                  <p>Hardcover, Gift Set</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-bold">Number of Destinations:</p>
                  <p>40 rhyming stops</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-bold">Publisher:</p>
                  <p>Amazon KDP</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-bold">Author:</p>
                  <p>Kislay Chandra</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-rhyme-pink/30 rounded-lg">
                <h4 className="font-fredoka text-xl mb-2">Perfect Gift For:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Bedtime reading adventures</li>
                  <li>Early language development</li>
                  <li>Imagination and creativity building</li>
                  <li>Young train and adventure enthusiasts</li>
                  <li>Preschool and kindergarten children</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookInfo;
