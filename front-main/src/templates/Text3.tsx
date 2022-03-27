import Link from 'next/link';

import { Background } from '../background/Background';
import { Button, Container } from 'react-bootstrap';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';



const Text3 = () => (
  <Background color="bg-gray-100">

    <Section className="h-100" >
    <Container >

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
              <Button  >Baixe o app agora</Button>
            </a>
          </Link>
        }
      />
    </Container >
  </Section>
  </Background>
);

export { Text3 };
