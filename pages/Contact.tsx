
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-royal-green py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Get in <span className="text-gold italic serif">Touch</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Have questions about our products or business partnerships? We're here to help you.</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-royal-green mb-8 border-b-2 border-gold pb-2 inline-block">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                    <Phone className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us Directly</p>
                    <p className="text-lg font-bold text-royal-green">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 9am-7pm IST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                    <Mail className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Support</p>
                    <p className="text-lg font-bold text-royal-green">sales@bundeligold.com</p>
                    <p className="text-sm text-gray-500">Typically replies in 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                    <MapPin className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Our Office</p>
                    <p className="text-sm font-bold text-royal-green leading-relaxed">Plot No. 45, Industrial Area, Bundelkhand Region, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-royal-green mb-6 border-b-2 border-gold pb-2 inline-block text-sm">Follow Our Socials</h3>
              <div className="flex space-x-4">
                {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gold/10">
              <div className="flex items-center space-x-3 text-royal-green font-bold mb-4">
                <Clock className="text-gold" size={20} />
                <span>Quick Support</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">Need a faster response? Chat with our team on WhatsApp for real-time assistance.</p>
              <a href="https://wa.me/919876543210" className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold flex items-center justify-center hover:opacity-90 transition-all">
                <MessageCircle className="mr-2" /> Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-50">
            <h3 className="text-3xl font-bold text-royal-green mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl focus:outline-none focus:border-gold" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl focus:outline-none focus:border-gold" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl focus:outline-none focus:border-gold" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                  <select className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl focus:outline-none focus:border-gold">
                    <option>General Inquiry</option>
                    <option>Distributorship Interest</option>
                    <option>Bulk/Wholesale Order</option>
                    <option>Feedback/Suggestions</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                <textarea rows={6} className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl focus:outline-none focus:border-gold" placeholder="Write your message here..."></textarea>
              </div>
              
              <button className="w-full bg-royal-green text-white py-5 rounded-2xl font-bold text-lg hover:bg-gold transition-all shadow-xl flex items-center justify-center group">
                Send Message <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.361413867624!2d78.6366113!3d24.9110328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzM5LjciTiA3OMKwMzgnMTEuOCJF!5e0!3m2!1sen!2sin!4v1654876251234!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
