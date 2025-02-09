// src/components/Card.jsx
const Card = ({ children, className = '' }) => {
    return (
      <div className={`bg-white/90 backdrop-blur-sm rounded-lg shadow-lg ${className}`}>
        {children}
      </div>
    );
  };
  
  const CardContent = ({ children, className = '' }) => {
    return (
      <div className={`p-6 ${className}`}>
        {children}
      </div>
    );
  };
  
  export { Card, CardContent };