import styles from '../../styles/Anima.module.css'
import React  from 'react'
export default function Estrelas({props}) {

	if(props===undefined){return false}
	const classComp = styles.estrelas+' '+props.estrelas;


	return (
	  <>
	    <div className={classComp}   >
	      
	    </div>
	  </>

	)
}
