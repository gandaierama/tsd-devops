import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';



const Hero = () => (
  <Background color="bg-gray-100 h-100">

    <Section >
      <div className="inline-flex items-center w-full justify-center">
        <img src="./assets/images/logo_tsd_2022.png" width="400" />
      </div>
      <HeroOneButton
        title={
          <>
            <span className="text-primary-100 text-4xl">{'Motoboys fixo para delivery?\n'}</span>
            <span className="text-gray-200 text-3xl  font-medium">Encontrou os melhores</span>
          </>
        }
        description=""
        button={
          <Link href="">
            <a>
              <Button xl >Baixe o app agora</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
