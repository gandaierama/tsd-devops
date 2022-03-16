import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Baixe o app"
    description="Aqui na TSD possuímos o plano que melhor se encaixa no seu negócio, horários flexíveis para suas demandas de trabalho, ou entregas a parte de acordo com a sua necessidade."
  >
    <VerticalFeatureRow
      title="Solicite motoboys"
      description="distribuindo de forma inteligente seus pedidos para seus entregadores.de forma simples, visual e em tempo real, automatizando sua operação logística."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Monitore suas entregas"
      description="de forma simples, visual e em tempo real, automatizando sua operação logística."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Facilidade na parte financeira"
      description="de forma automática e acabe com os problemas de pagamento no fim do turno."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
