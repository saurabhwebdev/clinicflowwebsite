import React from 'react';
import { Card } from "@/components/ui/card";
import Footer from '@/components/landing/Footer';
import SmoothScrollNav from '@/components/landing/SmoothScrollNav';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    // Update title
    document.title = "About ClinicFlow | Modern Clinic Management Software";
  }, []);

  const handleContactClick = () => {
    navigate('/', { state: { scrollToSection: 'contact' } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SmoothScrollNav />
      <main className="flex-grow pt-16">
        {/* Hero section */}
        <section className="py-20 bg-gradient-to-br from-white to-clinic-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-clinic-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">ClinicFlow</span>
              </h1>
              <p className="text-xl text-gray-600">
                Revolutionizing healthcare management for small and medium practices.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2023, ClinicFlow was born from a simple observation: small healthcare practices 
                  spend too much time managing software and administrative tasks, and not enough time with patients.
                </p>
                
                <p className="text-lg text-gray-700">
                  Our founding team, with over 30 years of combined experience in healthcare technology, 
                  set out to create a solution that would address the unique challenges faced by small clinics.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-clinic-100 flex items-center justify-center mr-3">
                    <span className="text-clinic-600 font-bold">1</span>
                  </div>
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700">
                  Our mission is to empower healthcare providers with technology that works for them, not against them. 
                  We believe that affordable, intuitive software can transform the way small practices operate, 
                  leading to better patient care and more sustainable businesses.
                </p>
              </div>

              <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-clinic-100 flex items-center justify-center mr-3">
                    <span className="text-clinic-600 font-bold">2</span>
                  </div>
                  What Sets Us Apart
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all p-6 bg-white hover:translate-y-[-5px]">
                    <h3 className="text-xl font-semibold mb-3 text-clinic-700">Built for Small Practices</h3>
                    <p className="text-gray-600">
                      Unlike enterprise solutions, ClinicFlow is specifically designed for the workflows and budgets of small healthcare providers.
                    </p>
                  </Card>
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all p-6 bg-white hover:translate-y-[-5px]">
                    <h3 className="text-xl font-semibold mb-3 text-clinic-700">One-Time Payment</h3>
                    <p className="text-gray-600">
                      We've eliminated the burden of expensive monthly subscriptions, making advanced clinic management affordable for everyone.
                    </p>
                  </Card>
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all p-6 bg-white hover:translate-y-[-5px]">
                    <h3 className="text-xl font-semibold mb-3 text-clinic-700">Comprehensive Solution</h3>
                    <p className="text-gray-600">
                      From scheduling to billing, ClinicFlow offers all essential features in one integrated platform without unnecessary complexity.
                    </p>
                  </Card>
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all p-6 bg-white hover:translate-y-[-5px]">
                    <h3 className="text-xl font-semibold mb-3 text-clinic-700">Personalized Support</h3>
                    <p className="text-gray-600">
                      Our dedicated team provides hands-on implementation and ongoing support tailored to your practice's specific needs.
                    </p>
                  </Card>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-clinic-100 flex items-center justify-center mr-3">
                    <span className="text-clinic-600 font-bold">3</span>
                  </div>
                  Our Values
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-clinic-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="h-2 w-2 bg-clinic-600 rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Simplicity</span>
                      <span className="text-gray-700"> - Complex technology should feel simple to use.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-clinic-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="h-2 w-2 bg-clinic-600 rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Reliability</span>
                      <span className="text-gray-700"> - Healthcare professionals need tools they can count on every day.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-clinic-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="h-2 w-2 bg-clinic-600 rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Affordability</span>
                      <span className="text-gray-700"> - Great software shouldn't break the bank.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-clinic-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="h-2 w-2 bg-clinic-600 rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Empathy</span>
                      <span className="text-gray-700"> - We design with deep understanding of healthcare providers' needs.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-clinic-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="h-2 w-2 bg-clinic-600 rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Continuous Improvement</span>
                      <span className="text-gray-700"> - We're always evolving our solution based on user feedback.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-clinic-100 flex items-center justify-center mr-3">
                    <span className="text-clinic-600 font-bold">4</span>
                  </div>
                  Our Team
                </h2>
                <p className="text-lg text-gray-700">
                  ClinicFlow brings together experts in healthcare, technology, and customer service. 
                  Our diverse team is unified by a passion for creating solutions that make a real difference 
                  in the day-to-day operations of healthcare practices.
                </p>
              </div>

              <div className="text-center my-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Button 
                  size="lg"
                  className="bg-clinic-600 hover:bg-clinic-700 shadow-md hover:shadow-lg transition-all px-8 py-6 h-auto"
                  onClick={handleContactClick}
                >
                  Get in Touch With Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;