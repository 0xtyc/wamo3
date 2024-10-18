import { Hero } from '@/components/Hero';
import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import Footer from '@/footer/Footer';
import { Meta } from '@/layout/Meta';
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
        classNames="bg-orange-texture"
      />
      <VerticalFeatureRow
        index={2}
        title="Crypto Community"
        date={new Date('2024-11-07')}
        description="Digital Identities include SSI, DID, and Tor; open-source initiatives such as Creative Commons, GPL, and BSD; and interoperability standards like OIDC, OAuth, and Fediverse and VC; Digital Assets include DeFi used as hedges and tools against censorship; Digital Associations include DAOs."
        classNames="bg-blue-texture"
      />
      <Footer />
    </div>
  );
};

export default Index;
