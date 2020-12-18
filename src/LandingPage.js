import React from 'react'
import './index.css'
import StatusFunc from './StatusFunc'

import Tooltip from './Tooltip'
import './Tooltip.css'



const LandingPage = ({data, handleSubmit, handleChange, handleShipmentData, handleBlur, handleCheck, handleClick, polishItem, czechItem}) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
        <h2 className='font' style={{'fontSize': '25px'}}>{window.language === undefined || window.language === 'pl' ? polishItem.formName : window.language === 'cz' ? czechItem.formName : null}</h2>
            <div>
            <br/>
            <span className='checkbox'>
            <input
                className='checky'
                type='radio'
                name='doClientHaveTheBook'
                value='No'
                checked={data.doClientHaveTheBook === 'No'}
                onChange={handleChange}
                onClick={handleCheck}
            />
            <span className='pipi' style={data.invalidDoClientHaveTheBook ? {'color': '#ff6868'} : null}>
            {window.language === 'pl' || window.language === undefined ? polishItem.notHaveTheBook : window.language === 'cz' ? czechItem.notHaveTheBook : null}</span>
            <br/><br/>
            <input
                className='checky'
                type='radio'
                name='doClientHaveTheBook'
                value='Yes'
                checked={data.doClientHaveTheBook === 'Yes'}
                onChange={handleChange}
                onClick={handleCheck}
            />
           <span className='pipi' style={data.invalidDoClientHaveTheBook ? {'color': '#ff6868'} : null}>
           { window.language === 'pl' ||  window.language === undefined ? polishItem.haveTheBook :  window.language === 'cz' ? czechItem.haveTheBook: null}</span>
           
           {data.doClientHaveTheBook === 'Yes'  ?
           
             <div className='Tooltip-Wrapper'>
              
             <Tooltip image='https://www.gstatic.com/images/branding/product/2x/photos_96dp.png'>
           <input
                style={data.bookStatusCode === 0 ? {'backgroundColor': "#d2f8d2", 'marginRight': 0} : 
                data.bookStatusCode === 1 || data.bookStatusCode === 2 || data.bookStatusCode === -2 ? {'backgroundColor': '#ff6868', 'marginRight': 0} : null}
                type='number'
                placeholder={ window.language === 'pl' ||  window.language === undefined ? polishItem.bookId :  window.language === 'cz' ? czechItem.bookId: null}
                value={data.bookId}
                name='bookId'
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength='15'
                required 
                className='inputId'
            /> 
            </Tooltip>
             <StatusFunc data={data} polishItem={polishItem} czechItem={czechItem} language={window.language}/>
             
            </div>
            : null}
            </span>
            <br/><br/>
            <input
                type='text'
                placeholder={ window.language === 'pl' ||  window.language === undefined ? polishItem.name :  window.language === 'cz' ? czechItem.name: null}
                value={data.firstName}
                name='firstName'
                onChange={handleChange}
                maxLength='15'
                style={data.invalidName ? {'backgroundColor': '#ffb4b4'} : null}
                onClick={handleClick}
                
                
            />
            
            <input
                type='text'
                placeholder={ window.language === 'pl' ||  window.language === undefined ? polishItem.surname :  window.language === 'cz' ? czechItem.surname: null}
                value={data.lastName}
                name='lastName'
                onChange={handleChange}
                maxLength='15'
                style={data.invalidSurname ? {'backgroundColor': '#ffb4b4'} : null}
                onClick={handleClick}
            />
            <input
                type='text'
                placeholder={ window.language === 'pl' ||  window.language === undefined ? polishItem.dateOfBirth :  window.language === 'cz' ? czechItem.dateOfBirth: null}
                value={data.dateOfBirth}
                name='dateOfBirth'
                onChange={handleChange}
                style={data.invalidBirthDate ? {'backgroundColor': '#ffb4b4'} : null}
                onClick={handleClick}
            />
            <input
                type='text'
                placeholder={ window.language === 'pl' ||  window.language === undefined ? polishItem.email :  window.language === 'cz' ?czechItem.email: null}
                value={data.emailAddress}
                name='emailAddress'
                onChange={handleChange}
                style={data.invalidEmail ? {'backgroundColor': '#ffb4b4'} : null}
                onClick={handleClick}
            />
            <input
                type='text'
                placeholder={ window.language === 'pl' ||  window.language === undefined ? polishItem.number :  window.language === 'cz' ?czechItem.number: null}
                value={data.telephoneNumber}
                name='telephoneNumber'
                onChange={handleChange}
                maxLength='15'
                onClick={handleClick}
            />
            </div>
            <div>
            <br/>
            <h3 className='font'>{ window.language === 'pl' ||  window.language === undefined ? polishItem.home :  window.language === 'cz' ?czechItem.home: null}</h3>
            
                <input
                    type='text'
                    placeholder={ window.language === 'pl' ||  window.language === undefined ? polishItem.streetAndNumber :  window.language === 'cz' ?czechItem.streetAndNumber: null}
                    value={data.home_Street}
                    name='home_Street'
                    onChange={handleChange}
                    style={data.invalidStreet ? {'backgroundColor': '#ffb4b4'} : null}
                    onClick={handleClick}
                     />
                    <input
                    type='text'
                    placeholder={ window.language === 'pl' ||  window.language === undefined ? polishItem.city :  window.language === 'cz' ?czechItem.city: null}
                    value={data.home_City}
                    name='home_City'
                    onChange={handleChange}
                    style={data.invalidCity ? {'backgroundColor': '#ffb4b4'} : null}
                    onClick={handleClick}
                     />
                    <input
                    type='text'
                    placeholder={ window.language === 'pl' ||  window.language === undefined ? polishItem.postCode :  window.language === 'cz' ?czechItem.postCode: null}
                    value={data.home_PostalCode}
                    name='home_PostalCode'
                    onChange={handleChange}
                    style={data.invalidPostCode ? {'backgroundColor': '#ffb4b4'} : null}
                    onClick={handleClick}
                     />
            </div>
            <br/>
            <h3 className='font'>{window.language === 'pl' || window.language === undefined ? polishItem.post :  window.language === 'cz' ?czechItem.post: null}</h3>
            <span>
            
                <input
                    className='checky'
                    type='checkbox'
                    name='sameDataForShipment'
                    checked={data.sameDataForShipment}
                    onClick={handleChange}
                    onChange={handleShipmentData}
                    
                />
                <span className='pipi'>{ window.language === 'pl' ||  window.language === undefined ? polishItem.samePostAsHome : window.language === 'cz' ? czechItem.samePostAsHome: null}</span>
            </span>
            <br/>
            {!data.sameDataForShipment  ?
            <div>
           
                <input
                    type='text'
                    placeholder={ window.language === 'pl' ||  window.language === undefined ? polishItem.streetAndNumber : window.language === 'cz' ? czechItem.streetAndNumber: null}
                    value={data.ship_Street}
                    name='ship_Street'
                    onChange={handleChange}
                    onClick={handleClick}
                    style={data.invalidShipmentStreet ? {'backgroundColor': '#ffb4b4'} : null}
                    />
                    <input
                    type='text'
                    placeholder={window.window.language === 'pl' || window.window.language === undefined ? polishItem.city :window.window.language === 'cz' ? czechItem.city: null}
                    value={data.ship_City}
                    name='ship_City'
                    onChange={handleChange}
                    onClick={handleClick}
                    style={data.invalidShipmentCity ? {'backgroundColor': '#ffb4b4'} : null}
                    />
                    <input
                    type='text'
                    placeholder={window.window.language === 'pl' || window.window.language === undefined ? polishItem.postCode :window.window.language === 'cz' ? czechItem.postCode: null}
                    value={data.ship_PostalCode}
                    name='ship_PostalCode'
                    onChange={handleChange}
                    onClick={handleClick}
                    style={data.invalidShipmentPostCode ? {'backgroundColor': '#ffb4b4'} : null}
                    />    
            </div> 
            : 
            <div className='none'>
            
                <input
                    type='text'
                    placeholder={window.language === 'pl' || window.language === undefined ? polishItem.streetAndNumber :window.language === 'cz' ? czechItem.streetAndNumber: null}
                    value={data.home_Street}
                    name='ship_Street'
                    onChange={handleChange}
                    onClick={handleClick}
                    
                     />
                    <input
                    type='text'
                    placeholder={window.language === 'pl' || window.language === undefined ? polishItem.city :window.language === 'cz' ? czechItem.city: null}
                    value={data.home_City}
                    name='ship_City'
                    onChange={handleChange}
                    onClick={handleClick}
                     />
                    <input
                    type='text'
                    placeholder={window.language === 'pl' || window.language === undefined ? polishItem.postCode :window.language === 'cz' ? czechItem.postCode: null}
                    value={data.home_PostalCode}
                    name='ship_PostalCode'
                    onChange={handleChange}
                    onClick={handleClick}
                    
                     />    
            </div> }
            <div>
            <br/>
                <textarea 
                    name='additionalInformation'
                    value={data.additionalInformation}
                    onChange={handleChange}
                    className='textArea'
                    placeholder={window.language === undefined || window.language === 'pl' ? polishItem.textArea : window.language === 'cz' ? czechItem.textArea : null}
                    >

                </textarea>
            </div>
            <div>
            <br/>
            <span className='checkbox'>
                <input
                        type='checkbox'
                        className='checky'
                        name='clientWantInvoice'
                        checked={data.clientWantInvoice}
                        onChange={handleChange}
                    />
                    <span className='pipi'>{window.language === 'pl' || window.language === undefined ? polishItem.invoice :window.language === 'cz' ? czechItem.invoice: null}</span>
                    
                </span>
                <br/><br/>
            <span className='checkbox'>
                <input
                        type='checkbox'
                        className='checky'
                        name='acceptedTermsOfService'
                        checked={data.acceptedTermsOfService}
                        onChange={handleChange}
                        
                    />
                    <span 
                        className='pipi' 
                        style={data.invalidAcceptedTermsOfService ? {'color': '#ff6868'} : null}>
                        {window.language === 'pl' || window.language === undefined ? polishItem.acceptedTerms :window.language === 'cz' ? czechItem.acceptedTerms : null}</span>
                    </span>
                    </div>
           
            <div>
            <br/><br/>
            <br/>
            {data.acceptedTermsOfService && data.doClientHaveTheBook === 'Yes' && data.bookStatusCode === 0 ? <input
                title='Sign up' 
                type="submit" 
                value={window.language === 'pl' || window.language === undefined ? polishItem.submitButton :window.language === 'cz' ? czechItem.submitButton : null}
                style={{'fontSize': '20px', 'fontFamily': 'Lato, sansSerif'}}
                className='button'
            />:
            data.acceptedTermsOfService && data.doClientHaveTheBook === 'No'  ?
             <input
                title='Sign up' 
                type="submit" 
                value={window.language === 'pl' || window.language === undefined ? polishItem.submitButton :window.language === 'cz' ? czechItem.submitButton : null}
                style={{'fontSize': '20px', 'fontFamily': 'Lato, sansSerif'}}
                className='button' 
                /> : 
           data.acceptedTermsOfService && data.doClientHaveTheBook === 'Yes' && !data.bookRegistryPlace ?
            <input
                title='Sign up' 
                type="submit" 
                value={window.language === 'pl' || window.language === undefined ? polishItem.submitButton :window.language === 'cz' ? czechItem.submitButton : null}
                style={{'fontSize': '20px', 'fontFamily': 'Lato, sansSerif'}} 
                className='button'
                disabled
            /> :  
            <input
                title='Sign up' 
                type="submit" 
                value={window.language === 'pl' || window.language === undefined ? polishItem.submitButton :window.language === 'cz' ? czechItem.submitButton  : null}
                style={{'fontSize': '20px', 'fontFamily': 'Lato, sansSerif'}} 
                className='button'
                
            />}
        </div>
        </form>
    )
}
export default LandingPage