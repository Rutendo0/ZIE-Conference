import { Countdown } from "@/components/ui/countdown";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
  const conferenceDate = new Date("October 15, 2025 09:00:00");
  
  const handleClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div 
        className="relative min-h-screen flex items-center justify-center" 
        style={{
          backgroundImage: "url('/attached_assets/home.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <img 
            src="https://www.zie.co.zw/assets/img/logo.png" 
            alt="ZIE Logo" 
            className="mx-auto mb-8 h-24 w-auto"
          />
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
           The Zimbabwe Institution of Engineers <br />International Conference 2025
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Innovation & Sustainability in Engineering: Building Zimbabwe's Future
          </p>
          <p className="text-lg mb-12">
            November 25-28, 2025 | Elphant Hills Resort and Conference Centre
          </p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center">
            <Countdown date={conferenceDate} />
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
            <Button 
              className="px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-opacity-90 transition-all text-lg"
              onClick={() => handleClick('register')}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
