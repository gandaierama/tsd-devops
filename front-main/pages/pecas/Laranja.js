import Head from 'next/head'
import styles from '../../styles/Anima.module.css'
import stylesP from './styles/Pecas.module.css'
import React,{useState}  from 'react'
export default function Laranja({props}) {

  if(props===undefined){return false}
  const classComp = stylesP.laranja+' '+props.laranja;
  

  return (
      <>
        <div className={classComp}    >
          
        </div>
      </>

  )
}
