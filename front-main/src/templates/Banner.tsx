import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Infomídia possui um sistema automatizado apresentação de tabela de preços"
      subtitle="Tabela de Preços Digital para Supermercados"
      button={
        <Link href="">
          <a>
            <Button>Solicite um orçamento</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
