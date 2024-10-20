// src/feature/AvenuSection.tsx

import React from 'react';

const AvenueSection: React.FC = () => {
  return (
    <div className="bg-avenue relative flex h-[90vh] flex-col items-start justify-center p-5 text-left md:items-center md:text-center">
      <h1 className="syne-bold my-4 text-6xl font-bold text-[#A6A6A6]">
        Avenue
      </h1>
      <h2 className="text-3xl text-white">The Algonquin</h2>
      <p className="my-2 max-w-lg text-lg text-[#A6A6A6]">
        The Algonquin is a private social club in ChiangMai, offering an
        intimate community of like-minded individuals in an elegant and
        exclusive setting.
      </p>
      <p className="absolute bottom-0 left-0 mb-[20px] ml-[5%] text-sm text-[#A6A6A6]">
        *A guide to the club will be provided upon registration.
      </p>
    </div>
  );
};

// ... existing code ...

export default AvenueSection;
