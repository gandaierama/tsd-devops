import Head from 'next/head'
import anima from '../../styles/Anima.module.css'
import styles from '../../styles/Home.module.css'
import React,{useState}  from 'react'
export default function Letreiro2() {

 
  const classComp = styles.BlackBox;

  return (
      <>
        <div className={classComp}    >
          <div className={styles.textMotion}  >
            <span>*Ganhe agora mesmo seu convite e passaporte para Juicyland! Crie seu personagem e muito mais! Ganhe agora mesmo seu convite e passaporte para Juicyland! Crie seu personagem e muito mais !</span>
            <span>*Ganhe agora mesmo seu convite e passaporte para Juicyland! Crie seu personagem e muito mais! Ganhe agora mesmo seu convite e passaporte para Juicyland! Crie seu personagem e muito mais !</span>
            <span>*Ganhe agora mesmo seu convite e passaporte para Juicyland! Crie seu personagem e muito mais! Ganhe agora mesmo seu convite e passaporte para Juicyland! Crie seu personagem e muito mais !</span>
            <span>*Ganhe agora mesmo seu convite e passaporte para Juicyland! Crie seu personagem e muito mais! Ganhe agora mesmo seu convite e passaporte para Juicyland! Crie seu personagem e muito mais !</span>
          </div>
        </div>
      </>

  )
}
