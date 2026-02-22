"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const projects = [
  { 
    id: 2, 
    img: "/images/project (2).jpeg", 
    category: "affiliate",
    title: "Asian Import Export LTD",
    description: "Our agricultural solutions are designed to support modern farming through sustainable practices, premium-quality products, and efficient supply chains.",
    technologies: ["Next.js", "Nodemailer", "JavaScript"],
    client: "Craft Masters",
    date: "2024"
  },
  { 
    id: 3, 
    img: "/images/project (3).jpeg", 
    category: "affiliate",
    title: "Asian Import Export Co.",
    description: "An import-export e-commerce platform connecting Asian manufacturers with global buyers.",
    technologies: [ "Next.js", "Nodemailer", "JavaScript"],
    client: "Tech Corp",
    date: "2023"
  },
  { 
    id: 4, 
    img: "/images/project (4).jpeg", 
    category: "ecommerce",
    title: "BestBikeReview – Affiliate Bike Review Platform",
    description: "Affiliate-based bicycle review and buying guide platform focused on helping users choose the best bikes and accessories.",
    technologies: ["React", "Node.js", "MongoDB"],
    client: "Review Pros",
    date: "2024"
  },
  { 
    id: 5, 
    img: "/images/project (5).jpeg", 
    category: "affiliate",
    title: "BestGearBuy – Affiliate Product Discovery Platform",
    description: "Affiliate-driven product discovery and buying guide platform focused on electronics, tools, and everyday gear.",
    technologies: ["Next.js", "Framer Motion", "Nodemailer"],
    client: "Creative Agency",
    date: "2023"
  },
  { 
    id: 6, 
    img: "/images/project (6).jpeg", 
    category: "ecommerce",
    title: "BestBuyersView – Discover, Compare &amp; Pick the Best Products",
    description: "A scalable UI/UX design system created to support a high-performance affiliate review and content-driven platform.",
    technologies: ["Next.js", "Node.js", "express.js","mongodb"],
    client: "Fresh Foods",
    date: "2024"
  },
  { 
    id: 7, 
    img: "/images/project (7).jpeg", 
    category: "affiliate",
    title: "Best Baby Gears",
    description: "A centralized analytics dashboard to track affiliate performance, content growth, and traffic insights across multiple review websites.",
    technologies: ["Next.js", "Framer Motion"],
    client: "Diamond Collections",
    date: "2023"
  },
  { 
    id: 8, 
    img: "/images/project (8).jpeg", 
    category: "affiliate",
    title: "Best Smart Gadget",
    description: "A centralized analytics dashboard to track affiliate performance, content growth, and traffic insights across multiple review websites.",
    technologies: ["Next.js", "Framer Motion"],
    client: "Daily News",
    date: "2024"
  },
  { 
    id: 9, 
    img: "/images/project (9).jpeg", 
    category: "shopify",
    title: "BackPack Pro – Affiliate Travel Gear Review Platform",
    description: "A travel gear review platform providing in-depth analysis and affiliate links for the latest backpacks and travel accessories.",
    technologies: ["shopify"],
    client: "Tech Savvy",
    date: "2023"
  },
  { 
    id: 10, 
    img: "/images/project (10).jpeg", 
    category: "wordpress",
    title: "Kitchen Pro Supply – Kitchen Appliances & Equipment Review Platform",
    description: "An affiliate-driven kitchen appliance and equipment review platform helping users choose the best tools for home and professional kitchens.",
    technologies: ["HTML", "CSS", "JavaScript"],
    client: "Gourmet Bistro",
    date: "2024"
  },
  { 
    id: 11, 
    img: "/images/project (11).jpeg", 
    category: "affiliate",
    title: "BestProductBuy – Affiliate Product Comparison Platform",
    description: "A scalable affiliate product discovery platform helping users find the best products through comparisons, reviews, and buying guides.",
    technologies: ["HTML", "CSS", "JavaScript"],
    client: "Gourmet Bistro",
    date: "2024"
  },
  { 
    id: 12, 
    img: "/images/project (12).jpeg", 
    category: "ecommerce",
    title: "Fitness and Health Store",
    description: "A scalable e-commerce store for fitness and health products, built on Shopify with a focus on user experience and product discovery.",
    technologies: ["HTML", "CSS", "JavaScript"],
    client: "Gourmet Bistro",
    date: "2024"
  },
  { 
    id: 13, 
    img: "/images/project (13).jpeg", 
    category: "wordpress",
    title: "JuteCraftify – Sustainable Jute E-commerce Platform",
    description: "A modern e-commerce platform dedicated to promoting sustainable jute products worldwide, featuring secure payments, streamlined inventory management, and export-ready workflows.",
    technologies: ["HTML", "CSS", "JavaScript","wordpress"],
    client: "Gourmet Bistro",
    date: "2024"
  },
  { 
    id: 14, 
    img: "/images/project (14).jpeg", 
    category: "wordpress",
    title: "Cargo Logistic Company",
    description: "Moving Your Cargo, Moving Your Business Forward.",
    technologies: ["HTML", "CSS", "JavaScript","wordpress"],
    client: "Gourmet Bistro",
    date: "2024"
  },
];

// Get unique categories with better colors
const categories = ["all", "shopify", "ecommerce","affiliate", "wordpress",];

export default function Project() {
  const [hoveredId, setHoveredId] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const scrollRefs = useRef({});
  const thumbRef = useRef(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Get visible projects based on showAll state
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
  const hasMore = filteredProjects.length > 4;

  // Reset showAll when category changes
  useEffect(() => {
    setShowAll(false);
  }, [activeCategory]);

  /* ================= HOVER AUTO SCROLL ================= */
  useEffect(() => {
    let frame;
    let pos = {};

    const animate = () => {
      if (hoveredId && scrollRefs.current[hoveredId]) {
        const el = scrollRefs.current[hoveredId];
        const max = el.scrollHeight - el.clientHeight;

        if (!pos[hoveredId]) pos[hoveredId] = 0;

        pos[hoveredId] += 2;

        if (pos[hoveredId] >= max) pos[hoveredId] = 0;

        el.scrollTop = pos[hoveredId];
      }

      frame = requestAnimationFrame(animate);
    };

    if (hoveredId) frame = requestAnimationFrame(animate);

    if (!hoveredId) {
      Object.values(scrollRefs.current).forEach((el) => {
        if (el) el.scrollTop = 0;
      });
    }

    return () => cancelAnimationFrame(frame);
  }, [hoveredId]);

  /* ================= KEYBOARD CONTROL ================= */
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  /* ================= BODY SCROLL LOCK ================= */
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "auto";
  }, [lightboxOpen]);

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % projects.length);

  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );

  const handleMouseMove = (e) => {
    if (!isZoomed) return;

    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
      setTouchStart(null);
    }
  };

  const toggleShowMore = () => {
    setShowAll(!showAll);
  };

  // Get category color class
  const getCategoryColor = (category) => {
    const colors = {
      all: "bg-blue-600",
      ecommerce: "bg-purple-600",
      shopify: "bg-green-600",
      wordpress: "bg-orange-600",
      affiliate: "bg-pink-600",
      web: "bg-indigo-600"
    };
    return colors[category] || "bg-blue-600";
  };

  return (
    <>
      <section className="bg-gray-50 py-8 md:py-14">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Experience Our <span className="text-blue-600">Award-Winning</span> Web Projects
          </h2>

          {/* Filter Buttons - Horizontal scroll on mobile */}
          <div className="relative mb-6 sm:mb-10">
            <div className="overflow-x-auto pb-2 hide-scrollbar">
              <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 min-w-max sm:min-w-0 px-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full capitalize font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                      activeCategory === category
                        ? getCategoryColor(category) + " text-white"
                        : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-200"
                    }`}
                  >
                    {category === "all" ? "All Projects" : 
                     category === "ecommerce" ? "E-Commerce" :
                     category === "shopify" ? "Shopify" :
                     category === "wordpress" ? "WordPress" :
                     category === "affiliate" ? "Affiliate" : "Web"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid - 2 columns on mobile, 4 on desktop */}
          <div className="grid gap-4 sm:gap-6 md:gap-10 grid-cols-2 lg:grid-cols-4">
            {visibleProjects.map((project, index) => {
              const globalIndex = projects.findIndex(p => p.id === project.id);
              
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => {
                    setCurrentImageIndex(globalIndex);
                    setLightboxOpen(true);
                    setIsZoomed(false);
                  }}
                  className="cursor-pointer hover:-translate-y-1 sm:hover:-translate-y-2 transition group"
                >
                  <div className="bg-black rounded-xl p-1.5 sm:p-2 shadow-xl">
                    <div className="aspect-[16/10] overflow-hidden rounded-lg bg-white relative">
                      <div
                        ref={(el) => (scrollRefs.current[project.id] = el)}
                        onWheel={(e) => e.preventDefault()}
                        className="h-full overflow-hidden"
                      >
                        <Image
                          src={project.img}
                          alt={project.title}
                          width={400}
                          height={1000}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-2 sm:h-3 w-3/4 mx-auto bg-black rounded-b-xl mt-0.5 sm:mt-1"></div>
                  
                  {/* Category Badge */}
                  <div className="mt-1.5 sm:mt-2">
                    <span className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs text-white rounded-full capitalize ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More/Less Button */}
          {hasMore && (
            <div className="mt-6 sm:mt-10">
              <button
                onClick={toggleShowMore}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                {showAll ? "Show Less" : "Show More"}  
              </button>
            </div>
          )}

          {/* No Projects Message */}
          {visibleProjects.length === 0 && (
            <div className="text-center py-8 sm:py-10 text-gray-500">
              <p className="text-lg sm:text-xl">No projects found in this category</p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-sm sm:text-base"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox with Project Details - Mobile Optimized */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex flex-col"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* TOP BAR - Mobile optimized */}
          <div className="flex justify-between items-center p-2 sm:p-4 text-white bg-gray-900/90 border-b border-gray-800">
            <button 
              onClick={() => setIsZoomed(!isZoomed)} 
              className="text-xl sm:text-2xl p-2 hover:bg-gray-800 rounded-lg"
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? "🔍-" : "🔍+"}
            </button>
            <div className="text-sm sm:text-lg">{currentImageIndex + 1} / {projects.length}</div>
            <button 
              onClick={() => setLightboxOpen(false)} 
              className="text-xl sm:text-2xl p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* MAIN CONTENT - Stack on mobile, side by side on desktop */}
          <div className="flex-1 flex flex-col lg:flex-row p-2 sm:p-4 gap-2 sm:gap-4 overflow-auto">
            {/* Image Section */}
            <div className="lg:w-2/3 flex justify-center items-center bg-gray-900/30 rounded-xl p-2 sm:p-4 min-h-[40vh] sm:min-h-[50vh] lg:min-h-0">
              <div
                onClick={() => setIsZoomed(!isZoomed)}
                onMouseMove={handleMouseMove}
                className="cursor-zoom-in w-full h-full flex items-center justify-center"
              >
                <Image
                  src={projects[currentImageIndex].img}
                  alt={projects[currentImageIndex].title}
                  width={1200}
                  height={1600}
                  className="max-h-[40vh] sm:max-h-[50vh] lg:max-h-[70vh] object-contain transition-transform duration-200"
                  style={
                    isZoomed
                      ? {
                          transform: "scale(1.5)",
                          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                        }
                      : {}
                  }
                />
              </div>
            </div>

            {/* Details Section - Scrollable on mobile */}
            <div className="lg:w-1/3 text-white bg-gray-900/80 rounded-xl p-3 sm:p-4 md:p-6 backdrop-blur-sm border border-gray-800 overflow-y-auto max-h-[40vh] lg:max-h-[70vh]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-blue-400">
                {projects[currentImageIndex].title}
              </h3>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base">
                <div>
                  <h4 className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">Description</h4>
                  <p className="text-gray-200">{projects[currentImageIndex].description}</p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">Category</h4>
                  <span className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs text-white rounded-full capitalize ${getCategoryColor(projects[currentImageIndex].category)}`}>
                    {projects[currentImageIndex].category}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">Technologies</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {projects[currentImageIndex].technologies.map((tech, i) => (
                      <span key={i} className="px-1.5 sm:px-2 py-0.5 bg-gray-800 rounded text-xs sm:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div>
                    <h4 className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">Client</h4>
                    <p className="text-gray-200 text-sm">{projects[currentImageIndex].client}</p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">Year</h4>
                    <p className="text-gray-200 text-sm">{projects[currentImageIndex].date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* THUMBNAILS - Horizontal scroll on mobile */}
          <div
            ref={thumbRef}
            className="flex gap-2 sm:gap-3 overflow-x-auto p-2 sm:p-4 bg-gray-900/90 border-t border-gray-800 hide-scrollbar"
          >
            {projects.map((item, i) => (
              <div
                key={item.id}
                onClick={() => {
                  setCurrentImageIndex(i);
                  setIsZoomed(false);
                }}
                className={`relative min-w-[60px] sm:min-w-[80px] md:min-w-[90px] h-[45px] sm:h-[60px] md:h-[70px] cursor-pointer rounded-lg overflow-hidden border-2 transition ${
                  currentImageIndex === i
                    ? "border-blue-500 scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 60px, (max-width: 768px) 80px, 90px"
                />
              </div>
            ))}
          </div>

          {/* ARROWS - Hidden on mobile (use swipe instead) */}
          <button
            onClick={prevImage}
            className="hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-blue-500 transition bg-black/30 w-12 h-12 rounded-full items-center justify-center"
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-blue-500 transition bg-black/30 w-12 h-12 rounded-full items-center justify-center"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Mobile swipe hint */}
          <div className="lg:hidden absolute bottom-20 left-1/2 -translate-x-1/2 text-white/50 text-xs">
            ← Swipe to navigate →
          </div>
        </div>
      )}

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}