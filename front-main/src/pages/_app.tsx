import { AppProps } from 'next/app';

import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css'


const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
