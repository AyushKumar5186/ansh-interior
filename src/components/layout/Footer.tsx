import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, Instagram, FacebookIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import black from "../../images/black.png"
import white from "../../images/white.png"
import { useTheme } from '../theme-provider';
// import { InstagramLogoIcon } from '@radix-ui/react-icons';
export default function Footer() {
const { theme } = useTheme();
  return (
    <footer className="bg-muted/30 border-t ">
      <div className="container mx-auto py-12 px-4 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h2 className="font-serif text-2xl font-bold">
                {
          theme == "dark" ?
        <img src={white} alt="" className="w-full h-8 sm:h-16 object-cover"/>
        :
        <img src={black} alt="" className="w-full h-8 sm:h-16 object-cover "/>
        }
              </h2>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Creating beautiful spaces that inspire and transform lives through thoughtful design.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <a href='https://api.whatsapp.com/send?phone=9973844358'><MessageCircle size={20} /></a>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <a href=''><FacebookIcon size={20} /></a>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <a href=''><Instagram size={20}/></a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                {/* <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link> */}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground hover:text-primary transition-colors">
                Residential Design
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors">
                Commercial Design
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors">
                Space Planning
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors">
                Furniture Selection
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors">
                Renovation Consulting
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <span className="text-muted-foreground">Ramgarh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span className="text-muted-foreground">+91 9973844358</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span className="text-muted-foreground">ansinterior01@gmai.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Ansh Interior. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}