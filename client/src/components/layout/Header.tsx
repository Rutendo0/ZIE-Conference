import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-md transition-all ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img 
            src="https://www.zie.co.zw/wp-content/themes/zimie/img/logo.svg" 
            alt="ZIE Logo" 
            className="h-16 md:h-20 bg-white p-2 rounded shadow-lg"
            style={{ objectFit: 'contain', maxWidth: '200px' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <button onClick={() => handleNavClick('home')} className="font-heading font-semibold text-primary hover:text-secondary transition-all">
            Home
          </button>
          <button onClick={() => handleNavClick('about')} className="font-heading font-semibold text-primary hover:text-secondary transition-all">
            About
          </button>
          <button onClick={() => handleNavClick('speakers')} className="font-heading font-semibold text-primary hover:text-secondary transition-all">
            Speakers
          </button>
          <button onClick={() => handleNavClick('schedule')} className="font-heading font-semibold text-primary hover:text-secondary transition-all">
            Schedule
          </button>
          <button onClick={() => handleNavClick('venue')} className="font-heading font-semibold text-primary hover:text-secondary transition-all">
            Venue
          </button>
          <button onClick={() => handleNavClick('sponsors')} className="font-heading font-semibold text-primary hover:text-secondary transition-all">
            Sponsors
          </button>
          <button onClick={() => handleNavClick('contact')} className="font-heading font-semibold text-primary hover:text-secondary transition-all">
            Contact
          </button>
        </nav>

        <Button 
          onClick={() => handleNavClick('register')}
          className="hidden lg:inline-block px-6 py-2 bg-accent text-white font-bold rounded-full hover:bg-opacity-90 transition-all"
        >
          Register Now
        </Button>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="lg:hidden text-primary focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white pb-4 shadow-lg">
          <nav className="container mx-auto px-4 flex flex-col space-y-3">
            <button onClick={() => handleNavClick('home')} className="font-heading font-semibold text-primary hover:text-secondary py-2 transition-all">
              Home
            </button>
            <button onClick={() => handleNavClick('about')} className="font-heading font-semibold text-primary hover:text-secondary py-2 transition-all">
              About
            </button>
            <button onClick={() => handleNavClick('speakers')} className="font-heading font-semibold text-primary hover:text-secondary py-2 transition-all">
              Speakers
            </button>
            <button onClick={() => handleNavClick('schedule')} className="font-heading font-semibold text-primary hover:text-secondary py-2 transition-all">
              Schedule
            </button>
            <button onClick={() => handleNavClick('venue')} className="font-heading font-semibold text-primary hover:text-secondary py-2 transition-all">
              Venue
            </button>
            <button onClick={() => handleNavClick('sponsors')} className="font-heading font-semibold text-primary hover:text-secondary py-2 transition-all">
              Sponsors
            </button>
            <button onClick={() => handleNavClick('contact')} className="font-heading font-semibold text-primary hover:text-secondary py-2 transition-all">
              Contact
            </button>
            <Button 
              onClick={() => handleNavClick('register')}
              className="inline-block px-6 py-2 bg-accent text-white font-bold rounded-full hover:bg-opacity-90 transition-all text-center mt-3 w-full"
            >
              Register Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}