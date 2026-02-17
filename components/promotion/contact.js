import React from 'react';

const contact = () => {
  return (
    <div className="min-h-screen bg-[#e8d5c8] flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Background Floating Bubbles (Decorative) */}
      <div className="absolute top-20 left-[15%] w-48 h-24 bg-[#4a4e69] rounded-xl shadow-2xl opacity-90 transform -rotate-2 hidden lg:block"></div>
      <div className="absolute top-24 right-[20%] w-52 h-28 bg-[#f2cc8f] rounded-xl shadow-2xl opacity-40 transform rotate-3 hidden lg:block"></div>
      <div className="absolute bottom-24 right-[10%] w-64 h-32 bg-[#3d405b] rounded-xl shadow-2xl opacity-90 transform -rotate-1 hidden lg:block"></div>
      
      <div className="relative z-10 w-full max-w-4xl">
        
        {/* Main Content Box (Speech Bubble Style) */}
        <div className="relative bg-white border-[12px] border-gray-100/50 rounded-2xl p-10 md:p-16 shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.1)] text-center max-w-2xl mx-auto">
          
          {/* Bubble Tail */}
          <div className="absolute -bottom-[50px] right-12 w-0 h-0 
            border-l-[30px] border-l-transparent 
            border-t-[40px] border-t-white 
            border-r-[30px] border-r-transparent 
            drop-shadow-[15px_15px_15px_rgba(0,0,0,0.05)]">
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-[#1a3a5f] mb-4 leading-tight">
            Require a Rapid Project Delivery?
          </h1>
          <p className="text-lg font-bold text-gray-800 mb-6">
            Contact Us Now - We're Ready to Assist!
          </p>
          <p className="text-gray-500 leading-relaxed text-base md:text-lg max-w-lg mx-auto">
            Whether you seek a brand-new website or wish to rejuvenate an existing one, 
            our dedicated customer representatives are just a phone call away, 
            eager to address your inquiries.
          </p>
        </div>

        {/* Floating Action Elements */}
        
        {/* Get a Quote Button */}
        <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2">
          <button className="bg-[#0071bc] text-white px-8 py-4 rounded-lg font-black shadow-[10px_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-all text-sm md:text-base uppercase">
            Get a Quote
          </button>
        </div>

        {/* Phone Number Box */}
        <div className="absolute -bottom-8 right-0 md:right-[-10%] bg-[#2d3436] text-white p-4 px-6 rounded-xl flex items-center gap-3 shadow-2xl border border-gray-600">
          <div className="bg-white/10 p-2 rounded-full">
             <span className="text-xl">📞</span>
          </div>
          <span className="text-lg md:text-xl font-mono font-bold tracking-tighter">
            (872) 335-3070
          </span>
        </div>

        {/* Live Chat Component */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-[#fbe5d6] border-2 border-[#e6ccb2] px-10 py-4 rounded-xl shadow-xl flex items-center gap-3 cursor-pointer hover:bg-white transition-colors">
          <span className="text-2xl">💬</span>
          <span className="text-[#a68a73] font-bold text-lg">Live Chat With Us</span>
          {/* Small tail for chat */}
          <div className="absolute -top-3 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-b-[12px] border-b-[#fbe5d6] border-r-[10px] border-r-transparent"></div>
        </div>

      </div>
    </div>
  );
};

export default contact;