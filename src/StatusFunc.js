import React from 'react'
import './index.css'




const StatusFunc = ({data, polishItem, czechItem, language}) => {
    
    return (
      
        <div 
            className='Tooltip-Tip' 
            style={data.bookStatusCode === 1 || data.bookStatusCode === 2 || data.bookStatusCode === -2  ? {'color': '#ff6868'}: null}>
        {data.bookStatusCode === 0 ? 
       <div>{language === 'pl' || language === undefined ? polishItem.found :language === 'cz' ? czechItem.found : null} {data.bookRegistryPlace}</div> :
         data.bookStatusCode === 1 || data.bookStatusCode === -2 ? <div>{language === 'pl' || language === undefined  ? 
         polishItem.notFound :language === 'cz' ? czechItem.notFound : null}</div> :
         data.bookStatusCode === 2 ? <div>{language === 'pl' || language === undefined  ? 
         polishItem.alreadyRegistered :language === 'cz' ? czechItem.alreadyRegistered : null}</div> :
         data.bookStatusCode === '' ? null : null}
        </div> 
        
        
    )
    
} 
export default StatusFunc