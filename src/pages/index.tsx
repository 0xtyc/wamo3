import { Hero } from '@/components/Hero';
import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import Footer from '@/footer/Footer';
import { Meta } from '@/layout/Meta';
import { Section } from '@/layout/Section';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <VerticalFeatureRow
        index={1}
        title="Cypherpunk"
        date={new Date('2024-11-06')}
        description="Privacy-focused tools like VPN, E2EE, Digital Identities include SSI, DID, and Tor; open-source initiatives such as Creative Commons, GPL, and BSD; and interoperability standards like OIDC, OAuth, and Fediverse."
        classNames="bg-[#E88736]"
      />
      <VerticalFeatureRow
        index={2}
        title="Crypto Community"
        date={new Date('2024-11-07')}
        description="Digital Identities include SSI, DID, and Tor; open-source initiatives such as Creative Commons, GPL, and BSD; and interoperability standards like OIDC, OAuth, and Fediverse and VC; Digital Assets include DeFi used as hedges and tools against censorship; Digital Associations include DAOs."
        classNames="bg-[#46599D]"
      />
      <Section>
        <div className="flex w-full flex-col space-y-10 p-10 text-left font-mono text-2xl md:w-1/2">
          <div>
            <p>
              We stand <b>against</b> singular mechanisms, top-down approaches,
              and the pursuit of global consensus.
            </p>
          </div>

          <div>
            <p>
              We <b>embrace</b> rough consensus, p2p trust networks, and the
              idea of autonomous societies.
            </p>
          </div>

          <p className="text-right"> -WAMO3</p>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Index;
