"use client";
import { useState, useEffect } from "react";
import { Award, Code, Users, Filter, Search, ChevronDown, Sparkles, Star, Target } from "lucide-react";

export default function EmployeeSection() {
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCard, setExpandedCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "NAIMA UDDIN",
      number: "01",
      position: "Full Stack Web Developer",
      image: "/assets/EmployeeSection/Naima.jpeg", 
      description:
        "Expert in React, Node.js, and cloud architecture with a passion for scalable solutions",
      achievements: [
        "AWS Certified Solutions Architect",
        "Led 15+ Successful Projects",
        "Tech Innovation Award Winner",
      ],
      skills: ["Next.js", "JavaScript", "React.js","Node.js", 'Express.js', "Git", "TypeScript", "HTML", "CSS", "Tailwind", "AWS", "MongoDB"],
      role: "developer"
    },
    {
      id: 2,
      name: "Tahsin Jahan",
      number: "02",
      position: "Digital Marketing Executive",
      image: "/assets/EmployeeSection/borsha2.jpg", 
      description:
        "Digital Marketing Executive with experience in SEO, content strategy, and social media management.",
      achievements: [],
      skills: ["SEO","Programming(C, Python, HTML, CSS, Php)" ," Microsoft Office(Word, Excel, Pptx)"],
      role: "marketing"
    },
    {
      id: 3,
      name: "Ashik Mahamud",
      number: "03",
      position: "Digital Marketing Executive & HR",
      image: "/assets/EmployeeSection/ashik.jpeg", 
      description:
        "Digital Marketing Executive and HR professional skilled in SEO, social media campaigns.",
      achievements: ["Best Project Performer"],
      skills: ["SEO", "Keyword Research", "Google Ads", "Email Marketing", "Social Media Marketing", "CCNA", "RHCSA & RHCE", "Graphics Designer"],
      role: "marketing" 
    },
    {
      id: 4,
      name: "MD Minhajur Rahman Fahime",
      number: "04",
      position: "Digital Marketing Executive",
      image: "/assets/EmployeeSection/faime.png", 
      description:
        "Digital Marketing Executive and HR professional skilled in SEO, social media campaigns.",
      achievements: [],
      skills: ["SEO", "Keyword Research", "Google Ads", "Email Marketing", "Social Media Marketing", "CCNA", "RHCSA & RHCE", "Graphics Designer"],
      role: "marketing"
    },
    {
      id: 5,
      name: "Md. Mahmudul Islam",
      number: "05",
      position: "Digital Marketing Executive",
      image: "/assets/EmployeeSection/my-formal-image2.jpg", 
      description:
        "Responsible for planning and executing digital marketing campaigns, improving SEO performance.",
      achievements: [],
      skills: ["SEO", "Content Marketing", "Social Media Management", "Analytics & Reporting", "Keyword Research"],
      role: "marketing" 
    },
    {
      id: 6,
      name: "Shohana Rahman",
      number: "06",
      position: "MERN Stack Developer",
      image: "/assets/EmployeeSection/shohana.jpeg", 
      description:
        "Responsible for designing, developing, and maintaining full-stack web applications using MongoDB, Express.js, React, and Node.js. Works closely with the team to build scalable, secure, and user-friendly solutions.",
      achievements: [],
      skills: ["Next.js", "JavaScript", "React.js","Node.js", 'Express.js', "Git","HTML", "CSS", "Tailwind", "AWS", "MongoDB","firebase","Jquery","nodeJS","Bootstrap"],
      role: "developer" 
    },
    {
      id: 7,
      name: "Indra Ghosh",
      number: "07",
      position: "Web Developer",
      image: "/assets/EmployeeSection/indra.jpg", 
      description:
        "Experienced Full Stack Developer proficient in React, Node, Next.js, databases, and building responsive web applications.",
      achievements: [],
      skills: ["React.js", "JavaScript", 'Tailwind CSS',"Node.js",' Express.js' ,' Next.js',"C, C++","MongoDB"," MySQL","Firebase", "JWT"],
      role: "developer" 
    },
    {
      id: 8,
      name: "Ananya Kundu",
      number: "08",
      position: "Digital Marketing",
      image: "/assets/EmployeeSection/Ananya.jpeg", 
      description:
        "Digital Marketing specialist with expertise in campaign management and analytics.",
      achievements: [ 
      ],
      skills: ["Database Management (DBM)", "Programming Fundamentals","Microsoft Office (Word, Excel, Pptx)"],
      role: "marketing" 
    }
  ];

  useEffect(() => {
    setFilteredMembers(teamMembers);
  }, []);

  useEffect(() => {
    let result = teamMembers;

    if (activeFilter !== "all") {
      result = result.filter((m) => m.role === activeFilter);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.position.toLowerCase().includes(q) ||
          m.skills.some((s) => s.toLowerCase().includes(q))
      );
    }

    setFilteredMembers(result);
  }, [activeFilter, searchQuery]);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getRoleIcon = (role) => {
    return role === "developer" ? <Code className="w-4 h-4" /> : <Target className="w-4 h-4" />;
  };

  return (
    <section className="py-6 md:py-6 bg-white relative overflow-hidden"> 

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-[#00f0ff]/10 to-[#0066ff]/10 rounded-full border border-[#00f0ff]/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#00f0ff]" />
            <span className="text-[#0066ff] text-sm font-medium">MEET OUR TEAM</span>
            <Sparkles className="w-4 h-4 text-[#00f0ff]" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-black">Our Expert </span>
            <span className="bg-gradient-to-r from-[#00f0ff] via-[#0066ff] to-[#00f0ff] bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f0ff] via-[#0066ff] to-[#00f0ff] mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Meet our talented team of developers, designers, and tech experts who bring innovation, 
            expertise, and dedication to every project.
          </p>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-14 p-6 bg-gradient-to-r from-[#12121a]/10 to-[#0a0a12]/10 rounded-2xl border border-[#00f0ff]/15">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-[#00f0ff]" />
            <div className="flex flex-wrap gap-2">
              {["all", "developer", "marketing"].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === f
                      ? "bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white shadow-lg shadow-[#00f0ff]/25"
                      : "bg-white text-black border border-[#00f0ff]/20 hover:bg-gradient-to-r hover:from-[#00f0ff]/10 hover:to-[#0066ff]/10 hover:text-[#00f0ff] hover:border-[#00f0ff]/40"
                  }`}
                >
                  {f === "developer" && <Code className="w-4 h-4" />}
                  {f === "marketing" && <Target className="w-4 h-4" />}
                  {f === "all" && <Users className="w-4 h-4" />}
                  {f === "all" ? "All Team" : f === "developer" ? "Developers" : "Marketing"}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0066ff]" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, position or skills..."
              className="w-full pl-12 pr-4 py-3 bg-white/80 border border-[#00f0ff]/25 rounded-xl text-black placeholder-black/50 focus:outline-none focus:border-[#00f0ff] focus:ring-2 focus:ring-[#00f0ff]/20 transition-all duration-300"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredMembers.map((m) => (
            <div
              key={m.id}
              className="group relative"
            >
              <div className={`relative overflow-hidden rounded-2xl border border-gray-200 transition-all duration-500 flex flex-col ${
                expandedCard === m.id 
                  ? "h-auto shadow-2xl shadow-[#00f0ff]/10 border-[#00f0ff]"
                  : "h-[500px] shadow-lg hover:shadow-xl hover:shadow-[#00f0ff]/5"
              }`}>
                
                {/* Member Number */}
                <div className="absolute top-1 left-1 z-20 w-10 h-10 rounded-full bg-white border border-[#00f0ff]/30 flex items-center justify-center shadow-lg">
                  <span className="text-lg font-bold text-[#0066ff]">{m.number}</span>
                </div>

                {/* Image Container */}
                <div className={`relative overflow-hidden transition-all duration-500 ${
                  expandedCard === m.id ? "h-0 opacity-0" : "h-56 opacity-100"
                }`}>
                  <img 
                    src={m.image} 
                    alt={m.name} 
                    className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center 25%' }}
                  />
                </div>

                {/* Content */}
                <div className=" relative p-6 flex-1 flex flex-col">
                  <div className="text-center mb-4">
                    <div className={`absolute top-2 left-7 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                    m.role === "developer" 
                      ? "bg-gradient-to-r from-[#00f0ff]/10 to-[#0066ff]/10 text-[#00f0ff] border border-[#00f0ff]/30"
                      : "bg-gradient-to-r from-[#ff0080]/10 to-[#ff6600]/10 text-[#ff66cc] border border-[#ff66cc]/30"
                  }`}>
                    {getRoleIcon(m.role)}
                    {m.role === "developer" ? "Developer" : "Marketing"}
                  </div>
                    <h3 className="text-xl font-bold text-black mb-1 group-hover:text-[#00f0ff] transition-colors mt-4">
                      {m.name}
                    </h3>
                    <p className="text-[#0066ff]  font-bold">{m.position}</p>
                  </div>

                  {/* Description */}
                  <div className={`mb-6 ${expandedCard === m.id ? 'hidden' : 'block'}`}>
                    <p className="text-sm text-gray-600 text-center line-clamp-2 leading-relaxed min-h-[40px]">
                      {m.description}
                    </p>
                  </div>
                  <div className={`mb-6 ${expandedCard === m.id ? 'block' : 'hidden'}`}>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {m.description}
                    </p>
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => toggleExpand(m.id)}
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl transition-all duration-300 mt-auto ${
                      expandedCard === m.id
                        ? "bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white"
                        : "bg-gradient-to-r from-[#0066ff] to-[#0066ff] text-white border border-gray-200 hover:border-[#00f0ff] hover:text-[#00f0ff]"
                    }`}
                  >
                    <span className="text-sm font-medium">
                      {expandedCard === m.id ? "Show Less" : "View Details"}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedCard === m.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Expanded Skills & Achievements */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedCard === m.id 
                        ? "max-h-[1000px] opacity-100 mt-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className={`pr-2 ${expandedCard === m.id ? "max-h-[280px] overflow-y-auto" : ""}`}>
                      {/* Skills */}
                      <div className="mb-6">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <div className="p-1.5 rounded-lg bg-gradient-to-r from-[#00f0ff]/10 to-[#0066ff]/10">
                            <Code className="w-4 h-4 text-[#00f0ff]" />
                          </div>
                          <span className="text-black font-medium">Skills</span>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {m.skills.map((s, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r from-[#00f0ff]/5 to-[#0066ff]/5 border border-[#00f0ff]/20 text-gray-700 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors cursor-default"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {m.achievements.length > 0 && (
                        <div>
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="p-1.5 rounded-lg bg-gradient-to-r from-[#00f0ff]/10 to-[#0066ff]/10">
                              <Award className="w-4 h-4 text-[#00f0ff]" />
                            </div>
                            <span className="text-black font-medium">Achievements</span>
                          </div>
                          <div className="space-y-2">
                            {m.achievements.map((a, i) => (
                              <div key={i} className="flex items-start gap-2 px-3 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                                <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-600">{a}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
