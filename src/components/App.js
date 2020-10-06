import React, {Component} from 'react'
import Nav from './Nav'
import { BrowserRouter as Router , Route, Switch  } from 'react-router-dom'
import Home from './Home'
import Properties from './Properties'
import Client from './Client'

class App extends Component{
  render(){
    return(
      <Router>
        <React.Fragment>
          <div className='container'>
            <Switch>
              <Route path= '/' exact component={Home}/>
              <Route path= '/properties'  component={Properties}/>
              <Route path= '/Client'  exact component={Client}/>
              <Route render={()=>(<h1> 404 error</h1>)}/>
						</Switch>           
          </div>
        </React.Fragment>
      </Router>
    )
  }
}

export default App