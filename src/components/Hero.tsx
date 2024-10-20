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
          <div className="flex flex-col items-center justify-center text-center md:mt-6">
            <p className="text-5xl font-semibold text-[#E57A29]">THE ART OF</p>
            <p className="text-5xl font-semibold text-[#E57A29]">
              BEING SELF-GOVERNED
            </p>
            <p className="text-lg text-white">Chiang Mai</p>
            <p className="text-lg text-white">2024 Nov 06 - Nov 07</p>
            <div className="my-10">
              <button
                className="cursor-pointer rounded-full bg-white px-10 py-2 text-lg font-semibold text-[#E57A29] hover:bg-[#E57A29] hover:text-white"
                onClick={() => window.open('https://lu.ma/wamo3', '_blank')}
              >
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Background>
);

export { Hero };
