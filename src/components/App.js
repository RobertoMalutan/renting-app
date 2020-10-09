import React, {Component} from 'react'
import Nav from './Nav'
import { BrowserRouter as Router , Route, Switch  } from 'react-router-dom'
import Home from './Home'
import {useSelector } from 'react-redux'
import Properties from './Properties'
import Client from './Client'

export default function App() { 
  console.log("salut");
  const store = useSelector((store)=> store)
  console.log("store = ", store )
  return(
    <Router>
      <React.Fragment>
          <Switch>
            <Route path= '/' exact component={Home}/>
            <Route path= '/properties'  component={Properties}/>
            <Route path= '/Client'  exact component={Client}/>
            <Route render={()=>(<h1> 404 error</h1>)}/>
          </Switch>           
      </React.Fragment>
    </Router>
  )
}