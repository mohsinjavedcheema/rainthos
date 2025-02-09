import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const LocationCard = ({ location, index }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: location.timezone,
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      setCurrentTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [location.timezone]);

  const cardVariants = {
    hidden: { 
      opacountry: 0,
      y: 50,
      x: index % 2 === 0 ? -25 : 25,
      rotate: index % 2 === 0 ? -5 : 5
    },
    visible: { 
      opacountry: 1,
      y: 0,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2
      }
    }
  };

  return (
    <div className="w-full md:w-[calc(33.33%-1rem)] relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        whileHover={{
          scale: 1.05,
          rotateX: 5,
          rotateY: 5,
          transition: { duration: 0.3 }
        }}
        className=" cursor-pointer group h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-md"
      >
        <div className="p-6 flex flex-col items-center text-center ">
          {/* PNG image as the icon */}
          <div className="flex items-center justify-center w-full h-full">
  <img
    src={location.icon}
    alt={location.country}
    className="w-48 h-48 object-contain transition-all duration-300 transform hover:scale-110"
  />
</div>
          
          <h3 className="text-xl font-bold mt-4 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {location.country}
          </h3>
          
          
          <div className="space-y-3 transition-all duration-300 opacountry-80 group-hover:opacountry-100">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-sm">{location.address}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-sm">{currentTime}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-sm">{location.email}</span>
            </div>
          </div>

          <button onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`, '_blank')} className="mt-6 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium bg-blue-50 text-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
            Get Directions
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const OfficeLocations = () => {
  const locations = [
    {
      country: "Pakistan",
     
      address: "CalmKaaj Crossroads, I-10/3, Islamabad",
      email: "contact@rainthos.com",
      timezone: 'Asia/Karachi',
      icon: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677762/minar_mbi3ya.png"// Update with actual PNG path
    },
    {
      country: "United States",
 
      address: "Lakeside Workspaces - Offices",
      email: "contactusa@rainthos.com",
      timezone: 'America/New_York',
      icon: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677758/florida_o3utty.png" // Update with actual PNG path
    },
    {
      country: "UAE",
      address: "One Central Plaza",
      email: "contactdubai@rainthos.com",
      timezone: 'Asia/Dubai',
      icon: "https://res.cloudinary.com/dgcankmpu/image/upload/v1738677758/dubai_muswhh.png", // Update with actual PNG path
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-white">
      {/* Floating particles animation */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacountry-20"
          initial={{
            y: 0,
            x: Math.random() * 100 - 50,
            scale: 0,
          }}
          animate={{
            y: [-20, 100],
            x: Math.random() * 20 - 10,
            scale: [0, 1, 0],
            opacountry: [0, 0.5, 0],
            transition: {
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Global Heritage Hubs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connecting civilizations through technology. Visit our iconic locations featuring culturally inspired workspaces.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center">
          {locations.map((location, index) => (
            <LocationCard 
              key={location.country} 
              location={location} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;