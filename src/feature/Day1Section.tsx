const Day1Section = () => {
  return (
    <div
      className={`bg-orange-texture relative flex h-fit w-screen px-12 py-16 text-[#7E0F04] md:px-32`}
    >
      <div className="flex max-w-6xl flex-col">
        <div className="w-full items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <div className="syne-text my-2 text-xl font-bold">
            Day one - Nov.⑥
          </div>
          <div className="syne-bold text-5xl ">Cypherpunk</div>
        </div>

        <div className="w-full py-5">
          <div className="flex flex-col items-center justify-center text-center md:items-end md:justify-end md:text-right">
            <div className="bottom-8  max-w-fit text-lg md:max-w-[60%]">
              Privacy-focused tools like VPN, E2EE, Digital Identities include
              SSI, DID, and Tor; open-source initiatives such as Creative
              Commons, GPL, and BSD; and interoperability standards like OIDC,
              OAuth, and Fediverse.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Day1Section };
