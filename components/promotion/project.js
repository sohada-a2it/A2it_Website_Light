"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const projects = [
  { 
    id: 1, 
    img: "/images/project (1).jpeg", 
    category: "ecommerce",
    title: "Modern Fashion Store",
    description: "A complete e-commerce solution with cart, checkout, and payment integration.",
    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
    client: "Fashion Hub Ltd.",
    date: "2024"
  },
  { 
    id: 2, 
    img: "/images/project (2).jpeg", 
    category: "shopify",
    title: "Handmade Crafts Store",
    description: "Custom Shopify store with unique theme and product customization options.",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    client: "Craft Masters",
    date: "2024"
  },
  { 
    id: 3, 
    img: "/images/project (3).jpeg", 
    category: "wordpress",
    title: "Business Blog Platform",
    description: "Corporate blog with custom CMS and SEO optimization.",
    technologies: ["WordPress", "PHP", "ACF"],
    client: "Tech Corp",
    date: "2023"
  },
  { 
    id: 4, 
    img: "/images/project (4).jpeg", 
    category: "affiliate",
    title: "Product Review Site",
    description: "Affiliate marketing website with product comparisons and reviews.",
    technologies: ["React", "Node.js", "MongoDB"],
    client: "Review Pros",
    date: "2024"
  },
  { 
    id: 5, 
    img: "/images/project (5).jpeg", 
    category: "web",
    title: "Portfolio Website",
    description: "Modern portfolio with animations and smooth scrolling.",
    technologies: ["Next.js", "Framer Motion", "Three.js"],
    client: "Creative Agency",
    date: "2023"
  },
  { 
    id: 6, 
    img: "/images/project (6).jpeg", 
    category: "ecommerce",
    title: "Grocery Delivery App",
    description: "Online grocery store with real-time inventory and delivery tracking.",
    technologies: ["React Native", "Node.js", "Socket.io"],
    client: "Fresh Foods",
    date: "2024"
  },
  { 
    id: 7, 
    img: "/images/project (7).jpeg", 
    category: "shopify",
    title: "Jewelry Store",
    description: "Luxury jewelry store with custom product configurator.",
    technologies: ["Shopify", "Vue.js", "GraphQL"],
    client: "Diamond Collections",
    date: "2023"
  },
  { 
    id: 8, 
    img: "/images/project (8).jpeg", 
    category: "wordpress",
    title: "News Magazine",
    description: "News portal with multi-author support and ad integration.",
    technologies: ["WordPress", "React", "WP API"],
    client: "Daily News",
    date: "2024"
  },
  { 
    id: 9, 
    img: "/images/project (9).jpeg", 
    category: "affiliate",
    title: "Tech Deals Hub",
    description: "Tech product deals aggregator with price comparison.",
    technologies: ["Next.js", "Python", "Beautiful Soup"],
    client: "Tech Savvy",
    date: "2023"
  },
  { 
    id: 10, 
    img: "/images/project (10).jpeg", 
    category: "web",
    title: "Restaurant Website",
    description: "Restaurant site with online reservation and menu display.",
    technologies: ["HTML", "CSS", "JavaScript"],
    client: "Gourmet Bistro",
    date: "2024"
  }
];

// Get unique categories with better colors
const categories = ["all", "affiliate", "wordpress", "shopify", "ecommerce", "web"];

// Color mapping for categories (just for badges)
const categoryColors = {
  all: "bg-blue-600",
  ecommerce: "bg-purple-600",
  shopify: "bg-green-600",
  wordpress: "bg-orange-600",
  affiliate: "bg-pink-600",
  web: "bg-indigo-600"
};

export default function Project() {
  const [hoveredId, setHoveredId] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

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

  const toggleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience Our <span className="text-blue-600">Award-Winning</span> Web Projects
          </h2>

          {/* Filter Buttons - Same design, better colors */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full capitalize font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? category === "all" ? "bg-blue-600 text-white" :
                      category === "ecommerce" ? "bg-purple-600 text-white" :
                      category === "shopify" ? "bg-green-600 text-white" :
                      category === "wordpress" ? "bg-orange-600 text-white" :
                      category === "affiliate" ? "bg-pink-600 text-white" :
                      "bg-indigo-600 text-white"
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

          {/* Projects Grid - Same design as before */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
                  className="cursor-pointer hover:-translate-y-2 transition group"
                >
                  <div className="bg-black rounded-xl p-2 shadow-xl">
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
                        />
                      </div>
                      
                      {/* Hover Overlay with Quick Info */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <div className="text-white text-center">
                          <h3 className="font-semibold mb-2">{project.title}</h3>
                          <p className="text-sm line-clamp-2">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-3 w-3/4 mx-auto bg-black rounded-b-xl mt-1"></div>
                  
                  {/* Category Badge - Now with category-specific colors */}
                  <div className="mt-2">
                    <span className={`inline-block px-3 py-1 text-xs text-white rounded-full capitalize ${
                      project.category === "ecommerce" ? "bg-purple-600" :
                      project.category === "shopify" ? "bg-green-600" :
                      project.category === "wordpress" ? "bg-orange-600" :
                      project.category === "affiliate" ? "bg-pink-600" :
                      project.category === "web" ? "bg-indigo-600" :
                      "bg-blue-600"
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More/Less Button - Improved color */}
          {hasMore && (
            <div className="mt-10">
              <button
                onClick={toggleShowMore}
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                {showAll ? "Show Less" : "Show More"} ({visibleProjects.length} / {filteredProjects.length})
              </button>
            </div>
          )}

          {/* No Projects Message */}
          {visibleProjects.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              <p className="text-xl">No projects found in this category</p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox with Project Details - Same design, better colors */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
          {/* TOP BAR */}
          <div className="flex justify-between items-center p-4 text-white bg-gray-900/90 border-b border-gray-800">
            <button onClick={() => setIsZoomed(!isZoomed)} className="text-2xl">
              {isZoomed ? "🔍-" : "🔍+"}
            </button>
            <div className="text-lg">{currentImageIndex + 1} / {projects.length}</div>
            <button onClick={() => setLightboxOpen(false)} className="text-2xl">✕</button>
          </div>

          {/* MAIN CONTENT - Image and Details Side by Side */}
          <div className="flex-1 flex flex-col lg:flex-row p-4 gap-6 overflow-auto">
            {/* Image Section */}
            <div className="lg:w-2/3 flex justify-center items-center bg-gray-900/30 rounded-xl p-4">
              <div
                onClick={() => setIsZoomed(!isZoomed)}
                onMouseMove={handleMouseMove}
                className="cursor-zoom-in"
              >
                <Image
                  src={projects[currentImageIndex].img}
                  alt={projects[currentImageIndex].title}
                  width={1200}
                  height={1600}
                  className="max-h-[60vh] lg:max-h-[70vh] object-contain transition-transform duration-200"
                  style={
                    isZoomed
                      ? {
                          transform: "scale(2)",
                          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                        }
                      : {}
                  }
                />
              </div>
            </div>

            {/* Details Section - Improved colors */}
            <div className="lg:w-1/3 text-white bg-gray-900/80 rounded-xl p-6 backdrop-blur-sm border border-gray-800 overflow-y-auto">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                {projects[currentImageIndex].title}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Description</h4>
                  <p className="text-gray-200">{projects[currentImageIndex].description}</p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Category</h4>
                  <span className={`inline-block px-3 py-1 text-white rounded-full capitalize ${
                    projects[currentImageIndex].category === "ecommerce" ? "bg-purple-600" :
                    projects[currentImageIndex].category === "shopify" ? "bg-green-600" :
                    projects[currentImageIndex].category === "wordpress" ? "bg-orange-600" :
                    projects[currentImageIndex].category === "affiliate" ? "bg-pink-600" :
                    projects[currentImageIndex].category === "web" ? "bg-indigo-600" :
                    "bg-blue-600"
                  }`}>
                    {projects[currentImageIndex].category}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentImageIndex].technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-800 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Client</h4>
                    <p className="text-gray-200">{projects[currentImageIndex].client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Year</h4>
                    <p className="text-gray-200">{projects[currentImageIndex].date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* THUMBNAILS */}
          <div
            ref={thumbRef}
            className="flex gap-3 overflow-x-auto p-4 bg-gray-900/90 border-t border-gray-800"
          >
            {projects.map((item, i) => (
              <div
                key={item.id}
                onClick={() => {
                  setCurrentImageIndex(i);
                  setIsZoomed(false);
                }}
                className={`relative min-w-[90px] h-[70px] cursor-pointer rounded-lg overflow-hidden border-2 transition ${
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
                />
              </div>
            ))}
          </div>

          {/* ARROWS */}
          <button
            onClick={prevImage}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-blue-500 transition bg-black/30 w-12 h-12 rounded-full flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-blue-500 transition bg-black/30 w-12 h-12 rounded-full flex items-center justify-center"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}