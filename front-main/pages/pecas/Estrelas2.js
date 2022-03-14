import styles from '../../styles/Anima.module.css'
import React  from 'react'
export default function Estrelas2({props}) {

	if(props===undefined){return false}
	const classComp = styles.estrelas+' '+props.estrelas2;


	return (
	  <>
	    <div className={classComp}   >
	      
	    </div>
	  </>

	)
}
