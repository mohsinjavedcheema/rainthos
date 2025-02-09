import { useState } from "react";


import { Dialog } from "@headlessui/react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="hero"
      className="py-12 relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 via-blue-50 to-white opacity-50 animate-pulse"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row md:space-x-8 items-center px-4 sm:px-6 lg:px-8">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6 md:ml-4 lg:ml-12 opacity-0 transform translate-x-10 animate-slide-in-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Streamline Development <br /> and Operations
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            Accelerate your software delivery process with seamless
            collaboration, automation, and reliability. Build, test, and deploy
            with unmatched efficiency and quality.
          </p>
          <div className="mt-4">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-700 transition-all duration-500 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end opacity-0 transform translate-x-10 animate-slide-in-right">
          <img  
            src={"https://raw.githubusercontent.com/amaad0048/gif/main/devops.gif"}
            alt="DevOps Illustration"
            className="w-full max-w-md md:max-w-xl lg:max-w-2xl object-contain"
          />
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <Dialog.Panel className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative">
          <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">&times;</button>
          <h2 className="text-xl font-semibold text-center mb-4">Book an Appointment</h2>
          <iframe
            src="https://calendly.com/contact-rainthos"
            width="100%"
            height="500"
            frameBorder="0"
            className="rounded-lg"
            allowFullScreen
          ></iframe>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
};

export default Hero;