import type { ReactNode } from 'react';

type ISectionProps = {
  classNames?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div className={`mx-auto max-w-screen-lg px-3 py-16 ${props.classNames}`}>
    {props.children}
  </div>
);

export { Section };
