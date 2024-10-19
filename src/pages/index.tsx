import { Hero } from '@/components/Hero';
import { TopicSection } from '@/feature/TopicSection';
import Footer from '@/footer/Footer';
import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <div className="work-sans-text text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <TopicSection
        title="Cyberpunk"
        description="Privacy-focused tools like VPN, E2EE, Digital Identities include SSI, DID, and Tor; open-source initiatives such as Creative Commons, GPL, and BSD; and interoperability standards like OIDC, OAuth, and Fediverse."
        classNames="bg-orange-texture text-[#7E0F04]"
      />
      <TopicSection
        title="Crypto Community"
        description="Digital Identities include SSI, DID, and Tor; open-source initiatives such as Creative Commons, GPL, and BSD; and interoperability standards like OIDC, OAuth, and Fediverse and VC; Digital Assets include DeFi used as hedges and tools against censorship; Digital Associations include DAOs."
        classNames="bg-blue-texture text-white"
      />
      <TopicSection
        title="Crypto-Symbiotic Society"
        description="Envisioning future societies based on the foundations of network states, autonomous worlds, and regenerative cooperatives, with a strong emphasis on Sovereignty and Solidarity."
        classNames="bg-[#A997C5] text-[#46599D]"
      />
      <Footer />
    </div>
  );
};

export default Index;
