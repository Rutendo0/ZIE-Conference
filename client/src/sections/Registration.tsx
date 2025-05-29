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
    price: "$200",
    deadline: "Available until October 15, 2025",
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
    price: "$500",
    deadline: "Available until October 30, 2025",
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
    price: "$700",
    deadline: "Available until November 10, 2025",
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
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [ticketData, setTicketData] = useState<TicketData | null>(null);

  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    jobTitle: "",
    pricingTier: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const registration = useMutation({
    mutationFn: async (data: RegistrationFormData) => {
      return await apiRequest('POST', '/api/register', data);
    },
    onSuccess: (response: any) => {
      toast({
        title: "Registration Successful",
        description: "Your conference ticket has been issued!",
      });
      // Store the ticket information
      if (response && response.registration) {
        setTicketData(response.registration);
        setShowRegistrationForm(false);
        setShowTicket(true);
      }
    },
    onError: (error) => {
      toast({
        title: "Registration Failed",
        description: error.message || "There was an error processing your registration. Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    setFormData(prev => ({
      ...prev,
      pricingTier: tierId
    }));
    setShowRegistrationForm(true);
  };

  const [showPaymentContact, setShowPaymentContact] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPaymentContact(true);
  };

  const handlePaymentConfirmation = () => {
    registration.mutate(formData);
    setShowPaymentContact(false);
  };

  const handleCloseTicket = () => {
    setShowTicket(false);
    setSelectedTier(null);
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
                  onClick={() => handleTierSelect(tier.id)}
                  disabled={registration.isPending}
                  className={`
                    inline-block w-full px-6 py-3 font-bold rounded-full hover:bg-opacity-90 transition-all
                    ${tier.highlighted 
                      ? 'bg-secondary text-primary' 
                      : 'bg-accent text-white'}
                  `}
                >
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Registration Form Dialog */}
        <Dialog open={showRegistrationForm} onOpenChange={setShowRegistrationForm}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold">Complete Registration</DialogTitle>
              <DialogDescription className="text-center">
                Please provide your information to complete your registration and receive your ticket.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Your organization"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Your job title"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={registration.isPending}
                  className="px-6 py-2 bg-primary text-white hover:bg-opacity-90"
                >
                  {registration.isPending ? "Processing..." : "Complete Registration"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Ticket Display Dialog */}
        <Dialog open={showTicket} onOpenChange={setShowTicket}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold">Your Conference Ticket</DialogTitle>
            </DialogHeader>

            {ticketData && (
              <div>
                <Card className="border-2 border-primary overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-primary text-white px-4 py-2 flex justify-between items-center">
                      <h3 className="font-bold text-lg">ZIE Conference 2025</h3>
                      <Ticket className="h-5 w-5" />
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="text-center">
                        <div className="bg-secondary/20 py-3 rounded-md font-mono tracking-wide font-bold">
                          {ticketData.ticketNumber}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Attendee</p>
                          <p className="font-bold">{ticketData.name}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p>{ticketData.email}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Ticket Type</p>
                          <p>{pricingTiers.find(tier => tier.id === ticketData.pricingTier)?.name || ticketData.pricingTier}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Event Date</p>
                          <p>November 25-28, 2025</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Venue</p>
                          <p>Elephant Hills Resort and Conference Centre</p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4 text-sm text-gray-500">
                        <p>Please bring this ticket (printed or digital) to the conference for check-in.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center mt-4">
                  <Button 
                    onClick={handleCloseTicket}
                    className="px-6 py-2 bg-primary text-white hover:bg-opacity-90"
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Payment Contact Dialog */}
        <Dialog open={showPaymentContact} onOpenChange={setShowPaymentContact}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold">Payment Information</DialogTitle>
              <DialogDescription className="text-center">
                Your registration has been submitted. Please contact Doreen for payment:
              </DialogDescription>
            </DialogHeader>

            <div className="py-6">
              <div className="space-y-4 text-center">
                <p>Registration details have been sent to:</p>
                <p className="font-bold">Doreen</p>
                <p>Phone: +263 77 433 3937</p>
                <p>Email: doreen@zie.co.zw</p>
                <p className="mt-4 text-sm text-gray-600">
                  Doreen will contact you directly to finalize payment arrangements. After your payment is confirmed, you will receive an email with your ticket.
                </p>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <Button onClick={() => setShowPaymentContact(false)} variant="outline">
                  Cancel
                </Button>
                <Button 
                  onClick={handlePaymentConfirmation}
                  className="px-6 py-2 bg-primary text-white hover:bg-opacity-90"
                >
                  Confirm Registration
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}