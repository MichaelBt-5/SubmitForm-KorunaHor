import React from 'react'
import './index.css'




const StatusFunc = ({data, polishItem, czechItem, language}) => {
    
    return (
      
        <div 
            className='Tooltip-Tip' 
            style={data.bookStatusCode === 1 || data.bookStatusCode === 2 || data.bookStatusCode === -2  ? {'color': '#ff6868'}: null}>
        {data.bookStatusCode === 0 ? 
       <div>{language === 'pl-PL' || language === undefined ? polishItem.found :language === 'cs-CZ' ? czechItem.found : null} {data.bookRegistryPlace}</div> :
         data.bookStatusCode === 1 || data.bookStatusCode === -2 ? <div>{language === 'pl-PL' || language === undefined  ? 
         polishItem.notFound :language === 'cs-CZ' ? czechItem.notFound : null}</div> :
         data.bookStatusCode === 2 ? <div>{language === 'pl-PL' || language === undefined  ? 
         polishItem.alreadyRegistered :language === 'cs-CZ' ? czechItem.alreadyRegistered : null}</div> :
         data.bookStatusCode === '' ? null : null}
        </div> 
        
        
    )
    
} 
export default StatusFunc