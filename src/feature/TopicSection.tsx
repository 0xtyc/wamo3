interface TopicSectionProps {
  title: string;
  description: string;
  classNames?: string;
}

const TopicSection: React.FC<TopicSectionProps> = ({
  title,
  description,
  classNames,
}) => {
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
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TopicSection };
