import React from 'react';
import Footer from '@/components/landing/Footer';
import SmoothScrollNav from '@/components/landing/SmoothScrollNav';

const CookiePolicy = () => {
  React.useEffect(() => {
    // Update title
    document.title = "Cookie Policy | ClinicFlow";
    
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
                Cookie <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-xl text-gray-600">
                How we use cookies and similar technologies
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">What Are Cookies</h2>
                <p className="text-gray-700">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. Cookies enhance user experience by allowing websites to remember your preferences and understand how you use their site.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">How We Use Cookies</h2>
                <p className="text-gray-700">
                  ClinicFlow uses cookies for a variety of purposes. Some cookies are necessary for the functionality of our website, while others help us improve our services by providing insights into how the site is used. Here's how we use them:
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Essential Cookies</h3>
                <p className="text-gray-700">
                  These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. These cookies do not store any personally identifiable information.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Performance and Analytics Cookies</h3>
                <p className="text-gray-700">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Functionality Cookies</h3>
                <p className="text-gray-700">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, then some or all of these services may not function properly.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Targeting Cookies</h3>
                <p className="text-gray-700">
                  These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Cookies We Use</h2>
                <p className="text-gray-700">
                  ClinicFlow uses the following specific cookies:
                </p>
                
                <div className="mt-4 border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">session</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Maintains your session state across page requests</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Session</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">auth_token</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Keeps you logged in after you close your browser</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">30 days</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">_ga</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Used by Google Analytics to distinguish users</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2 years</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">_gid</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Used by Google Analytics to distinguish users</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">24 hours</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">preferences</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Stores user preferences for site functionality</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Managing Cookies</h2>
                <p className="text-gray-700">
                  Most web browsers allow some control over cookies through browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" className="text-clinic-600 hover:underline">www.allaboutcookies.org</a>.
                </p>
                <p className="text-gray-700">
                  To opt out of being tracked by Google Analytics across all websites, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-clinic-600 hover:underline">https://tools.google.com/dlpage/gaoptout</a>.
                </p>
                <p className="text-gray-700">
                  Please note that restricting cookies may impact the functionality of our website. For the best user experience, we recommend accepting cookies.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Third-Party Cookies</h2>
                <p className="text-gray-700">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service and enhance the user experience. These cookies may track things such as how long you spend on the site and the pages that you visit.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Changes to This Cookie Policy</h2>
                <p className="text-gray-700">
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
                </p>
                <p className="text-gray-700">
                  You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about our Cookie Policy, please contact us:
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

export default CookiePolicy; 