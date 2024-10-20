import { Hero } from '@/components/Hero';
import AvenueSection from '@/feature/AvenuSection';
import { TopicSection } from '@/feature/TopicSection';
import Footer from '@/footer/Footer';
import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <div className="work-sans-text antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <TopicSection
        title="Cyberpunk"
        description="Privacy-focused tools like VPN, E2EE, Digital Identities include SSI, DID, and Tor; open-source initiatives such as Creative Commons, GPL, and BSD; and interoperability standards like OIDC, OAuth, and Fediverse."
        classNames="bg-orange-texture text-[#7E0F04]"
        animals={['tiger', 'humound', 'peacock']}
        insertIndices={[0, 15, 20]}
      />
      <TopicSection
        title="Crypto Community"
        description="Digital Identities include SSI, DID, and Tor; open-source initiatives such as Creative Commons, GPL, and BSD; and interoperability standards like OIDC, OAuth, and Fediverse and VC; Digital Assets include DeFi used as hedges and tools against censorship; Digital Associations include DAOs."
        classNames="bg-blue-texture text-[#FFE9E0]"
        animals={['rhino', 'crocodile', 'pig']}
        insertIndices={[10, 20, 30]}
      />
      <TopicSection
        title="Crypto-Symbiotic Society"
        description="Envisioning future societies based on the foundations of network states, autonomous worlds, and regenerative cooperatives, with a strong emphasis on Sovereignty and Solidarity."
        classNames="bg-green-texture text-[#1d4843]"
        animals={['monkey', 'koala', 'anteater']}
        insertIndices={[10, 20, 2]}
      />
      <AvenueSection />
      <Footer />
    </div>
  );
};

export default Index;
