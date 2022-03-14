import styles from '../../styles/Anima.module.css'
import React  from 'react'
export default function Pedacos({props}) {

	if(props===undefined){return false}
  const classComp = styles.Pedacos+' '+props.pedacos;

  return (
      <>
        <div className={classComp}   >
          
        </div>
      </>

  )
}
