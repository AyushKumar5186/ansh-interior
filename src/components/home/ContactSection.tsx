// import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
// import ContactForm from '@/components/shared/ContactForm';
import { MapPin, Mail, Phone, ArrowRight,  } from "lucide-react";
import { useTheme } from "../theme-provider";

import img1 from "../../images/1.png"
import img2 from "../../images/2.png"
import { Button } from "../ui/button";
// import { Link } from "react-router-dom";

export default function ContactSection() {
 const { theme,} = useTheme();
 return (
  <section className="py-16" id="contact">
   <div className="container mx-auto px-4 sm:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
     <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
     >
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
       Get In Touch
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
       Ready to transform your space? Contact us today to schedule a
       consultation and start your journey to a beautifully designed home or
       office.
      </p>

      <div className="space-y-6">
       <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
         <MapPin className="h-5 w-5 text-primary" />
        </div>
        <div className="ml-4">
         <h3 className="font-medium">Visit Us</h3>
         <address className="text-muted-foreground not-italic">
          Ramgarh
          <br />
          
         </address>
        </div>
       </div>

       <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
         <Mail className="h-5 w-5 text-primary" />
        </div>
        <div className="ml-4">
         <h3 className="font-medium">Email Us</h3>
         <p className="text-muted-foreground">
          <a href="mailto:hello@interia.com" className="hover:text-primary">
           ansinterior01@gmai.com
          </a>
         </p>
        </div>
       </div>

       <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
         <Phone className="h-5 w-5 text-primary" />
        </div>
        <div className="ml-4">
         <h3 className="font-medium">Call Us</h3>
         <p className="text-muted-foreground">
          <a href="tel:+15551234567" className="hover:text-primary">
           +91 9973844358
          </a>
         </p>
        </div>
       </div>

       {/* <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
         <Clock className="h-5 w-5 text-primary" />
        </div>
        <div className="ml-4">
         <h3 className="font-medium">Working Hours</h3>
         <p className="text-muted-foreground">
          Monday - Friday: 9AM - 6PM
          <br />
          Saturday: 10AM - 4PM
          <br />
          Sunday: Closed
         </p>
        </div>
       </div> */}
      </div>
     </motion.div>

     <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card rounded-xl p-6 md:p-8 shadow-sm"
     >
      {/* <h3 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h3>
            <ContactForm /> */}
      <div className="flex flex-col justify-center items-center">
        {
          theme == "dark" ?
        <img src={img2} alt="" className="max-sm:h-52 max-sm:w-52 sm:h-80 sm:w-80 object-cover"/>
        :
        <img src={img1} alt="" className="max-sm:h-52 max-sm:w-52 sm:h-80 sm:w-80 object-cover "/>
        }
      </div>
      <Button asChild size="lg" className="w-full flex justify-center sm:w-auto font-medium">
              <a href="https://api.whatsapp.com/send?phone=9973844358" className="flex items-center justify-center">
                <p className="text-xl font-semibold">Connect with us </p><p className="text-xl font-semibold"><ArrowRight className="ml-2 h-4 w-4 " /></p>
              </a>
            </Button>
     </motion.div>
    </div>
   </div>
  </section>
 );
}
