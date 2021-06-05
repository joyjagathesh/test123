
import React, { Component } from 'react';
import {useHistory} from '../Test/history';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


export default class Enterkey extends Component {
    

    constructor (props){
        
        super(props)
            this.state = { data:"",

            }
        
    }
    componentDidMount(){
        console.log("welcome")
    }
  
   
        _handleKeyDown (e) {
         this.setState({data:e.target.value})
        }
        
    handlePress =()=> {
this.props.history.push("/and")

       
    }  
    
    
    render = ( ) => {
        
        return ( <div>
            {/* <input type="text" onKeyDown={this._handleKeyDown} value={this.state.data} /> <br/> */}
           <button onClick={this.handlePress}>Submit</button>
           </div>

        )
}
}

