import { MapPin, Hotel, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Venue() {
  return (
    <section id="venue" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Conference Venue</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Join us at the prestigious Elephant Hills Resort and Conference Centre
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Harare International Conference Centre" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Elephant Hills Resort and Conference Centre
            </h3>
            <p className="text-neutral-700 mb-6 leading-relaxed">
              Located in the heart of Harare, the International Conference Centre offers world-class facilities and amenities to ensure a productive and enjoyable conference experience.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start">
                <div className="text-secondary text-2xl mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-1">Address</h4>
                  <p className="text-neutral-600">
                    Harare International Conference Centre, Gleneagles Road, Harare, Zimbabwe
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-secondary text-2xl mr-4">
                  <Hotel className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-1">Accommodation</h4>
                  <p className="text-neutral-600">
                    Special rates available at partner hotels within walking distance of the venue
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-secondary text-2xl mr-4">
                  <Plane className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-1">Travel Information</h4>
                  <p className="text-neutral-600">
                    20 minutes from Robert Gabriel Mugabe International Airport
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Harare+International+Conference+Centre+Zimbabwe" target="_blank" rel="noopener noreferrer">
                <Button className="inline-block px-6 py-2 bg-primary text-white font-bold rounded-full hover:bg-opacity-90 transition-all">
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Google Maps embed */}
        <div className="mt-16 h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.427736973545!2d31.0475!3d-17.8252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzMwLjciUyAzMcKwMDInNTAuOSJF!5e0!3m2!1sen!2s!4v1630000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Conference venue location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
