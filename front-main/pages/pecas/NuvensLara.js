import styles from './styles/Pecas.module.css'
import React  from 'react'
export default function NuvensLara({props}) {

if(props===undefined){return false}
  const classComp = styles.nuvensLara+' '+props.nuvensLara;

  return (
      <>
        <div className={classComp}   >
          
        </div>
      </>

  )
}
