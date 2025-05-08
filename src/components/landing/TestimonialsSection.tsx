import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    content: "ClinicFlow has transformed our small practice. The patient management system helps us keep track of everything from visit history to payment records. The automated Gmail reminders have reduced no-shows by 40%!",
    author: "Dr. Sarah Johnson",
    position: "Family Physician, Johnson Family Practice"
  },
  {
    id: 2,
    content: "The prescription management module is a game-changer. I can track medications, check for interactions, and send prescriptions directly to pharmacies. My staff spends less time on paperwork and more time with patients.",
    author: "Dr. Michael Chen",
    position: "Pediatrician, Little Stars Clinic"
  },
  {
    id: 3,
    content: "The billing integration saved my small clinic thousands in accounting costs. We generate invoices, process insurance claims, and track payments all in one place. The reports give us clear insights into our financial health.",
    author: "Jennifer Martinez",
    position: "Office Manager, Wellness Medical Associates"
  },
  {
    id: 4,
    content: "Setting up ClinicFlow took literally 15 minutes and the data migration was handled entirely by their team. Now our medical records are digital, searchable, and always available. Perfect for our rural clinic.",
    author: "Dr. David Wilson",
    position: "General Practitioner, Community Health Clinic"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="text-gradient">Small Clinics</span>
          </h2>
          <p className="text-gray-600 text-lg">
            See how ClinicFlow has helped independent healthcare providers streamline their operations and focus on patient care.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="pt-6 px-6 pb-8">
                      <div className="mb-8">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className="inline-block h-5 w-5 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      <blockquote className="text-xl mb-6 italic text-gray-700">"{testimonial.content}"</blockquote>
                      
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-clinic-400 to-teal-400 flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4">
                          <p className="font-medium text-gray-900">{testimonial.author}</p>
                          <p className="text-gray-600 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 mx-1 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-clinic-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
