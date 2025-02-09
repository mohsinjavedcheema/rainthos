import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Code2, Package, TestTube2, Rocket, CloudUpload, Server, Activity,
} from 'lucide-react';

const DevOpsCycle = () => {
  const stages = [
    { id: 1, name: 'Plan', icon: <Calendar />, color: 'bg-blue-400' },
    { id: 2, name: 'Code', icon: <Code2 />, color: 'bg-green-400' },
    { id: 3, name: 'Build', icon: <Package />, color: 'bg-yellow-400' },
    { id: 4, name: 'Test', icon: <TestTube2 />, color: 'bg-purple-400' },
    { id: 5, name: 'Release', icon: <Rocket />, color: 'bg-pink-400' },
    { id: 6, name: 'Deploy', icon: <CloudUpload />, color: 'bg-red-400' },
    { id: 7, name: 'Operate', icon: <Server />, color: 'bg-indigo-400' },
    { id: 8, name: 'Monitor', icon: <Activity />, color: 'bg-teal-400' },
  ];

  const [activeStage, setActiveStage] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
  
    if (!containerRef.current) return; // Prevent running effect if ref is not ready
  
    const observer = new ResizeObserver(updateDimensions);
    observer.observe(containerRef.current);
  
    return () => {
      if (observer) observer.disconnect(); // Ensure cleanup is safe
    };
  }, [containerRef.current]); // Observe changes in containerRef
  
  useEffect(() => {
    if (!isRunning) return; // Prevent running effect if it's not active
  
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [isRunning, stages.length]); // Ensure it updates when `stages.length` changes
  

  const calculatePosition = (index, radius) => {
    const angle = (index * 2 * Math.PI) / stages.length - Math.PI / 2;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  const handleStageClick = (index) => {
    setActiveStage(index);
    setShowModal(true);
    setIsRunning(false);
  };

  const radius = Math.min(dimensions.width, dimensions.height) * 0.4;
  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
        How it works?
      </h1>

      <div
        ref={containerRef}
        className="relative w-[90vmin] h-[90vmin] max-w-[800px] max-h-[800px]"
      >
        <svg className="absolute inset-0 w-full h-full text-blue-200">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
            </marker>
          </defs>

          {dimensions.width > 0 &&
            stages.map((_, index) => {
              const nextIndex = (index + 1) % stages.length;
              const start = calculatePosition(index, radius);
              const end = calculatePosition(nextIndex, radius);

              return (
                <line
                  key={`line-${index}`}
                  x1={centerX + start.x}
                  y1={centerY + start.y}
                  x2={centerX + end.x}
                  y2={centerY + end.y}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeOpacity="0.2"
                />
              );
            })}

          <motion.circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            markerEnd="url(#arrowhead)"
          />
        </svg>

        {dimensions.width > 0 &&
          stages.map((stage, index) => {
            const { x, y } = calculatePosition(index, radius);
            const isActive = activeStage === index;

            return (
              <motion.div
                key={stage.id}
                className={`absolute ${stage.color} rounded-full cursor-pointer 
                  flex items-center justify-center shadow-lg hover:shadow-xl
                  w-[clamp(60px,8vmin,80px)] h-[clamp(60px,8vmin,80px)] text-white`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  x: '-50%',
                  y: '-50%',
                }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: 'spring', stiffness: 300 },
                }}
                onClick={() => handleStageClick(index)}
              >
                <div className="text-[clamp(24px,3vmin,32px)]">{stage.icon}</div>
                <motion.span
                  className="absolute -bottom-[4vmin] text-center font-semibold
                            text-[clamp(14px,1.5vmin,18px)] text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {stage.name}
                </motion.span>
              </motion.div>
            );
          })}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="bg-white rounded-full shadow-lg flex items-center justify-center
                        w-[clamp(120px,18vmin,160px)] h-[clamp(120px,18vmin,160px)]"
          >
            <span className="text-[clamp(18px,2.5vmin,24px)] font-bold text-gray-700 text-center">
              DevOps Cycle
            </span>
          </div>
        </div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black/30 flex items-center justify-center backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowModal(false);
                setIsRunning(true);
              }}
            >
              <motion.div
                className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl border-2 border-blue-100"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={`${stages[activeStage].color} w-14 h-14 rounded-xl 
                              mb-4 flex items-center justify-center text-white`}
                >
                  {stages[activeStage].icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {stages[activeStage].name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed description of the {stages[activeStage].name.toLowerCase()} stage...
                </p>
                <button
                  className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => {
                    setShowModal(false);
                    setIsRunning(true);
                  }}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DevOpsCycle;