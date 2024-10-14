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
        title="加密朋克"
        date={new Date('2024-11-06')}
        description="1990 年代，因為有巨型的政府電信複合體，才有了密碼龐克運動，這時代的關鍵詞是全開放如OSS、強隱私如PGP、可互通如W3C、可協作如Git。"
        classNames="bg-[#E88736]"
      />
      <VerticalFeatureRow
        index={2}
        title="加密社群"
        date={new Date('2024-11-07')}
        description="2010 至2020 年代，因為有巨型的雲端封建體系，才有了加密社群。這時代的關鍵詞是數位身分如SSI，數位資產如DeFi，數位結社如DAO。"
        classNames="bg-[#46599D]"
      />
      <VerticalFeatureRow
        index={3}
        title="密碼共生社會"
        date={new Date('2024-11-08')}
        description="2020年代以降，有沒有可能因為有巨型的「？？？」，加速下一個密碼共生社會的時代來臨？新時代很模糊，冰山一角的知道會是一個有效掌握密碼學工具的未來社群，但我們試圖伸手去指時，猜想的關鍵詞有自主世界、網路國家、再生合作社，但這只是猜想，需要大家來實踐與探索!"
        classNames="bg-[#9A88B7]"
      />
      <Section>
        <div className="mx-auto flex w-[80%] flex-col space-y-10 text-center text-2xl">
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

          <p> -WAMO3</p>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Index;
