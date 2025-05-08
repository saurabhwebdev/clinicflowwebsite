import React from 'react';
import Footer from '@/components/landing/Footer';
import SmoothScrollNav from '@/components/landing/SmoothScrollNav';

const TermsOfService = () => {
  React.useEffect(() => {
    // Update title
    document.title = "Terms of Service | ClinicFlow";
    
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
                Terms of <span className="text-gradient">Service</span>
              </h1>
              <p className="text-xl text-gray-600">
                The rules that govern your use of ClinicFlow
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Agreement to Terms</h2>
                <p className="text-gray-700">
                  These Terms of Service constitute a legally binding agreement made between you and ClinicFlow ("we," "us," or "our"), concerning your access to and use of our website and software services. 
                </p>
                <p className="text-gray-700">
                  You agree that by accessing our Services, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with these Terms of Service, then you are prohibited from using our Services and must discontinue use immediately.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Intellectual Property Rights</h2>
                <p className="text-gray-700">
                  Unless otherwise indicated, ClinicFlow is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Service (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
                </p>
                <p className="text-gray-700">
                  The Content and Marks are provided on the Service "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Service and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">User Representations</h2>
                <p className="text-gray-700">
                  By using the Service, you represent and warrant that:
                </p>
                <ol className="list-decimal pl-6 text-gray-700">
                  <li>All registration information you submit will be true, accurate, current, and complete.</li>
                  <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                  <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                  <li>You are at least 18 years of age.</li>
                  <li>You will not use the Service for any illegal or unauthorized purpose.</li>
                  <li>Your use of the Service will not violate any applicable law or regulation.</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Fees and Payment</h2>
                <p className="text-gray-700">
                  ClinicFlow is provided on a one-time payment basis with an Annual Maintenance Contract (AMC) for updates, support, and security after the first year. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Service. 
                </p>
                <p className="text-gray-700">
                  You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax may be added to the price of purchases as deemed required by us.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Software Licenses</h2>
                <p className="text-gray-700">
                  You are granted a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Service on a single installation, in accordance with these Terms of Service. We reserve all rights not expressly granted to you in and to the Service, the Content, and the Marks.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Prohibited Activities</h2>
                <p className="text-gray-700">
                  You may not access or use the Service for any purpose other than that for which we make the Service available. The Service may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>
                <p className="text-gray-700">
                  As a user of the Service, you agree not to:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Systematically retrieve data or other content from the Service to create or compile, directly or indirectly, a collection, compilation, database, or directory.</li>
                  <li>Make any unauthorized use of the Service, including collecting usernames and/or email addresses of users by electronic or other means.</li>
                  <li>Use a buying agent or purchasing agent to make purchases on the Service.</li>
                  <li>Use the Service to advertise or offer to sell goods and services.</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the Service.</li>
                  <li>Engage in unauthorized framing of or linking to the Service.</li>
                  <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming, that interferes with any party's uninterrupted use and enjoyment of the Service.</li>
                  <li>Engage in any automated use of the system, such as using scripts to send comments or messages.</li>
                  <li>Attempt to impersonate another user or person or use the username of another user.</li>
                  <li>Sell or otherwise transfer your profile.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Term and Termination</h2>
                <p className="text-gray-700">
                  These Terms of Service shall remain in full force and effect while you use the Service. We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.
                </p>
                <p className="text-gray-700">
                  Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Limitation of Liability</h2>
                <p className="text-gray-700">
                  In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from or relating to your use of or inability to use the Service, even if we have been advised of the possibility of such damages.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Governing Law</h2>
                <p className="text-gray-700">
                  These Terms of Service and your use of the Service are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to make changes to these Terms of Service at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of these Terms of Service, and you waive any right to receive specific notice of each such change.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contact Us</h2>
                <p className="text-gray-700">
                  If you have questions or concerns about these Terms of Service, please contact us at:
                </p>
                <p className="text-gray-700">
                  Email: legal@clinicflow.com<br/>
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

export default TermsOfService; 