import React from "react";
import PackageCard from "./ui/PackageCard";
import {healthPackages} from "../constants/Packages"

// const packages = [
//   {
//     id:1,
//     title: "MB Pack 22",
//     reportsTime: "24 - 48 Hrs",
//     testsCount: 62,
//     tests: [
//       "Bilirubin Profile (Total, Direct & Indirect) - Serum",
//       "Complete Blood Count (CBC) - EDTA Whole Blood",
//     ],
//     includes: [
//       {
//         icon: "https://www.medibuddy.in/assets/icons/corpLabs/radiology-icon.svg",
//         id: 1,
//         name: "Radiology",
//       },
//       {
//         icon: "https://www.medibuddy.in/assets/icons/doctor.svg",
//         id: 2,
//         name: "5 Consultations",
//       },
//     ],
//     availableAt: "Center",
//     category: "center_visit",
//     fasting: "10 - 12 Hrs",
//     originalPrice: 6630,
//     discount: "23% OFF",
//     discountedPrice: 5100,
//   },
//   {
//     id:1,
//     title: "MediBuddy Basic Health Checkup",
//     reportsTime: "24 - 48 Hrs",
//     testsCount: 59,
//     tests: ["Complete Blood Count (CBC)...", "Complete Urine Examination..."],
//     availableAt: "Home",
//     category: "home_visit",
//     fasting: "10 - 12 Hrs",
//     originalPrice: 2299,
//     discount: "52% OFF",
//     discountedPrice: 1099,
//     offer: "Hurry! Flat 5% Off",
//   },
// ];

const PackageSection: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-6 px-6 py-10">
      {healthPackages.map((pkg) => (
        <PackageCard key={pkg.id} {...pkg} />
      ))}
    </div>
  );
};

export default PackageSection;
