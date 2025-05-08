
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, BadgeCheck, Award } from 'lucide-react';

// We'll have a single plan with tiered options based on clinic size
const tiers = [
  {
    name: 'Single Doctor',
    users: '1 provider',
    recommended: false
  },
  {
    name: 'Small Clinic',
    users: '2-5 providers',
    recommended: true
  },
  {
    name: 'Multi-Specialty',
    users: '6-15 providers',
    recommended: false
  }
];

const features = [
  'Complete patient management',
  'Electronic medical records',
  'Appointment scheduling',
  'Prescription management',
  'Billing & invoicing',
  'Gmail integration for reminders',
  'Comprehensive reports & analytics',
  'Multi-device access',
  'HIPAA-compliant data storage',
  '1 year AMC included',
  'Free implementation support',
];

const PricingSection = () => {
  const [country, setCountry] = useState('US');
  const [basePrice, setBasePrice] = useState(1499);
  const [currency, setCurrency] = useState('$');
  const [currencyPosition, setCurrencyPosition] = useState('before');
  
  useEffect(() => {
    // Detect user's country using the Geolocation API or IP lookup
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setCountry(data.country_code);
        
        // Set currency and price based on country
        switch(data.country_code) {
          case 'IN':
            setCurrency('₹');
            setBasePrice(49999);
            break;
          case 'GB':
            setCurrency('£');
            setBasePrice(1299);
            break;
          case 'EU': // European countries
            setCurrency('€');
            setBasePrice(1399);
            break;
          case 'AU':
            setCurrency('$');
            setCurrencyPosition('before');
            setBasePrice(1899);
            break;
          case 'CA':
            setCurrency('$');
            setCurrencyPosition('before');
            setBasePrice(1799);
            break;
          default:
            setCurrency('$');
            setCurrencyPosition('before');
            setBasePrice(1499);
        }
      } catch (error) {
        console.error('Error detecting country:', error);
        // Default to US pricing if detection fails
        setCountry('US');
        setCurrency('$');
        setBasePrice(1499);
      }
    };
    
    detectCountry();
  }, []);
  
  const formatPrice = (price: number, tierMultiplier = 1) => {
    const finalPrice = Math.round(price * tierMultiplier);
    if (currencyPosition === 'before') {
      return `${currency}${finalPrice.toLocaleString()}`;
    } else {
      return `${finalPrice.toLocaleString()} ${currency}`;
    }
  };

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple <span className="text-gradient">One-Time Payment</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Invest once, benefit forever. Our software includes 1 year free AMC with all the features your clinic needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl md:text-3xl flex items-center justify-center gap-2">
                <Award className="h-7 w-7 text-clinic-600" />
                <span>ClinicFlow Complete Solution</span>
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Everything you need to run your clinic efficiently
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {tiers.map((tier, index) => {
                  const tierMultiplier = index === 0 ? 1 : index === 1 ? 1.7 : 2.5;
                  return (
                    <div 
                      key={index} 
                      className={`flex flex-col p-6 rounded-lg border-2 transition-all ${
                        tier.recommended 
                          ? 'border-clinic-500 shadow-md relative bg-gradient-to-b from-clinic-50 to-white' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {tier.recommended && (
                        <div className="absolute top-0 right-0 -mt-2 -mr-2">
                          <div className="bg-clinic-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                            MOST POPULAR
                          </div>
                        </div>
                      )}
                      <div className="text-xl font-semibold mb-2">{tier.name}</div>
                      <div className="text-sm text-gray-500 mb-4">{tier.users}</div>
                      <div className="text-3xl md:text-4xl font-bold mb-2">
                        {formatPrice(basePrice, tierMultiplier)}
                      </div>
                      <div className="text-sm text-gray-500 mb-5">One-time payment</div>
                      <Button 
                        className={`mt-auto ${tier.recommended ? 'bg-clinic-600 hover:bg-clinic-700' : 'bg-gray-800 hover:bg-gray-900'}`}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Request Demo
                      </Button>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-10 border-t pt-8">
                <div className="text-xl font-semibold mb-6 text-center">All plans include:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <BadgeCheck className="h-5 w-5 text-clinic-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="bg-gray-50 p-6 flex flex-col items-center">
              <div className="text-center mb-4">
                <p className="font-medium">After first year, Annual Maintenance Contract (AMC):</p>
                <p className="text-gray-600">20% of purchase price for updates, support & security</p>
              </div>
              <Button 
                size="lg"
                className="bg-clinic-600 hover:bg-clinic-700"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Demo
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-500">
            Pricing is tailored for your region. Implementation and training included in one-time fee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
