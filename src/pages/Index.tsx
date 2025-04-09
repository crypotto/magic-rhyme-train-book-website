
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BookInfo from '@/components/BookInfo';
import SamplePages from '@/components/SamplePages';
import Characters from '@/components/Characters';
import Purchase from '@/components/Purchase';
import Author from '@/components/Author';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <BookInfo />
        <SamplePages />
        <Characters />
        <Purchase />
        <Author />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
