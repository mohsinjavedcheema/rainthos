import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const Features = () => {
  const [activeService, setActiveService] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Service data definitions remain the same
  const services = [
    {
      iconName: "Cloud", // String name of the icon
      title: "Cloud Infrastructure Automation",
      description: "Transform your infrastructure management with our comprehensive cloud automation solutions. We design and implement scalable, resilient cloud architectures using Infrastructure as Code (IaC) principles.",
      benefits: [
        "Reduced manual configuration errors",
        "Rapid, consistent environment provisioning",
        "Enhanced scalability and flexibility"
      ],
      technologies: ["Terraform", "AWS CloudFormation", "Azure Resource Manager", "Pulumi"]
    },
    {
      iconName: "Server",
      title: "Continuous Integration & Deployment (CI/CD)",
      description: "Accelerate your software delivery pipeline with our advanced CI/CD solutions. We craft end-to-end automation strategies that seamlessly integrate code development, testing, and deployment.",
      benefits: [
        "Faster time-to-market",
        "Improved code quality",
        "Consistent deployment processes"
      ],
      technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD"]
    },
    {
      iconName: "ShieldCheck",
      title: "Security and Compliance Automation",
      description: "Implement robust security measures and compliance protocols throughout your software development lifecycle. Our comprehensive security automation approach integrates vulnerability scanning and compliance checks.",
      benefits: [
        "Proactive security risk management",
        "Continuous compliance monitoring",
        "Automated threat detection"
      ],
      technologies: ["SonarQube", "Checkmarx", "Twistlock", "Aqua Security", "OpenSCAP"]
    },
    {
      iconName: "BarChart",
      title: "Performance Monitoring & Observability",
      description: "Gain unprecedented insights into your system's performance with our advanced observability solutions. We implement comprehensive monitoring strategies that provide real-time visibility into application performance.",
      benefits: [
        "Proactive issue detection",
        "Performance optimization",
        "Comprehensive system insights"
      ],
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"]
    },
    {
      iconName: "Repeat",
      title: "Containerization & Orchestration",
      description: "Revolutionize your application deployment with advanced containerization and orchestration strategies. We design and implement container-based architectures that ensure maximum portability and scalability.",
      benefits: [
        "Enhanced application portability",
        "Resource optimization",
        "Simplified deployment management"
      ],
      technologies: ["Docker", "Kubernetes", "OpenShift", "Amazon ECS", "Google Kubernetes Engine"]
    }
  ];

  // Icon rendering helper function
  const renderIcon = (iconName, className) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  // Auto-rotation logic with pause capability
  useEffect(() => {
    if (!isAutoPlaying) return; // Prevent running the effect when autoplay is off
  
    const intervalId = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
  
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, services.length]); // Added `services.length` to dependencies
  

  // Pause auto-rotation on user interaction
  const handleServiceClick = (index) => {
    setActiveService(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section heading with proper spacing */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Comprehensive DevOps Services
        </h2>

        {/* Main content grid with improved spacing */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Service selector buttons */}
          <div className="md:col-span-1 space-y-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleServiceClick(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 
                  ${activeService === index 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'}`}
              >
                <div className="flex items-center space-x-4">
                  {renderIcon(
                    service.iconName, 
                    `w-6 h-6 sm:w-8 sm:h-8 ${activeService === index ? 'text-white' : 'text-blue-600'}`
                  )}
                  <span className="font-semibold text-sm sm:text-base">{service.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Service details with managed animations */}
          <div className="md:col-span-2 relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeInOut"
                }}
                className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
              >
                <div className="flex items-start sm:items-center mb-6 gap-4">
                  {renderIcon(
                    services[activeService].iconName, 
                    "w-10 h-10 sm:w-12 sm:h-12 text-blue-600 flex-shrink-0"
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
                    {services[activeService].title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
                  {services[activeService].description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg sm:text-xl mb-3 text-gray-700">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {services[activeService].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="mr-2 text-green-500">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg sm:text-xl mb-3 text-gray-700">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {services[activeService].technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;