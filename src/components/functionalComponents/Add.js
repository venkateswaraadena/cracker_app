import React from 'react';
import { connect } from "react-redux";

import {addNumber} from '../actions/index';

const mapStateToProps = state => {
    return { values : state };
}

const mapDispatchToProps = (dispatch) => {
    return {
      addNumber: result => dispatch(addNumber(result))
    };
  }
const Add =(props) => {
   const handleClick =()=> props.addNumber(props.values);
   return(<button className="App-button" onClick={handleClick}>Add</button>)
  
}

const AddNumber = connect(mapStateToProps,mapDispatchToProps)(Add);

export default AddNumber;

