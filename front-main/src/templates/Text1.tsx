import Link from 'next/link';

import { Background } from '../background/Background';
import { Button, Container } from 'react-bootstrap';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';



const Text1 = () => (
  <Background color="bg-gray-100">

    <Section className="h-100" >
    <Container >

      <HeroOneButton
        title={
          <>
            <span className="text-gray-200 text-4xl tracking-tighter leading-3">Motoboys fixos,rastreados em temporeal, sem vínculos, com treinamento e seguro de vida.</span>
            <br/>
            <span className="text-orange-100 text-2xl tracking-tighter leading-3">Nenhuma taxa é cobrada sobre o valor do seu pedido.</span>
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

export { Text1 };
