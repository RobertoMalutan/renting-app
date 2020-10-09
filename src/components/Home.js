import { Button } from '@material-ui/core'
import React, {Component, Fragment} from 'react'
import Nav from './Nav'
class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <Nav/>
        <h1> Home</h1>
      </React.Fragment>
    )
  }
}
export default Home