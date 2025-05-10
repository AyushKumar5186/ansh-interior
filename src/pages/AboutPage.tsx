import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import TestimonialsSection from '@/components/shared/TestimonialsSection';
import { Card, CardContent } from '@/components/ui/card';
import ContactSection from '@/components/home/ContactSection';


export default function AboutPage() {

  return (
    <div className='w-screen' >
        <Helmet>
        <title>About Us | Ansh Interior Design</title>
        <meta name="description" content="Learn about Interia's approach to interior design and our team of experienced designers." />
      </Helmet>

      {/* Hero Section */}
      <div className=' '>
        <div className='container px-4 sm:px-12 '>
      <section className="pt-28 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
            >
              About Our Design Studio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              We create thoughtful, beautiful spaces that enhance quality of life through the power of design.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2010, Interia has grown from a small design consultancy to a leading interior design studio with a reputation for excellence. Our journey has been driven by a passion for creating spaces that not only look beautiful but also enhance the quality of life for those who inhabit them.
              </p>
              <p className="text-muted-foreground mb-6">
                What sets us apart is our client-centered approach. We believe that the best designs emerge from a deep understanding of our clients' needs, preferences, and lifestyles. This philosophy has guided our work on residential and commercial projects of all sizes, from urban apartments to luxury homes and prestigious office spaces.
              </p>
              <p className="text-muted-foreground">
                Today, our team of experienced designers continues to push the boundaries of what's possible, combining creativity with practicality to deliver exceptional results that exceed expectations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden aspect-[4/3]"
            >
              <img
                src="https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg"
                alt="Interior designers working on a project"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-16 bg-muted/30 rounded-3xl my-8 sm:my-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl md:text-4xl font-bold mb-4"
            >
              Our Design Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground"
            >
              We believe in a collaborative, thoughtful approach to design that prioritizes functionality, beauty, and sustainability.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <span className="inline-block p-3 rounded-full bg-primary/10">01</span>
                  </div>
                  <h3 className="font-medium text-xl mb-3">Listen & Understand</h3>
                  <p className="text-muted-foreground">
                    We begin every project by deeply understanding your needs, preferences, and how you use your space. This foundation ensures we create designs that truly work for you.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <span className="inline-block p-3 rounded-full bg-primary/10">02</span>
                  </div>
                  <h3 className="font-medium text-xl mb-3">Design & Innovate</h3>
                  <p className="text-muted-foreground">
                    Our creative process balances aesthetics with functionality, using innovative solutions to overcome challenges and create spaces that are both beautiful and practical.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <span className="inline-block p-3 rounded-full bg-primary/10">03</span>
                  </div>
                  <h3 className="font-medium text-xl mb-3">Execute & Deliver</h3>
                  <p className="text-muted-foreground">
                    We manage every detail of the implementation process, ensuring that the final result aligns perfectly with the design vision and meets our high standards of quality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl md:text-4xl font-bold mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground"
            >
              Our talented team of designers brings diverse expertise and a shared passion for creating exceptional spaces.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Emma Davis',
                role: 'Principal Designer',
                image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
              },
              {
                name: 'David Wong',
                role: 'Senior Interior Architect',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
              },
              {
                name: 'Sophie Martin',
                role: 'Design Consultant',
                image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg',
              },
              {
                name: 'James Wilson',
                role: 'Project Manager',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-medium text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Reuse Testimonials */}
      <TestimonialsSection />
            <ContactSection />
      
      </div>
      </div>
    </div>
  );
}