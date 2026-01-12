import BlogPage from "@/components/blog-page-component/BlogPage";
import React from "react";

// 🔹 SEO metadata for Blog
export const metadata = {
  title: "Blog | A2IT Ltd | IT Insights & Updates",
  description:
    "Read the latest articles, insights, and updates from A2IT Ltd about web development, mobile apps, eCommerce, digital marketing, SEO, and IT trends.",
  keywords: [
    "A2IT Blog",
    "Web Development Articles",
    "Mobile App Development Insights",
    "UI/UX Design Blog",
    "eCommerce Tips",
    "Digital Marketing Updates",
    "SEO & SEM Articles",
    "IT Solutions Blog",
  ],
  alternates: {
    canonical: "https://a2itltd.com/blog",
  },
  openGraph: {
    title: "Blog | A2IT Ltd | IT Insights & Updates",
    description:
      "Stay updated with A2IT Ltd’s blog covering web development, mobile apps, UI/UX, eCommerce, digital marketing, and IT industry trends.",
    url: "https://a2itltd.com/blog",
    siteName: "A2IT Ltd",
    images: [
      {
        url: "/og-blog.jpg", // 👉 add Blog OG image in /public
        width: 1200,
        height: 630,
        alt: "A2IT Ltd Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | A2IT Ltd | IT Insights & Updates",
    description:
      "Explore A2IT Ltd’s blog for insights on web development, mobile apps, UI/UX, eCommerce, SEO, and IT services.",
    images: ["/og-blog.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <BlogPage />

      {/* 🔹 Schema Markup for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "A2IT Ltd Blog",
            url: "https://a2itltd.com/blog",
            description:
              "A2IT Ltd Blog features articles, insights, and updates about web development, mobile apps, UI/UX, eCommerce, SEO, digital marketing, and IT trends.",
            publisher: {
              "@type": "Organization",
              name: "A2IT Ltd",
              url: "https://a2itltd.com",
              logo: "https://a2itltd.com/logo.png",
            },
            blogPost: [], // individual posts will have their own schema
          }),
        }}
      />
    </>
  );
}
