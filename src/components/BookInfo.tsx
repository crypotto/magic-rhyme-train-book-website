
import React from 'react';
import { Star } from 'lucide-react';

const BookInfo = () => {
  return (
    <section id="about" className="py-20 cloud-background">
      <div className="section-container">
        <h2 className="section-title">About The Book</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed">
              <span className="font-fredoka text-rhyme-purple text-xl">The Magic Rhyme Train</span> is a whimsical children's picture book filled with colorful illustrations and playful rhymes. The story follows a magical train journey through 40 imaginative stops — from Candy Cane Station to Rainbow Reef — with each stop having its own unique rhyme and visual charm.
            </p>
            
            <p className="text-lg leading-relaxed">
              Join our characters as they explore landscapes of imagination, making friends and discovering new wonders at every stop along the tracks. This delightful adventure combines the magic of travel with the joy of rhyming language!
            </p>
            
            <div className="flex items-center space-x-1 text-yellow-500">
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <span className="ml-2 text-gray-700">Perfect for bedtime reading!</span>
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
                  <p className="font-bold">Format:</p>
                  <p>Hardcover & Paperback</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-bold">Pages:</p>
                  <p>48 pages</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-bold">Dimensions:</p>
                  <p>8.5 x 8.5 inches</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-bold">ISBN:</p>
                  <p>978-1-234567-89-0</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-bold">Publication Date:</p>
                  <p>2023</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-rhyme-pink/30 rounded-lg">
                <h4 className="font-fredoka text-xl mb-2">Perfect Gift For:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Bedtime reading adventures</li>
                  <li>Early language development</li>
                  <li>Imaginative play inspiration</li>
                  <li>Young train enthusiasts</li>
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
