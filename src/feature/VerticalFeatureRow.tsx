import type { FC } from 'react';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  date: Date;
  index: number;
  classNames?: string;
};

const VerticalFeatureRow: FC<IVerticalFeatureRowProps> = ({
  title,
  description,
  date,
  index,
  classNames,
}) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <div
      className={`relative flex h-fit w-screen items-center justify-center p-8 text-white md:h-[334px] ${classNames}`}
    >
      <div className="flex flex-col p-8 md:flex-row">
        <div className="w-full md:w-1/3">
          <div className="my-4 w-32 rounded-full border border-white px-5 py-1 text-center text-3xl font-bold text-white md:ml-[200px]">
            Day {index}
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="flex flex-col text-left">
            <div className="flex flex-row">
              <div className="text-3xl font-bold">{date.getDate()}</div>
              <span className="mx-2"></span>
              <span className="text-3xl font-bold"> — </span>
              <span className="mx-2"></span>
              <div className="text-3xl font-bold">
                {months[date.getMonth()]}
              </div>
            </div>

            <div className="mb-6 pt-4 text-5xl text-white">{title}</div>
            <div className="bottom-8 max-w-[80%] text-lg text-white">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
