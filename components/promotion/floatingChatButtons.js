"use client";
import { PhoneCall, FileText, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import ConsultModal from '@/components/promotion/promotionModal';

export default function FloatingButtons() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* Top Two Buttons Container */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
          {/* Call Button */}
          <div 
            className="relative"
            onMouseEnter={() => setHoveredButton('call')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <div className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
              hoveredButton === 'call' 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-4 pointer-events-none'
            }`}>
              <span className="font-medium">Call Now</span>
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-green-500"></div>
            </div>
            
            <button
              onClick={() => window.location.href = 'tel:+1234567890'}
              className="bg-[#f5b342] hover:bg-[#7e602c] text-white w-12 h-12 rounded-l-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:translate-x-[-4px] relative z-10"
            >
              <PhoneCall className="w-5 h-5" />
            </button>
          </div>

          {/* Get Consult Button */}
          <div 
            className="relative"
            onMouseEnter={() => setHoveredButton('consult')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <div className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
              hoveredButton === 'consult' 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-4 pointer-events-none'
            }`}>
              <span className="font-medium">Get Consult</span>
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-blue-500"></div>
            </div>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-l-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:translate-x-[-4px] relative z-10"
            >
              <FileText className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom WhatsApp Button */}
        <button
          onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          className="relative bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-white/20"
        >
          <MessageCircle className="w-6 h-6" /> 
          <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-30"></span>
        </button>
      </div>

      {/* Consult Modal */}
      <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}