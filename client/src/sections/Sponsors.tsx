import { Button } from "@/components/ui/button";

interface SponsorTier {
  name: string;
  sponsors: Sponsor[];
  containerClass: string;
  itemClass: string;
}

interface Sponsor {
  id: number;
  name: string;
  logo?: string;
  placeholder?: boolean;
}

const sponsorTiers: SponsorTier[] = [
  {
    name: "Platinum Sponsors",
    sponsors: [
      { id: 1, name: "Zimbabwe Institution of Engineers", logo: "https://www.zie.co.zw/storage/app/public/logo/logo-1682675626.png" },
      { id: 2, name: "Sponsor Logo", placeholder: true },
      { id: 3, name: "Sponsor Logo", placeholder: true }
    ],
    containerClass: "grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center",
    itemClass: "bg-neutral-100 p-6 rounded-lg w-full max-w-xs flex items-center justify-center h-32"
  },
  {
    name: "Gold Sponsors",
    sponsors: [
      { id: 4, name: "Sponsor Logo", placeholder: true },
      { id: 5, name: "Sponsor Logo", placeholder: true },
      { id: 6, name: "Sponsor Logo", placeholder: true },
      { id: 7, name: "Sponsor Logo", placeholder: true }
    ],
    containerClass: "grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center",
    itemClass: "bg-neutral-100 p-4 rounded-lg w-full max-w-xs flex items-center justify-center h-24"
  },
  {
    name: "Silver Sponsors",
    sponsors: [
      { id: 8, name: "Sponsor Logo", placeholder: true },
      { id: 9, name: "Sponsor Logo", placeholder: true },
      { id: 10, name: "Sponsor Logo", placeholder: true },
      { id: 11, name: "Sponsor Logo", placeholder: true },
      { id: 12, name: "Sponsor Logo", placeholder: true }
    ],
    containerClass: "grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center",
    itemClass: "bg-neutral-100 p-3 rounded-lg w-full max-w-xs flex items-center justify-center h-20"
  }
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Our Sponsors</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Supporting innovation and excellence in engineering
          </p>
        </div>
        
        {sponsorTiers.map((tier, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <h3 className="text-xl font-heading font-bold text-center mb-8">{tier.name}</h3>
            <div className={tier.containerClass}>
              {tier.sponsors.map((sponsor) => (
                <div key={sponsor.id} className={tier.itemClass}>
                  {sponsor.logo ? (
                    <img src={sponsor.logo} alt={sponsor.name} className="max-h-20" />
                  ) : (
                    <div className="text-2xl font-bold text-neutral-400">{sponsor.name}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-16">
          <Button className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-opacity-90 transition-all">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
}
