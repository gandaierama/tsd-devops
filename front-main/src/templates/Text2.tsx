import Link from 'next/link';

import { Background } from '../background/Background';
import { Button, Container } from 'react-bootstrap';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';



const Text2 = () => (
  <Background color="bg-gray-100">

    <Section className="h-100" >
    <Container >

      <HeroOneButton
        title={
          <>
            <span className="text-gray-200 text-4xl tracking-tighter ">Decida a quantidade de motoboys, horários e raios de entrega para cada dia da semana.</span>
            <br/>
            <span className="text-orange-100 tracking-tighter text-2xl">Um novo conceito dea plicativo para ntregas.</span>
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

export { Text2 };
