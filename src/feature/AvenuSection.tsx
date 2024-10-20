// src/feature/AvenuSection.tsx

import React from 'react';

const AvenueSection: React.FC = () => {
  return (
    <div className="bg-avenue flex h-[90vh] flex-col items-center justify-center text-center">
      <h1 className="syne-bold my-4 text-6xl font-bold text-[#A6A6A6]">
        Avenue
      </h1>
      <h2 className="text-3xl text-white">The Algonquin</h2>
      <p className="m-4 max-w-lg text-lg text-[#A6A6A6]">
        The Algonquin is a private social club in ChiangMai, offering an
        intimate community of like-minded individuals in an elegant and
        exclusive setting.
      </p>
    </div>
  );
};

// ... existing code ...

export default AvenueSection;
