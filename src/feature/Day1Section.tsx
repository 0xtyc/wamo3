const Day1Section = () => {
  return (
    <div
      className={`bg-orange-texture relative flex h-fit w-screen px-32 py-16 text-[#7E0F04]`}
    >
      <div className="flex max-w-6xl flex-col">
        <div className="w-full items-start justify-start text-left">
          <div className="syne-text my-2 text-xl font-bold">
            Day one - Nov.⑥
          </div>
          <div className="syne-bold text-5xl ">Cypherpunk</div>
        </div>

        <div className="w-full py-5">
          <div className="flex flex-col items-end justify-end text-right">
            <div className="bottom-8 max-w-[60%] text-lg">
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
