// src/components/SpeakerCard.tsx

import React from 'react';

interface SpeakerCardProps {
  imageUrl: string;
  name: string;
  title: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ imageUrl, name, title }) => {
  return (
    <div className="mx-10 my-8 flex w-fit flex-row items-center">
      <img
        src={imageUrl}
        alt={name}
        className="size-20 rounded-full bg-black"
      />
      <div className="ml-4 flex flex-col">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
