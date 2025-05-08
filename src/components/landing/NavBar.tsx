import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="h-9 w-9 mr-2 bg-gradient-to-r from-clinic-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ClinicFlow</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#features" className="text-gray-700 hover:text-clinic-600 transition-colors font-medium">Features</a>
                <a href="#testimonials" className="text-gray-700 hover:text-clinic-600 transition-colors font-medium">Testimonials</a>
                <a href="#pricing" className="text-gray-700 hover:text-clinic-600 transition-colors font-medium">Pricing</a>
                <a href="#contact" className="text-gray-700 hover:text-clinic-600 transition-colors font-medium">Contact</a>
              </>
            ) : (
              <>
                <Link to="/#features" className="text-gray-700 hover:text-clinic-600 transition-colors font-medium">Features</Link>
                <Link to="/#testimonials" className="text-gray-700 hover:text-clinic-600 transition-colors font-medium">Testimonials</Link>
                <Link to="/#pricing" className="text-gray-700 hover:text-clinic-600 transition-colors font-medium">Pricing</Link>
                <Link to="/#contact" className="text-gray-700 hover:text-clinic-600 transition-colors font-medium">Contact</Link>
              </>
            )}
            <Link to="/about" className="text-gray-700 hover:text-clinic-600 transition-colors font-medium">About Us</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => window.open('https://clinicsoftware.vercel.app/', '_blank')}>Login</Button>
            <Button size="sm" className="bg-clinic-600 hover:bg-clinic-700" onClick={() => window.open('https://clinicsoftware.vercel.app/', '_blank')}>Get Started</Button>
          </div>
          
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <a 
                    href="#features" 
                    className="text-gray-800 hover:text-clinic-600 transition-colors py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a 
                    href="#testimonials" 
                    className="text-gray-800 hover:text-clinic-600 transition-colors py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </a>
                  <a 
                    href="#pricing" 
                    className="text-gray-800 hover:text-clinic-600 transition-colors py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </a>
                  <a 
                    href="#contact" 
                    className="text-gray-800 hover:text-clinic-600 transition-colors py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </>
              ) : (
                <>
                  <Link 
                    to="/#features" 
                    className="text-gray-800 hover:text-clinic-600 transition-colors py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link 
                    to="/#testimonials" 
                    className="text-gray-800 hover:text-clinic-600 transition-colors py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link 
                    to="/#pricing" 
                    className="text-gray-800 hover:text-clinic-600 transition-colors py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link 
                    to="/#contact" 
                    className="text-gray-800 hover:text-clinic-600 transition-colors py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
              <Link 
                to="/about" 
                className="text-gray-800 hover:text-clinic-600 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="pt-4 flex flex-col space-y-2">
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://clinicsoftware.vercel.app/', '_blank')}
                >
                  Login
                </Button>
                <Button 
                  className="bg-clinic-600 hover:bg-clinic-700"
                  onClick={() => window.open('https://clinicsoftware.vercel.app/', '_blank')}
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
