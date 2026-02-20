import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Leaf, 
  Award, 
  Truck, 
  Users, 
  Package, 
  MessageCircle,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Send,
  Loader2
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { IMAGES } from './constants/images';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Distributorship from './pages/Distributorship';
import BulkOrders from './pages/BulkOrders';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';

const TeaAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: 'Namaste! I am your Bundeli Gold Tea Assistant. Looking for a specific blend or curious about our wholesale opportunities?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Correctly initializing GoogleGenAI directly with process.env.API_KEY as per the library guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a sophisticated, polite, and helpful brand assistant for "Bundeli Gold Tea", a premium Indian tea brand.
          Our products: 
          - Bundeli Gold Premium CTC (Bold, rich, golden)
          - Royal Masala Chai (Spices like cardamom/ginger)
          - Bulk/Wholesale/Dust Tea (For businesses, hotels, cafes)
          Tone: Professional, premium, authentic Indian heritage. 
          Goal: Help users find tea blends, explain distributorship benefits (margins, support), or guide them to contact sales. 
          Keep responses concise (max 3 sentences).`,
        },
      });

      // Using the .text property to access generated content as per @google/genai documentation
      const assistantContent = response.text || "I apologize, I'm having trouble connecting. Please contact our sales team directly at +91 98765 43210.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I apologize, but I'm unable to process your request at the moment. Please call us for immediate assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl border border-gold/20 flex flex-col overflow-hidden mb-4 animate-fade-in-up">
          <div className="bg-royal-green p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-gold w-5 h-5" />
              <span className="text-white font-bold">Bundeli Tea Guide</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white"><X size={20} /></button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-gold text-royal-green font-semibold rounded-tr-none' 
                    : 'bg-white text-slate-700 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 rounded-tl-none">
                  <Loader2 className="w-5 h-5 animate-spin text-gold" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about blends or business..."
                className="flex-grow text-sm focus:outline-none bg-gray-50 p-2 rounded-lg border border-gray-200 focus:border-gold"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="p-2 bg-royal-green text-gold rounded-lg hover:bg-gold hover:text-royal-green transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-royal-green text-gold p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-2 border-gold"
      >
        <Sparkles size={24} />
      </button>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Distributorship', path: '/distributorship' },
    { name: 'Bulk Orders', path: '/bulk-orders' },
    { name: 'Why Us', path: '/why-choose-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gold/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center py-2">
              <img 
                src={IMAGES.LOGO} 
                alt="Bundeli Gold Tea Logo" 
                className="h-14 md:h-18 lg:h-20 w-auto object-contain crisp-image transition-transform hover:scale-105 duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="flex items-center space-x-2">
                      <div class="w-10 h-10 bg-royal-green flex items-center justify-center rounded-lg rotate-3 border-2 border-gold">
                        <span class="text-gold font-bold">B</span>
                      </div>
                      <span class="text-xl font-bold text-royal-green tracking-tight">BUNDELI</span>
                    </div>
                  `;
                }}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-gold ${
                  location.pathname === link.path ? 'text-gold' : 'text-royal-green'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-royal-green text-white px-5 py-2.5 rounded-full text-sm font-bold border-2 border-royal-green hover:bg-transparent hover:text-royal-green transition-all duration-300"
            >
              Inquire Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-royal-green hover:text-gold focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gold/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-semibold border-b border-gray-50 ${
                  location.pathname === link.path ? 'text-gold' : 'text-royal-green'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-royal-green text-white pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-lg rotate-3 border border-white/20">
                  <span className="text-royal-green font-bold">B</span>
                </div>
                <span className="text-lg font-bold text-white tracking-tight">BUNDELI GOLD</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bringing the authentic heritage of Indian tea to your cup. We specialize in premium quality tea leaves sourced from the finest gardens of India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold border-b border-gold/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Bundeli Gold</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors text-sm">Our Collections</Link></li>
              <li><Link to="/distributorship" className="text-gray-300 hover:text-white transition-colors text-sm">Distributorship</Link></li>
              <li><Link to="/bulk-orders" className="text-gray-300 hover:text-white transition-colors text-sm">Bulk Supply</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Customer Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold border-b border-gold/20 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">Plot No. 45, Industrial Area, Bundelkhand Region, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="text-gold flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="text-gold flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">contact@bundeligold.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold border-b border-gold/20 pb-2 inline-block">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">Stay updated with our latest tea arrivals and wholesale offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-gold text-sm"
              />
              <button className="bg-gold text-royal-green px-4 py-2 rounded-r-md font-bold hover:bg-white transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 Bundeli Gold Tea. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/919876543210" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
  >
    <MessageCircle size={24} />
    <span className="hidden md:block ml-2 font-bold text-sm">Chat with Us</span>
  </a>
);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/distributorship" element={<Distributorship />} />
            <Route path="/bulk-orders" element={<BulkOrders />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <TeaAssistant />
      </div>
    </Router>
  );
}