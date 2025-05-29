
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function AdminConfirmation() {
  const { toast } = useToast();
  const [ticketNumber, setTicketNumber] = useState("");
  const [email, setEmail] = useState("");

  const confirmPayment = useMutation({
    mutationFn: async (data: { ticketNumber: string; email: string }) => {
      return await apiRequest('POST', '/api/confirm-payment', data);
    },
    onSuccess: () => {
      toast({
        title: "Payment Confirmed",
        description: "Ticket has been issued and confirmation email sent to attendee.",
      });
      setTicketNumber("");
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to confirm payment",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confirmPayment.mutate({ ticketNumber, email });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Payment Confirmation</CardTitle>
            <p className="text-center text-gray-600">
              Confirm payment received to issue final ticket
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="ticketNumber">Ticket Number</Label>
                <Input
                  id="ticketNumber"
                  value={ticketNumber}
                  onChange={(e) => setTicketNumber(e.target.value)}
                  placeholder="ZIE-2025-XXXXX"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Attendee Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="attendee@example.com"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={confirmPayment.isPending}
              >
                {confirmPayment.isPending ? "Processing..." : "Confirm Payment & Issue Ticket"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
