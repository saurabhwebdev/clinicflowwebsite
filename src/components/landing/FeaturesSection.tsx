
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Users, 
  FileText, 
  BarChart2, 
  CreditCard, 
  Mail, 
  Pill,
  Clock,
  Database
} from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-clinic-500" />,
    title: 'Intelligent Scheduling',
    description: 'Optimize your clinic\'s workflow with smart appointment scheduling and automated reminders to reduce no-shows by up to 40%.'
  },
  {
    icon: <Users className="h-10 w-10 text-teal-500" />,
    title: 'Patient Management',
    description: 'Efficiently manage patient data, track visits, and maintain detailed profiles with custom fields for your specialty.'
  },
  {
    icon: <FileText className="h-10 w-10 text-clinic-500" />,
    title: 'Medical Records',
    description: 'Securely store and access complete patient histories, medications, allergies, and test results from anywhere.'
  },
  {
    icon: <Pill className="h-10 w-10 text-teal-500" />,
    title: 'Prescription Management',
    description: 'Create, manage, and track prescriptions digitally with drug interaction alerts and refill management tools.'
  },
  {
    icon: <CreditCard className="h-10 w-10 text-clinic-500" />,
    title: 'Simplified Billing',
    description: 'Generate invoices, process payments, and handle insurance claims all from one integrated system.'
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-teal-500" />,
    title: 'Comprehensive Reports',
    description: 'Get valuable insights into your practice with customizable dashboards and detailed analytics on patient flow and revenue.'
  },
  {
    icon: <Mail className="h-10 w-10 text-clinic-500" />,
    title: 'Gmail Integration',
    description: 'Send automated appointment reminders, follow-ups, and important patient communications directly through Gmail.'
  },
  {
    icon: <Database className="h-10 w-10 text-teal-500" />,
    title: 'Cloud Storage',
    description: 'Access your data securely from anywhere with cloud storage that keeps your patient information protected and compliant.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Clinic Management <span className="text-gradient">in One Solution</span>
          </h2>
          <p className="text-gray-600 text-lg">
            ClinicFlow combines all the essential tools small clinics need, eliminating overhead and streamlining your day-to-day operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-clinic-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="mb-4 p-2 rounded-full bg-gray-50 inline-block group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
