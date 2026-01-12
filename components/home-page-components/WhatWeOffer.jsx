"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  ShoppingCart,
  Database,
  TrendingUp,
  Share2,
  Store,
  Tag,
  ShoppingBag,
  Palette,
  Server,
} from "lucide-react";
import { useRouter } from "next/navigation";

const WhatWeOffer = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 services

  const categories = [
    { id: "all", label: "All Services" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "development", label: "Development" },
    { id: "marketing", label: "Marketing" },
    { id: "design", label: "Design" },
  ];

  const colorPattern = [
    { color: "bg-[#0066ff]", textColor: "text-[#0066ff]", borderColor: "border-[#0066ff]", gradient: "from-[#0066ff] via-[#3385ff] to-[#66a3ff]" },
    { color: "bg-[#00a0ff]", textColor: "text-[#00a0ff]", borderColor: "border-[#00a0ff]", gradient: "from-[#00a0ff] via-[#33b5ff] to-[#66caff]" }, 
  ];

  const services = [
    { title: "Amazon", icon: <ShoppingCart />, description: "End-to-end Amazon store solutions including product listing, optimization, and sales growth strategies.", features: ["Product Listing", "SEO Optimization", "Ad Campaigns"], color: "bg-[#0066ff]", path: "/services/amazon", category: "ecommerce" },
    { title: "Shopify Development", icon: <Store />, description: "Custom Shopify stores with seamless design, secure checkout, and optimized performance to boost sales.", features: ["Theme Customization", "App Integration", "Payment Gateway Setup"], color: "bg-[#00a0ff]", path: "/services/shopify", category: "ecommerce" },
    { title: "Web Designing & Development", icon: <Code />, description: "Custom websites with modern design and robust functionality tailored to your business needs.", features: ["Responsive Design", "SEO Optimized", "CMS Integration"], color: "bg-[#00f0ff]", path: "/services/design-development", category: "development" },
    { title: "eBay Store Management", icon: <Tag />, description: "Professional eBay store setup and management with optimized product listings and sales strategies to maximize revenue.", features: ["Store Setup", "Product Listing Optimization", "Promoted Listings"], color: "bg-[#0066ff]", path: "/services/e-bay", category: "ecommerce" },
    { title: "Mobile App Designing & Development", icon: <Smartphone />, description: "High-performance iOS/Android apps built for engagement and scalability.", features: ["Cross-Platform", "Native Development", "User-Centric Design"], color: "bg-[#00a0ff]", path: "/services/mobile-app", category: "development" },
    { title: "eCommerce Development Solutions", icon: <ShoppingBag />, description: "Complete online stores with secure payment gateways and inventory management.", features: ["Shopify", "WooCommerce", "Custom Solutions"], color: "bg-[#00f0ff]", path: "/services/e-commerce", category: "ecommerce" },
    { title: "ERP System Development", icon: <Database />, description: "Custom enterprise systems to streamline your business operations.", features: ["Inventory Management", "CRM Integration", "Analytics"], color: "bg-[#0066ff]", path: "/services/erp", category: "development" },
    { title: "SEO / SEM / PPC", icon: <TrendingUp />, description: "Comprehensive strategies to boost your online visibility and conversions.", features: ["Search Optimization", "Pay-Per-Click", "Conversion Tracking"], color: "bg-[#00a0ff]", path: "/services/seo", category: "marketing" },
    { title: "UI/UX Design", icon: <Palette />, description: "Crafting intuitive and engaging user interfaces with seamless experiences that delight your customers.", features: ["User Research", "Wireframing & Prototyping", "Interactive Design"], color: "bg-[#00f0ff]", path: "/services/design-development", category: "design" },
    { title: "Social Media Marketing", icon: <Share2 />, description: "Engaging social strategies to grow your audience and brand presence.", features: ["Content Strategy", "Community Management", "Campaigns"], color: "bg-[#0066ff]", path: "/services/social-media", category: "marketing" },
    { title: "Server and Hosting Services", icon: <Server />, description: "Reliable hosting and server solutions for your digital infrastructure.", features: ["Dedicated Servers", "Cloud Hosting", "24/7 Support"], color: "bg-[#00a0ff]", path: "/services/server-hosting", category: "development" },
  ];

  const servicesWithColors = services.map((service, index) => ({
    ...service,
    ...colorPattern[index % colorPattern.length],
  }));

  const filteredServices = activeCategory === "all"
    ? servicesWithColors
    : servicesWithColors.filter(service => service.category === activeCategory);

  const visibleServices = filteredServices.slice(0, visibleCount);

  const allLoaded = visibleCount >= filteredServices.length;

  return (
    <section className="relative py-10 md:py-14 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#0066ff] filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#00a0ff] to-[#0066ff] filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center bg-[#00f0ff]/10 p-3 md:p-4 rounded-full mb-4 md:mb-6">
            <Code className="w-6 h-6 md:w-8 md:h-8 text-[#00f0ff]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4">
            Our <span className="text-[#0066ff]">Services</span>
          </h2>
          <motion.div className="h-1 bg-gradient-to-r from-[#00f0ff] via-[#0066ff] to-transparent rounded-full mx-auto w-24 md:w-32 mb-3 md:mb-4" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} />
          <p className="text-black/60 text-base md:text-lg max-w-2xl mx-auto px-2">Comprehensive digital solutions tailored to elevate your business to new heights</p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category.id);
                setVisibleCount(4); // Reset
              }}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {visibleServices.map((service, index) => (
            <motion.div
              key={service.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 25 } }}
              className="group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:border-gray-300">
                <div className={`h-1.5 ${service.color}`}></div>
                <div className="p-5 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-lg ${service.color} bg-opacity-10 flex items-center justify-center`}>
                        {React.cloneElement(service.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded-full">{categories.find(cat => cat.id === service.category)?.label || service.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                  </div>

                  <div className="mt-auto">
                    <div className="space-y-2 mb-5">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full ${service.color} mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => router.push(service.path)}
                      className={`w-full py-2.5 ${service.color} text-white font-medium rounded-lg text-sm transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer`}
                    >
                      View Details
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </motion.button>
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More / Show Less Button */}
        {filteredServices.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(allLoaded ? 4 : visibleCount + 4)}
              className="px-6 py-2.5 bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white font-medium rounded-lg text-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {allLoaded ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhatWeOffer;
