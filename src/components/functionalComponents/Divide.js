import React from 'react';
import { connect } from "react-redux";

import {divideNumber} from '../actions/index';

const mapStateToProps = state => {
    return { values : state };
}

const mapDispatchToProps =(dispatch) =>{
    return {
        divideNumber: result => dispatch(divideNumber(result))
    };
  }
const Divide =(props)=> {
   const handleClick =()=> props.divideNumber(props.values);
   return(<button className="App-button" onClick={handleClick}>Divide</button>)  
}

const DivideNumbers = connect(mapStateToProps,mapDispatchToProps)(Divide);

export default DivideNumbers;
