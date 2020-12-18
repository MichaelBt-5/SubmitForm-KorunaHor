import React from 'react'
import LandingPage from './LandingPage'
import './index.css'
import polishWords from './PolishWords'
import czechWords from './CzechWords'





class Form extends React.Component {
    constructor() {
        
        super()
        this.state = {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            emailAddress: '',
            home_Street: '',
            home_City: '',
            home_PostalCode: '',
            ship_Street: '',
            ship_City: '',
            ship_PostalCode: '',
            telephoneNumber: '',
            sameDataForShipment: false,
            acceptedTermsOfService: false,
            bookId: '',
            bookRegistryPlace: '',
            doClientHaveTheBook: '',
            bookStatusCode: '',
            invalidSurname: false,
            invalidName: false,
            invalidEmail: false,
            invalidCity: false,
            invalidStreet: false,
            invalidPostCode: false,
            invalidShipmentStreet: false,
            invalidShipmentCity: false,
            invalidShipmentPostCode: false,
            invalidBirthDate: false,
            clientWantInvoice: false,
            clientDecision: false,
            submitingData: 1,
            invalidDoClientHaveTheBook: false,
            invalidAcceptedTermsOfService: false,
            language: window.language,
            additionalInformation: '',
            
        }
        
        
        
        this.handleChange = () => {
            
            const {value, name, type, checked} = window.event.target
            type === 'checkbox' ? this.setState({ [name]: checked}) : this.setState({ [name]: value })

            if(name === 'doClientHaveTheBook')  { 
                if (value ==='No'|| value === '') {
                    this.setState({
                        bookId: -1
                    })
                } else {
                    this.setState({bookId:''})  
                }
            }  
        }
        this.handleClick = () => {
            const { name } = window.event.target
            if(name === 'firstName') {
                this.setState({
                    invalidName: false,
                    

                })
            }
            if(name === 'lastName') {
                this.setState({
                    invalidSurname: false,
                    
                })
            }
            if(name === 'dateOfBirth') {
                this.setState({
                    invalidBirthDate: false,
                    dateOfBirth: ''
                })
            }
            if(name === 'emailAddress') {
                this.setState({
                    invalidEmail: false,
                    
                })
            }
            if(name === 'home_Street') {
                this.setState({
                    invalidStreet: false,
                    home_Street: ''
                })
            }
            if(name === 'home_City') {
                this.setState({
                    invalidCity: false,
                    
                })
            }
            if(name === 'home_PostalCode') {
                this.setState({
                    invalidPostCode: false,
                    
                })
            }
            if(name === 'ship_Street') {
                this.setState({
                    invalidShipmentStreet: false,
                    ship_Street: ''
                })
            }
            if(name === 'ship_City') {
                this.setState({
                    invalidShipmentCity: false,
                    

                })
            }
            if(name === 'ship_PostalCode') {
                this.setState({
                    invalidShipmentPostCode: false,
                    
                })
            }
           
        }

        this.handleSubmit = (e) => {  
              
        const addressRe = (/^(?!.*?example)(?=\D*\d)[^a-z]*[a-z].*$/i)
        const dateRe = (/^([0-2][0-9]|(3)[0-1])([/.])(((0)[0-9])|((1)[0-2]))([/.])\d{4}$/i)
        const nameAndSurnameRe = (/^[a-pr-uwy-zA-PR-UWY-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/)
        const isOnlyLettersName = nameAndSurnameRe.test(this.state.firstName)
        const isOnlyLettersSurname = nameAndSurnameRe.test(this.state.lastName)
        const goodDate= dateRe.test(this.state.dateOfBirth)
        const goodAddress = addressRe.test(this.state.home_Street)
       
        
        if(this.state.submitingData === 3 || 
            (this.state.submitingData === 1 && isOnlyLettersName && 
            this.state.firstName.length > 2 && isOnlyLettersSurname &&
            this.state.lastName.length > 2 && 
            this.state.emailAddress.split("").filter(x => x === "@").length === 1 && 
            this.state.emailAddress.indexOf(".") !== -1 && this.state.home_City &&
            this.state.home_PostalCode && goodAddress && 
            this.state.home_Street && this.state.ship_City && this.state.ship_Street &&
            this.state.ship_PostalCode && goodDate && this.state.dateOfBirth &&
             this.state.acceptedTermsOfService && this.state.doClientHaveTheBook) ||
            (this.state.submitingData === 2 && isOnlyLettersName && 
            this.state.firstName.length > 2 && isOnlyLettersSurname &&
            this.state.lastName.length > 2 && 
            this.state.emailAddress.split("").filter(x => x === "@").length === 1 && 
            this.state.emailAddress.indexOf(".") !== -1 && this.state.home_City &&
             this.state.home_PostalCode && goodAddress && 
            this.state.home_Street && this.state.ship_City && this.state.ship_Street &&
            this.state.ship_PostalCode && goodDate && this.state.dateOfBirth &&
            this.state.acceptedTermsOfService && this.state.doClientHaveTheBook)) {
            e.preventDefault()
            this.setState({
                invalidSurname: false,
                invalidName: false,
                invalidEmail: false,
                invalidCity: false,
                invalidStreet: false,
                invalidPostCode: false,
                invalidShipmentStreet: false,
                invalidShipmentCity: false,
                invalidShipmentPostCode: false,
                invalidBirthDate: false,
                invalidAcceptedTermsOfService: false,
                invalidDoClientHaveTheBook: false,
                
            })
            let result
            
            
            result = JSON.stringify(Object.fromEntries(Object.entries(this.state).filter(([key, value]) => 
            key === 'firstName' ||
            key === 'lastName' || key === 'telephoneNumber' || key === 'dateOfBirth' ||
            key === 'emailAddress' || key === 'home_Street' || key === 'home_City' ||
            key === 'home_PostalCode' || key === 'ship_Street' || key === 'ship_City' ||
            key === 'ship_PostalCode' || key === 'bookId' || key === 'clientWantInvoice' ||
            key === 'additionalInformation')))
           
            
            let xmlhttp = new XMLHttpRequest();
            const Url = 'https://korunahor.cz/wp-json/korunahorAPI/v1/CreateNewUser'
            xmlhttp.onreadystatechange = function () { //Call a function when the state changes.
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            window.location ='https://korunahor.cz/index.php/dziekujemy-za-zgloszenie/'
            
        } 
      
    }
    xmlhttp.open("POST", Url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(result)
    console.log(result)
    return result

            } else if (this.state.submitingData === 1 || this.state.submitingData === 2) {
                e.preventDefault()
                this.setState({
                    submitingData: 3
                })
                if( !isOnlyLettersName || this.state.firstName.length <= 2 ) {
                this.setState({
                    invalidName: true,
                    submitingData: 2,
                
                    })
                } 
                if(!this.state.doClientHaveTheBook) {
                    this.setState({
                        invalidDoClientHaveTheBook: true,
                        submitingData: 2
                    })
                }
                if(!this.state.acceptedTermsOfService) {
                    this.setState({
                        invalidAcceptedTermsOfService: true,
                        submitingData: 2
                    })
                }
                if(!isOnlyLettersSurname || 
                this.state.lastName.length <= 2  ) {
                   this.setState({
                       invalidSurname: true,
                       submitingData: 2,
                   })
                }
                if(!goodDate || !this.state.dateOfBirth) {
                    this.setState({
                        dateOfBirth: 'DD.MM.YYYY',
                        invalidBirthDate: true,
                        submitingData: 2,
                    })
                }
                if (this.state.emailAddress.split("").filter(x => x === "@").length !== 1 || 
                    this.state.emailAddress.indexOf(".") === -1) { 
                    this.setState({
                        invalidEmail: true,
                        submitingData: 2,
                    })
                } 
                if(!this.state.home_City) {
                      this.setState({
                          invalidCity: true,
                          submitingData: 2,
                      })
                }
                
                if(!this.state.home_PostalCode) {
                      this.setState({
                          invalidPostCode: true,
                          submitingData: 2,
                      })
                }
                if(!goodAddress || !this.state.home_Street) {
                    
                      this.setState({
                          home_Street: 'Ulica i numer domu',
                          invalidStreet: true,
                          submitingData: 2,
                      })
                } 
                if(!this.state.ship_City) {
                      this.setState({
                          invalidShipmentCity: true,
                          submitingData: 2,
                      })
                }
                if(!goodAddress || !this.state.ship_Street ) {
                    this.setState({
                        ship_Street: 'Ulica i numer domu',
                        invalidShipmentStreet: true,
                        submitingData: 2,
                    })   
                }
                if(!this.state.ship_PostalCode) {
                    this.setState({
                        invalidShipmentPostCode: true,
                        submitingData: 2,
                    })
                } 
                } else {
                    alert('Didn\'t make it')
                }
            }
        
    this.handleShipmentData = () => {
        if(!this.state.sameDataForShipment) {
            this.setState({
                ship_Street: this.state.home_Street,
                ship_City: this.state.home_City,
                ship_PostalCode: this.state.home_PostalCode,
            })
        } else {
            this.setState({
                ship_Street: '',
                ship_City: '',
                ship_PostalCode: '',
            })
        }
     }

     this.handleCheck = () => {
         if(this.state.doClientHaveTheBook === 'Yes') { this.setState({
            bookRegistryPlace: '',
            bookStatusCode: '',
            bookId: ''
         }) 
        }
    }

     this.handleBlur = () => {
         const Url = 'https://korunahor.cz/wp-json/korunahorAPI/v1/CheckIfBookIsReserved/1'
       const result = fetch(Url)
         .then(data => data.json())
         .then(res => JSON.parse(res))
         .then(res => res.BookId === this.state.bookId ? 
            
            this.setState({
                bookRegistryPlace: res.AddInfo,
                bookStatusCode: res.StatusCode
         }) 
         : 
         this.setState({
             bookRegistryPlace: '',
             bookStatusCode: -2,
            }))
    
         return result
     }   
}
    render() {
        
    return (
        <div>
        <LandingPage 
            data={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleShipmentData={this.handleShipmentData}
            handleBlur={this.handleBlur}
            handleCheck={this.handleCheck} 
            handleClick={this.handleClick}
            polishItem={polishWords}
            czechItem={czechWords}
            
            />
          
        </div>
        )
       
    }
}

export default Form