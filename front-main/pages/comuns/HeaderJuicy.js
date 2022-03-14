import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import headerS from './styles/Header.module.css'
import React,{useState}  from 'react'
import { useRouter } from 'next/router'
import Loader from '../comuns/Loader'
import Box from './Box'

import Image from 'next/image'


export default function HeaderJuicy() {
    const router = useRouter();
  const [menuOpen, setMenuOpen] = useState({display:'none'})

  const handleOpen = () => {
      setMenuOpen({display:'flex'});
  }
  const handleClose = () => {
      setMenuOpen({display:'none'});
  }
  const handleBtn1 = (e) => {
      e.preventDefault()
      const href="/#intro1"
      router.push(href)
      setMenuOpen({display:'none'});
  }
  const handleBtn2 = (e) => {
      e.preventDefault()
      const href="/#juicy"
      router.push(href)
      setMenuOpen({display:'none'});
  }
  const handleBtn3 = (e) => { 
      setMenuOpen({display:'none'});
  }
  const handleBtn4 = (e) => { 
      setMenuOpen({display:'none'});  
  }
  const handleBtn5 = (e) => {
      setMenuOpen({display:'none'});
  }
  const handleBtn6 = (e) => {
      setMenuOpen({display:'none'});
  }



  return(
    <>
        <div className={'shake-slow '+styles.logo}>
          <Image priority='true' loader={Loader} strategy="lazyOnload" src="logo.png" width={195} height={71} alt="logo" layout="responsive"  />
        </div>
          <div className={'shake-slow '+styles.menu}>
        <a onClick={handleOpen} >
          <Image priority='true' loader={Loader} src="burguer.svg" width={78} height={77} alt="burger" layout="responsive" strategy="lazyOnload"   />
        </a>
      </div>
    <div className={styles.menuBox} style={menuOpen}>
        <div className={styles.menu+' shake-slow'}>
          <a onClick={handleClose} >
            <Image priority='true' loader={Loader} src="close.svg" width={78} height={77} alt="close" layout="responsive"  strategy="lazyOnload"   />
          </a>
        </div>
        <div className={headerS.up}>
          <div className="container p-3 ">
            <div className="row justify-content-center mt-5 pt-5">
              <div className="col-6 col-md-4 "  >
                <div className={headerS.box7+' shake-slow'}>
                  <div className={headerS.textBox7}>
                
                    <Image priority='true' alt="btn1" loader={Loader} strategy="lazyOnload" onClick={handleBtn1} src="btMenu1.svg" width={130} height={79} layout="responsive" />
    
                  </div>
                  <div className={headerS.titleBox7}>
                    intro
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 " >
                <div className={headerS.box7}>
                  <div className={headerS.textBox7}>
                
                    <Image priority='true' alt="btn2" loader={Loader}  strategy="lazyOnload" onClick={handleBtn2} src="btMenu2.svg" width="130" height="79" layout="responsive" />
    
                  </div>
                  <div className={headerS.titleBox7}>
                    Juicy
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4  " >
                <div className={headerS.box7}>
                  <div className={headerS.textBox7}>
                
                    <Image priority='true' alt="btn3" loader={Loader}  strategy="lazyOnload" onClick={handleBtn3} src="btMenu3.svg" width="130" height="79" layout="responsive" />
    
                  </div>
                  <div className={headerS.titleBox7}>
                    Roadmap
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 " >
                <div className={headerS.box7}>
                  <div className={headerS.textBox7}>
                
                    <Image priority='true' alt="btn4" loader={Loader}  strategy="lazyOnload" onClick={handleBtn4} src="btMenu4.svg" width="130" height="79" layout="responsive" />
    
                  </div>
                  <div className={headerS.titleBox7}>
                    Cadastro
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 " >
                <div className={headerS.box7}>
                  <div className={headerS.textBox7}>
                    <Image priority='true' alt="btn5" loader={Loader}  strategy="lazyOnload" onClick={handleBtn5} src="btMenu5.svg" width="130" height="79" layout="responsive" />
                  </div>
                  <div className={headerS.titleBox7}>
                    Comunidade
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 " >
                <div className={headerS.box7}>
                  <div className={headerS.textBox7}>
                
                    <Image priority='true' alt="btn6" loader={Loader} strategy="lazyOnload" onClick={handleBtn6} src="btMenu6.svg" width="130" height="79" layout="responsive" />
    
                  </div>
                  <div className={headerS.titleBox7}>
                    Baixar Pitch
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={headerS.bgHeader}>
            <div className={headerS.bolas+' '+headerS.bola1}></div>
            <div className={headerS.bolas+' '+headerS.bola2}></div>
            <div className={headerS.bolas+' '+headerS.bola3}></div>
            <div className={headerS.bolas+' '+headerS.bola4}></div>
            <div className={headerS.bolas+' '+headerS.bola5}></div>
          </div>
        </div>
      </div>
    </>
  )
}
