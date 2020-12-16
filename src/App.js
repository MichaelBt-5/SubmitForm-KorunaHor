import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Form from './Form'

class App extends React.Component {
  constructor () {
    super()
    this.state = {}

    
  }
  render () {
  
  
  return (
   
      <main>
      <Switch>
      <Route exact path='/*/newform/' Component={Form} />
      <Route exact path='/react-components/korunaHorForm/' Component={Form} />
      </Switch>
       
      </main>
    
  )
  }
}

export default App;
