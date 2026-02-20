
import React from 'react';
import { Leaf, Award, Truck, ShieldCheck, Heart, Coffee } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="bg-royal-green py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Why <span className="text-gold italic serif">Bundeli Gold?</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">We don't just sell tea; we deliver trust, quality, and a commitment to excellence.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Leaf,
                title: "Premium Sourcing",
                desc: "We select only the top 10% of tea leaves from high-altitude gardens across India, ensuring unmatched quality."
              },
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                desc: "Every batch undergoes rigorous lab testing for moisture levels, aroma profile, and purity before packaging."
              },
              {
                icon: Coffee,
                title: "Unique Aroma",
                desc: "Our specialized roasting and blending process preserves the natural oils that give our tea its signature fragrance."
              },
              {
                icon: Truck,
                title: "Reliable Supply",
                desc: "With a warehouse capacity of 500 tons, we ensure your business never runs out of stock, even during peak demand."
              },
              {
                icon: Award,
                title: "Trusted Brand",
                desc: "Recommended by over 1000+ retail outlets and tea shops, we are a name synonymous with 'Authentic Indian Tea'."
              },
              {
                icon: Heart,
                title: "Customer Support",
                desc: "Dedicated account managers for our wholesale and distributorship partners to ensure smooth business operations."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-royal-green transition-colors">
                  <item.icon className="text-royal-green group-hover:text-gold w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-royal-green mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-royal-green">The Bundeli Difference</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <thead className="bg-royal-green text-white">
                <tr>
                  <th className="px-8 py-6 text-left font-bold text-lg">Feature</th>
                  <th className="px-8 py-6 text-left font-bold text-lg text-gold">Bundeli Gold Tea</th>
                  <th className="px-8 py-6 text-left font-bold text-lg text-gray-400">Regular Brands</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Tea Origin", "Finest Selection from Assam/Darjeeling", "Mixed or unknown sources"],
                  ["Packaging", "Triple-layer vacuum sealed", "Basic plastic or paper packs"],
                  ["Purity", "100% natural, no artificial flavors", "Often contain dust and additives"],
                  ["Business Support", "Full marketing & setup support", "Transactional relationships only"],
                  ["Profit Margins", "High (Focus on partner growth)", "Market standard / Variable"]
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 font-bold text-royal-green">{row[0]}</td>
                    <td className="px-8 py-6 text-royal-green font-medium flex items-center">
                      <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 shrink-0">✓</div>
                      {row[1]}
                    </td>
                    <td className="px-8 py-6 text-gray-400 font-light">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
