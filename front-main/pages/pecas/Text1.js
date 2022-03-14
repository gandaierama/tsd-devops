import styles from '../../styles/Anima.module.css'
import React  from 'react'
export default function Text1({props}) {


	if(props===undefined){return false}
  const classComp = styles.text1+' '+props.text1;

  return (
      <>
        <div className={classComp}    >
          
        </div>
      </>

  )
}
