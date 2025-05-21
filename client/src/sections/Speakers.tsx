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
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
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
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
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
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 4,
    name: "Dr. Tendai Chieza",
    title: "Lead Researcher, Renewable Energy Institute",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 6,
    name: "Dr. Pamela Zimuto",
    title: "Senior Lecturer, University of Zimbabwe",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
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
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 8,
    name: "Dr. Lisa Muronda",
    title: "Head of Smart Cities Initiative, UNICEF",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
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
    <section id="speakers" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">Featured Speakers</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-neutral-200">
            Learn from industry leaders and experts who are shaping the future of engineering
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displaySpeakers.map(speaker => (
            <div key={speaker.id} className="speaker-card group relative rounded-lg overflow-hidden">
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="w-full h-auto transition-all duration-300"
              />
              <div className="speaker-overlay opacity-0 group-hover:opacity-100 absolute inset-0 bg-gradient-to-t from-primary to-transparent flex flex-col justify-end p-5 transition-all duration-300">
                <h3 className="text-xl font-heading font-bold">{speaker.name}</h3>
                <p className="text-secondary font-semibold">{speaker.title}</p>
                <div className="flex mt-3 space-x-3">
                  {speaker.socials.linkedin && (
                    <a href={speaker.socials.linkedin} className="text-white hover:text-secondary" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {speaker.socials.twitter && (
                    <a href={speaker.socials.twitter} className="text-white hover:text-secondary" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {speaker.socials.website && (
                    <a href={speaker.socials.website} className="text-white hover:text-secondary" aria-label="Website" target="_blank" rel="noopener noreferrer">
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={toggleSpeakers}
            className="inline-block px-8 py-3 bg-secondary text-primary font-bold rounded-full hover:bg-opacity-90 transition-all"
          >
            {showAllSpeakers ? "Show Featured Speakers" : "View All Speakers"}
          </Button>
        </div>
      </div>
    </section>
  );
}
