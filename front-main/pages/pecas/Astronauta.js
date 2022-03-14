import styles from '../../styles/Anima.module.css'
import React  from 'react'

export default function Astronauta  ({props}) {

	if(props===undefined){return false}

	const classComp = styles.astronauta+' '+props.astronauta;

	return (
	  <>
	    <div className={classComp}   >
	      
	    </div>
	  </>

	)
}