import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
// import img1 from "../../images/1.png"
// import img2 from "../../images/2.png"
import black from "../../images/black.png"
import white from "../../images/white.png"

const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  // { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  // Check if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className={cn(
              "flex items-center space-x-2 transition-colors",
              isScrolled || theme === 'dark' 
                ? "text-foreground" 
                : "text-white"
            )}
          >
            <span className="font-serif text-2xl font-bold">
              {
          theme == "dark" ?
        <img src={white} alt="" className="w-full h-8 sm:h-12 object-cover"/>
        :
        <img src={black} alt="" className="w-full h-8 sm:h-12 object-cover "/>
        }
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  location.pathname === route.path
                    ? 'text-primary bg-primary/10'
                    : cn(
                        'hover:text-primary hover:bg-primary/5',
                        isScrolled || theme === 'dark'
                          ? 'text-muted-foreground'
                          : 'text-white/90'
                      )
                )}
              >
                {route.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                'ml-2 rounded-full',
                theme === 'dark'
                  ? ' backdrop-blur-sm  '
                  : 'text-white  '
              )}
            >
              {theme === 'dark' ?  <p> <Sun /></p> : <p className=''> <Moon /></p>}
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                'mr-2 rounded-full',
                theme === 'dark'
                  ? ' backdrop-blur-sm  '
                  : 'text-white  '
              )}
            >
              {theme === 'dark' ?  <p> <Sun /></p> : <p className=''> <Moon /></p>}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'rounded-full',
                theme === 'dark'
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-white/80'
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col space-y-1">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={cn(
                      'px-4 py-3 rounded-full text-sm font-medium transition-colors',
                      location.pathname === route.path
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {route.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}