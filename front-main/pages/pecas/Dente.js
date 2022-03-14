import styles from '../../styles/Anima.module.css'
import React  from 'react'
export default function Dente({props}) {

	if(props===undefined){return false}
	const classComp = styles.dente+' '+props.dente;

	return (
	  <>
	    <div className={classComp}   >
	      
	    </div>
	  </>

	)
}
