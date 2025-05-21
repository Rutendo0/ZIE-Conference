import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Message Failed",
        description: error.message || "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Have questions about the conference? Get in touch with our team
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form 
              className="bg-white p-8 rounded-lg shadow-lg"
              onSubmit={handleSubmit}
            >
              <div className="mb-6">
                <Label htmlFor="name" className="block text-neutral-700 font-bold mb-2">Your Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="email" className="block text-neutral-700 font-bold mb-2">Email Address</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="subject" className="block text-neutral-700 font-bold mb-2">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="message" className="block text-neutral-700 font-bold mb-2">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-opacity-90 transition-all"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">Conference Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-secondary text-2xl mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-1">Email</h4>
                    <p className="text-neutral-600">conference2025@zie.co.zw</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary text-2xl mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-1">Phone</h4>
                    <p className="text-neutral-600">+263 242 774 561</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary text-2xl mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-1">ZIE Office</h4>
                    <p className="text-neutral-600">
                      Zimbabwe Institution of Engineers<br />
                      Batanai Gardens, Block 4<br />
                      Harare, Zimbabwe
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary text-2xl mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-1">Office Hours</h4>
                    <p className="text-neutral-600">Monday - Friday: 8:00 AM - 4:30 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-heading font-bold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
