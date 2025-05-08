
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp, ShieldCheck, Award, Clock } from 'lucide-react';

const CTASection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-clinic-50 to-gray-50"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-clinic-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-teal-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-clinic-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-100 rounded-full opacity-50"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Focus on patients, not paperwork
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of small clinics who have simplified their practice management and reduced administrative overhead by up to 47% with ClinicFlow.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                <ShieldCheck className="h-10 w-10 text-clinic-500 mb-2" />
                <h3 className="font-medium">HIPAA Compliant</h3>
                <p className="text-sm text-gray-500">Secure patient data storage</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                <Award className="h-10 w-10 text-clinic-500 mb-2" />
                <h3 className="font-medium">Lifetime License</h3>
                <p className="text-sm text-gray-500">One-time payment</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                <Clock className="h-10 w-10 text-clinic-500 mb-2" />
                <h3 className="font-medium">Save Time</h3>
                <p className="text-sm text-gray-500">Automate repetitive tasks</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-clinic-600 hover:bg-clinic-700"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request a Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Sales
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              Comprehensive implementation support included with purchase
            </div>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full opacity-70 hover:opacity-100 transition-opacity"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
