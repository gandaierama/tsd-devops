import styles from './styles/Pecas.module.css'
import React  from 'react'
export default function Asteroides({props}) {
	if(props===undefined){return false}
	const classComp = styles.asteroides+' '+props.asteroides;
	return (
	  <>
	    <div className={classComp}   >
	      
	    </div>
	  </>

	)
}
