"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaDollarSign, FaClock } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BiPaint } from "react-icons/bi";
import { motion } from "framer-motion";

const features = [
  { icon: <FaDollarSign className="w-6 h-6 text-[#FD5621]" />, title: "Money-Back Policy" },
  { icon: <AiFillStar className="w-6 h-6 text-[#FD5621]" />, title: "Customer Satisfaction" },
  { icon: <FaClock className="w-6 h-6 text-[#FD5621]" />, title: "Round-the-Clock Support" },
  { icon: <BiPaint className="w-6 h-6 text-[#FD5621]" />, title: "Custom Crafted Designs" },
];

const collageImages = [
  { src: "/images/achieve (1).jpg", top: 0, left: 10, w: 200, h: 200, rotate: 3 },
  { src: "/images/achieve (2).jpg", top: 40, left: 150, w: 180, h: 180, rotate: -6 },
  { src: "/images/achieve (3).jpg", top: 100, left: 60, w: 160, h: 160, rotate: 6 },
  { src: "/images/achieve (4).jpg", top: 60, left: 220, w: 180, h: 180, rotate: -3 },
  { src: "/images/achieve (5).jpg", top: 150, left: 140, w: 200, h: 200, rotate: 4 },
  { src: "/images/achieve (6).jpg", top: 20, left: 300, w: 170, h: 170, rotate: -5 },
];

const BrandEnhancement = () => {
  const [activeImage, setActiveImage] = useState(0);

  // Auto-cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % collageImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden ">
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-[#FD5621]/10 rounded-full top-10 left-10 animate-pulseSlow"></div>
        <div className="absolute w-72 h-72 bg-[#122652]/10 rounded-full bottom-20 right-20 animate-pulseSlow"></div>
        <div className="absolute w-64 h-64 bg-[#FD5621]/20 rounded-full top-1/2 left-1/3 animate-spinSlow"></div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        {/* Left - Image Collage */}
        <motion.div
          className="flex-1 relative w-full h-[500px] top-[55px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {collageImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="absolute rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-transform duration-300"
              style={{
                top: img.top + "px",
                left: img.left + "px",
                width: img.w + "px",
                height: img.h + "px",
                zIndex: activeImage === idx ? 10 : idx,
                filter: activeImage === idx ? "blur(0px) brightness(1)" : "blur(0.1px) brightness(0.7)",
              }}
              whileHover={{ scale: 1.05, rotate: img.rotate }}
              animate={{
                scale: activeImage === idx ? 1.1 : 1,
                rotate: activeImage === idx ? 0 : img.rotate,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => setActiveImage(idx)}
            >
              <Image
                src={img.src}
                alt={`Brand Collage ${idx + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right - Features */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Achieve Professional <span className="text-[#FD5621]">Growth</span> through Brand{" "}
            <span className="text-[#FD5621]">Enhancement</span>
          </h2>
          <p className="text-gray-600 text-lg">
            From the initial conceptualization till the final delivery of the designs, we make sure each step is smooth, transparent & flawless.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 rounded-xl shadow-lg cursor-pointer transition-all duration-300
                           bg-white hover:bg-gradient-to-r hover:from-[#FD5621]/30 hover:to-[#122652]/30"
              >
                <div className="p-3 rounded-full transition-colors duration-300 bg-white/20">
                  {feature.icon}
                </div>
                <span className="font-semibold text-gray-900 hover:text-white transition-colors duration-300">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandEnhancement;
