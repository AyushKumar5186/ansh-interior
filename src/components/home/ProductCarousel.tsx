import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselItems = [
  {
    id: 1,
    title: 'Modern Living Room',
    description: 'Clean lines and contemporary aesthetics for the heart of your home.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
  },
  {
    id: 2,
    title: 'Minimalist Kitchen',
    description: 'Functional and elegant kitchen designs that make cooking a joy.',
    image: 'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg',
  },
  {
    id: 3,
    title: 'Cozy Bedroom',
    description: 'Comfortable and stylish bedroom designs for your personal sanctuary.',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
  },
  {
    id: 4,
    title: 'Luxury Bathroom',
    description: 'Spa-like bathroom experiences in the comfort of your home.',
    image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg',
  },
];

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <section className="py-16 bg-muted/30 ">
      <div className="container mx-auto ">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Featured Design Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our showcase of exceptional interior designs crafted with attention to detail and passionate creativity.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl">
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            {carouselItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeIndex ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ zIndex: index === activeIndex ? 1 : 0 }}
              >
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 max-w-lg mb-4">{item.description}</p>
                    {/* <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
                      View Project
                    </Button> */}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-background/30"
            onClick={handlePrev}
          >
            <p><ChevronLeft className="h-6 w-6" /></p>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-background/30"
            onClick={handleNext}
          >
            <p><ChevronRight className="h-6 w-6" /></p>
          </Button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-white' : 'bg-white/40'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}