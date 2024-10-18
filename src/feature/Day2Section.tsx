const Day2Section = () => {
  return (
    <div
      className={`bg-blue-texture relative flex h-fit w-screen px-32 py-16 text-white`}
    >
      <div className="flex max-w-6xl flex-col">
        <div className="w-full items-end justify-end text-right">
          <div className="syne-text my-2 text-xl font-bold">
            Day two - Nov.⑦
          </div>
          <div className="syne-bold text-5xl ">Crypto Community</div>
        </div>

        <div className="w-full py-5">
          <div className="flex flex-col items-start justify-start text-left">
            <div className="bottom-8 max-w-[60%] text-lg">
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
