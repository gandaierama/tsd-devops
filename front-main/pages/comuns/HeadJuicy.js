import Head from 'next/head'
import Script from 'next/script'
import Rostinho1 from '../../public/images/rostinho01.svg'
import Rostinho2 from '../../public/images/rostinho02.svg'
import Rostinho3 from '../../public/images/rostinho03.svg'
import Rostinho4 from '../../public/images/rostinho04.svg'
import Logo from '../../public/images/logo.svg'
import Burguer from '../../public/images/burguer.svg'
import Text1 from '../../public/images/text1.svg'
import Text2 from '../../public/images/text2.svg'

export default function HeadJuicy() {

  return (
    <>
      <Head>
        <title>Juicy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Future of Jobs!! Uma comunidade onde todo mundo é criativo... Se mistura,... Se conecta, e vira suculento" />
{/*        
   

        <link rel="preload" href='./intro/rostinho01.svg' as="image" type="image/svg+xml" />
        <link rel="preload" href='./intro/rostinho02.svg' as="image" type="image/svg+xml" />
        <link rel="preload" href='./intro/rostinho03.svg' as="image" type="image/svg+xml" />
        <link rel="preload" href='./intro/rostinho04.svg' as="image" type="image/svg+xml"/>
        <link rel="preload" href='./intro/logo.svg' as="image" type="image/svg+xml"/>
        <link rel="preload" href='./intro/burguer.svg' as="image" type="image/svg+xml"/>
        <link rel="preload" href='./intro/text1.svg' as="image" type="image/svg+xml"/>
        <link rel="preload" href='./intro/text2.svg' as="image" type="image/svg+xml"/>
        <link rel="preload" href='./intro/text3.svg' as="image" type="image/svg+xml"/>
        <link rel="preload" href='./board/aviao.svg' as="image" type="image/svg+xml"/>
        <link rel="preload" href='./board/pin.svg' as="image" type="image/svg+xml"/>
        <link rel="preload" href='./board/discord.svg' as="image" type="image/svg+xml"/>
        <link rel="preload" href='./board/pin.svg' as="image" type="image/svg+xml"/>
*/}

      </Head>
      <Script
          async
          id="gtag"
          src="https://www.googletagmanager.com/gtag/js?id=G-LYDZ5DQ69K"
          onLoad={() => {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LYDZ5DQ69K');
          }}
        />
  </>
  )
}