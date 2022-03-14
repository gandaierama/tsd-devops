import styles from '../../styles/Anima.module.css'
import React  from 'react'
export default function Satelite({props}) {

	if(props===undefined){return false}
  const classComp = styles.satelite+' '+props.satelite;

  return (
      <>
        <div className={classComp}    >
          
        </div>
      </>

  )
}
