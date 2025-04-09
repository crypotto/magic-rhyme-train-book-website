
import React from 'react';
import { Card } from '@/components/ui/card';
import { Book, BookOpen, Gift } from 'lucide-react';

const Purchase = () => {
  return (
    <section id="buy" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Get Your Copy Today</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Paperback Option */}
          <Card className="border-2 border-rhyme-purple/20 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-rhyme-purple">
            <div className="bg-rhyme-blue p-6 flex flex-col items-center">
              <Book className="h-12 w-12 mb-2 text-rhyme-purple" />
              <h3 className="font-fredoka text-2xl text-center">Paperback</h3>
            </div>
            
            <div className="p-6">
              <p className="text-3xl font-bold text-center mb-4">$14.99</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-rhyme-purple mr-2">✓</span>
                  <span>40 rhyming adventures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rhyme-purple mr-2">✓</span>
                  <span>Full-color illustrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rhyme-purple mr-2">✓</span>
                  <span>Durable softcover</span>
                </li>
              </ul>
              
              <a 
                href="https://amazon.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full flex justify-center"
              >
                Buy on Amazon
              </a>
            </div>
          </Card>
          
          {/* Hardcover Option */}
          <Card className="border-2 border-rhyme-purple shadow-lg overflow-hidden transform scale-105 z-10 transition-all duration-300 hover:shadow-xl">
            <div className="bg-rhyme-purple p-6 flex flex-col items-center">
              <BookOpen className="h-12 w-12 mb-2 text-white" />
              <h3 className="font-fredoka text-2xl text-center text-white">Hardcover</h3>
              <span className="mt-2 bg-white text-rhyme-purple text-sm font-bold px-3 py-1 rounded-full">Most Popular</span>
            </div>
            
            <div className="p-6">
              <p className="text-3xl font-bold text-center mb-4">$19.99</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-rhyme-purple mr-2">✓</span>
                  <span>40 rhyming adventures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rhyme-purple mr-2">✓</span>
                  <span>Full-color illustrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rhyme-purple mr-2">✓</span>
                  <span>Premium hardcover</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rhyme-purple mr-2">✓</span>
                  <span>Keepsake quality</span>
                </li>
              </ul>
              
              <a 
                href="https://amazon.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full flex justify-center"
              >
                Buy on Amazon
              </a>
            </div>
          </Card>
          
          {/* Gift Set Option */}
          <Card className="border-2 border-rhyme-purple/20 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-rhyme-purple">
            <div className="bg-rhyme-pink p-6 flex flex-col items-center">
              <Gift className="h-12 w-12 mb-2 text-rhyme-purple" />
              <h3 className="font-fredoka text-2xl text-center">Gift Set</h3>
            </div>
            
            <div className="p-6">
              <p className="text-3xl font-bold text-center mb-4">$24.99</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-rhyme-purple mr-2">✓</span>
                  <span>Hardcover book</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rhyme-purple mr-2">✓</span>
                  <span>Character bookmarks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rhyme-purple mr-2">✓</span>
                  <span>Sticker sheet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rhyme-purple mr-2">✓</span>
                  <span>Gift packaging</span>
                </li>
              </ul>
              
              <a 
                href="https://amazon.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full flex justify-center"
              >
                Buy on Amazon
              </a>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-2">Also available at these retailers:</p>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <div className="bg-gray-100 px-4 py-2 rounded-md">Barnes & Noble</div>
            <div className="bg-gray-100 px-4 py-2 rounded-md">Books-A-Million</div>
            <div className="bg-gray-100 px-4 py-2 rounded-md">Indie Bookstores</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
