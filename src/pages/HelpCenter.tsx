import React, { useState } from 'react';
import Footer from '@/components/landing/Footer';
import SmoothScrollNav from '@/components/landing/SmoothScrollNav';
import { Link } from 'react-router-dom';
import FeatureModal from '@/components/help-center/FeatureModal';

const HelpCenter = () => {
  React.useEffect(() => {
    // Update title
    document.title = "Help Center | ClinicFlow";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // State for feature modals
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Function to open a specific modal
  const openModal = (modalId: string) => {
    setActiveModal(modalId);
  };
  
  // Function to close the active modal
  const closeModal = () => {
    setActiveModal(null);
  };

  // Feature modal content
  const featureModals = {
    scheduling: {
      title: "Appointment Scheduling",
      iconBgClass: "bg-clinic-100",
      iconColorClass: "text-clinic-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      content: (
        <>
          <p>
            Our appointment scheduling system is designed to simplify the most complex scheduling needs of healthcare practices. With an intuitive interface and powerful features, you can streamline your entire scheduling workflow.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Key Features</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Flexible Calendar Views</strong> - Easily switch between daily, weekly, and monthly views to get the perspective you need.</li>
            <li><strong>Color-Coded Appointments</strong> - Visually distinguish between different appointment types, providers, or statuses.</li>
            <li><strong>Recurring Appointments</strong> - Set up repeating appointments with custom patterns for ongoing treatments or follow-ups.</li>
            <li><strong>Wait List Management</strong> - Track patients waiting for earlier appointments and automatically notify them of openings.</li>
            <li><strong>Multi-Provider Scheduling</strong> - Coordinate appointments across multiple providers while respecting their individual availability.</li>
            <li><strong>Room Assignment</strong> - Assign specific rooms to appointments to prevent double-booking resources.</li>
          </ul>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Automated Reminders</h3>
          <p>
            Reduce no-shows by up to 70% with automated appointment reminders. The system sends customizable notifications via email or SMS at scheduled intervals before appointments.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Online Self-Scheduling</h3>
          <p>
            Allow patients to book their own appointments through your patient portal. You maintain control by setting rules for which appointment types can be self-scheduled and when they're available.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Integration with Other Modules</h3>
          <p>
            The scheduling system integrates seamlessly with patient records, billing, and other ClinicFlow modules to create a cohesive workflow for your practice.
          </p>
        </>
      )
    },
    records: {
      title: "Patient Records Management",
      iconBgClass: "bg-teal-100",
      iconColorClass: "text-teal-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      content: (
        <>
          <p>
            Our Patient Records Management system provides a comprehensive electronic health record (EHR) solution that helps you maintain accurate, up-to-date, and secure patient information while enhancing clinical workflows.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Comprehensive Patient Profiles</h3>
          <p>
            Store all essential patient information in one secure location, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Demographics and contact information</li>
            <li>Medical history, allergies, and medications</li>
            <li>Lab results and diagnostic imaging</li>
            <li>Treatment plans and progress notes</li>
            <li>Insurance and billing information</li>
          </ul>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Customizable Templates</h3>
          <p>
            Create specialty-specific templates for common procedures, assessments, and documentation to save time and ensure consistency. Templates can be customized to match your workflow and documentation preferences.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Secure Document Management</h3>
          <p>
            Easily upload, organize, and retrieve documents such as referrals, lab reports, and imaging results. All documents are securely stored with appropriate access controls.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Medical Charting</h3>
          <p>
            Document patient encounters with structured notes, custom forms, and drawing tools. The system supports SOAP notes, progress notes, and other documentation formats.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">E-Prescribing</h3>
          <p>
            Electronically prescribe medications with built-in drug interaction checks, allergy alerts, and formulary verification. Send prescriptions directly to the patient's preferred pharmacy.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">HIPAA Compliance</h3>
          <p>
            Our system is fully HIPAA compliant with robust security features including role-based access controls, audit trails, and data encryption to protect sensitive patient information.
          </p>
        </>
      )
    },
    billing: {
      title: "Billing & Insurance",
      iconBgClass: "bg-blue-100",
      iconColorClass: "text-blue-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      content: (
        <>
          <p>
            Our Billing & Insurance module streamlines the entire revenue cycle management process, from insurance verification to payment processing, helping you maximize reimbursements and minimize denied claims.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Insurance Verification</h3>
          <p>
            Verify patient insurance eligibility and benefits in real-time before appointments. The system automatically checks coverage information, co-pays, deductibles, and authorization requirements.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Medical Coding Assistance</h3>
          <p>
            Built-in coding tools help ensure accurate coding for diagnoses and procedures. The system includes ICD-10, CPT, and HCPCS code libraries with search functionality and frequently used code lists.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Claim Submission and Tracking</h3>
          <p>
            Electronically submit claims to insurance payers with pre-submission validation to catch potential errors. Track claim status in real-time and receive alerts for denied or pending claims.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Payment Processing</h3>
          <p>
            Process various payment types including credit/debit cards, checks, and electronic transfers. Set up automated payment plans for patients with outstanding balances.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Reporting and Analytics</h3>
          <p>
            Generate comprehensive financial reports including accounts receivable, collections, and payer performance. Analyze revenue trends and identify opportunities to improve financial performance.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Patient Statements</h3>
          <p>
            Generate and send customized patient statements electronically or via mail. Set up automated statement cycles and payment reminders to improve collection rates.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Integration with Clearinghouses</h3>
          <p>
            Seamless integration with major clearinghouses for electronic claim submission, status inquiries, and ERA/EOB processing.
          </p>
        </>
      )
    },
    notifications: {
      title: "Reminders & Notifications",
      iconBgClass: "bg-purple-100",
      iconColorClass: "text-purple-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      content: (
        <>
          <p>
            Our Reminders & Notifications system helps you stay connected with patients, reduce no-shows, and improve adherence to treatment plans through automated, customizable communications.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Appointment Reminders</h3>
          <p>
            Send automated appointment reminders via the patient's preferred communication channel (email, SMS, or voice call). Customize the timing and content of reminders based on appointment type, provider, or other criteria.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Two-Way Communication</h3>
          <p>
            Allow patients to confirm, reschedule, or cancel appointments by responding directly to reminder messages. The system automatically updates the schedule and notifies staff of changes.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Follow-Up Notifications</h3>
          <p>
            Automate post-visit follow-ups to check on patient progress, remind them of future appointments, or gather feedback on their experience.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Medication Reminders</h3>
          <p>
            Help patients stay adherent to medication schedules with personalized reminders. Set up recurring notifications based on medication frequency and duration.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Health Maintenance Alerts</h3>
          <p>
            Proactively notify patients when they're due for preventive screenings, vaccinations, or routine check-ups based on their age, medical history, and risk factors.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Practice Announcements</h3>
          <p>
            Easily send mass communications to inform patients about practice news, holiday hours, new services, or health information. Target messages to specific patient groups as needed.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Customization Options</h3>
          <p>
            Create message templates with personalization tokens that automatically insert patient-specific information. Schedule notifications to be sent at optimal times for patient engagement.
          </p>
        </>
      )
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SmoothScrollNav />
      <main className="flex-grow pt-16">
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
                Help <span className="text-gradient">Center</span>
              </h1>
              <p className="text-xl text-gray-600">
                Resources, guides, and support to help you get the most out of ClinicFlow
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Quick Help Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-clinic-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-clinic-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 text-gray-900">FAQs</h3>
                  <p className="text-gray-600 text-center">
                    Find answers to the most common questions about using ClinicFlow.
                  </p>
                  <div className="mt-6 text-center">
                    <a href="#faqs" className="text-clinic-600 hover:text-clinic-700 font-medium transition-colors">
                      View FAQs →
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 text-gray-900">User Guides</h3>
                  <p className="text-gray-600 text-center">
                    Step-by-step guides to help you master ClinicFlow features.
                  </p>
                  <div className="mt-6 text-center">
                    <a href="#guides" className="text-teal-600 hover:text-teal-700 font-medium transition-colors">
                      View Guides →
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 text-gray-900">Contact Support</h3>
                  <p className="text-gray-600 text-center">
                    Need personalized help? Our support team is ready to assist you.
                  </p>
                  <div className="mt-6 text-center">
                    <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      Contact Us →
                    </a>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-16 animate-fade-in-up" id="features">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">ClinicFlow Features</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-clinic-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-clinic-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Appointment Scheduling</h3>
                      <p className="text-gray-700">
                        Our intuitive calendar interface makes it easy to schedule, reschedule, and manage patient appointments. Set up recurring appointments, create waitlists, and send automated reminders.
                      </p>
                      <button 
                        onClick={() => openModal('scheduling')} 
                        className="text-clinic-600 hover:text-clinic-700 font-medium mt-2 inline-block"
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Patient Records Management</h3>
                      <p className="text-gray-700">
                        Securely store and access patient information, medical history, treatment plans, and prescription details. Custom templates help streamline documentation while maintaining HIPAA compliance.
                      </p>
                      <button 
                        onClick={() => openModal('records')} 
                        className="text-teal-600 hover:text-teal-700 font-medium mt-2 inline-block"
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Billing & Insurance</h3>
                      <p className="text-gray-700">
                        Generate invoices, process payments, and handle insurance claims seamlessly. Track outstanding balances, payment histories, and automate payment reminders.
                      </p>
                      <button 
                        onClick={() => openModal('billing')} 
                        className="text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block"
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Reminders & Notifications</h3>
                      <p className="text-gray-700">
                        Reduce no-shows with automated appointment reminders via email or SMS. Send follow-up messages, medication reminders, and important announcements to patients.
                      </p>
                      <button 
                        onClick={() => openModal('notifications')} 
                        className="text-purple-600 hover:text-purple-700 font-medium mt-2 inline-block"
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Modals */}
              {activeModal === 'scheduling' && (
                <FeatureModal
                  isOpen={activeModal === 'scheduling'}
                  onClose={closeModal}
                  title={featureModals.scheduling.title}
                  icon={featureModals.scheduling.icon}
                  content={featureModals.scheduling.content}
                  iconBgClass={featureModals.scheduling.iconBgClass}
                  iconColorClass={featureModals.scheduling.iconColorClass}
                />
              )}
              
              {activeModal === 'records' && (
                <FeatureModal
                  isOpen={activeModal === 'records'}
                  onClose={closeModal}
                  title={featureModals.records.title}
                  icon={featureModals.records.icon}
                  content={featureModals.records.content}
                  iconBgClass={featureModals.records.iconBgClass}
                  iconColorClass={featureModals.records.iconColorClass}
                />
              )}
              
              {activeModal === 'billing' && (
                <FeatureModal
                  isOpen={activeModal === 'billing'}
                  onClose={closeModal}
                  title={featureModals.billing.title}
                  icon={featureModals.billing.icon}
                  content={featureModals.billing.content}
                  iconBgClass={featureModals.billing.iconBgClass}
                  iconColorClass={featureModals.billing.iconColorClass}
                />
              )}
              
              {activeModal === 'notifications' && (
                <FeatureModal
                  isOpen={activeModal === 'notifications'}
                  onClose={closeModal}
                  title={featureModals.notifications.title}
                  icon={featureModals.notifications.icon}
                  content={featureModals.notifications.content}
                  iconBgClass={featureModals.notifications.iconBgClass}
                  iconColorClass={featureModals.notifications.iconColorClass}
                />
              )}

              {/* FAQs Section */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-16 animate-fade-in-up" id="faqs">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">How do I get started with ClinicFlow?</h3>
                    <p className="text-gray-700">
                      Getting started is easy! After signing up for an account, you'll be guided through a simple setup process. You can import your existing patient data, configure your practice settings, and customize the system to meet your specific needs. Our onboarding team is available to assist with the setup process.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Is ClinicFlow HIPAA compliant?</h3>
                    <p className="text-gray-700">
                      Yes, ClinicFlow is fully HIPAA compliant. We implement robust security measures including encryption, access controls, regular security audits, and data backups. We provide Business Associate Agreements (BAAs) to covered entities as required by HIPAA regulations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Can I customize ClinicFlow for my specialty?</h3>
                    <p className="text-gray-700">
                      Absolutely! ClinicFlow is designed to be highly adaptable to various medical specialties. You can customize form templates, intake questionnaires, treatment plans, and documentation workflows to match your specific practice requirements.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">How does the patient portal work?</h3>
                    <p className="text-gray-700">
                      The patient portal provides a secure platform where patients can access their health information, schedule appointments, complete intake forms, view lab results, communicate with providers, and make payments. Patients receive a secure login that gives them 24/7 access to their health information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Can I integrate ClinicFlow with other systems?</h3>
                    <p className="text-gray-700">
                      Yes, ClinicFlow supports integration with various third-party systems including laboratory services, imaging centers, pharmacies, accounting software, and payment processors. Our API allows for custom integrations with existing systems your practice may already use.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Support Section */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-16 animate-fade-in-up" id="contact">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">Contact Support</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Get in Touch</h3>
                    <p className="text-gray-700 mb-6">
                      Our support team is available Monday through Friday, 9am to 6pm EST. We strive to respond to all inquiries within 24 hours.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          <svg className="w-6 h-6 text-clinic-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Email Support</h4>
                          <p className="text-gray-700">help@clinicflow.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          <svg className="w-6 h-6 text-clinic-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Phone Support</h4>
                          <p className="text-gray-700">+1 (800) 123-4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          <svg className="w-6 h-6 text-clinic-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Live Chat</h4>
                          <p className="text-gray-700">Available on the dashboard when logged in</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Additional Resources</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <a href="#" className="text-clinic-600 hover:text-clinic-700 transition-colors">Video Tutorials</a>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <a href="#" className="text-clinic-600 hover:text-clinic-700 transition-colors">Knowledge Base</a>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <a href="#" className="text-clinic-600 hover:text-clinic-700 transition-colors">Webinars</a>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <a href="#" className="text-clinic-600 hover:text-clinic-700 transition-colors">Community Forum</a>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <a href="#" className="text-clinic-600 hover:text-clinic-700 transition-colors">API Documentation</a>
                      </li>
                    </ul>
                    
                    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Schedule a Demo</h4>
                      <p className="text-gray-700 mb-3">
                        Want a personalized walkthrough of ClinicFlow? Our team can show you how to optimize the platform for your practice.
                      </p>
                      <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Book a Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter; 