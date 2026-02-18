"use client";
import { X } from 'lucide-react';

const ConsultModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content - Compact and Beautiful */}
      <div className="relative bg-white rounded-2xl max-w-md w-full mx-auto shadow-2xl transform transition-all h-[500px]">
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-[#7e602c] to-[#f5b342] rounded-t-2xl p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              LIMITED TIME OFFER
            </div>
            <h2 className="text-2xl font-bold mb-1">
              ACTIVATE YOUR <span className="text-yellow-300">70% OFF</span>
            </h2>
            <p className="text-sm text-white/90">
              Everywhere & Every Device, Your Site Should Flow Seamlessly!
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-6 py-2">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Full Name <span className="text-[#7e602c]">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f5b342] focus:border-[#f5b342] outline-none transition bg-gray-50/50"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Email Address <span className="text-[#7e602c]">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f5b342] focus:border-[#f5b342] outline-none transition bg-gray-50/50"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Phone Number <span className="text-[#7e602c]">*</span>
              </label>
              <input
                type="tel"
                required
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f5b342] focus:border-[#f5b342] outline-none transition bg-gray-50/50"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600">
                Project Description
              </label>
              <textarea
                rows="2"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f5b342] focus:border-[#f5b342] outline-none transition bg-gray-50/50 resize-none"
                placeholder="Brief description about your project"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f5b342] text-white font-bold py-1.5 px-4 rounded-lg text-sm hover:bg-[#e4a231] transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              ACTIVATE YOUR COUPON NOW
            </button> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultModal;