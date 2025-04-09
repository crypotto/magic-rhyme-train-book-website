
import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Contact & Newsletter</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-rhyme-purple/20 shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Newsletter Signup */}
              <div className="md:w-1/2 bg-rhyme-peach/30 p-8">
                <h3 className="font-fredoka text-2xl mb-4 text-rhyme-purple">Join our Newsletter</h3>
                
                <p className="mb-6">
                  Sign up to receive updates about:
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-rhyme-purple mr-2">✓</span>
                    <span>New book releases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rhyme-purple mr-2">✓</span>
                    <span>Reading events & signings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rhyme-purple mr-2">✓</span>
                    <span>Free activity downloads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rhyme-purple mr-2">✓</span>
                    <span>Special offers for subscribers</span>
                  </li>
                </ul>
                
                <form className="space-y-4">
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      className="border-rhyme-purple/50"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Subscribe
                  </Button>
                </form>
              </div>
              
              {/* Contact Form */}
              <div className="md:w-1/2 p-8">
                <h3 className="font-fredoka text-2xl mb-4 text-rhyme-purple">Get in Touch</h3>
                
                <p className="mb-6">
                  Have questions about the book? Want to arrange a reading? We'd love to hear from you!
                </p>
                
                <form className="space-y-4">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Your name" 
                      className="border-rhyme-purple/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      className="border-rhyme-purple/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="Your message" 
                      className="border-rhyme-purple/50 min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="btn-primary">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
