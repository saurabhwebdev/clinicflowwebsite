import React from 'react';
import Footer from '@/components/landing/Footer';
import SmoothScrollNav from '@/components/landing/SmoothScrollNav';

const PrivacyPolicy = () => {
  React.useEffect(() => {
    // Update title
    document.title = "Privacy Policy | ClinicFlow";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

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
                Privacy <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-xl text-gray-600">
                How we collect, use, and protect your information
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Overview</h2>
                <p className="text-gray-700">
                  ClinicFlow ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our clinic management software service.
                </p>
                <p className="text-gray-700">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Information We Collect</h2>
                <p className="text-gray-700">
                  We may collect information about you in a variety of ways. The information we may collect via the Service includes:
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Personal Data</h3>
                <p className="text-gray-700">
                  Personally identifiable information that you voluntarily provide to us when registering for our Service, including name, email address, telephone number, and other contact details. This may also include billing information and credential data.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Patient Data</h3>
                <p className="text-gray-700">
                  If you use our Service to manage a healthcare practice, you may provide us with personal health information of your patients. We process and store this data as your data processor, and you remain the data controller.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Usage Data</h3>
                <p className="text-gray-700">
                  Information about how you use our Service, including your browser type, access times, pages viewed, your IP address, and the page you visited before navigating to our Service.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Use of Your Information</h2>
                <p className="text-gray-700">
                  We may use the information we collect from you for various purposes, including to:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Provide, maintain, and improve our Service</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our Service</li>
                  <li>Personalize your experience and deliver content relevant to your interests</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">HIPAA Compliance</h2>
                <p className="text-gray-700">
                  As our Service is designed for healthcare providers, we maintain HIPAA compliance. We implement physical, technical, and administrative safeguards designed to protect the privacy and security of protected health information.
                </p>
                <p className="text-gray-700">
                  When you use our Service to process patient information, we enter into a Business Associate Agreement (BAA) with you as required by HIPAA.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Disclosure of Your Information</h2>
                <p className="text-gray-700">
                  We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">By Law or to Protect Rights</h3>
                <p className="text-gray-700">
                  If we believe the release of information is necessary to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Service Providers</h3>
                <p className="text-gray-700">
                  We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Security of Your Information</h2>
                <p className="text-gray-700">
                  We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Children's Privacy</h2>
                <p className="text-gray-700">
                  Our Service is not intended for individuals under the age of 18. We do not knowingly collect or solicit personal information from children.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contact Us</h2>
                <p className="text-gray-700">
                  If you have questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <p className="text-gray-700">
                  Email: privacy@clinicflow.com<br/>
                  Address: 123 Medical Plaza, Suite 500, San Francisco, CA 94107
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 