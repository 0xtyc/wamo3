const Day2Section = () => {
  return (
    <div
      className={`bg-blue-texture relative flex h-fit w-screen px-12 py-16 text-white md:px-32`}
    >
      <div className="mx-auto flex max-w-6xl flex-col">
        <div className="w-full items-center justify-center text-center md:items-end md:justify-end md:text-right">
          <div className="syne-text my-2 text-xl font-bold">
            Day two - Nov.⑦
          </div>
          <div className="syne-bold text-5xl ">Crypto Community</div>
        </div>

        <div className="w-full py-5">
          <div className="flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
            <div className="bottom-8 max-w-fit text-lg md:max-w-[60%]">
              Digital Identities include SSI, DID, and Tor; open-source
              initiatives such as Creative Commons, GPL, and BSD; and
              interoperability standards like OIDC, OAuth, and Fediverse and VC;
              Digital Assets include DeFi used as hedges and tools against
              censorship; Digital Associations include DAOs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Day2Section };
