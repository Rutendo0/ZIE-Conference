
import { Countdown } from "@/components/ui/countdown";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
  const conferenceDate = new Date("November 25, 2025 09:00:00");
  
  const handleClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div 
        className="relative min-h-screen flex items-center justify-center" 
        style={{
          backgroundImage: "url('/images/home.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <div className="bg-black bg-opacity-40 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight text-shadow">
              ZIE International Conference 2025
            </h1>
            <h2 className="text-2xl lg:text-3xl mb-8 font-semibold text-accent">
              Innovation & Sustainability in Engineering
            </h2>
            <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto">
              Shaping Zimbabwe's Engineering Future Through Excellence
            </p>
            <div className="text-lg mb-12 bg-black bg-opacity-50 inline-block px-8 py-4 rounded-full">
              <strong>November 25-28, 2025</strong> | Elephant Hills Resort and Conference Centre
            </div>
          
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
      </div>
    </section>
  );
}
