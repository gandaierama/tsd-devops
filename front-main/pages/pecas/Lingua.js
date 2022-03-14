import Head from 'next/head'
import styles from '../../styles/Anima.module.css'
import stylesP from './styles/Pecas.module.css'
import React,{useState}  from 'react'
export default function Lingua({props}) {

  if(props===undefined){return false}
  const classComp = stylesP.lingua+' '+props.lingua;

  return (
      <>
        <div className={classComp}   >
          
        </div>
      </>

  )
}
