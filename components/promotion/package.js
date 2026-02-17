"use client";

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
  return (
    <div className="relative py-20 bg-gray-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-medium"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-fast"></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Moving Dots */}
        <div className="absolute inset-0">
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

        {/* Animated Waves */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-primary animate-wave"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        {/* Animated Lines */}
        <div className="absolute inset-0">
          <svg className="absolute w-full h-full opacity-10">
            <defs>
              <pattern id="pattern-lines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 60 0" stroke="currentColor" strokeWidth="0.5" className="text-gray-500 animate-dash" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-lines)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 animate-fade-in">
            Choose Your Perfect Package
          </h2>
          <p className="text-gray-500 animate-fade-in-up">
            Premium solutions tailored for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border-2 border-gray-200 bg-white/90 backdrop-blur-sm p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-opacity-100
              ${
                pkg.color === "green"
                  ? "hover:bg-green-600 hover:border-green-600 hover:text-white"
                  : pkg.color === "slate"
                  ? "hover:bg-slate-600 hover:border-slate-600 hover:text-white"
                  : "hover:bg-amber-600 hover:border-amber-600 hover:text-white"
              }
              `}
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div
                  className={`px-4 py-1 text-xs font-semibold rounded-full transition-all duration-500
                  ${
                    pkg.color === "green"
                      ? "bg-green-100 text-green-700 group-hover:bg-white group-hover:text-green-600"
                      : pkg.color === "slate"
                      ? "bg-slate-100 text-slate-700 group-hover:bg-white group-hover:text-slate-600"
                      : "bg-amber-100 text-amber-700 group-hover:bg-white group-hover:text-amber-600"
                  }
                  `}
                >
                  {pkg.badge}
                </div>
              </div>

              <div className="flex flex-col h-[420px]">
                {/* Title */}
                <h3 className="text-2xl font-bold text-center mt-4 mb-3">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="line-through text-gray-400 mr-2 group-hover:text-gray-200">
                    {pkg.oldPrice}
                  </span>
                  <span className="text-4xl font-bold">
                    {pkg.newPrice}
                  </span>
                  <p className="text-xs mt-1 opacity-70">
                    one-time payment
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-2 scrollbar-hide group-hover:scrollbar-thin group-hover:scrollbar-thumb-white/50">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="font-bold">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  className={`mt-6 w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
                  ${
                    pkg.color === "green"
                      ? "bg-green-600 text-white group-hover:bg-white group-hover:text-green-600"
                      : pkg.color === "slate"
                      ? "bg-slate-600 text-white group-hover:bg-white group-hover:text-slate-600"
                      : "bg-amber-600 text-white group-hover:bg-white group-hover:text-amber-600"
                  }
                  `}
                >
                  Get Started
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
  );
}