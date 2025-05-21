import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";

export default function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const subscriptionMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest('POST', '/api/subscribe', { email });
    },
    onSuccess: () => {
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Subscription Failed",
        description: error.message || "There was an error subscribing. Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscriptionMutation.mutate(email);
    }
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-heading font-bold mb-2">Subscribe for Updates</h3>
              <p className="text-neutral-200">Stay informed about conference news and important dates</p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-full text-neutral-800 focus:outline-none min-w-[280px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="px-6 py-3 bg-secondary text-primary font-bold rounded-full hover:bg-opacity-90 transition-all"
                  disabled={subscriptionMutation.isPending}
                >
                  {subscriptionMutation.isPending ? "Processing..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
