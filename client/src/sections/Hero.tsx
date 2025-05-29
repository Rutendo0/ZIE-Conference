
import { Countdown } from "@/components/ui/countdown";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
  const conferenceDate = new Date("November 25, 2025 09:00:00");
  
  const handleClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      <div 
        className="relative min-h-screen flex items-center justify-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center text-white relative z-10">
          <div className="bg-gradient-to-br from-black/60 to-black/40 p-12 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl max-w-6xl mx-auto">
            <div className="mb-6">
              <div className="inline-block bg-secondary/20 text-secondary px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-secondary/30">
               The ZIMBABWE INSTITUTION OF ENGINEERS
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight text-shadow bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
              ZIE International Conference 2025
            </h1>
            <h2 className="text-2xl lg:text-4xl mb-8 font-semibold text-secondary text-shadow-light">
              Innovation & Sustainability in Engineering
            </h2>
            <p className="text-xl lg:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-100">
              Uniting Global Engineering Excellence to Shape Zimbabwe's Future Through Innovation, Collaboration, and Sustainable Development
            </p>
            <div className="text-lg mb-12 bg-gradient-to-r from-primary/80 to-accent/80 inline-block px-10 py-4 rounded-full border border-white/20 backdrop-blur-sm">
              <strong className="text-white">November 25-28, 2025</strong>
              <span className="text-secondary mx-2">•</span>
              <span className="text-gray-200">Elephant Hills Resort, Victoria Falls</span>
            </div>
          
            {/* Countdown Timer */}
            <div className="flex justify-center mb-12">
              <Countdown date={conferenceDate} />
            </div>
          
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                className="btn-gradient px-10 py-4 font-bold rounded-full text-lg border-2 border-transparent hover:border-white/30 shadow-lg"
                onClick={() => handleClick('register')}
              >
                Register Now
              </Button>
              <Button 
                variant="outline"
                className="px-10 py-4 font-bold rounded-full text-lg bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                onClick={() => handleClick('about')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
