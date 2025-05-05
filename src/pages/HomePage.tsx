import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
import ProductCarousel from '@/components/home/ProductCarousel';
import ProductSection from '@/components/home/ProductSection';
import TestimonialsSection from '@/components/shared/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
      <div className=''>
    <div >
        <Helmet>
        <title>Interia | Premium Interior Design</title>
        <meta name="description" content="Transform your space with premium interior design services from Interia. We create beautiful, functional spaces tailored to your lifestyle." />
      </Helmet>
      
      <div className='w-full'>
        <div className='container mx-auto '>
          <HeroSection />
      <ProductCarousel />
      <ProductSection />
      <TestimonialsSection />
      <ContactSection />
        </div>
      </div>
      </div>
    </div>
  );
}