import React from "react";
import { FaHospital, FaHome } from "react-icons/fa";

interface PackageCardProps {
  title: string;
  reportsTime: string;
  testsCount: number;
  tests: string[];
  includes?: { icon: string; id: number; name: string }[];
  availableAt: string;
  category: string;
  fasting: string;
  originalPrice: number;
  discount?: string;
  discountedPrice: number;
  offer?: string; // Optional banner at the bottom
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  reportsTime,
  testsCount,
  tests,
  includes,
  availableAt,
  category,
  fasting,
  originalPrice,
  discount,
  discountedPrice,
  offer,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 pb-7 border border-gray-200 w-[400px] relative">
      {/* Package Title */}
      <h3 className="text-xl font-semibold truncate overflow-hidden">{title}</h3>

      {/* Reports Time (Replaced FaClock with Image) */}
      <div className="flex items-center text-gray-600 text-sm mt-4">
        <img
          src="https://www.medibuddy.in/assets/icons/corpLabs/labs-reports-tat.svg"
          alt="Reports Time"
          className="h-5 w-5 mr-2"
        />
        <span>Reports in {reportsTime}</span>
      </div>

      {/* Tests & Includes (Side by Side) */}
      <div className="flex justify-between mt-3">
        {/* Tests Section (3/5 width) */}
        <div className="w-[50%]">
          <p className="font-semibold">{testsCount} Tests</p>
          <ul className="text-gray-600 text-sm list-disc mt-2 ml-4">
            {tests.map((test, index) => (
              <li key={index} className="truncate overflow-hidden">
                {test}
              </li>
            ))}
          </ul>
        </div>

        {/* Includes Section (2/5 width) */}
        {includes && includes.length > 0 && (
          <div className="w-[40%]">
            <p className="font-semibold mb-2">Includes</p>
            {includes.map((item) => (
              <div
                key={item.id}
                className="flex items-center text-gray-600 text-sm"
              >
                <img src={item.icon} alt={item.name} className="h-3.5 w-3.5" />
                <span className="ml-2 truncate overflow-hidden">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Availability & Fasting Info */}
      <div className="bg-gray-100 p-2 rounded-md mt-3 flex justify-between text-sm text-gray-600">
        <div>
          <span className="font-semibold">Fasting:</span>
          <span className="ml-2">{fasting}</span>
        </div>
        <div className="flex items-center">
          <div className="flex flex-row items-center gap-2">
            <span className="font-semibold">Available at :</span>
            {category === "center_visit" ? (
              <FaHospital className="text-blue-500" />
            ) : (
              <FaHome className="text-red-500" />
            )}
            {availableAt}
          </div>
        </div>
      </div>

      {/* Pricing Section and Add Button (Side by Side) */}
      <div className="flex justify-between items-center mt-3">
        <div>
          <span className="text-gray-500 line-through text-sm">
            ₹{originalPrice}
          </span>
          {discount && (
            <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 ml-2 rounded">
              {discount}
            </span>
          )}
          <p className="text-2xl font-semibold text-blue-500 mt-1">
            ₹{discountedPrice}/-
          </p>
        </div>

        {/* Add Button */}
        <button className="border border-blue-500 text-blue-500 font-semibold py-1.5 px-6 rounded-xl hover:bg-blue-400 hover:text-white transition">
          Add
        </button>
      </div>

      {/* Bottom Offer Banner (Optional) */}
      {offer && (
        <div className="absolute bottom-0 left-0 w-full bg-blue-400 text-white text-center text-xs font-medium py-1 rounded-b-xl">
          {offer}
        </div>
      )}
    </div>
  );
};

export default PackageCard;
