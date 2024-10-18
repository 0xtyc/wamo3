import JSConfetti from 'js-confetti';
import { useEffect, useRef } from 'react';

import IconLink from '@/components/IconLink';
import { Section } from '@/layout/Section';

const Footer = () => {
  const confetti = useRef<JSConfetti | null>(null);
  useEffect(() => {
    confetti.current = new JSConfetti();
  }, []);

  return (
    <div className="relative h-full">
      <Section classNames="flex flex-col md:flex-row">
        <div className="syne-text z-10 flex w-full flex-col space-y-10 p-10 text-left text-2xl md:w-1/2">
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
        <div className="relative flex flex-col items-center justify-center md:absolute md:right-[10%] md:top-12">
          <div className="flex flex-col">
            <IconLink
              src="/assets/images/elephant.svg"
              alt="elephant"
              text="APPLY"
              color="#E5761A"
              onClick={() => {
                window.open('https://wamo3.org', '_blank');
              }}
              onHover={() => {
                confetti.current?.addConfetti({
                  emojis: ['🍀'],
                  emojiSize: 70,
                  confettiNumber: 50,
                });
              }}
            />
            <IconLink
              src="/assets/images/hippo.svg"
              alt="hippo"
              text="Telegram"
              onClick={() => {
                window.open('https://t.me/wamo3', '_blank');
              }}
              onHover={() => {
                confetti.current?.addConfetti({
                  emojis: ['🍉'],
                  emojiSize: 60,
                  confettiNumber: 40,
                });
              }}
            />
            <IconLink
              src="/assets/images/leopard.svg"
              alt="leopard"
              text="X(Twitter)"
              onClick={() => {
                window.open('https://x.com/Wamo_topia', '_blank');
              }}
              onHover={() => {
                confetti.current?.addConfetti({
                  emojis: ['🦊'],
                  emojiSize: 60,
                  confettiNumber: 40,
                });
              }}
            />
          </div>
        </div>
      </Section>
      <footer className="flex flex-col items-center justify-center">
        <div className="relative h-20 w-full bg-[#E4E4E4]">
          <img
            src="/assets/images/tower-logo.svg"
            alt="WAMO3 Logo"
            className="absolute bottom-20 left-20 h-40 w-auto"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
