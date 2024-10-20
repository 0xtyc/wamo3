interface TopicSectionProps {
  title: string;
  description: string;
  classNames?: string;
  animals: string[];
  insertIndices: number[];
}

const TopicSection: React.FC<TopicSectionProps> = ({
  title,
  description,
  classNames,
  animals,
  insertIndices,
}) => {
  const wordlist = description.split(' ');

  const getInsertedAnimal = (index: number) => {
    const animalIndex = insertIndices?.findIndex((i) => i === index);
    const animal = animals?.[animalIndex];
    return animal ? (
      <img
        src={`/assets/images/animals/${animal}.svg`}
        alt="elephant"
        className="mx-2 h-10"
      />
    ) : null;
  };

  return (
    <div
      className={`relative flex h-fit w-screen px-4 py-16 md:px-32 ${classNames}`}
    >
      <div className="mx-auto flex max-w-5xl flex-col">
        <div className="w-full items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <div className="syne-bold w-full py-5 text-5xl md:max-w-[60%]">
            {title}
          </div>
        </div>

        <div className="w-full py-5">
          <div className="flex flex-col items-center justify-center text-left md:items-end md:justify-end ">
            <div className="bottom-8 max-w-fit text-xl md:max-w-[60%]">
              {wordlist.map((word, index) => (
                <span key={index} className="inline-flex items-center">
                  {`${word}`}
                  {'\u00A0'}
                  {getInsertedAnimal(index)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TopicSection };
