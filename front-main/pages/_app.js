import 'bootstrap/dist/css/bootstrap.css';
import 'csshake/scss/csshake-hard.scss';
import '../styles/globals.css'
import Loading from "./comuns/Loading";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

useEffect(() => {
    const handleStart = (url) => {
    	console.log("URL", url);
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    //router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    console.log("Router", router);
  }, [router]);

  return (
    <>
          <Loading loading={loading} />  
          <Component {...pageProps} />
    </>
  );
}

export default MyApp;