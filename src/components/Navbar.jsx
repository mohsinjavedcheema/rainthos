import { useState, useEffect, useRef } from 'react';
import { Calendar, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/Rainthoslog-SVG.svg"

const NavbarSpacer = ({ isScrolled }) => (
  <div className={`w-full transition-all duration-300 ${isScrolled ? 'h-16 sm:h-20' : 'h-16 sm:h-20'}`} />
);

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (hash) => {
    if (location.pathname !== "/") {
      navigate(`/${hash}`); // Navigate to home first
      setTimeout(() => {
        window.location.hash = hash; // Then apply the hash for scrolling
      }, 100); // Small delay to allow route change
    } else {
      window.location.hash = hash; // Directly scroll if already on home
    }
  };

  
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const calendlyWidgetRef = useRef(null);
  const menuRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside menu detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Load Calendly script
  useEffect(() => {
    if (window.Calendly) {
      setIsCalendlyLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsCalendlyLoaded(true);
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Initialize Calendly widget when modal opens
  useEffect(() => {
    if (showCalendly && isCalendlyLoaded && calendlyWidgetRef.current) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/contact-rainthos',
        parentElement: calendlyWidgetRef.current,
        prefill: {},
        utm: {}
      });
    }
  }, [showCalendly, isCalendlyLoaded]);

  const openCalendly = () => setShowCalendly(true);
  const closeCalendly = () => setShowCalendly(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-gray-100'}`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0 ml-4">
  <a href="/" aria-label="Home">
    <img src={ logo}alt="Company Logo" className="h-56 w-36" />
  </a>
</div>


            <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center space-x-4 xl:space-x-6">
            <a onClick={() => handleNavClick("#home")} className=" cursor-pointer text-sm xl:text-base text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300 whitespace-nowrap">Home</a>
      <a onClick={() => handleNavClick("#services")} className=" cursor-pointer text-sm xl:text-base text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300 whitespace-nowrap">Services</a>
      <a onClick={() => handleNavClick("#our-team")} className=" cursor-pointer text-sm xl:text-base text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300 whitespace-nowrap">Our Team</a>
      <a onClick={() => handleNavClick("#how-it-works")} className=" cursor-pointer text-sm xl:text-base text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300 whitespace-nowrap">How It Works</a>
      <a onClick={() => handleNavClick("#locations")} className=" cursor-pointer text-sm xl:text-base text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300 whitespace-nowrap">Locations</a>
      <a href="/careers" className=' cursor-pointer text-sm xl:text-base text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300 whitespace-nowrap'>Careers</a>
      <a onClick={() => handleNavClick("#contact-us")} className="cursor-pointer text-sm xl:text-base text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300 whitespace-nowrap">Contact Us</a>   </div>
            </div>

            <div className="flex items-center">
              <button
                onClick={openCalendly}
                className="hidden lg:flex items-center space-x-2 px-6 py-2.5 text-sm xl:text-base text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-transform hover:scale-105"
              >
                <Calendar className="w-4 h-4 xl:w-5 xl:h-5" />
                <span>Schedule a Meeting</span>
              </button>

              <button
                className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                onClick={() => setToggleMenu(!toggleMenu)}
                aria-label="Toggle menu"
              >
                <div className="space-y-1.5">
                  <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${toggleMenu ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${toggleMenu ? 'opacity-0' : ''}`} />
                  <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${toggleMenu ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`lg:hidden fixed inset-y-0 right-0 transform ${toggleMenu ? 'translate-x-0' : 'translate-x-full'} w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-6">
            <button
              className="absolute top-4 right-4 p-2"
              onClick={() => setToggleMenu(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="mt-8 flex flex-col space-y-4">
              <a onClick={() => handleNavClick("#home")} className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300">Home</a>
              <a onClick={() => handleNavClick("#services")} className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300">Services</a>
              <a onClick={() => handleNavClick("#our-team")} className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300">Our Team</a>
              <a onClick={() => handleNavClick("#how-it-works")} className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300">How it Works</a>
              <a onClick={() => handleNavClick("#locations")} className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300">Locations</a>
              <a href="/careers" className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300">Careers</a>
              <a onClick={() => handleNavClick("#contact-us")} className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300">Contact Us</a>

              <button
                onClick={() => {
                  openCalendly();
                  setToggleMenu(false);
                }}
                className="mt-4 flex items-center space-x-2 px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              >
                <Calendar className="w-4 h-4"/>
                <span>Schedule Meeting</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <NavbarSpacer isScrolled={isScrolled} />

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[60]">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] relative overflow-hidden">
            <button
              onClick={closeCalendly}
              className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 transition duration-300 z-10"
              aria-label="Close calendar"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              ref={calendlyWidgetRef}
              className="calendly-inline-widget w-full"
              style={{ minWidth: '320px', height: '80vh' }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;