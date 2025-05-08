
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission here
    console.log('Form submitted');
    // You could add toast notification here
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-white to-clinic-50"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-clinic-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 md:text-4xl">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about ClinicFlow? Our team is here to help you find the perfect 
            solution for your clinic's needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact information */}
          <div className="space-y-8">
            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <div className="flex">
                <div className="mr-4 bg-clinic-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-clinic-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (800) 123-4567</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <div className="flex">
                <div className="mr-4 bg-clinic-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-clinic-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">support@clinicflow.com</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <div className="flex">
                <div className="mr-4 bg-clinic-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-clinic-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Location</h3>
                  <p className="text-gray-600">123 Medical Plaza, Suite 500<br />San Francisco, CA 94107</p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact form */}
          <div className="md:col-span-2">
            <Card className="p-8 border-0 shadow-lg bg-white animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-clinic-100 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-clinic-600" />
                </div>
                <h3 className="text-xl font-semibold">Send us a message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="border-gray-200 focus:border-clinic-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="border-gray-200 focus:border-clinic-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="border-gray-200 focus:border-clinic-500"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Write your message here..." 
                    className="min-h-[120px] border-gray-200 focus:border-clinic-500"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-clinic-600 hover:bg-clinic-700 transition-colors"
                >
                  Send Message
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  We'll get back to you within 24-48 business hours.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
