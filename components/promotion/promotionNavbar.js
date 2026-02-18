// components/Navbar.jsx
"use client";

import { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, Menu, X } from 'lucide-react';

const navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          w-full left-0 z-50 transition-all duration-300
          ${scrolled 
            ? 'fixed top-0 bg-secondary/95 backdrop-blur-md shadow-lg border-b border-[#f5b342]' 
            : 'absolute top-0 bg-gradient-to-b from-black/30 to-transparent'
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Brand Section */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1">
                <img 
                  className='w-8 sm:w-12 md:w-10 lg:w-14 object-contain transition-all duration-300' 
                  src="/images/A2ITLogo.png" 
                  alt="A2IT Logo" 
                />
              </div>
            </div>

            {/* Desktop Contact Section */}
            <div className="hidden md:flex items-center gap-3 lg:gap-6">
              {/* Email */}
              <div className={`
                items-center gap-2
                ${scrolled ? 'text-gray-700' : 'text-white'}
              `}>
                <a 
                  href="mailto:LEADS@DESIGNSGENIE.COM"
                  className="hidden lg:flex items-center gap-2 group"
                >
                  <Mail size={18} className="text-[#f5b342] group-hover:scale-110 transition-transform" />
                  <span className="text-sm hover:text-[#f5b342] transition-colors border-b border-dashed border-white/30 whitespace-nowrap">
                    LEADS@DESIGNSGENIE.COM
                  </span>
                </a>
              </div>

              {/* Phone */}
              <div className={`
                flex items-center gap-2
                ${scrolled ? 'text-gray-700' : 'text-white'}
              `}>
                <a 
                  href="tel:+18723353070"
                  className="flex items-center gap-2 group"
                >
                  <Phone size={18} className="text-[#f5b342] group-hover:scale-110 transition-transform" />
                  <span className="font-medium hover:text-[#f5b342] transition-colors whitespace-nowrap text-sm lg:text-base">
                    (872) 335-3070
                  </span>
                </a>
              </div>

              {/* Chat Button */}
              <button className={`
                bg-[#f5b342] text-[#0b1c2f] font-semibold rounded-full 
                flex items-center gap-2 transition-all duration-300
                hover:bg-[#f5b342]/90 hover:scale-105 active:scale-95
                whitespace-nowrap group
                ${scrolled 
                  ? 'py-2 px-4 text-sm shadow-md' 
                  : 'py-2.5 px-5 text-sm lg:text-base shadow-lg shadow-[#f5b342]/20'
                }
              `}>
                <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                <span className="hidden sm:inline">CHAT WITH US</span>
                <span className="sm:hidden">CHAT</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              {/* Mobile Phone - Always visible */}
              <a 
                href="tel:+18723353070"
                className={`
                  p-2 rounded-full transition-all duration-300
                  ${scrolled 
                    ? 'bg-secondary/80 text-gray-300' 
                    : 'bg-white/10 text-white backdrop-blur-sm'
                  }
                `}
              >
                <Phone size={18} className="text-[#f5b342]" />
              </a>

              {/* Mobile Chat Icon */}
              <button className={`
                p-2 rounded-full transition-all duration-300
                ${scrolled 
                  ? 'bg-secondary/80 text-gray-300' 
                  : 'bg-white/10 text-white backdrop-blur-sm'
                }
              `}>
                <MessageCircle size={18} className="text-[#f5b342]" />
              </button>

              {/* Hamburger Menu */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`
                  p-2 rounded-lg transition-all duration-300
                  ${scrolled 
                    ? 'bg-secondary/80 text-gray-300' 
                    : 'bg-white/10 text-white backdrop-blur-sm'
                  }
                `}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${mobileMenuOpen ? 'max-h-60 opacity-100 py-4' : 'max-h-0 opacity-0'}
          `}>
            <div className={`
              rounded-xl p-4 space-y-3
              ${scrolled 
                ? 'bg-secondary/95 backdrop-blur-md' 
                : 'bg-black/40 backdrop-blur-md'
              }
            `}>
              {/* Mobile Email */}
              <a 
                href="mailto:LEADS@DESIGNSGENIE.COM"
                className={`
                  flex items-center gap-3 p-2 rounded-lg transition-colors
                  ${scrolled ? 'text-gray-300' : 'text-white'}
                  hover:bg-white/10
                `}
              >
                <Mail size={18} className="text-[#f5b342]" />
                <span className="text-sm">LEADS@DESIGNSGENIE.COM</span>
              </a>

              {/* Mobile Phone (full) */}
              <a 
                href="tel:+18723353070"
                className={`
                  flex items-center gap-3 p-2 rounded-lg transition-colors
                  ${scrolled ? 'text-gray-300' : 'text-white'}
                  hover:bg-white/10
                `}
              >
                <Phone size={18} className="text-[#f5b342]" />
                <span className="text-sm font-medium">(872) 335-3070</span>
              </a>

              {/* Mobile Full Chat Button */}
              <button className="
                w-full bg-[#f5b342] text-[#0b1c2f] font-semibold rounded-lg 
                flex items-center justify-center gap-2 py-3 px-4
                hover:bg-[#f5b342]/90 transition-all duration-300
              ">
                <MessageCircle size={18} />
                <span>CHAT WITH US</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      {scrolled && <div className="h-[72px] sm:h-[80px] md:h-[88px]" />}
    </>
  );
};

export default navbar;