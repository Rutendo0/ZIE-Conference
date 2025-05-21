import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

export default function Footer() {
  const handleNavClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://www.zie.co.zw/storage/app/public/logo/logo-1682675626.png" 
              alt="ZIE Logo" 
              className="h-16 mb-4"
            />
            <p className="mb-4">
              The Zimbabwe Institution of Engineers promotes excellence in the engineering profession through regulation, research, and professional development.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-neutral-300 hover:text-white transition-all" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-neutral-300 hover:text-white transition-all" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-neutral-300 hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-neutral-300 hover:text-white transition-all" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-white transition-all">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-white transition-all">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('speakers')} className="hover:text-white transition-all">
                  Speakers
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('schedule')} className="hover:text-white transition-all">
                  Schedule
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('venue')} className="hover:text-white transition-all">
                  Venue
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('register')} className="hover:text-white transition-all">
                  Register
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-4">Important Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-all">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-all">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-all">
                  Travel Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-all">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-all">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-all">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-secondary" />
                <span>
                  Zimbabwe Institution of Engineers<br />
                  Batanai Gardens, Block 4<br />
                  Harare, Zimbabwe
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-secondary" />
                <span>+263 242 774 561</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-secondary" />
                <span>conference2025@zie.co.zw</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mt-1 mr-3 text-secondary" />
                <span>Monday - Friday: 8:00 AM - 4:30 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-10 pt-6 text-center">
          <p>&copy; 2025 Zimbabwe Institution of Engineers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
