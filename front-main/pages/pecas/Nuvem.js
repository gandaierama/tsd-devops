import Head from 'next/head'
import styles from '../../styles/Anima.module.css'
import React,{useState}  from 'react'
export default function Nuvem({props}) {

if(props===undefined){return false}
  const classComp = styles.nuvem;

  return (
      <>
        <div className={classComp}   >
          
        </div>
      </>

  )
}
