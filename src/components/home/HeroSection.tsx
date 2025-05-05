import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
 return (
  <section className="relative min-h-[90vh] md:h-[90vh] flex items-center">
   {/* Background Image */}
   <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-black/40" />
    <img
     src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
     alt="Modern living room with minimalist design"
     className="w-full h-full object-cover"
     loading="eager"
    />
   </div>

   <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-2xl">
     <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
     >
      Transform Your Space Into A Masterpiece
     </motion.h1>
     <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-8"
     >
      We create beautiful, functional spaces tailored to your lifestyle and
      preferences. Let us bring your vision to life with our expert interior
      design services.
     </motion.p>
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4"
     >
      <Button asChild size="lg" className="w-full sm:w-auto font-medium">
       <Link to="/gallery">
        Explore Our Work <ArrowRight className="ml-2 h-4 w-4" />
       </Link>
      </Button>
      <Button
       asChild
       variant="outline"
       size="lg"
       className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
      >
       <a href="https://api.whatsapp.com/send?phone=9973844358">Get In Touch</a>
       
      </Button>
     </motion.div>
    </div>
   </div>
  </section>
 );
}
