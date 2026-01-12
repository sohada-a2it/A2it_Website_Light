"use client";
import React, { useState, useEffect  } from "react";
import { ArrowRight, Filter } from "lucide-react";
import { projects } from "../data/projects";
import Link from "next/link";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [openProject, setOpenProject] = useState(null); 
const [open, setOpen] = useState(false); 

const ITEMS_PER_LOAD = 4;

const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

useEffect(() => {
  setVisibleCount(ITEMS_PER_LOAD);
}, [activeFilter]);


  const categories = [
    "All",
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "AI/ML",
    "eCommerce Development",
    "Digital Marketing",
    "Affiliate",
    "Wordpress",
    "Import Export"
  ];

 const filteredProjects =
  activeFilter === "All"
    ? projects
    : projects.filter((p) =>
        Array.isArray(p.category)
          ? p.category.includes(activeFilter)
          : p.category === activeFilter
      ); 

// Load more function
const handleLoadMore = () => {
  setVisibleCount(prev => {
    const nextCount = prev + ITEMS_PER_LOAD;
    // Don't exceed total filtered projects
    return Math.min(nextCount, filteredProjects.length);
  });
};

// Reset visible count when filter changes
useEffect(() => {
  setVisibleCount(ITEMS_PER_LOAD);
  setOpenProject(null);
  setHoveredProject(null);
}, [activeFilter]);
  return (
    <div className=" bg-[#0a0a12] text-[#e0e0ff]">
      {/* Hero Section with Background Image */}
      <div
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#45454f] bg-opacity-80"
        style={{
          backgroundImage: "url(/assets/Portfolio/portfolio-bg.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          
        }}
      >
        <div className="absolute inset-0  opacity-70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#b0b0ff] mb-10 max-w-3xl mx-auto">
              Where innovation meets execution - explore our successful projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#00f0ff] to-[#0066ff] hover:shadow-[0_0_30px_-10px_rgba(0,240,255,0.5)] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="border-2 border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
                Work
              </span>
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Discover our diverse range of projects across multiple industries
            </p>
          </div>

          {/* Filter Buttons */}
<div className="mb-16">
{/* Mobile Dropdown */}
<div className="block sm:hidden px-4 mb-4">
  <button
    onClick={() => setOpen(true)}
    className="w-full py-3 rounded-full bg-[#00f0ff] text-[#12121a] font-semibold"
  >
    Filter Category
  </button>

  {open && (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-end"
      onClick={() => setOpen(false)}   // tap outside → close
    >
      <div
        className="
          w-full bg-[#12121a] rounded-t-2xl p-5
          max-h-[70vh] overflow-y-auto
          animate-slideUp
        "
        onClick={(e) => e.stopPropagation()} // prevent accidental close
      >
        {/* Drag / Minimize Handle */}
        <button
          onClick={() => setOpen(false)}
          className="w-full flex justify-center mb-3"
        >
          <div className="h-1.5 w-12 bg-gray-500 rounded-full" />
        </button>

        {/* Title */}
        <h3 className="text-center text-sm font-semibold text-[#b0b0ff] mb-4">
          Select Category
        </h3>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveFilter(category);
              setOpen(false);
            }}
            className="w-full text-left py-3 border-b border-white/10 text-[#e0e0ff] active:bg-[#1a1a2a]"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )}
</div>




  {/* Desktop Buttons */}
  <div className="hidden sm:flex flex-wrap justify-center gap-3">
    <Filter className="h-5 w-5 text-[#b0b0ff] mt-3 mr-2" />
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveFilter(category)}
        className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
          activeFilter === category
            ? "bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white shadow-lg"
            : "bg-[#006dff] text-white hover:bg-[#fff5f5] hover:text-[#006dff] hover:shadow-2xl border border-[#00f0ff]/20"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
</div>


          {/* Projects Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {filteredProjects
    .slice(0, visibleCount)
    .map((project, index) => {
      // Add index to the key to ensure unique keys
      const isOpen = openProject === `${project.id}-${index}`;

      return (
        <div
          key={`${project.id}-${index}`}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative border border-[#00f0ff]/10 hover:border-[#0066ff]/50"
          onMouseEnter={() =>
            window.innerWidth >= 768 && setHoveredProject(`${project.id}-${index}`)
          }
          onMouseLeave={() =>
            window.innerWidth >= 768 && setHoveredProject(null)
          }
        >
          {/* IMAGE */}
          <div className="relative overflow-hidden h-60">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                hoveredProject === `${project.id}-${index}` ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] to-transparent opacity-80"></div>

            {/* Desktop overlay */}
            <div className="absolute bottom-0 left-0 p-6 w-full hidden md:block">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-[#b0b0ff] line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>

          {/* --- MOBILE BUTTON ONLY --- */}
          <div className="p-3 md:hidden">
            {!isOpen ? (
              <button
                onClick={() => setOpenProject(`${project.id}-${index}`)}
                className="w-full bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
              >
                View Details
              </button>
            ) : (
              <button
                onClick={() => setOpenProject(null)}
                className="w-full bg-white border border-[#00f0ff]/40 text-[#00f0ff] py-2 rounded-lg font-medium hover:bg-[#0066ff]/10 transition-colors duration-200"
              >
                Hide Details
              </button>
            )}
          </div>

          {/* --- MOBILE INFO AFTER CLICK --- */}
          {isOpen && (
            <div className="p-4 md:hidden space-y-3 bg-white rounded-b-xl border-t border-[#00f0ff]/20 shadow-inner">
              <h3 className="text-white font-bold text-lg">
                {project.title}
              </h3>
              <p className="text-[#b0b0ff] text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Mobile Categories */}
              <div className="flex flex-wrap gap-2">
                {Array.isArray(project.category)
                  ? project.category.map((cat, catIndex) => (
                      <span
                        key={`${project.id}-cat-${catIndex}`}
                        className="bg-gradient-to-r from-[#00f0ff]/80 to-[#0066ff]/80 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm"
                      >
                        {cat}
                      </span>
                    ))
                  : (
                      <span className="bg-gradient-to-r from-[#00f0ff]/80 to-[#0066ff]/80 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                        {project.category}
                      </span>
                    )}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies?.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={`${project.id}-tech-${techIndex}`}
                    className="bg-[#0a0a12]/20 text-black px-2 py-1 rounded-full text-xs font-medium border border-[#00f0ff]/20 hover:bg-[#0066ff]/10 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {project.metrics?.slice(0, 2).map((metric, metricIndex) => (
                  <div
                    key={`${project.id}-metric-${metricIndex}`}
                    className="bg-white shadow-2xl p-2 rounded-lg flex flex-col items-center justify-center"
                  >
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff] font-bold">
                      {metric.value}
                    </p>
                    <p className="text-black text-xs text-center mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- DESKTOP CONTENT --- */}
          <div className="hidden md:flex flex-wrap gap-2 mt-2 px-6">
            {Array.isArray(project.category)
              ? project.category.map((cat, catIndex) => (
                  <span
                    key={`${project.id}-desktop-cat-${catIndex}`}
                    className="bg-gradient-to-r from-[#00f0ff]/80 to-[#0066ff]/80 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm"
                  >
                    {cat}
                  </span>
                ))
              : (
                  <span className="bg-gradient-to-r from-[#00f0ff]/80 to-[#0066ff]/80 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                    {project.category}
                  </span>
                )}
          </div>

          <div className="px-6 py-2 hidden md:block">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.slice(0, 4).map((tech, techIndex) => (
                <span
                  key={`${project.id}-desktop-tech-${techIndex}`}
                  className="bg-[#0a0a12]/20 text-black px-3 py-1 rounded-full text-xs border border-[#00f0ff]/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 ">
              {project.metrics?.slice(0, 2).map((metric, metricIndex) => (
                <div key={`${project.id}-desktop-metric-${metricIndex}`} className="text-center">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff] font-bold text-xl">
                    {metric.value}
                  </p>
                  <p className="text-[#b0b0ff] text-sm">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    })}

  {/* --- LOAD MORE BUTTON --- */}
  {visibleCount < filteredProjects.length && (
    <div className="col-span-full flex justify-center">
<button
  onClick={handleLoadMore}
  className="px-10 py-3 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white font-semibold shadow-lg hover:opacity-90 transition"
>
  Load More
</button>
    </div>
  )}
</div>



        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-6 border-t border-[#00f0ff]/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Create Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
              Amazing?
            </span>
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with our expertise
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#00f0ff] to-[#0066ff] hover:shadow-[0_0_30px_-10px_rgba(0,240,255,0.5)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-block shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
