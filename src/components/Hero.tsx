import { Button } from '@/button/Button';

import { Background } from '../background/Background';

const Hero = () => (
  <Background color="bg-[#343435]">
    <div className="relative h-screen md:h-[670px]">
      <div
        style={{
          backgroundImage: 'url(/assets/images/banner.png)',
          backgroundSize: 'cover',
          height: '100%',
          width: 'full',
        }}
      >
        <div className="z-10 flex flex-col items-center justify-center pt-[50%] md:pt-[200px]">
          <img
            src="/assets/images/wamo-logo.svg"
            alt="logo"
            className="z-10 mx-auto w-[130px]"
          />
          <div className="flex flex-col items-center justify-center text-center md:mt-10">
            <p className="text-3xl text-white">THE ART OF</p>
            <p className="text-5xl font-semibold text-white">
              BEING SELF-GOVERNED
            </p>
            <p className="text-lg text-gray-500">Chiang Mai ---- 2024</p>
            <p className="text-xl text-gray-500">Nov 06 - Nov 07</p>
            <div className="my-10">
              <Button xl>APPLY</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Background>
);

export { Hero };
