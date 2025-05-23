import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CountdownProps {
  date: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ date, className }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +date - +new Date();
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8", className)}>
      <div className="countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-4 px-6">
        <span className="text-4xl md:text-5xl font-bold text-black">
          {timeLeft.days.toString().padStart(2, '0')}
        </span>
        <span className="text-sm uppercase mt-2 text-black">Days</span>
      </div>
      <div className="countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-4 px-6">
        <span className="text-4xl md:text-5xl font-bold text-black">
          {timeLeft.hours.toString().padStart(2, '0')}
        </span>
        <span className="text-sm uppercase mt-2 text-black">Hours</span>
      </div>
      <div className="countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-4 px-6">
        <span className="text-4xl md:text-5xl font-bold text-black">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </span>
        <span className="text-sm uppercase mt-2 text-black">Minutes</span>
      </div>
      <div className="countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-4 px-6">
        <span className="text-4xl md:text-5xl font-bold text-black">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </span>
        <span className="text-sm uppercase mt-2 text-black">Seconds</span>
      </div>
    </div>
  );
}
