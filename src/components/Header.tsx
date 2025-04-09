
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Book, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center space-x-2">
            <Book className="h-8 w-8 text-rhyme-purple" />
            <span className="font-fredoka font-bold text-xl sm:text-2xl text-rhyme-purple">Magic Rhyme Train</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="font-fredoka text-lg hover:text-rhyme-purple transition-colors">About</a>
            <a href="#preview" className="font-fredoka text-lg hover:text-rhyme-purple transition-colors">Preview</a>
            <a href="#characters" className="font-fredoka text-lg hover:text-rhyme-purple transition-colors">Characters</a>
            <a href="#author" className="font-fredoka text-lg hover:text-rhyme-purple transition-colors">Author</a>
            <a href="#contact" className="font-fredoka text-lg hover:text-rhyme-purple transition-colors">Contact</a>
          </nav>
          
          <Button href="#buy" className="hidden md:flex btn-primary">
            Buy Now
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-rhyme-purple hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-rhyme-purple/10" onClick={toggleMenu}>About</a>
            <a href="#preview" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-rhyme-purple/10" onClick={toggleMenu}>Preview</a>
            <a href="#characters" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-rhyme-purple/10" onClick={toggleMenu}>Characters</a>
            <a href="#author" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-rhyme-purple/10" onClick={toggleMenu}>Author</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-rhyme-purple/10" onClick={toggleMenu}>Contact</a>
            <a href="#buy" className="block px-3 py-2 bg-rhyme-purple text-white rounded-md text-base font-medium" onClick={toggleMenu}>Buy Now</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
