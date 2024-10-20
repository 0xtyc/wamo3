import SpeakerCard from '@/components/SpeakerCard';

const SpeakerSection = () => {
  const speakers = [
    { name: 'Speaker 1', image: '/assets/images/speaker1.jpg' },
    { name: 'Speaker 2', image: '/assets/images/speaker2.jpg' },
    { name: 'Speaker 3', image: '/assets/images/speaker3.jpg' },
    { name: 'Speaker 4', image: '/assets/images/speaker4.jpg' },
    { name: 'Speaker 5', image: '/assets/images/speaker5.jpg' },
    { name: 'Speaker 6', image: '/assets/images/speaker6.jpg' },
    { name: 'Speaker 7', image: '/assets/images/speaker7.jpg' },
  ];
  return (
    <div
      className={`bg-purple-texture relative flex h-fit w-screen px-12 py-16 text-[#46599D] md:px-32`}
    >
      <div className="mx-auto flex max-w-6xl flex-col">
        <div className="w-full items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <div className="syne-bold w-full py-5 text-5xl md:max-w-[60%]">
            Speakers
          </div>
        </div>

        <div className="w-full py-5">
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-row flex-wrap justify-start lg:max-w-[70%] lg:items-start">
              {speakers.map((speaker) => (
                <SpeakerCard
                  key={speaker.name}
                  imageUrl={speaker.image}
                  name={speaker.name}
                  title="Speaker"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SpeakerSection };
