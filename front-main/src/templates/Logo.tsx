
type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '120' : '90';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img src="http://tsdmotoboys.com.br/assets/images/logo_tsd_2022.png" width={size} />

  
    </span>
  );
};

export { Logo };
