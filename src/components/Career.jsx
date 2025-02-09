import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  Heart,
  Laptop,
  Users,
  Rocket,
  Target,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Building
} from 'lucide-react';
import Footer from './Footer';

// Custom hook to handle intersection observer functionality
const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Once element becomes visible, keep it visible
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1, ...options });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

// Reusable animated section component with configurable animation properties
const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' // 'up', 'down', 'left', 'right'
}) => {
  const [ref, isVisible] = useIntersectionObserver();

  // Define transform based on direction
  const getTransform = () => {
    const distance = '2rem';
    switch (direction) {
      case 'up': return `translateY(${distance})`;
      case 'down': return `translateY(-${distance})`;
      case 'left': return `translateX(${distance})`;
      case 'right': return `translateX(-${distance})`;
      default: return 'translateY(2rem)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const CareerPage = () => {
  // State management for filters and job selection
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'all',
    experience: 'all',
    department: 'all'
  });
  
  const [selectedJob, setSelectedJob] = useState(null);

  // Mock data for job listings
  const jobListings = [
    {
      id: 1,
      title: "Senior DevOps Engineer",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      experience: "Senior",
      department: "Cloud Engineering",
      description: "Lead infrastructure automation, CI/CD pipeline development, and cloud infrastructure optimization. Collaborate with development teams to ensure smooth deployment and scaling of applications. Manage Kubernetes clusters, monitoring, and security compliance."
    },
    {
      id: 2,
      title: "Cloud Security Specialist",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      experience: "Mid-level",
      department: "Security",
      description: "Implement and maintain cloud security best practices, conduct security audits, and ensure compliance with industry standards. Work closely with DevOps and engineering teams to enforce security policies and protect cloud environments from vulnerabilities."
    },
    {
      id: 3,
      title: "Automation Engineer",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      experience: "Mid-level",
      department: "Automation",
      description: "Design and implement automation solutions for deployment, monitoring, and system configuration management. Improve efficiency by developing scripts and automation frameworks for infrastructure as code (IaC) using tools like Terraform and Ansible."
    },
    {
      id: 4,
      title: "React Native Developer",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      experience: "Mid to Senior",
      department: "Mobile Development",
      description: "Develop and maintain cross-platform mobile applications using React Native. Collaborate with UI/UX designers to create seamless user experiences. Optimize app performance and integrate with RESTful APIs and third-party services. Maintain high-quality code and participate in code reviews."
    },
    {
      id: 5,
      title: "React Developer",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      experience: "Mid-level",
      department: "Front-end Development",
      description: "Build modern web applications using React.js and related libraries (Redux, React Query). Work closely with back-end engineers to develop scalable and responsive applications. Optimize front-end performance and ensure cross-browser compatibility."
    },
    {
      id: 6,
      title: "DevOps Engineer",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      experience: "Mid-level",
      department: "Cloud Engineering",
      description: "Implement and maintain CI/CD pipelines, automate cloud infrastructure provisioning, and improve deployment efficiency. Collaborate with developers to optimize workflows, enhance monitoring systems, and ensure system reliability."
    }
  ];

  // Filter jobs based on selected criteria
  const filterJobs = () => {
    return jobListings.filter(job => {
      return (
        (selectedFilters.type === 'all' || job.type === selectedFilters.type) &&
        (selectedFilters.experience === 'all' || job.experience === selectedFilters.experience) &&
        (selectedFilters.department === 'all' || job.department === selectedFilters.department)
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50">
      {/* Hero Section with fade-in and slide-up animation */}
      <section className="relative h-screen bg-gradient-to-r from-purple-100 to-blue-100">
        <AnimatedSection className="container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Join Our DevOps Excellence Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            Help businesses scale with the best DevOps practices
          </p>
          <button
            onClick={() => document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300 w-fit hover:scale-105 transform"
          >
            View Open Roles
          </button>
        </AnimatedSection>
      </section>

      {/* About Us Section with staggered animations */}
      <section className="py-20 bg-white bg-opacity-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              We're a leading DevOps consulting firm dedicated to helping organizations 
              optimize their development and operations through modern practices.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Rocket />, title: "Innovation", description: "Pushing boundaries with cutting-edge solutions" },
              { icon: <Users />, title: "Collaboration", description: "Working together to achieve excellence" },
              { icon: <Target />, title: "Customer Focus", description: "Delivering value through client success" }
            ].map((value, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 200}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center text-purple-600 mb-4">
                    {React.cloneElement(value.icon, { className: "w-12 h-12" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white bg-opacity-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Why Work With Us
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Clock />, title: "Flexible Hours", description: "Work when you're most productive" },
              { icon: <Heart />, title: "Great Benefits", description: "Comprehensive health and wellness coverage" },
              { icon: <Building />, title: "Modern Office", description: "Collaborate in a vibrant workspace" }
            ].map((benefit, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 200}
                direction={index % 2 === 0 ? 'up' : 'down'}
              >
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center text-purple-600 mb-4">
                    {React.cloneElement(benefit.icon, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section with fade-in and slide animations */}
      <section id="jobs" className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Open Positions
            </h2>
            
            <div className="flex flex-wrap gap-4 mb-8">
            <select
              className="border rounded-lg px-4 py-2 text-gray-600"
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, type: e.target.value }))}
            >
              <option value="all">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
            </select>
            <select
              className="border rounded-lg px-4 py-2 text-gray-600"
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, experience: e.target.value }))}
            >
              <option value="all">All Experience Levels</option>
              <option value="Junior">Junior</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior">Senior</option>
            </select>
            <select
              className="border rounded-lg px-4 py-2 text-gray-600"
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, department: e.target.value }))}
            >
              <option value="all">All Departments</option>
              <option value="Cloud Engineering">Cloud Engineering</option>
              <option value="Security">Security</option>
              <option value="Automation">Automation</option>
            </select>
          </div>
          </AnimatedSection>

          <div className="grid gap-6">
            {filterJobs().map((job, index) => (
              <AnimatedSection 
                key={job.id} 
                delay={index * 100}
                direction="right"
              >
                <div
                  onClick={() => setSelectedJob(job)}
                  className="border rounded-lg p-6 hover:shadow-lg transition duration-300 cursor-pointer bg-white transform hover:scale-102"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{job.title}</h3>
                      <p className="text-gray-600 mb-4">{job.location} • {job.type}</p>
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                    <ChevronRight className="text-gray-400" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with alternating animations */}
     

      {/* Footer with fade-in animation */}
     <Footer/>

      {/* Modal with fade and scale animation */}
      {selectedJob && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedJob(null)}
        >
          <div 
            className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{selectedJob.title}</h3>
            <p className="text-gray-600 mb-4">{selectedJob.location} • {selectedJob.type}</p>
            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-gray-800">About the Role</h4>
              <p className="text-gray-700">{selectedJob.description}</p>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setSelectedJob(null)}
                className="px-6 py-2 border rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-300"
              >
                Close
              </button>
              <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSf6kGze5sJqhhcDIUztf2-sbAARBkpdzO6jyVImL9u8O8QnVw/viewform?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button
    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity duration-300"
  >
    Apply Now
  </button>
</a>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Add keyframe animations for modal
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes scaleIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
  
  .animate-scaleIn {
    animation: scaleIn 0.3s ease-out;
  }
`;
document.head.appendChild(style);

export default CareerPage;