import Link from 'next/link';

import { Background } from '../background/Background';
import { Button, Container } from 'react-bootstrap';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';



const Hero = () => (
  <Background color="bg-gray-100">

    <Section className="h-100" >
    <Container >
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
              <Button  >Baixe o app agora</Button>
            </a>
          </Link>
        }
      />
    
  </Container >
  </Section>
  </Background>
);

export { Hero };
