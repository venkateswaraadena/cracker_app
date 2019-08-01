import React,{Component} from 'react';
import { connect } from "react-redux";

import {multiplyNumber} from '../actions/index';

const mapStateToProps = state => {
    return { values : state };
}

const mapDispatchToProps =(dispatch)=> {
    return {
        multiplyNumber: result => dispatch(multiplyNumber(result))
    };
  }
const Multiply =(props)=> {
   const handleClick =()=> props.multiplyNumber(props.values);
   return( <button className="App-button" onClick={handleClick}>Multiply</button>)
}

const MultiplyNumbers = connect(mapStateToProps,mapDispatchToProps)(Multiply);

export default MultiplyNumbers;

