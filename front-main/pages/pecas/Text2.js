import styles from '../../styles/Anima.module.css'
import React  from 'react'
export default function Text2({props}) {


	if(props===undefined){return false}	

    const classComp = styles.text2+' '+props.text2;
 
  return (
      <>
        <div className={classComp}   >
          
        </div>
      </>

  )
}
