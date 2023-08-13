import Image from 'next/image';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import ProductFeatures from './Components/ProductFeatures/ProductFeatures';
import Testimonial from "./Components/Testimonials/Testimonial";
import BlogPost from './Components/BlogPost/BlogPost';
import LogoSection from './Components/LogoSection/LogoSection';
export default function Home() {
  return (
    <>
    <Hero />
    <Features />
    <ProductFeatures ContentHeader={true} />
    <ProductFeatures />
    <Testimonial />
    <BlogPost />
    <LogoSection />

    
    </>
  )
}
