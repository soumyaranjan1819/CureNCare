import React from "react";
import FeatureCard from "./ui/FeatureCard";
import {featureItems} from "../constants/FeatureItems";

const FeatureSection: React.FC = () => {
  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
        {featureItems.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            isNew={item.isNew}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
