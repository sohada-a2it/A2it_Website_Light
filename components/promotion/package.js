"use client";
import { useState } from 'react';
import ConsultModal from '@/components/promotion/promotionModal';

const packages = [
  {
    name: "Green",
    oldPrice: "$149",
    newPrice: "$99",
    badge: "Eco Starter",
    color: "green",
    features: [
      "5 Pages Responsive Website",
      "Basic SEO Optimization",
      "Contact Form with Email",
      "Mobile Responsive Design",
      "Social Media Icons",
      "Google Maps Integration",
      "1 Month Support",
      "Basic Security Setup",
    ],
  },
  {
    name: "Silver",
    oldPrice: "$299",
    newPrice: "$199",
    badge: "Most Popular",
    color: "slate",
    highlight: true,
    features: [
      "10 Pages Dynamic Website",
      "Advanced SEO Optimization",
      "Blog Integration",
      "Newsletter Subscription",
      "WhatsApp Chat Integration",
      "3 Months Support",
      "Speed Optimization",
      "SSL Certificate Included",
      "Basic E-commerce Features",
    ],
  },
  {
    name: "Gold",
    oldPrice: "$499",
    newPrice: "$399",
    badge: "Premium",
    color: "amber",
    features: [
      "Unlimited Pages Website",
      "Premium SEO Package",
      "E-commerce Full Setup",
      "Payment Gateway Integration",
      "Custom Admin Panel",
      "Advanced Analytics",
      "12 Months Priority Support",
      "Regular Backups",
      "Custom Features Development",
      "Multi-language Support",
    ],
  },
];

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleStartProject = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  // Function to get mobile color classes based on package color
  const getMobileColorClasses = (color) => {
    switch(color) {
      case 'green':
        return 'md:hover:bg-green-600 mobile-color-green';
      case 'slate':
        return 'md:hover:bg-slate-600 mobile-color-slate';
      case 'amber':
        return 'md:hover:bg-amber-600 mobile-color-amber';
      default:
        return '';
    }
  };

  // Function to get badge color classes for mobile
  const getBadgeMobileColor = (color) => {
    switch(color) {
      case 'green':
        return 'md:group-hover:bg-white md:group-hover:text-green-600 mobile-badge-green';
      case 'slate':
        return 'md:group-hover:bg-white md:group-hover:text-slate-600 mobile-badge-slate';
      case 'amber':
        return 'md:group-hover:bg-white md:group-hover:text-amber-600 mobile-badge-amber';
      default:
        return '';
    }
  };

  // Function to get button color classes for mobile
  const getButtonMobileColor = (color) => {
    switch(color) {
      case 'green':
        return 'md:group-hover:bg-white md:group-hover:text-green-600 mobile-button-green';
      case 'slate':
        return 'md:group-hover:bg-white md:group-hover:text-slate-600 mobile-button-slate';
      case 'amber':
        return 'md:group-hover:bg-white md:group-hover:text-amber-600 mobile-button-amber';
      default:
        return '';
    }
  };

  return (
    <>
      <div className="relative py-12 md:py-20 bg-gray-100 overflow-hidden">
        {/* Animated Background Elements - Responsive */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Gradient Orbs - Smaller on mobile */}
          <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
          <div className="absolute top-40 right-10 w-56 h-56 md:w-80 md:h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-medium"></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-fast"></div>
          
          {/* Animated Grid Lines - Hidden on very small devices if needed */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {/* Moving Dots - Fewer on mobile */}
          <div className="absolute inset-0 hidden md:block">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-gray-400 rounded-full animate-ping-slow"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-3 animate-fade-in px-2">
              Choose Your Perfect Package
            </h2>
            <p className="text-sm sm:text-base text-gray-500 animate-fade-in-up px-4">
              Premium solutions tailored for your business
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`group relative rounded-xl md:rounded-2xl border-2 border-gray-200 bg-white/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 transition-all duration-500 md:hover:-translate-y-3 md:hover:shadow-2xl hover:bg-opacity-100
                ${getMobileColorClasses(pkg.color)}
                ${
                  pkg.color === "green"
                    ? "border-green-200 bg-green-50/30"
                    : pkg.color === "slate"
                    ? "border-slate-200 bg-slate-50/30"
                    : "border-amber-200 bg-amber-50/30"
                }
                `}
              >
                {/* Badge */}
                <div className="absolute -top-5 md:-top-6.5 left-1/2 -translate-x-1/2">
                  <div
                    className={`px-3 md:px-4 py-0.5 md:py-1 text-xs font-semibold rounded-full transition-all duration-500 whitespace-nowrap
                    ${
                      pkg.color === "green"
                        ? "bg-green-100 text-green-700 md:group-hover:bg-white md:group-hover:text-green-600"
                        : pkg.color === "slate"
                        ? "bg-slate-100 text-slate-700 md:group-hover:bg-white md:group-hover:text-slate-600"
                        : "bg-amber-100 text-amber-700 md:group-hover:bg-white md:group-hover:text-amber-600"
                    }
                    ${getBadgeMobileColor(pkg.color)}
                    `}
                  >
                    {pkg.badge}
                  </div>
                </div>

                <div className="flex flex-col h-[380px] sm:h-[400px] md:h-[420px]">
                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-bold text-center mt-6 md:mt-4 mb-2 md:mb-3
                    ${
                      pkg.color === "green"
                        ? "text-green-700 md:group-hover:text-white"
                        : pkg.color === "slate"
                        ? "text-slate-700 md:group-hover:text-white"
                        : "text-amber-700 md:group-hover:text-white"
                    }
                  `}>
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className={`text-center mb-4 md:mb-6
                    ${
                      pkg.color === "green"
                        ? "md:group-hover:text-white"
                        : pkg.color === "slate"
                        ? "md:group-hover:text-white"
                        : "md:group-hover:text-white"
                    }
                  `}>
                    <span className={`line-through text-gray-400 max-md:text-orange-500 mr-2 text-sm md:text-base transition-colors duration-300
  ${
    pkg.color === "green"
      ? "group-hover:text-red-600"
      : pkg.color === "slate"
      ? "group-hover:text-red-600"
      : "group-hover:text-red-600"
  }
`}>
  {pkg.oldPrice}
</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      {pkg.newPrice}
                    </span>
                    <p className="text-xs mt-1 opacity-70">
                      one-time payment
                    </p>
                  </div>

                  {/* Features */}
                  <div className={`flex-1 overflow-y-auto pr-1 md:pr-2 space-y-1.5 md:space-y-2 scrollbar-hide md:group-hover:scrollbar-thin md:group-hover:scrollbar-thumb-white/50 text-xs sm:text-sm
                    ${
                      pkg.color === "green"
                        ? "md:group-hover:text-white"
                        : pkg.color === "slate"
                        ? "md:group-hover:text-white"
                        : "md:group-hover:text-white"
                    }
                  `}>
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-1.5 md:gap-2">
                        <span className={`font-bold mt-0.5
                          ${
                            pkg.color === "green"
                              ? "text-green-600 md:group-hover:text-white"
                              : pkg.color === "slate"
                              ? "text-slate-600 md:group-hover:text-white"
                              : "text-amber-600 md:group-hover:text-white"
                          }
                        `}>✓</span>
                        <span className="flex-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => handleStartProject(pkg)}
                    className={`mt-4 md:mt-6 w-full py-2.5 md:py-3 rounded-lg font-semibold transition-all duration-300 transform active:scale-95 md:hover:scale-105 text-sm md:text-base
                    ${
                      pkg.color === "green"
                        ? "bg-green-600 text-white md:group-hover:bg-white md:group-hover:text-green-600"
                        : pkg.color === "slate"
                        ? "bg-slate-600 text-white md:group-hover:bg-white md:group-hover:text-slate-600"
                        : "bg-amber-600 text-white md:group-hover:bg-white md:group-hover:text-amber-600"
                    }
                    ${getButtonMobileColor(pkg.color)}
                    `}
                  >
                    Start Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx global>{`
          .scrollbar-thin::-webkit-scrollbar {
            width: 3px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.6);
            border-radius: 10px;
          }
          .scrollbar-hide::-webkit-scrollbar {
            width: 0px;
          }
          
          /* Background Pattern */
          .bg-grid-pattern {
            background-image: linear-gradient(to right, #80808012 1px, transparent 1px),
              linear-gradient(to bottom, #80808012 1px, transparent 1px);
            background-size: 50px 50px;
          }
          
          /* Mobile Color Classes - Applied without hover on mobile */
          @media (max-width: 768px) {
            .mobile-color-green {
              background-color: rgb(22 163 74) !important;
              border-color: rgb(22 163 74) !important;
              color: white !important;
            }
            
            .mobile-color-slate {
              background-color: rgb(71 85 105) !important;
              border-color: rgb(71 85 105) !important;
              color: white !important;
            }
            
            .mobile-color-amber {
              background-color: rgb(217 119 6) !important;
              border-color: rgb(217 119 6) !important;
              color: white !important;
            }
            
            /* Mobile badge colors */
            .mobile-badge-green {
              background-color: white !important;
              color: rgb(22 163 74) !important;
            }
            
            .mobile-badge-slate {
              background-color: white !important;
              color: rgb(71 85 105) !important;
            }
            
            .mobile-badge-amber {
              background-color: white !important;
              color: rgb(217 119 6) !important;
            }
            
            /* Mobile button colors */
            .mobile-button-green {
              background-color: white !important;
              color: rgb(22 163 74) !important;
            }
            
            .mobile-button-slate {
              background-color: white !important;
              color: rgb(71 85 105) !important;
            }
            
            .mobile-button-amber {
              background-color: white !important;
              color: rgb(217 119 6) !important;
            }
          }
          
          /* Animation Keyframes */
          @keyframes float-slow {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
          }
          
          @keyframes float-medium {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(-20px, 30px) scale(1.1); }
            75% { transform: translate(20px, -20px) scale(0.9); }
          }
          
          @keyframes float-fast {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(40px, -40px) rotate(180deg); }
          }
          
          @keyframes ping-slow {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(2); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
          
          @keyframes wave {
            0% { transform: translateX(0) translateZ(0) scaleY(1); }
            50% { transform: translateX(-25%) translateZ(0) scaleY(0.8); }
            100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
          }
          
          @keyframes dash {
            to { stroke-dashoffset: 120; }
          }
          
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Animation Classes */
          .animate-float-slow {
            animation: float-slow 20s ease-in-out infinite;
          }
          
          .animate-float-medium {
            animation: float-medium 15s ease-in-out infinite;
          }
          
          .animate-float-fast {
            animation: float-fast 12s ease-in-out infinite;
          }
          
          .animate-ping-slow {
            animation: ping-slow 4s ease-in-out infinite;
          }
          
          .animate-wave {
            animation: wave 15s linear infinite;
          }
          
          .animate-dash {
            stroke-dasharray: 60;
            animation: dash 20s linear infinite;
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out 0.2s both;
          }
        `}</style>
      </div>

      {/* Consult Modal */}
      <ConsultModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedPackage={selectedPackage}
      />
    </>
  );
}