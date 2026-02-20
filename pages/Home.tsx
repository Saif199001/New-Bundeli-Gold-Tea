
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Award, Truck, Users, ArrowRight, Star, Coffee, Globe, CheckCircle } from 'lucide-react';
import { IMAGES } from '../constants/images';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
    <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-royal-green transition-colors">
      <Icon className="text-royal-green group-hover:text-gold w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-royal-green">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const ProductPreview = ({ image, title, category, price }: { image: string, title: string, category: string, price: string }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
    <div className="relative h-64 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-4 right-4 bg-royal-green text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
        {category}
      </div>
    </div>
    <div className="p-6">
      <h4 className="text-lg font-bold text-royal-green mb-2">{title}</h4>
      <p className="text-sm text-gray-500 mb-4">Pure premium CTC blend with rich aroma.</p>
      <div className="flex items-center justify-between">
        <span className="text-royal-green font-bold">{price}</span>
        <Link to="/products" className="text-gold hover:text-royal-green transition-colors flex items-center font-bold text-sm">
          Details <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HOME_HERO} 
            alt="Bundeli Tea Garden" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-royal-green/90 via-royal-green/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl text-white">
            <span className="inline-block text-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm animate-fade-in-up">Established Excellence</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              The Royal Taste of <span className="text-gold italic serif">Authentic</span> Indian Tea.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Bundeli Gold Tea brings you the finest selection of CTC and premium leaves, sourced directly from the legendary gardens of Assam and Darjeeling. Experience purity in every sip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link to="/distributorship" className="bg-gold text-royal-green px-8 py-4 rounded-full font-bold text-center hover:bg-white hover:scale-105 transition-all shadow-xl">
                Start Distributorship
              </Link>
              <Link to="/products" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white hover:text-royal-green hover:scale-105 transition-all">
                Our Collections
              </Link>
            </div>
            
            <div className="mt-16 flex items-center space-x-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-gold w-5 h-5" />
                <span className="text-sm font-medium">100% Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-gold w-5 h-5" />
                <span className="text-sm font-medium">Bulk Supply</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-gold w-5 h-5" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Intro Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img src={IMAGES.BRAND_STORY} alt="Tea Making" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-royal-green p-8 rounded-2xl shadow-xl border-t-4 border-gold hidden sm:block">
                <span className="text-gold text-4xl font-bold block mb-1">15+</span>
                <span className="text-white text-xs uppercase tracking-widest font-bold">Years of Heritage</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Our Brand Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-royal-green mb-6 leading-tight">Tradition Meets Modern <span className="text-gold">Perfection.</span></h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Bundeli Gold Tea was founded on the principles of purity and authenticity. In a world of fast-moving products, we choose the slow path of quality—ensuring that every leaf is picked at its peak and processed with utmost care to retain its natural antioxidants and robust flavor.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Expertly sourced from high-altitude gardens.",
                  "Multi-stage quality control for consistency.",
                  "Vacuum packaging to preserve freshness.",
                  "Eco-friendly sourcing practices."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-royal-green font-semibold">
                    <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
                      <Leaf className="text-gold w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center text-royal-green font-bold hover:text-gold transition-colors border-b-2 border-gold pb-1 group">
                Read More About Our Journey <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Our Premium Collection</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-royal-green mb-6">Blends for Every Occasion</h3>
            <p className="max-w-2xl mx-auto text-gray-600">From strong morning Masala Chai to delicate evening blends, we offer a range of tea that satisfies every palate and business need.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductPreview 
              image={IMAGES.PRODUCT_PREMIUM_CTC}
              title="Classic Gold Dust"
              category="Premium"
              price="Available in 250g, 500g"
            />
            <ProductPreview 
              image={IMAGES.PRODUCT_GOLD_DUST}
              title="Rich CTC Leaf"
              category="Wholesale"
              price="Bulk Packs (5kg+)"
            />
            <ProductPreview 
              image={IMAGES.PRODUCT_MASALA_CHAI}
              title="Hotel Special Blend"
              category="Commercial"
              price="Contact for Pricing"
            />
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/products" className="bg-royal-green text-white px-10 py-4 rounded-full font-bold hover:bg-gold hover:text-royal-green transition-all shadow-lg inline-flex items-center">
              View All Products <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-royal-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-4xl font-bold mb-6">Uncompromising Quality & Trust.</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We believe that tea is more than just a beverage; it's a culture and a daily ritual for millions.
              </p>
              <Link to="/why-choose-us" className="text-gold font-bold flex items-center hover:text-white transition-colors group">
                Learn more <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Globe className="text-gold" />
                </div>
                <h4 className="text-xl font-bold mb-3">Pan India Delivery</h4>
                <p className="text-gray-400 text-sm">Efficient supply chain reaching every corner of India with speed.</p>
              </div>
              
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Coffee className="text-gold" />
                </div>
                <h4 className="text-xl font-bold mb-3">Freshness Guaranteed</h4>
                <p className="text-gray-400 text-sm">Minimal time from garden to warehouse, maximizing aroma retention.</p>
              </div>
              
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-gold" />
                </div>
                <h4 className="text-xl font-bold mb-3">Business Growth</h4>
                <p className="text-gray-400 text-sm">Robust support system for our distributors and wholesale partners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Distributorship Card */}
            <div className="relative group overflow-hidden rounded-3xl h-[500px]">
              <img 
                src={IMAGES.DISTRIBUTOR_PROMO} 
                alt="Distributorship" 
                className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-green via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="text-3xl font-bold text-white mb-4">Partner with Us</h3>
                <p className="text-gray-200 mb-6 max-w-sm">Join our network of 500+ successful distributors across India. High margins and reliable support.</p>
                <Link to="/distributorship" className="bg-gold text-royal-green px-8 py-3 rounded-full font-bold inline-block hover:bg-white transition-colors">
                  Become a Distributor
                </Link>
              </div>
            </div>

            {/* Bulk Order Card */}
            <div className="relative group overflow-hidden rounded-3xl h-[500px]">
              <img 
                src={IMAGES.BULK_PROMO} 
                alt="Bulk Orders" 
                className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-green via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="text-3xl font-bold text-white mb-4">Corporate & HORECA</h3>
                <p className="text-gray-200 mb-6 max-w-sm">Special blends and custom packaging for Hotels, Cafes, and Office environments.</p>
                <Link to="/bulk-orders" className="bg-white text-royal-green px-8 py-3 rounded-full font-bold inline-block hover:bg-gold transition-colors">
                  Inquire for Bulk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">What Partners Say</h2>
            <h3 className="text-4xl font-bold text-royal-green">Trusted by Businesses</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Distributor, Indore", text: "Bundeli Gold Tea has been a game-changer for my business. The consistency of quality is what my retailers love." },
              { name: "Hotel Sunrise", role: "HORECA Client", text: "We switched to Bundeli's premium blend for our guests, and the feedback has been phenomenal. Excellent support team." },
              { name: "Anita Sharma", role: "Store Owner, Bhopal", text: "The retail packaging is very premium and stands out on the shelves. It sells itself because of the aroma." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative">
                <Star className="text-gold absolute top-10 right-10" fill="#D4AF37" />
                <p className="text-gray-600 mb-8 italic">"{item.text}"</p>
                <div>
                  <h5 className="font-bold text-royal-green">{item.name}</h5>
                  <p className="text-xs text-gold font-bold uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-royal-green relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 transform origin-top"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Brew Success with Us?</h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">Whether you're looking for wholesale supply or want to become a distributor, we're here to help your business grow.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-gold text-royal-green px-10 py-4 rounded-full font-bold hover:bg-white transition-all shadow-xl">
              Contact Sales Team
            </Link>
            <Link to="/distributorship" className="bg-transparent border-2 border-gold text-gold px-10 py-4 rounded-full font-bold hover:bg-gold hover:text-royal-green transition-all">
              Apply for Distributorship
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
