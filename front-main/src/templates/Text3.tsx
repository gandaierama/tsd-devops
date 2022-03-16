import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';



const Text3 = () => (
  <Background color="bg-gray-100 h-100">

    <Section >

      <HeroOneButton
        title={
          <>
            <span className="text-gray-200 text-4xl ">Ideal para adegas, e-commerces, padarias, pizzarias, restaurantes e entregas realizadas via moto-frete.</span>
            <br/>
            <span className="text-orange-100 text-2xl">Deixe de lado problemas com faltas, contratações e encargos.</span>
          </>
        }
        description=""
        button={
          <Link href="">
            <a>
              <Button xl mb-3 >Baixe o app agora</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Text3 };
