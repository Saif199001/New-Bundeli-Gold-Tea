
import React from 'react';
// Added missing CheckCircle icon to the lucide-react imports
import { Leaf, Award, Globe, ShieldCheck, Quote, Sparkles, CheckCircle } from 'lucide-react';
import { IMAGES } from '../constants/images';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-royal-green py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Our Heritage & <span className="text-gold italic serif">Values</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">The journey of Bundeli Gold Tea is a story of passion for quality and respect for Indian tradition.</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Our Journey</h2>
              <h3 className="text-4xl font-bold text-royal-green mb-6">A Legacy in Every Leaf.</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bundeli Gold Tea was born out of a desire to bring the most authentic tea drinking experience to every household. Our founders, with decades of experience in the tea gardens of Northeast India, realized that while there were many brands, very few captured the soul of a true Indian chai.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, Bundeli Gold stands as a symbol of trust, supplying premium tea to thousands of retail outlets and serving a vast network of distributors and business partners.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-royal-green mb-2">1M+</h4>
                  <p className="text-sm text-gray-500 font-medium">Happy Customers</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-royal-green mb-2">500+</h4>
                  <p className="text-sm text-gray-500 font-medium">Wholesale Partners</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.ABOUT_GARDEN} alt="Tea Garden" className="rounded-2xl shadow-lg mt-8 h-64 w-full object-cover" />
              <img src={IMAGES.ABOUT_PROCESSING} alt="Tea Processing" className="rounded-2xl shadow-lg h-64 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Owner Intro & Vision Section */}
      <section className="py-24 bg-royal-green/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src={IMAGES.OWNER_IMAGE} 
                  alt="Mrs. Roshni Devi - Founder, Bundeli Gold Tea" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-royal-green to-transparent p-8">
                  <h4 className="text-white text-2xl font-bold">Mrs. Roshni Devi</h4>
                  <p className="text-gold font-semibold uppercase tracking-widest text-xs mt-1">Founder & Visionary Entrepreneur</p>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-gold p-4 rounded-2xl shadow-lg z-20 animate-bounce">
                <Sparkles className="text-royal-green w-6 h-6" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-6 inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full">
                <Quote className="text-gold w-4 h-4" />
                <span className="text-royal-green font-bold text-xs uppercase tracking-widest">A Woman's Vision, A Brand's Identity</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-royal-green mb-8 leading-tight">
                The Heart Behind the <span className="text-gold italic serif">Brew.</span>
              </h2>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Bundeli Gold Tea is not just a tea brand. It is a symbol of <strong>self-reliance, women empowerment,</strong> and the <strong>pride of Bundelkhand.</strong>
                </p>
                <p>
                  Born in Tikamgarh, Madhya Pradesh, Bundeli Gold Tea is a premium CTC tea brand founded by a women entrepreneur, <strong>Mrs. Roshni Devi</strong>, whose entrepreneurial mindset, courage, and vision turned a simple idea into a meaningful startup.
                </p>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-gold shadow-sm italic text-royal-green">
                  "This brand stands as proof that when a woman believes in herself, she doesn’t just build a business—she builds inspiration."
                </div>
                <p>
                  In a society where many women are still hesitant to dream beyond limitations, Roshni Devi chose to step forward. She didn't just create a product; she created a legacy that represents the strength and authenticity of Indian roots.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="bg-royal-green text-white px-6 py-3 rounded-xl flex items-center space-x-2">
                  <CheckCircle className="text-gold w-5 h-5" />
                  <span className="font-bold text-sm">Empowering Local Women</span>
                </div>
                <div className="bg-gold text-royal-green px-6 py-3 rounded-xl flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-bold text-sm">Proudly Tikamgarh Born</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl border border-gold/20 shadow-xl">
              <div className="w-16 h-16 bg-royal-green rounded-2xl flex items-center justify-center mb-8 rotate-3 shadow-lg">
                <Globe className="text-gold w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-royal-green mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To become India's most trusted tea brand by providing consistently high-quality tea leaves at accessible prices, while supporting our business partners' growth through ethical practices and reliable supply chains.
              </p>
            </div>
            <div className="bg-royal-green p-12 rounded-3xl border border-gold/20 shadow-xl text-white">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 -rotate-3 shadow-lg">
                <Leaf className="text-royal-green w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To revolutionize the tea industry in India by setting new standards for purity, taste, and partner empowerment, making "Bundeli Gold" a household name synonymous with authentic Indian heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Uncompromising Standards</h2>
          <h3 className="text-4xl font-bold text-royal-green mb-16">The Bundeli Promise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-royal-green w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-royal-green mb-4">Sourcing Excellence</h4>
              <p className="text-gray-600 text-sm">We only source leaves from gardens that follow sustainable and organic farming practices.</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-royal-green w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-royal-green mb-4">Master Blending</h4>
              <p className="text-gray-600 text-sm">Our master blenders have over 30 years of experience in crafting the perfect balance of strength and aroma.</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-royal-green w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-royal-green mb-4">Preserved Freshness</h4>
              <p className="text-gray-600 text-sm">Our unique multi-layer vacuum packaging ensures the tea stays garden-fresh until it reaches your cup.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
