import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import DestaquesSection from '@/components/home/DestaquesSection';
import BlogSection from '@/components/home/BlogSection';
import ContatoSection from '@/components/home/ContatoSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestaquesSection />
      <BlogSection />
      <ContatoSection />
    </>
  );
}