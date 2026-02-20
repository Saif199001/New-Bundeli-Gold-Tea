
import React from 'react';
// Added missing CheckCircle icon to the lucide-react imports
import { Coffee, Leaf, Users, Truck, Sparkles, Heart, ShieldCheck, Thermometer, Droplets, Info, CheckCircle } from 'lucide-react';
import { IMAGES } from '../constants/images';

const ProductCard = ({ 
  title, 
  subtitle, 
  description, 
  traits, 
  bestFor, 
  image, 
  badge, 
  icon: Icon 
}: any) => (
  <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
    <div className="relative h-64 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      {badge && (
        <div className="absolute top-4 left-4 bg-gold text-royal-green text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
          {badge}
        </div>
      )}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <Icon className="text-royal-green w-6 h-6" />
        </div>
      </div>
    </div>
    
    <div className="p-8 flex-grow flex flex-col">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-royal-green mb-1">{title}</h3>
        <p className="text-gold font-bold text-xs uppercase tracking-widest">{subtitle}</p>
      </div>
      
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-2 mb-6 flex-grow">
        {traits.map((trait: string, idx: number) => (
          <div key={idx} className="flex items-center space-x-2 text-gray-700">
            <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></div>
            <span className="text-xs font-medium">{trait}</span>
          </div>
        ))}
      </div>
      
      <div className="pt-6 border-t border-gray-50 mt-auto">
        <div className="flex items-center space-x-2 mb-4">
          <Info className="text-royal-green w-4 h-4 opacity-50" />
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Best For</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {bestFor.map((item: string, idx: number) => (
            <span key={idx} className="bg-royal-green/5 text-royal-green px-3 py-1 rounded-full text-[10px] font-bold border border-royal-green/10">
              {item}
            </span>
          ))}
        </div>
      </div>
      
      <button className="w-full mt-6 bg-royal-green text-white py-3.5 rounded-xl font-bold hover:bg-gold transition-colors text-sm shadow-md">
        Inquire for Wholesale
      </button>
    </div>
  </div>
);

const SectionHeader = ({ title, subtitle, icon: Icon }: any) => (
  <div className="flex items-center space-x-4 mb-10">
    <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center shrink-0">
      <Icon className="text-gold w-6 h-6" />
    </div>
    <div>
      <h2 className="text-3xl font-bold text-royal-green">{title}</h2>
      <p className="text-gray-500 text-sm font-medium">{subtitle}</p>
    </div>
  </div>
);

const Products = () => {
  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="bg-royal-green py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMAGES.BULK_HERO_PATTERN} className="w-full h-full object-cover" alt="pattern" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <span className="inline-block text-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">Our Curated Collection</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Bundeli Gold Tea – <span className="text-gold italic serif">Choose Your Perfect Cup</span></h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            At Bundeli Gold Tea, we understand that every tea lover is different. That’s why we offer a wide range of tea categories, specially crafted for homes, cafés, dhabas, hotels, offices, and retail markets.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        
        {/* Intro Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 mb-20 border border-gold/10 text-center">
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Whether you love <span className="text-royal-green font-bold">strong kadak chai</span>, flavored tea, or healthy herbal infusions, Bundeli Gold Tea has something for everyone. Our blends are perfected over decades to ensure consistency in every sip.
          </p>
        </div>

        {/* 1. CTC Tea Collection */}
        <section className="mb-24">
          <SectionHeader 
            title="CTC Tea Collection" 
            subtitle="Strong • Rich • Consistent" 
            icon={Coffee} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              title="CTC Strong Tea"
              subtitle="The Kadak Experience"
              description="Extra strong blend specifically curated for those who prefer their morning cup with a powerful punch."
              traits={["Extra strong color", "Robust flavor profile", "Ideal for daily stimulation"]}
              bestFor={["Home use", "Highway Dhabas", "Tea Stalls"]}
              image={IMAGES.PRODUCT_CTC_STRONG}
              badge="Top Seller"
              icon={ShieldCheck}
            />
            <ProductCard 
              title="CTC Premium Tea"
              subtitle="Daily Perfection"
              description="A masterfully balanced blend offering the perfect equilibrium of strength and aroma for regular use."
              traits={["Balanced strength", "Consistent grade", "Smooth mouthfeel"]}
              bestFor={["Home use", "Offices", "Hotels"]}
              image={IMAGES.PRODUCT_PREMIUM_CTC}
              icon={CheckCircle}
            />
            <ProductCard 
              title="CTC Gold Tea"
              subtitle="The Luxury Blend"
              description="Our highest grade CTC leaves, sourced from select high-altitude gardens for a superior drinking experience."
              traits={["Rich aroma", "Golden liquor", "Exquisite aftertaste"]}
              bestFor={["Premium Hotels", "Gifting", "Cafés"]}
              image={IMAGES.PRODUCT_CTC_GOLD}
              badge="Royal Grade"
              icon={Sparkles}
            />
          </div>
        </section>

        {/* 2. Family & Dhaba Collection */}
        <section className="mb-24">
          <SectionHeader 
            title="Commercial & Family Blends" 
            subtitle="Everyday Heritage • Bold Value" 
            icon={Users} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductCard 
              title="Family Tea"
              subtitle="Everyday Tea for Every Home"
              description="Smooth, tasty, and affordable — specially formulated for multiple rounds of family consumption throughout the day."
              traits={["Balanced strength", "Long-lasting flavor", "Loved by all age groups"]}
              bestFor={["Homes", "Retail Customers", "Pantry Supply"]}
              image={IMAGES.PRODUCT_FAMILY}
              icon={Heart}
            />
            <ProductCard 
              title="Special Dhaba Tea"
              subtitle="Kadak Chai, Desi Style"
              description="Made specially for high-volume tea consumption with intense color and bold taste that stands up to milk and sugar."
              traits={["Extra kadak", "Perfect milk compatibility", "High yield per kg"]}
              bestFor={["Dhabas", "Cafés", "Highway Outlets"]}
              image={IMAGES.PRODUCT_DHABA}
              badge="High Volume"
              icon={Truck}
            />
          </div>
        </section>

        {/* 3. Aromatic Flavored Tea */}
        <section className="mb-24">
          <SectionHeader 
            title="Aromatic & Flavored Collection" 
            subtitle="Refreshing • Traditional • Authentic" 
            icon={Sparkles} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              title="Elaichi Tea"
              subtitle="The Scent of Freshness"
              description="Infused with premium quality cardamom for a naturally refreshing and soothing tea experience."
              traits={["Pleasant aroma", "Light & refreshing", "Anti-oxidant rich"]}
              bestFor={["Homes", "Premium Cafés", "Offices"]}
              image={IMAGES.PRODUCT_ELAICHI}
              icon={Droplets}
            />
            <ProductCard 
              title="Adrak Elaichi"
              subtitle="Immunity & Taste"
              description="The perfect traditional blend of ginger and cardamom, offering a warming touch in every cup."
              traits={["Warming & energizing", "Ideal for mornings", "Winter favorite"]}
              bestFor={["Homes", "Hotels", "Wellness Cafés"]}
              image={IMAGES.PRODUCT_ADRAK_ELAICHI}
              badge="Seasonal Must"
              icon={Thermometer}
            />
            <ProductCard 
              title="Masala Tea"
              subtitle="Traditional Indian Flavors"
              description="A powerful blend of selected Indian spices for a bold, flavorful, and truly masaledar chai."
              traits={["Traditional spices", "Bold spicy notes", "Authentic desi taste"]}
              bestFor={["Dhabas", "Authentic Restaurants", "Homes"]}
              image={IMAGES.PRODUCT_MASALA_CHAI}
              icon={Coffee}
            />
          </div>
        </section>

        {/* 4. Wellness Collection */}
        <section className="mb-24">
          <SectionHeader 
            title="Herbal & Wellness Range" 
            subtitle="Light • Healthy • Rejuvenating" 
            icon={Leaf} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              title="Green Tea"
              subtitle="Natural Detox"
              description="Finest unoxidized leaves packed with antioxidants for the health-conscious consumer."
              traits={["Low caffeine", "Helps in metabolism", "Pure natural detox"]}
              bestFor={["Fitness Lovers", "Homes", "Offices"]}
              image={IMAGES.PRODUCT_GREEN_TEA}
              icon={Leaf}
            />
            <ProductCard 
              title="Blue Tea"
              subtitle="Exotic Wellness"
              description="A premium wellness tea with natural blue color from Butterfly Pea flowers, rich in stress-relieving properties."
              traits={["Antioxidant rich", "Stress-relieving", "Unique visual appeal"]}
              bestFor={["Premium Customers", "Wellness Spas", "Cafés"]}
              image={IMAGES.PRODUCT_BLUE_TEA}
              badge="Exotic Range"
              icon={Droplets}
            />
            <div className="bg-royal-green rounded-3xl p-8 border border-gold/20 shadow-xl flex flex-col justify-center text-white relative overflow-hidden">
               <Leaf className="absolute -bottom-10 -right-10 text-gold/10 w-48 h-48 rotate-12" />
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-4">Herbal Tea Collection</h3>
                 <p className="text-gray-300 text-sm mb-6">Explore our curated range of wellness blends crafted for natural health benefits.</p>
                 <ul className="space-y-3 mb-8">
                   {["Immunity Booster Tea", "Detox Tea", "Digestive Tea", "Stress Relief Tea"].map((item, i) => (
                     <li key={i} className="flex items-center space-x-2">
                       <div className="w-4 h-4 bg-gold rounded-full flex items-center justify-center shrink-0">
                         <CheckCircle className="text-royal-green w-3 h-3" />
                       </div>
                       <span className="text-sm font-medium">{item}</span>
                     </li>
                   ))}
                 </ul>
                 <button className="w-full bg-gold text-royal-green py-3 rounded-xl font-bold hover:bg-white transition-colors">
                   View Wellness Catalog
                 </button>
               </div>
            </div>
          </div>
        </section>

      </div>

      {/* Global Wholesale CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-green rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Interested in Bulk Partnership?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-10">
              We offer customized packaging and competitive pricing for bulk orders starting from 50kg up to 500 tons. Let's grow together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-gold text-royal-green px-10 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg">
                Download Catalog
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-royal-green transition-all">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
