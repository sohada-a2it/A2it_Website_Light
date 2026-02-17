"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const projects = [
  { id: 1, img: "/images/project (1).jpeg" },
  { id: 2, img: "/images/project (2).jpeg" },
  { id: 3, img: "/images/project (3).jpeg" },
  { id: 4, img: "/images/project (4).jpeg" },
  { id: 5, img: "/images/project (5).jpeg" },
  { id: 6, img: "/images/project (6).jpeg" },
  { id: 7, img: "/images/project (7).jpeg" },
  { id: 8, img: "/images/project (8).jpeg" }, 
];

export default function project() {
  const [hoveredId, setHoveredId] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollRefs = useRef({});
const thumbRef = useRef(null);

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

  return (
    <>
      <section className="bg-gray-50 py-14 ">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-10">
            Experience Our <span className="text-primary">Award-Winning</span> Web Projects
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {projects.map((project, index) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setLightboxOpen(true);
                  setIsZoomed(false);
                }}
                className="cursor-pointer hover:-translate-y-2 transition"
              >
                <div className="bg-black rounded-xl p-2 shadow-xl">

                  <div className="aspect-[16/10] overflow-hidden rounded-lg bg-white">

                    <div
                      ref={(el) => (scrollRefs.current[project.id] = el)}
                      onWheel={(e) => e.preventDefault()}
                      className="h-full overflow-hidden"
                    >
                      <Image
                        src={project.img}
                        alt="project"
                        width={400}
                        height={1000}
                        className="w-full h-auto"
                      />
                    </div>

                  </div>
                </div>

                <div className="h-3 w-3/4 mx-auto bg-black rounded-b-xl mt-1"></div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */} 
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">

          {/* TOP BAR */}
          <div className="flex justify-between items-center p-4 text-white">
            <button onClick={() => setIsZoomed(!isZoomed)}>🔍</button>
            <div>{currentImageIndex + 1} / {projects.length}</div>
            <button onClick={() => setLightboxOpen(false)}>✕</button>
          </div>

          {/* MAIN IMAGE */}
          <div
            onClick={() => setIsZoomed(!isZoomed)}
            onMouseMove={handleMouseMove}
            className="flex-1 flex justify-center items-center"
          >
            <Image
              src={projects[currentImageIndex].img}
              alt="preview"
              width={1200}
              height={1600}
              className="max-h-[70vh] object-contain transition"
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

          {/* THUMBNAILS */}
          <div
            ref={thumbRef}
            className="flex gap-3 overflow-x-auto p-4 bg-black/80"
          >
            {projects.map((item, i) => (
              <div
                key={item.id}
                onClick={() => {
                  setCurrentImageIndex(i);
                  setIsZoomed(false);
                }}
                className={`relative min-w-[90px] h-[70px] cursor-pointer rounded-lg overflow-hidden border-2 ${
                  currentImageIndex === i
                    ? "border-primary scale-105"
                    : "border-transparent opacity-60"
                }`}
              >
                <Image
                  src={item.img}
                  alt="thumb"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* ARROWS */}
          <button
            onClick={prevImage}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl"
          >
            ›
          </button>

        </div>
      )}
    </>
  );
}
