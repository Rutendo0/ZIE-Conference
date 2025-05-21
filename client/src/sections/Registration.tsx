import { useState } from "react";
import { Check, X, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

interface PricingTier {
  id: string;
  name: string;
  price: string;
  deadline: string;
  features: {
    name: string;
    included: boolean;
  }[];
  highlighted?: boolean;
}

interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  jobTitle: string;
  pricingTier: string;
}

interface TicketData {
  id: number;
  name: string;
  email: string;
  ticketNumber: string;
  pricingTier: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: "early-bird",
    name: "Early Bird",
    price: "$199",
    deadline: "Available until August 15, 2025",
    features: [
      { name: "Full conference access", included: true },
      { name: "Conference materials", included: true },
      { name: "Coffee breaks & lunches", included: true },
      { name: "Welcome reception", included: true },
      { name: "Gala dinner", included: false },
      { name: "Technical tour", included: false }
    ]
  },
  {
    id: "standard",
    name: "Standard",
    price: "$299",
    deadline: "Available until September 30, 2025",
    features: [
      { name: "Full conference access", included: true },
      { name: "Conference materials", included: true },
      { name: "Coffee breaks & lunches", included: true },
      { name: "Welcome reception", included: true },
      { name: "Gala dinner", included: true },
      { name: "Technical tour", included: false }
    ],
    highlighted: true
  },
  {
    id: "premium",
    name: "Premium",
    price: "$399",
    deadline: "Available until October 10, 2025",
    features: [
      { name: "Full conference access", included: true },
      { name: "Conference materials", included: true },
      { name: "Coffee breaks & lunches", included: true },
      { name: "Welcome reception", included: true },
      { name: "Gala dinner", included: true },
      { name: "Technical tour", included: true }
    ]
  }
];

export default function Registration() {
  const { toast } = useToast();

  const registration = useMutation({
    mutationFn: async (tierId: string) => {
      return await apiRequest('POST', '/api/register', { tierId });
    },
    onSuccess: () => {
      toast({
        title: "Registration Interest Recorded",
        description: "Thank you for your interest. We'll contact you with payment details.",
      });
    },
    onError: (error) => {
      toast({
        title: "Registration Failed",
        description: error.message || "There was an error processing your registration. Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleRegister = (tierId: string) => {
    registration.mutate(tierId);
  };

  return (
    <section id="register" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">Register Now</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-neutral-200">
            Secure your place at Zimbabwe's premier engineering conference
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.id}
              className={`
                bg-white text-primary rounded-lg overflow-hidden shadow-lg 
                ${tier.highlighted ? 'shadow-xl transform scale-105 z-10' : 'hover:shadow-xl transition-all'}
              `}
            >
              <div className={`${tier.highlighted ? 'bg-primary text-white' : 'bg-secondary'} py-4 text-center`}>
                <h3 className={`text-xl font-heading font-bold ${tier.highlighted ? 'text-white' : ''}`}>
                  {tier.name}
                </h3>
              </div>
              <div className="p-8 text-center">
                <div className="text-4xl font-bold mb-4">{tier.price}</div>
                <p className="text-neutral-600 mb-6">{tier.deadline}</p>
                <ul className="text-left mb-8 space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.included ? (
                        <>
                          <Check className="h-5 w-5 text-secondary mr-2" />
                          <span>{feature.name}</span>
                        </>
                      ) : (
                        <>
                          <X className="h-5 w-5 mr-2 text-neutral-400" />
                          <span className="opacity-50">{feature.name}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => handleRegister(tier.id)}
                  disabled={registration.isPending}
                  className={`
                    inline-block w-full px-6 py-3 font-bold rounded-full hover:bg-opacity-90 transition-all
                    ${tier.highlighted 
                      ? 'bg-secondary text-primary' 
                      : 'bg-accent text-white'}
                  `}
                >
                  {registration.isPending ? "Processing..." : "Register Now"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
