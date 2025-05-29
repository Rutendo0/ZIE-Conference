import { useState } from "react";
import { Facebook, Twitter, Globe, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Speaker {
  id: number;
  name: string;
  title: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const allSpeakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Sarah Moyo",
    title: "Chief Engineer, Zimbabwe Water Authority",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    id: 2,
    name: "Prof. John Makumbe",
    title: "Director, National Innovation Hub",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    id: 3,
    name: "Eng. David Mutasa",
    title: "CEO, Continental Engineering Group",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 4,
    name: "Dr. Tendai Chieza",
    title: "Lead Researcher, Renewable Energy Institute",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    id: 5,
    name: "Eng. Farai Nyamande",
    title: "Infrastructure Planning Director, Ministry of Transport",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 6,
    name: "Dr. Pamela Zimuto",
    title: "Senior Lecturer, University of Zimbabwe",
    image: "https://images.unsplash.com/photo-1594736797933-d0dec4ba2d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    id: 7,
    name: "Eng. Thomas Chikuni",
    title: "Project Director, African Development Bank",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 8,
    name: "Dr. Lisa Muronda",
    title: "Head of Smart Cities Initiative, UNICEF",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  }
];

export default function Speakers() {
  const [showAllSpeakers, setShowAllSpeakers] = useState(false);
  
  // Only show 4 speakers initially, show all when button is clicked
  const displaySpeakers = showAllSpeakers ? allSpeakers : allSpeakers.slice(0, 4);
  
  const toggleSpeakers = () => {
    setShowAllSpeakers(!showAllSpeakers);
  };
  
  return (
    <section id="speakers" className="py-24 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/10 text-secondary px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
            FEATURED SPEAKERS
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-shadow">Engineering Visionaries</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mb-8"></div>
          <p className="max-w-4xl mx-auto text-gray-200 text-lg leading-relaxed">
            Learn from distinguished industry leaders, innovators, and experts who are shaping the future of engineering across Africa and beyond
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displaySpeakers.map(speaker => (
            <div key={speaker.id} className="speaker-card group relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="speaker-overlay opacity-0 group-hover:opacity-100 absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 transition-all duration-500">
                <h3 className="text-xl font-heading font-bold text-white mb-2 text-shadow">{speaker.name}</h3>
                <p className="text-secondary font-semibold mb-4 text-sm">{speaker.title}</p>
                <div className="flex space-x-4">
                  {speaker.socials.linkedin && (
                    <a href="https://www.linkedin.com/in/the-zimbabwe-institution-of-engineers-04b651206/" className="text-white hover:text-secondary transition-colors bg-white/20 p-2 rounded-full backdrop-blur-sm" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {speaker.socials.twitter && (
                    <a href="https://x.com/TheZimbabweIns1" className="text-white hover:text-secondary transition-colors bg-white/20 p-2 rounded-full backdrop-blur-sm" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {speaker.socials.website && (
                    <a href="https://www.zie.co.zw" className="text-white hover:text-secondary transition-colors bg-white/20 p-2 rounded-full backdrop-blur-sm" aria-label="Website" target="_blank" rel="noopener noreferrer">
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            onClick={toggleSpeakers}
            className="btn-gradient px-10 py-4 font-bold rounded-full text-lg border-2 border-white/20 hover:border-white/40 shadow-xl"
          >
            {showAllSpeakers ? "Show Featured Speakers" : "View All Speakers"}
          </Button>
        </div>
      </div>
    </section>
  );
}
