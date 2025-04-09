
import React from 'react';
import { Card } from '@/components/ui/card';

const Author = () => {
  return (
    <section id="author" className="py-20 bg-rhyme-blue/30">
      <div className="section-container">
        <h2 className="section-title">About the Author</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Author Image Placeholder */}
              <div className="md:w-1/3 bg-rhyme-purple p-8 flex items-center justify-center">
                <div className="w-40 h-40 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-5xl text-white font-fredoka">A</span>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="md:w-2/3 p-8">
                <h3 className="font-fredoka text-2xl mb-4 text-rhyme-purple">Author Name</h3>
                
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Author Name is a children's book author who believes in the power of rhyme and rhythm to captivate young minds and foster a love of reading from an early age.
                  </p>
                  
                  <p className="leading-relaxed">
                    With a background in early childhood education, they understand how important engaging stories are for children's development. "The Magic Rhyme Train" was born from countless bedtime stories told to their own children, where adventures on an imaginary train became a nightly request.
                  </p>
                  
                  <p className="leading-relaxed">
                    When not writing, Author Name can be found collecting inspiration from their travels, visiting schools for interactive readings, and of course, making up new rhymes with young readers.
                  </p>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-fredoka text-lg mb-2">A Note from the Author:</h4>
                  <blockquote className="pl-4 border-l-4 border-rhyme-purple italic">
                    "I believe every child deserves stories that spark joy and imagination. My hope is that 'The Magic Rhyme Train' becomes a cherished part of your family's reading journey."
                  </blockquote>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Author;
