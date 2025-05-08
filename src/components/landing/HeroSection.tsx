
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-clinic-50 py-20 md:py-28">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-clinic-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <div className="flex-1 space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                Run Your Clinic, <span className="text-gradient">Not Your Software</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                ClinicFlow helps small healthcare practices manage appointments, patient records, prescriptions, and billing in one affordable, easy-to-use platform.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-clinic-600 hover:bg-clinic-700" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request a Demo
              </Button>
              <Button size="lg" variant="outline" className="group" onClick={() => window.open('https://clinicsoftware.vercel.app/', '_blank')}>
                View Dashboard <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="flex items-center flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-clinic-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                HIPAA Compliant
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-clinic-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                One-Time Payment
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-clinic-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                24/7 Support
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-clinic-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                Free Implementation
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative max-w-lg w-full">
            <div className="relative z-10 rounded-xl shadow-2xl overflow-hidden animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white p-2 rounded-xl overflow-hidden">
                <div className="bg-clinic-50 rounded-lg p-1">
                  <div className="bg-white rounded-md overflow-hidden">
                    <div className="h-8 bg-clinic-600 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-white text-xs ml-4">Dashboard</div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-6">
                        <div className="font-medium">Today's Schedule</div>
                        <div className="text-xs bg-clinic-100 text-clinic-800 py-1 px-2 rounded">8 Appointments</div>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-20 bg-clinic-100 rounded-md p-2">
                            <div className="text-xs font-semibold mb-1">Patients</div>
                            <div className="text-lg font-bold">28</div>
                            <div className="text-xs text-green-600">+3 new</div>
                          </div>
                          <div className="h-20 bg-teal-100 rounded-md p-2">
                            <div className="text-xs font-semibold mb-1">Revenue</div>
                            <div className="text-lg font-bold">$1,240</div>
                            <div className="text-xs text-green-600">+12%</div>
                          </div>
                          <div className="h-20 bg-blue-100 rounded-md p-2">
                            <div className="text-xs font-semibold mb-1">Reports</div>
                            <div className="text-lg font-bold">6</div>
                            <div className="text-xs text-blue-600">pending</div>
                          </div>
                        </div>
                        <div className="h-32 bg-gray-50 rounded-md w-full p-3">
                          <div className="text-xs font-semibold mb-2">Upcoming Appointments</div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-xs p-1 border-b">
                              <span>John D.</span>
                              <span className="text-gray-500">9:30 AM</span>
                              <span className="bg-green-100 text-green-800 px-1 rounded">Check-up</span>
                            </div>
                            <div className="flex justify-between items-center text-xs p-1 border-b">
                              <span>Mary S.</span>
                              <span className="text-gray-500">10:15 AM</span>
                              <span className="bg-blue-100 text-blue-800 px-1 rounded">Follow-up</span>
                            </div>
                            <div className="flex justify-between items-center text-xs p-1">
                              <span>Robert J.</span>
                              <span className="text-gray-500">11:00 AM</span>
                              <span className="bg-purple-100 text-purple-800 px-1 rounded">Consultation</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-12 w-24 h-24 bg-teal-200 rounded-full opacity-80 animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-clinic-200 rounded-full opacity-80 animate-bounce-subtle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
