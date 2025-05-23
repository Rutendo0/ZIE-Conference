import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScheduleItem {
  time: string;
  title: string;
  location: string;
  speaker?: string;
}

interface DaySchedule {
  date: string;
  items: ScheduleItem[];
}

const scheduleData: Record<string, DaySchedule> = {
  day1: {
    date: "November 25, 2025",
    items: [
      {
        time: "08:00 - 09:00",
        title: "Registration & Welcome Coffee",
        location: "Elephant Hills Resort and Conference Centre, Main Lobby"
      },
      {
        time: "09:00 - 10:30",
        title: "Opening Ceremony & Keynote Address",
        location: "Main Conference Hall",
        speaker: "Hon. Minister of Infrastructure Development"
      },
      {
        time: "10:30 - 11:00",
        title: "Networking Break",
        location: "Exhibition Area"
      },
      {
        time: "11:00 - 12:30",
        title: "Panel Discussion: The Future of Engineering in Africa",
        location: "Main Conference Hall",
        speaker: "Dr. Sarah Moyo"
      },
      {
        time: "12:30 - 14:00",
        title: "Lunch Break",
        location: "Dining Hall"
      },
      {
        time: "14:00 - 17:00",
        title: "Parallel Technical Sessions",
        location: "Various Rooms (See detailed program)"
      }
    ]
  },
  day2: {
    date: "November 26, 2025",
    items: [
      {
        time: "08:30 - 09:00",
        title: "Morning Coffee",
        location: "Exhibition Area"
      },
      {
        time: "09:00 - 10:30",
        title: "Keynote: Sustainable Infrastructure Development",
        location: "Main Conference Hall",
        speaker: "Prof. John Makumbe"
      },
      {
        time: "10:30 - 11:00",
        title: "Networking Break",
        location: "Exhibition Area"
      },
      {
        time: "11:00 - 12:30",
        title: "Technical Sessions: Renewable Energy Solutions",
        location: "Room A & B"
      },
      {
        time: "12:30 - 14:00",
        title: "Lunch Break",
        location: "Dining Hall"
      },
      {
        time: "14:00 - 16:00",
        title: "Workshop: Digital Transformation in Engineering",
        location: "Workshop Room 1",
        speaker: "Dr. Tendai Chieza"
      },
      {
        time: "19:00 - 22:00",
        title: "Gala Dinner & Awards Ceremony",
        location: "Grand Ballroom"
      }
    ]
  },
  day3: {
    date: "November 27, 2025",
    items: [
      {
        time: "08:30 - 09:00",
        title: "Morning Coffee",
        location: "Exhibition Area"
      },
      {
        time: "09:00 - 10:30",
        title: "Technical Sessions: Water Management & Environmental Engineering",
        location: "Room A & B"
      },
      {
        time: "10:30 - 11:00",
        title: "Networking Break",
        location: "Exhibition Area"
      },
      {
        time: "11:00 - 12:30",
        title: "Panel: Engineering Education & Professional Development",
        location: "Main Conference Hall"
      },
      {
        time: "12:30 - 14:00",
        title: "Lunch Break",
        location: "Dining Hall"
      },
      {
        time: "14:00 - 15:30",
        title: "Closing Ceremony & Conference Summary",
        location: "Main Conference Hall",
        speaker: "ZIE President"
      },
      {
        time: "16:00 - 18:00",
        title: "Technical Tour (Optional)",
        location: "Meet at Main Entrance"
      }
    ]
  }
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<string>("day1");

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Conference Schedule</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Three days of inspiring talks, workshops, and networking opportunities
          </p>
        </div>
        
        {/* Schedule Tabs */}
        <div className="flex flex-wrap justify-center mb-10 border-b border-neutral-200">
          <button 
            className={cn(
              "schedule-tab px-8 py-4 font-heading font-bold text-lg focus:outline-none",
              activeDay === "day1" && "active"
            )}
            onClick={() => setActiveDay("day1")}
          >
            Day 1
          </button>
          <button 
            className={cn(
              "schedule-tab px-8 py-4 font-heading font-bold text-lg focus:outline-none",
              activeDay === "day2" && "active"
            )}
            onClick={() => setActiveDay("day2")}
          >
            Day 2
          </button>
          <button 
            className={cn(
              "schedule-tab px-8 py-4 font-heading font-bold text-lg focus:outline-none",
              activeDay === "day3" && "active"
            )}
            onClick={() => setActiveDay("day3")}
          >
            Day 3
          </button>
        </div>
        
        {/* Schedule Content */}
        <div className="schedule-content">
          <h3 className="text-xl font-bold text-primary mb-6">{scheduleData[activeDay].date}</h3>
          
          {scheduleData[activeDay].items.map((item, index) => (
            <div 
              key={index} 
              className={`border-l-4 border-secondary pl-5 ${
                index < scheduleData[activeDay].items.length - 1 ? 'pb-10' : ''
              } relative`}
            >
              <div className="absolute w-4 h-4 bg-secondary rounded-full -left-[10px]"></div>
              <span className="text-sm font-semibold bg-neutral-100 py-1 px-2 rounded mb-2 inline-block">
                {item.time}
              </span>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-neutral-600">{item.location}</p>
              {item.speaker && (
                <p className="text-neutral-600 mt-2">
                  <strong>Speaker:</strong> {item.speaker}
                </p>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="mailto:conference2025@zie.co.zw?subject=Request%20for%20Conference%20Schedule">
            <Button className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-opacity-90 transition-all">
              Request Full Schedule
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
