// components/HeroSection.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Clock,
  X
} from "lucide-react";
import Image from "next/image";

// Platforms Slider Component
const platforms = [
  { name: "Magento", src: "/images/brand (1).png" },
  { name: "WordPress", src: "/images/brand (2).png" },
  { name: "WooCommerce", src: "/images/brand (3).png" },
  { name: "Laravel", src: "/images/brand (4).png" },
  { name: "CSS3", src: "/images/brand (5).png" },
  { name: "HTML5", src: "/images/brand (6).png" },
  { name: "OpenCart", src: "/images/brand (7).png" },
];

const PlatformsSlider = () => {
  return (
    <div className="relative py-3 overflow-hidden animate-fade-in z-30">
      <div className="flex animate-scroll whitespace-nowrap gap-12">
        {platforms.concat(platforms).map((platform, index) => (
          <div key={index} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
            <Image
              src={platform.src}
              alt={platform.name}
              width={128}
              height={64}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

// Main Hero Section
const banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [mounted, setMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full overflow-hidden bg-[#0a192f] pt-40 ">
      
      {/* Platforms Logos Floating Above Banner */}
      <div className="absolute bottom-2 z-40 left-0 w-full flex justify-center">
  <PlatformsSlider />
</div>


      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/banner.png')" }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f5b342]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Content */}
          <div className={`space-y-5 sm:space-y-6 text-white order-2 lg:order-1 transition-all duration-500 ${showForm ? 'lg:col-span-1' : 'lg:col-span-2 lg:max-w-3xl lg:mx-auto text-center'}`}>
            
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#f5b342]/30 w-auto hover:border-[#f5b342]/50 hover:bg-white/15 transition-all group cursor-pointer ${showForm ? '' : 'mx-auto'}`}
            >
              <Sparkles size={14} className="text-[#f5b342] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium text-[#f5b342] tracking-wide whitespace-nowrap">
                WEBSITES FROM $199
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-xl font-bold leading-tight ${showForm ? '' : 'mx-auto'}`}
            >
              <span className="text-white">Web Designs Starts from </span>{' '}
              <span className="text-[#f5b342] relative inline-block"> 
                $199 ONLY
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#f5b342] to-transparent rounded-full"></span>
              </span>
              <br />
              <span className="text-lg sm:text-xl md:text-2xl text-gray-200 font-normal block mt-2 sm:mt-3 max-w-2xl ${showForm ? '' : 'mx-auto'}">
                Your Vision, Our Magic ✨
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl border-l-2 border-[#f5b342] pl-4 italic ${showForm ? '' : 'mx-auto'}`}
            >
              Designs Genie is your versatile platform for crafting stunning, interactive websites, catering to personal blogs, e-commerce shops, corporate sites, and custom web applications, all designed to captivate your audience.
            </motion.p> 

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`flex flex-col sm:flex-row items-stretch sm:items-center pb-10 gap-3 sm:gap-4 pt-5 ${showForm ? '' : 'justify-center'}`}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="bg-[#f5b342] text-[#0a192f] text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#f5b342]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#f5b342]/20 hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">GET STARTED</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:border-white/40 group"
              >
                <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                CHAT WITH US
              </motion.button>
            </motion.div>
          </div>

          {/* Right Form */}
          <AnimatePresence mode="wait">
            {showForm && (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className="relative lg:justify-self-end w-full max-w-md mx-auto lg:mx-0 order-1 lg:order-2"
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  onClick={() => setShowForm(false)}
                  className="absolute -top-2 -right-2 z-30 bg-white/20 backdrop-blur-sm text-white p-1.5 rounded-full hover:bg-white/30 transition-all border border-white/30"
                >
                  <X size={16} />
                </motion.button>

                {/* Offer Badge */}
                <motion.div 
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute -top-2 -right-1 z-20 bg-gradient-to-r from-[#f5b342] to-[#f5d742] text-[#0a192f] px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-lg"
                >
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="animate-spin" />
                    50% OFF
                  </span>
                </motion.div>

                {/* Form Container */}
                <div className="relative group">
                  <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20 shadow-xl">
                    
                    {/* Decorative Elements */}
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -top-3 -left-3 w-12 h-12 bg-[#f5b342]/20 rounded-full blur-md"
                    ></motion.div>
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                      className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#f5b342]/20 rounded-full blur-md"
                    ></motion.div>

                    <div className="relative z-10">
                      {/* Header */}
                      <motion.div 
                        initial={{ y: -15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-3"
                      >
                        <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
                          Sign up Now To Unlock Exclusive Discounts!
                        </h2>
                        <motion.div 
                          animate={{ scale: [1, 1.03, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="inline-block bg-white/10 text-[#f5b342] px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium border border-[#f5b342]/30"
                        >
                          Up to 50% Off On Website Packages
                        </motion.div>
                      </motion.div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-2.5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {['name', 'email'].map((field, index) => (
                            <motion.div
                              key={field}
                              initial={{ x: -15, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.2 + index * 0.1 }}
                            >
                              <input
                                type={field === 'email' ? 'email' : 'text'}
                                name={field}
                                placeholder={field === 'name' ? 'Your name' : 'Email'}
                                value={formData[field]}
                                onChange={handleChange}
                                className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-xs placeholder-gray-300 focus:outline-none focus:border-[#f5b342] focus:ring-2 focus:ring-[#f5b342]/20 transition-all"
                                required={field === 'name'}
                              />
                            </motion.div>
                          ))}
                        </div>

                        <motion.div initial={{ x: -15, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-xs placeholder-gray-300 focus:outline-none focus:border-[#f5b342] focus:ring-2 focus:ring-[#f5b342]/20 transition-all"
                          />
                        </motion.div>

                        <motion.div initial={{ x: -15, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                          <textarea
                            name="description"
                            placeholder="Project details..."
                            value={formData.description}
                            onChange={handleChange}
                            rows={2}
                            className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-xs placeholder-gray-300 focus:outline-none focus:border-[#f5b342] focus:ring-2 focus:ring-[#f5b342]/20 transition-all resize-none"
                          />
                        </motion.div>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="w-full bg-gradient-to-r from-[#f5b342] to-[#f5d742] text-[#0a192f] font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-[#f5b342]/20 transition-all duration-300 text-xs flex items-center justify-center gap-1.5 group relative overflow-hidden"
                        >
                          <span className="relative z-10">Send Request</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </motion.button>
                      </form> 
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default banner;
