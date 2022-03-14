import styles from './Pecas.module.css'
import React  from 'react'
import Loader from '../../../comuns/Loader'

export default function Rostinho({props}) {

	if(props===undefined){return false}
	  const classComp = styles.rostinho01+' '+props.rostinhos;
	 
	  return (
	      <>

	        <div className={classComp}   >
				<Image priority='true' loader={Loader} strategy="lazyOnload" src="rostinho01.svg" width={866} height={139} alt="logo" layout="responsive"  />
				<Image priority='true' loader={Loader} strategy="lazyOnload" src="rostinho02.svg" width={866} height={139} alt="logo" layout="responsive"  />
				<Image priority='true' loader={Loader} strategy="lazyOnload" src="rostinho03.svg" width={1012} height={502} alt="logo" layout="responsive"  />
	        	<Image priority='true' loader={Loader} strategy="lazyOnload" src="rostinho04.svg" width={1078} height={589} alt="logo" layout="responsive"  />
	        	
	        </div>


	      </>

	  )
}
