import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-[#343435]">
    <Section classNames="pt-20 pb-32">
      <div className="relative h-[320px]">
        <img
          src="/assets/images/bg-frame.svg"
          alt="frame"
          className="z-100 absolute left-1/2 top-0 h-auto w-full max-w-[1300px] -translate-x-1/2 opacity-30 invert"
        />
        <img
          src="/assets/images/wamo-logo.svg"
          alt="logo"
          className="mx-auto py-[130px]"
        />
      </div>
    </Section>
  </Background>
);

export { Hero };
