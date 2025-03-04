import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  isNew?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, isNew }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-2 relative h-100">
      <div className="p-3">
        <img src={icon} alt={title} className="h-20 w-20" />
      </div>

      <div>
        <p className="text-lg font-medium ">{title}</p>
      </div>

      {isNew && (
        <span className="absolute top-[-17%] right-50 bg-gradient-to-r from-blue-500 to-red-500 text-white text-xs px-3 py-1 rounded-full">
          New
        </span>
      )}
    </div>
  );
};

export default FeatureCard;
