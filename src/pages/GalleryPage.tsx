import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const galleryFilters = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Bathroom', 'Office'];

const galleryItems = [
  {
    id: 1,
    title: 'Modern Minimalist Living Room',
    category: 'Living Room',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    size: 'large',
  },
  {
    id: 2,
    title: 'Contemporary Kitchen Design',
    category: 'Kitchen',
    image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
    size: 'small',
  },
  {
    id: 3,
    title: 'Luxury Master Bedroom',
    category: 'Bedroom',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Elegant Bathroom',
    category: 'Bathroom',
    image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg',
    size: 'small',
  },
  {
    id: 5,
    title: 'Home Office Setup',
    category: 'Office',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
    size: 'medium',
  },
  {
    id: 6,
    title: 'Open Plan Kitchen and Dining',
    category: 'Kitchen',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    size: 'large',
  },
  {
    id: 7,
    title: 'Cozy Reading Nook',
    category: 'Living Room',
    image: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg',
    size: 'small',
  },
  {
    id: 8,
    title: 'Scandinavian Bedroom',
    category: 'Bedroom',
    image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
    size: 'medium',
  },
  {
    id: 9,
    title: 'Industrial Style Kitchen',
    category: 'Kitchen',
    image: 'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg',
    size: 'large',
  },
  {
    id: 10,
    title: 'Modern Executive Office',
    category: 'Office',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg',
    size: 'medium',
  },
  {
    id: 11,
    title: 'Boutique Hotel Bathroom',
    category: 'Bathroom',
    image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg',
    size: 'small',
  },
  {
    id: 12,
    title: 'Eclectic Living Room',
    category: 'Living Room',
    image: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg',
    size: 'large',
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  // Apply filter
  useEffect(() => {
    if (filter === 'All') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter((item) => item.category === filter));
    }
  }, [filter]);

  // Image loading simulation
  const handleImageLoaded = (id: number) => {
    setLoadedImages((prev) => [...prev, id]);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item2 = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Get column span based on image size
  const getSpanClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-12 md:col-span-8';
      case 'medium':
        return 'col-span-12 sm:col-span-6 md:col-span-4';
      case 'small':
      default:
        return 'col-span-12 sm:col-span-6 md:col-span-4';
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Gallery | Ansh Interior Design</title>
        <meta name="description" content="Explore our portfolio of interior design projects featuring beautiful living rooms, kitchens, bedrooms, and more." />
      </Helmet>

      <div className='w-screen'>
        <div className='container'>
          {/* Hero Section */}
      <section className="pt-28 pb-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
            >
              Our Design Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Browse our collection of beautifully designed spaces and find inspiration for your next project.
            </motion.p>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {galleryFilters.map((cat) => (
                <Button
                  key={cat}
                  variant={filter === cat ? 'default' : 'outline'}
                  onClick={() => setFilter(cat)}
                  className="m-1"
                >
                  {cat}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-12 gap-4 md:gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={item2}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`${getSpanClass(item.size)} transition-all rounded-xl overflow-hidden`}
              >
                <div className="group relative h-full cursor-pointer">
                  <AspectRatio ratio={16 / 10} className="bg-muted/30 ">
                    {!loadedImages.includes(item.id) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
                        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                      </div>
                    )}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onLoad={() => handleImageLoaded(item.id)}
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                    <div className="p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white font-medium text-lg">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
        </div>
      </div>
    </>
  );
}