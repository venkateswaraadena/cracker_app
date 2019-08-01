import React,{Component} from 'react';
import { connect } from "react-redux";

import {substractNumber} from '../actions/index';

const mapStateToProps = state => {
    return { values : state };
}

const mapDispatchToProps=(dispatch)=> {
    return {
        substractNumber: result => dispatch(substractNumber(result))
    };
  }
const Substract =(props)=> {
   const handleClick =()=>  props.substractNumber(props.values);
   return(<button className="App-button" onClick={handleClick}>Substract</button>)
}

const SubstractNumbers = connect(mapStateToProps,mapDispatchToProps)(Substract);

export default SubstractNumbers;

