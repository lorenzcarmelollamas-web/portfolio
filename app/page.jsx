import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import ExperienceDetail from '@/components/ExperienceDetail';
import Skills from '@/components/Skills';
import JokeGenerator from '@/components/JokeGenerator';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Resume />
      <ExperienceDetail />
      <Skills />
      <JokeGenerator />
      <Contact />
      <Footer />
    </main>
  );
}
