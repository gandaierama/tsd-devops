import styles from './styles/Pecas.module.css'
import React  from 'react'
export default function NuvensJuicy({props}) {

if(props===undefined){return false}
  const classComp = styles.nuvensJuicy+' '+props.nuvensJuicy;

  return (
      <>
        <div className={classComp}   >
          
        </div>
      </>

  )
}
