import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  ArrowRight,
  Cloud,
  Terminal,
  GitBranch,
  Monitor,
  Server,
  Shield
} from 'lucide-react';
import logo from "../assets/Rainthoslog-SVG.svg"

const Footer = () => {
  const devopsServices = [
    { title: 'Cloud Infrastructure Design', href: '#', icon: Cloud },
    { title: 'CI/CD Pipeline Implementation', href: '#', icon: GitBranch },
    { title: 'Infrastructure as Code', href: '#', icon: Terminal },
    { title: 'Kubernetes Orchestration', href: '#', icon: Server },
    { title: 'Monitoring & Observability', href: '#', icon: Monitor },
    { title: 'Security & Compliance', href: '#', icon: Shield }
  ];

  const solutions = [
    { title: 'Cloud Migration Strategy', href: '#' },
    { title: 'DevSecOps Implementation', href: '#' },
    { title: 'Platform Engineering', href: '#' },
    { title: 'SRE as a Service', href: '#' },
    { title: 'Cloud Cost Optimization', href: '#' }
  ];

  const technologies = [
    { title: 'AWS Cloud Services', href: '#' },
    { title: 'Azure & GCP Solutions', href: '#' },
    { title: 'Terraform & Ansible', href: '#' },
    { title: 'Docker & Kubernetes', href: '#' },
    { title: 'Jenkins & GitLab CI', href: '#' },
    { title: 'Prometheus & Grafana', href: '#' }
  ];

  const socialLinks = [
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 border-t border-blue-100">
      {/* Top gradient border */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12 lg:mb-16">
          {/* Company Info */}
          <div className="lg:pr-8">
            <img src={logo} alt="DevOps Company Logo" className="h-40 mb-6 w-auto" />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Empowering businesses through modern DevOps practices and cloud-native solutions. 
              We transform development workflows with automation, security, and scalability.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                           bg-white hover:bg-gray-50 border border-gray-200
                           text-gray-600 hover:text-blue-600 transition-all
                           shadow-sm hover:shadow-md"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Services</h3>
            <ul className="space-y-3">
              {devopsServices.map(({ title, href, icon: Icon }) => (
                <li key={title}>
                  <a 
                    href={href}
                    className="text-gray-600 hover:text-blue-600 flex items-start group"
                  >
                    <Icon className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0
                                   group-hover:text-blue-600 transition-colors" />
                    <span className="text-sm leading-snug group-hover:translate-x-1 transition-transform">
                      {title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.title}>
                  <a 
                    href={solution.href}
                    className="text-gray-600 hover:text-blue-600 flex items-center group"
                  >
                    <span className="w-5 h-5 mr-3 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 
                                         transition-all duration-300 text-purple-500" />
                    </span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform">
                      {solution.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                {['DevOps Blog', 'Case Studies', 'Technical Documentation'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-5 h-5 mr-3 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 
                                           transition-all duration-300 text-purple-500" />
                      </span>
                      <span className="text-sm group-hover:translate-x-1 transition-transform">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies</h3>
            <ul className="space-y-3">
              {technologies.map((tech) => (
                <li key={tech.title}>
                  <a 
                    href={tech.href}
                    className="text-gray-600 hover:text-blue-600 flex items-center group"
                  >
                    <span className="w-5 h-5 mr-3 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 
                                         transition-all duration-300 text-purple-500" />
                    </span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform">
                      {tech.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Get Started</h3>
              <a
                href="https://calendly.com/contact-rainthos"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r 
                         from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 
                         transition-all duration-300 text-white font-medium text-sm
                         shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Rainthos. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;