import Head from 'next/head'
import anima from '../../styles/Anima.module.css'
import styles from '../../styles/Home.module.css'
import React,{useState}  from 'react'
export default function Letreiro({props}) {

  if(props===undefined){return false}
  const classComp = styles.BlueBox+' '+props.news;
 
  return (
      <>
        <div className={classComp}    >
          <div className={styles.textMotion}  >
            <span>*Scroll for The First Social Market Place For Creators in Influencers in a future Creators Metaverse!</span>
            <span>*Scroll for The First Social Market Place For Creators in Influencers in a future Creators Metaverse!</span>
            <span>*Scroll for The First Social Market Place For Creators in Influencers in a future Creators Metaverse!</span>
            <span>*Scroll for The First Social Market Place For Creators in Influencers in a future Creators Metaverse!</span>
          </div>
        </div>
      </>

  )
}
