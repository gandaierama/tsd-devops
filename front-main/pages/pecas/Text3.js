import styles from '../../styles/Anima.module.css'
import React  from 'react'
export default function Text3({props}) {

	if(props===undefined){return false}

    const classComp = styles.text3+' '+props.text3;

  return (
      <>
        <div className={classComp}   >
          
        </div>
      </>

  )
}
