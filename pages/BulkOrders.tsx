
import React from 'react';
import { Coffee, Building2, Calendar, UtensilsCrossed, CheckCircle, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants/images';

const BulkOrders = () => {
  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="bg-royal-green py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img src={IMAGES.BULK_HERO_PATTERN} alt="Pattern" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-6">Bulk Supply for <span className="text-gold italic serif">Institutions</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Elevate your beverage service with premium tea leaves tailored for Hotels, Cafes, and Corporate Offices.</p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: UtensilsCrossed, title: "Hotels", text: "Premium room service and breakfast buffet blends." },
            { icon: Coffee, title: "Cafes", text: "Consistent strength for high-quality Masala Chai and specialties." },
            { icon: Building2, title: "Offices", text: "Healthy and refreshing options for your employees." },
            { icon: Calendar, title: "Events", text: "On-demand bulk supply for weddings and corporate gatherings." }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <item.icon className="text-royal-green w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-royal-green mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={IMAGES.BULK_QUALITY_FEATURE} alt="Bulk Tea" className="w-full" />
            </div>
            <div>
              <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Why Businesses Trust Us</h2>
              <h3 className="text-4xl font-bold text-royal-green mb-8">High Volume, <span className="text-gold">High Quality.</span></h3>
              
              <div className="space-y-6">
                {[
                  { title: "Custom Blending", desc: "We can create a signature flavor profile unique to your brand." },
                  { title: "Volume Discounts", desc: "Attractive price tiers for monthly subscriptions and large one-time orders." },
                  { title: "Packaging Options", desc: "Choose from 1kg to 50kg industrial grade moisture-proof sacks." },
                  { title: "Priority Logistics", desc: "Guaranteed shipping within 24 hours for all corporate and bulk clients." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="shrink-0 mt-1">
                      <CheckCircle className="text-gold w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-royal-green text-lg">{feature.title}</h5>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-royal-green rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Coffee size={200} />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-center">Bulk Inquiry Form</h2>
            <p className="text-gray-300 text-center mb-10">Fill in your requirements and our institutional sales team will provide a custom quote.</p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Contact Name" className="bg-white/10 border border-white/20 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-gold" />
              <input type="text" placeholder="Company/Hotel Name" className="bg-white/10 border border-white/20 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-gold" />
              <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/20 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-gold" />
              <input type="tel" placeholder="Phone Number" className="bg-white/10 border border-white/20 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-gold" />
              <select className="bg-white/10 border border-white/20 text-gray-400 px-6 py-4 rounded-xl focus:outline-none focus:border-gold md:col-span-1">
                <option value="">Monthly Requirement</option>
                <option value="10-50">10kg - 50kg</option>
                <option value="50-200">50kg - 200kg</option>
                <option value="200+">200kg+</option>
              </select>
              <input type="text" placeholder="Industry (e.g. Hotel, Office)" className="bg-white/10 border border-white/20 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-gold" />
              <textarea placeholder="Tell us more about your specific needs..." className="bg-white/10 border border-white/20 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-gold md:col-span-2" rows={4}></textarea>
              <button className="bg-gold text-royal-green py-4 rounded-xl font-bold hover:bg-white transition-all text-lg shadow-xl md:col-span-2">
                Send Bulk Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulkOrders;
