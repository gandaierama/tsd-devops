import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";
import React,{useEffect, useState}  from 'react'
import ReactFullpage from "@fullpage/react-fullpage";

import styles from '../styles/Home.module.css'

import HeadJuicy from './comuns/HeadJuicy'
import HeaderJuicy from './comuns/HeaderJuicy'

import Footer from './components/Footer'
import Intro from './components/Intro'


export default function Home() {

  const pluginWrapper = () => {
  /*
  * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
  */
};
  const [ready, setReady] = useState(false);



  const [scrollPosition, setScrollPosition] = useState(0);


  const anchors = ["intro1", "intro2", "intro3", "intro4", "intro5", "intro6", "juicy","gratis", "match", "quem", "mais", "juicyland", "esg", "footer" ];

   
  const convertPx2 =  {
    vh: function(px){
      px = parseFloat(px);
      const html = document.documentElement;
      var wh = html.clientHeight;
      
      return (px*100)/wh;
    },
    vw: function(px){
      px = parseFloat(px);
      const html = document.documentElement;
      var ww = html.clientWidth;
      
      return (px*100)/ww;
    }
  }

  function afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  function onLeave(origin, destination, direction) {
    console.log("onLeave",destination);
    const des=destination.index;
 }






  return (
    <>
    <HeadJuicy/>
 
      <HeaderJuicy  />
      <main>
        
        
      <ReactFullpage
          navigation={false}
          pluginWrapper={pluginWrapper}
          onLeave={onLeave.bind(this)}
          afterLoad={afterLoad.bind(this)}
          anchors={anchors}
          // scrollHorizontally = {true}
          sectionsColor={[
            '#FCFF3F'
            ]}
           render={({  fullpageApi }) => {
          return (
              <ReactFullpage.Wrapper>  
                  <Intro   />
                  <Footer  />   
              </ReactFullpage.Wrapper>
           );
        }}
        />

       
      </main>
    </>
  )
}
