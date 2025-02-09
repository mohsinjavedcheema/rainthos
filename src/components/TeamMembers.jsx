
import React, { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



const TeamSection = () => {
  const teamMembers = [
    {
      name: "Mohsin Javed",
      role: "Senior DevOps Engineer",
      profilePicture: "https://res.cloudinary.com/dgcankmpu/image/upload/v1739114155/Mohsin_Javed_Cheema_aotqs1.png",
      expertise: [
        "Infrastructure Management",
        "CI/CD Pipelines",
        "Security & Compliance",
        "Automation",
        "Cloud Cost Optimization"
      ],
      impact: "Leading enterprise-scale DevOps transformations with 15 years of experience, optimizing infrastructure and ensuring high availability.",
      experience: "15 years",
      level: "Senior",
      technologies: ["AWS", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Prometheus"],
      background: "from-cyan-500 to-blue-500",
    },
    {
      name: "Shaheer",
      role: "Associate DevOps Engineer",
      profilePicture: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677111/Muhammad_Shaheer_q2e5t0.png",
      expertise: [
        "Cloud Infrastructure",
        "Infrastructure as Code (IaC)",
        "Monitoring & Logging",
        "Automation",
        "Scripting"
      ],
      impact: "Implementing automated deployment pipelines and optimizing cloud infrastructure for scalability and cost-efficiency.",
      experience: "Associate Level",
      level: "Associate",
      technologies: ["Docker", "Git", "AWS", "Terraform", "Grafana", "Python"],
      background: "from-purple-400 to-pink-400",
    },
    {
      name: "Amaad",
      role: "Project Manager",
      profilePicture: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677110/Amaad_Siddique_bteri1.png",
      expertise: [
        "Project Management",
        "Team Leadership",
        "Agile & Scrum Methodologies",
        "Risk Management",
        "Stakeholder Communication"
      ],
      impact: "Driving successful project delivery through agile methodologies and cross-functional team coordination.",
      experience: "Senior Level",
      level: "Senior",
      technologies: ["Jira", "Agile", "Scrum", "Trello", "Confluence"],
      background: "from-indigo-400 to-blue-400",


    },
    {
      name: "Fahad",
      role: "Senior MERN Stack Developer",
      profilePicture: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677110/Fahad_Abdul_Qayyum_slhbfx.png",
      expertise: [
        "Full Stack Development",
        "Microservices Architecture",
        "API Development",
        "Database Design",
        "Performance Optimization"
      ],
      impact: "Architecting and scaling web applications using the MERN stack with optimized backend and frontend integration.",
      experience: "Senior Level",
      level: "Senior",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Next.js", "GraphQL"],
      background: "from-cyan-500 to-blue-500",
    },
    {
      name: "Sahil",
      role: "Associate MERN Stack Developer",
      profilePicture: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677110/Sahil_Parkash_gqjhu6.png",
      expertise: [
        "Frontend Development",
        "Backend Integration",
        "State Management",
        "Component-Based Architecture",
        "API Integration"
      ],
      impact: "Building interactive, high-performance web applications using modern JavaScript frameworks.",
      experience: "Associate Level",
      level: "Associate",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "Tailwind CSS", "REST API"],
      background: "from-purple-400 to-pink-400",
    },
    {
      name: "Maaz",
      role: "Associate Software Engineer",
      profilePicture: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677111/MAAZ_bwxeaf.jpg",
      expertise: [
        "Software Development",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Code Optimization",
        "Version Control"
      ],
      impact: "Developing efficient and maintainable software solutions with a focus on performance and scalability.",
      experience: "Associate Level",
      level: "Associate",
      technologies: ["JavaScript", "Python", "Git", "TypeScript", "SQL", "C++"],
      background: "from-indigo-400 to-blue-400",
    },
    {
      name: "Rehan",
      role: "Senior Cloud Administrator",
      profilePicture: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677111/Rehan_uhsfw1.png",
      expertise: [
        "Cloud Architecture",
        "System Administration",
        "Networking & Security",
        "Disaster Recovery",
        "High Availability"
      ],
      impact: "Managing and optimizing multi-cloud environments to ensure reliability, scalability, and security.",
      experience: "Senior Level",
      level: "Senior",
      technologies: ["AWS", "Azure", "GCP", "Linux", "VMware", "Docker"],
      background: "from-cyan-500 to-blue-500",
    },
    {
      name: "Mauz",
      role: "Junior Cloud Assistant",
      profilePicture: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677110/Mauz_Latif_i2jbpa.png",
      expertise: [
        "Cloud Support",
        "Infrastructure Maintenance",
        "Monitoring & Troubleshooting",
        "Basic Networking",
        "Automation"
      ],
      impact: "Supporting cloud operations, troubleshooting system issues, and assisting with infrastructure maintenance.",
      experience: "Junior Level",
      level: "Junior",
      technologies: ["AWS", "Linux", "Docker", "Bash Scripting", "Terraform"],
      background: "from-purple-400 to-pink-400",
    },
    {
      name: "Rimsha",
      role: "Associate DevOps Engineer",
      profilePicture: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677110/Rimsha_Azmat_ooheam.png",
      expertise: [
        "DevOps Practices",
        "Infrastructure Automation",
        "Containerization",
        "Deployment Optimization",
        "Continuous Integration"
      ],
      impact: "Streamlining deployment processes and improving CI/CD pipelines for faster, more efficient software delivery.",
      experience: "Associate Level",
      level: "Associate",
      technologies: ["Jenkins", "Docker", "Git", "Kubernetes", "Python"],
      background: "from-indigo-400 to-blue-400",
    },
    {
      name: "Aleem",
      role: "Software Tester",
      profilePicture: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677110/Aleem_Sultan_ih6tct.png",
      expertise: [
        "Quality Assurance",
        "Test Automation",
        "Bug Tracking",
        "Regression Testing",
        "Performance Testing"
      ],
      impact: "Ensuring software quality through comprehensive testing strategies and automation.",
      experience: "Mid Level",
      level: "Mid",
      technologies: ["Selenium", "Jest", "Cypress", "Postman", "JMeter"],
      background: "from-cyan-500 to-blue-500",
    },
    {
      name: "Maham",
      role: "Marketing and Business Developer",
      profilePicture: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677111/Maham_Afzal_iigien.png",
      expertise: [
        "Marketing Strategy",
        "Business Development",
        "Brand Awareness",
        "Market Research",
        "Customer Engagement"
      ],
      impact: "Driving business growth through strategic marketing initiatives and competitive market analysis.",
      experience: "Mid Level",
      level: "Mid",
      technologies: ["Marketing Tools", "CRM", "Google Analytics", "HubSpot", "SEO"],
      background: "from-purple-400 to-pink-400",
    }
  ];

const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 640);
      
      if (width < 640) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto play functionality
  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + cardsPerView >= teamMembers.length) ? 0 : prevIndex + cardsPerView
        );
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, teamMembers.length, cardsPerView]);

  // Individual team member card component
  const TeamMemberCard = ({ member }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    
    // Calculate responsive image size
    const imageSize = windowWidth < 640 ? 
      Math.min(windowWidth * 0.4, 180) : // 40% of screen width up to 180px
      128; // default desktop size

    // Image preloading with proper sizing
    useEffect(() => {
      const img = new Image();
      img.src = member.profilePicture;
      img.onload = () => setImageLoaded(true);
    }, [member.profilePicture]);

    // Mobile-optimized transform styles
    const getTransformStyle = (isBack = false) => ({
      transform: isMobile ? 
        `rotateY(${isFlipped ? (isBack ? 0 : 180) : (isBack ? 180 : 0)}deg)` :
        `rotateY(${isFlipped ? (isBack ? 0 : 180) : (isBack ? 180 : 0)}deg)`,
      transition: 'transform 0.5s ease'
    });

    return (
      <motion.div
        className="relative w-full max-w-sm mx-auto h-[450px] sm:h-[400px] perspective-1000"
        whileHover={{ scale: isMobile ? 1 : 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        onMouseEnter={() => !isMobile && setIsFlipped(true)}
        onMouseLeave={() => !isMobile && setIsFlipped(false)}
        onClick={() => isMobile && setIsFlipped(!isFlipped)}
      >
        <div className="relative w-full h-full transform-style-3d">
          {/* Front Side */}
          <div
            style={getTransformStyle()}
            className={`absolute w-full h-full backface-hidden rounded-xl p-4 sm:p-6 
            bg-gradient-to-br ${member.background} text-white shadow-xl`}
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Optimized image container */}
              <div 
                className="relative rounded-full overflow-hidden border-4 border-white/30 shadow-xl"
                style={{ width: imageSize, height: imageSize }}
              >
                {!imageLoaded ? (
                  <div className="w-full h-full bg-gray-300 animate-pulse" />
                ) : (
                  <img
  src={`${member.profilePicture.split('/upload/')[0]}/upload/w_${imageSize},h_${imageSize},c_fill,q_auto:best,f_auto,e_sharpen:100/${member.profilePicture.split('/upload/')[1]}`}
  alt={member.name}
  className="w-full h-full object-cover"
  loading="lazy"
  decoding="async"
  style={{
    imageRendering: '-webkit-optimize-contrast',
    backfaceVisibility: 'hidden'
  }}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "/images/placeholder-profile.jpg";
  }}
/>
                )}
              </div>
              
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide">{member.name}</h3>
                <p className="text-base sm:text-lg opacity-90 font-medium">{member.role}</p>
                <p className="text-sm mt-1 opacity-75">{member.experience}</p>
              </div>

              <div className="w-full mt-4">
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.slice(0, windowWidth < 640 ? 2 : 3).map((exp, i) => (
                    <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div
            style={getTransformStyle(true)}
            className={`absolute w-full h-full backface-hidden rounded-xl p-4 sm:p-6
            bg-gradient-to-br ${member.background} text-white shadow-xl`}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-3">Impact</h4>
                <p className="text-sm sm:text-base leading-relaxed opacity-90">{member.impact}</p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {member.technologies.slice(0, windowWidth < 640 ? 4 : 6).map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Navigation handlers
  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      (prevIndex - cardsPerView < 0) ? Math.max(teamMembers.length - cardsPerView, 0) : prevIndex - cardsPerView
    );
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      (prevIndex + cardsPerView >= teamMembers.length) ? 0 : prevIndex + cardsPerView
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-purple-200 py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Our Team
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            A diverse group of professionals bringing innovation and expertise to every project.
          </p>
        </div>

        <div className="relative">
          {windowWidth > 640 && (
            <>
              <button
                onClick={handlePrevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-12 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
                aria-label="Previous slide"
              >
                <LucideIcons.ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </button>

              <button
                onClick={handleNextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-12 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
                aria-label="Next slide"
              >
                <LucideIcons.ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </button>
            </>
          )}

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center"
              >
                {teamMembers
                  .slice(currentIndex, currentIndex + cardsPerView)
                  .map((member, index) => (
                    <TeamMemberCard key={`${member.name}-${index}`} member={member} />
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {Array.from({ length: Math.ceil(teamMembers.length / cardsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index * cardsPerView);
                }}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / cardsPerView) === index
                    ? "bg-blue-600 w-4 sm:w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
          -webkit-perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default TeamSection;