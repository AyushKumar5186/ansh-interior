import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactForm from '@/components/shared/ContactForm';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Ansh Interior Design</title>
        <meta name="description" content="Get in touch with Interia's interior design team to start transforming your space." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Ready to transform your space? Contact us today to schedule a consultation and start your design journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl p-6 md:p-8 shadow-sm"
            >
              <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-serif text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-medium text-lg">Our Location</h4>
                    <address className="text-muted-foreground not-italic mt-2">
                      123 Design Street<br />
                      Creative City, ST 12345<br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-medium text-lg">Phone</h4>
                    <p className="text-muted-foreground mt-2">
                      <a href="tel:+15551234567" className="hover:text-primary">
                        +1 (555) 123-4567
                      </a>
                    </p>
                    <p className="text-muted-foreground mt-1">
                      <a href="tel:+15559876543" className="hover:text-primary">
                        +1 (555) 987-6543
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-muted-foreground mt-2">
                      <a href="mailto:hello@interia.com" className="hover:text-primary">
                        hello@interia.com
                      </a>
                    </p>
                    <p className="text-muted-foreground mt-1">
                      <a href="mailto:info@interia.com" className="hover:text-primary">
                        info@interia.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-medium text-lg">Working Hours</h4>
                    <div className="text-muted-foreground mt-2">
                      <p>Monday - Friday: 9AM - 6PM</p>
                      <p>Saturday: 10AM - 4PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-muted/30 rounded-xl p-4 overflow-hidden aspect-[16/9] md:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1651271435202!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Interia location map"
            ></iframe>
          </div>
        </div>
      </section> */}
    </>
  );
}