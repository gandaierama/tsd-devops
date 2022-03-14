import styles from '../../styles/Anima.module.css'
import React  from 'react'
export default function Planeta({props}) {

	if(props===undefined){return false}
  const classComp = styles.planeta+' '+props.planeta;

  return (
      <>
        <div className={classComp}   >
          
        </div>
      </>

  )
}
