import { Hero } from '@/components/Hero';
import { Day1Section } from '@/feature/Day1Section';
import { Day2Section } from '@/feature/Day2Section';
import Footer from '@/footer/Footer';
import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <div className="work-sans-text text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Day1Section />
      <Day2Section />
      <Footer />
    </div>
  );
};

export default Index;
