
import React from 'react';
import { Package, Truck, Award, Coins, ChevronRight, FileText } from 'lucide-react';

const Distributorship = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-royal-green text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 transform origin-top"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Grow Your Business as a <span className="text-gold italic serif">Bundeli Partner</span></h1>
            <p className="text-xl text-gray-300 mb-10">Join our expanding network and bring the premium taste of Bundeli Gold Tea to your region. We offer lucrative margins and comprehensive support.</p>
            <a href="#apply" className="bg-gold text-royal-green px-10 py-4 rounded-full font-bold inline-block hover:bg-white transition-all shadow-xl">
              Apply for Distributorship
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Partner Benefits</h2>
            <h3 className="text-4xl font-bold text-royal-green">Why Partner With Us?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Coins, title: "High Profit Margins", text: "Competitive pricing structure designed to maximize your ROI and profitability." },
              { icon: Truck, title: "Reliable Supply Chain", text: "Timely delivery and stock availability even during peak seasons." },
              { icon: Award, title: "Marketing Support", text: "Free point-of-sale materials, signage, and digital marketing assistance." },
              { icon: Package, title: "Premium Branding", text: "Leverage the trust of a premium brand that stands out on retail shelves." },
              { icon: FileText, title: "Training & Guidance", text: "Comprehensive product knowledge and sales strategy training for your team." },
              { icon: ChevronRight, title: "Area Exclusivity", text: "Dedicated territory rights for qualified high-performing distributors." }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-royal-green transition-colors">
                  <benefit.icon className="text-royal-green group-hover:text-gold w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-royal-green mb-4">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-xl border-t-4 border-royal-green">
              <h3 className="text-2xl font-bold text-royal-green mb-8">Investment & Requirements</h3>
              <ul className="space-y-6">
                <li className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-600 font-medium">Minimum Investment</span>
                  <span className="text-royal-green font-bold text-lg">₹2.5 Lakhs - ₹10 Lakhs</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-600 font-medium">Space Requirement</span>
                  <span className="text-royal-green font-bold text-lg">200 - 500 sq. ft.</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-600 font-medium">Prior Experience</span>
                  <span className="text-royal-green font-bold text-lg italic">Preferred, not mandatory</span>
                </li>
                <li className="flex items-center justify-between pb-2">
                  <span className="text-gray-600 font-medium">Legal Documents</span>
                  <span className="text-royal-green font-bold text-lg">GST & FSSAI</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-royal-green p-12 rounded-3xl shadow-xl border-t-4 border-gold text-white">
              <h3 className="text-2xl font-bold mb-8">How to Apply</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shrink-0 font-bold text-royal-green">1</div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Submit Inquiry</h5>
                    <p className="text-gray-400 text-sm">Fill the application form with your basic business details.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shrink-0 font-bold text-royal-green">2</div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Review & Verification</h5>
                    <p className="text-gray-400 text-sm">Our sales team will review your application and conduct a background check.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shrink-0 font-bold text-royal-green">3</div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Agreement & Setup</h5>
                    <p className="text-gray-400 text-sm">Sign the partnership agreement and finalize your regional territory setup.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-royal-green mb-4">Start Your Application</h3>
              <p className="text-gray-500">Please provide your details and our team will get back to you within 24-48 hours.</p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-royal-green uppercase tracking-widest mb-2">Full Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-royal-green uppercase tracking-widest mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-royal-green uppercase tracking-widest mb-2">Business Name (If Any)</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-bold text-royal-green uppercase tracking-widest mb-2">Location/City</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-royal-green uppercase tracking-widest mb-2">Your Message / Inquiry</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold" placeholder="Tell us about your interest in Bundeli Gold Tea..."></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-royal-green text-white py-4 rounded-xl font-bold hover:bg-gold transition-colors text-lg shadow-lg">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Distributorship;
