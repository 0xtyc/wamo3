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
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

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
      className={`relative flex h-[334px] w-screen items-center justify-center p-8 text-white ${classNames}`}
    >
      <div className="flex">
        <div className="w-1/3">
          <div className="mx-20 flex flex-row space-x-6">
            <div className="text-4xl font-bold text-white">Day {index}</div>

            <div className="pt-4 text-xl text-white">{title}</div>
          </div>
        </div>

        <div className="w-2/3">
          <div className="flex flex-col text-left">
            <div className="text-xl font-bold">{weekdays[date.getDay()]}</div>
            <div className="flex flex-row">
              <div className="text-5xl font-bold">{date.getDate()}</div>
              <span className="mx-2"></span>
              <span className="text-5xl font-bold"> — </span>
              <span className="mx-2"></span>
              <div className="text-5xl font-bold">
                {months[date.getMonth()]}
              </div>
            </div>
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
