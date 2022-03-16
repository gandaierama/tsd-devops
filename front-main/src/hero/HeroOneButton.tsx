import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center w-full mb-5 pb-20">
    <h1 className=" text-gray-200 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className=" text-2xl mt-4 mb-16">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
