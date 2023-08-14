// import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import ProductFeatures from './Components/ProductFeatures/ProductFeatures';
import Testimonial from "./Components/Testimonials/Testimonial";
import BlogPost from './Components/BlogPost/BlogPost';
import LogoSection from './Components/LogoSection/LogoSection';
import CallToAction from './Components/CallToAction/CallToAction';
// import Footer from './Components/Footer/Footer';
export default function Home() {
  return (
    <>
    <Hero />
    <Features />
    <ProductFeatures ContentHeader={true} />
    <ProductFeatures ContentHeader={false} />
    <Testimonial />
    <BlogPost />
    <LogoSection />
    <CallToAction />


    
    </>
  )
}
