import styles from './Footer.module.css'
import homeS from '../../../styles/Home.module.css'
import Image from 'next/image'
import Link from "next/link";
import React, {Buttom}  from 'react'
import Dicord from '../../../public/images/discord.svg'
import Pin from '../../../public/images/pin.svg'
import Loader from '../../comuns/Loader'
import Aviao from '../../../public/images/aviao.svg'
import Logo2 from '../../../public/images/logo.svg'
export default function Footer() {

	const handlePin = () => {
	  
	}
	const handleDiscord = () => {
	  
	}

	const handleDescubra = () => {
	  
	}
	const handleAviao = () => {
	  
	}
  return (
    <div className="section">
      <div className={homeS.cenas+' '+styles.footer}>

      	<div className="container  mx-auto mt-xs-5 mt-sm-5 mt-md-1 pt-sm-5 pt-md-0 ">
      		<div className="row justify-content-center mt-sm-5mt-md-0">
      			<div className="col-12 col-md-6 col-lg-8 mt-5 mt-md-0">
      				<h1 className="display-6 mt-5 pt-5 mt-md-0 text-center">Entre para nossa Comunidade</h1>
      			</div>
      		</div>

      		<div className="row mt-sm-3 pt-md-0 mt-md-0 ">
		      	<div className="col-12 col-md-6 mt-5 pt-md-0">
		      		<p className="  text-center mt-5 pt-md-0">
		      			Faça um orçameento sem compromisso
		      		</p>
		      		<div className=" mt-3 ">
		      			<ul className="nav justify-content-center">
						  <li className="nav-item">
			      				<div className={styles.buttomFooter}>
			      					Mais informações
			      				</div>
						  </li>
						</ul>	
		      		</div>
		      	</div>

		      	<div className="col-12 col-md-6 mt-5 pt-md-0">
		      		<p className="  text-center mt-5 pt-md-0 ">
		      			Acesse nossas redes sociais
		      		</p>
		      		<div className=" mt-3">
			      		<div className="row justify-content-center">
			      			<div className="col-12">
				      			<ul className="nav justify-content-center">
								  <li className="nav-item">
										<div className={styles.linkFooter}>
							      			<Image priority='true' loader={Loader} alt="discord" src="discord.svg" strategy="" width={50} height={50} layout="responsive"  />
							      		</div>
								  </li>
								  <li className="nav-item">
						
										<div className={styles.linkFooter}>
							      			<Image priority='true' loader={Loader} alt="aviao" src="aviao.svg"  width={50} height="50" layout="responsive"  />
							      		</div>
						      	
								  </li>
								  <li className="nav-item">
								
										<div className={styles.linkFooter}>
							      			<Image priority='true' alt="pin" src="pin.svg" loader={Loader}  width={50} height={50} layout="responsive"  />
							      		</div>
						      
								  </li>
								</ul>
				      		</div>	
			      		</div>
		      		</div>
		      	</div>
      		</div>
      	</div>
      	<div className={styles.bottomFooter}>
      	<div className="container ">
      		<div className="row mt-sm-3 ">
		      	<div className="col-md-10 col-12 mt-3">
		      		<div className="text-justify text-1">
		      			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus lacus ac augue maximus ultrices. Ut eu hendrerit justo. Quisque id vulputate nibh, vitae pharetra ante. Aliquam vestibulum volutpat est placerat venenatis. Mauris rhoncus leo ligula, id ulrper lorem ullamius lacus ac augue maximus ultrices. Ut eu hendrerit justo. Quisque id vulputate nibh, vitae pharetra ante. Aliquam vestibulum volutpat est placerat venenatis. Mauris rhoncus leo ligula, id ullamcorper lorem ullamcorper nec. Nam imperdiet, quam ut ultricies condimentum, tortor odio lobortis ex, sed laoreet nibh neque ut arcu. Sed maximus sit amet justo non interdum. Aenean interdum justo tellus,
		      		</div>
		      	</div>
		      	<div className="col-md-2 col-12 mt-3">
		      		<div className={styles.bottomLogoFooter}>
		      			<Image priority='true' loader={Loader} src="logo.svg" alt="logo"  width={198} height={97} layout="responsive" />
		      		</div>
	      		</div>
      		</div>
      	</div>
      	</div>
      </div>
    </div>
  )
}