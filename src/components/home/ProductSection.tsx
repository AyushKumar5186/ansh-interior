import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Residential Design',
    description:
      'Transform your home into a personal sanctuary that reflects your unique style and meets your specific needs.',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
  },
  {
    id: 2,
    title: 'Commercial Spaces',
    description:
      'Create functional, inspiring workplaces that boost productivity and impress clients with our commercial design services.',
    image: 'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg',
  },
  {
    id: 3,
    title: 'Space Planning',
    description:
      'Maximize functionality and flow with our expert space planning, ensuring every square foot works intelligently for you.',
    image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg',
  },
  {
    id: 4,
    title: 'Furniture Selection',
    description:
      'Find the perfect pieces to complete your space with our curated furniture selection services tailored to your taste.',
    image: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function ProductSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Our Design Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto px-4"
          >
            We offer comprehensive design solutions that transform spaces into beautiful, functional environments.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-serif text-lg md:text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-4">{product.description}</p>
                  {/* <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}