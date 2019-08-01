import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar'

import Add from './functionalComponents/Add';
import Substract from './functionalComponents/Substract';
import Multiply from './functionalComponents/Multiply';
import Divide from './functionalComponents/Divide';

import {firstValue,secondValue} from './actions/index';

const mapStateToProps = state => {
    return { results : isNaN(state.results) ?  "" : state.results};
};

const mapDispatchToProps =(dispatch) =>{
    return {
      firstValue: fvalue => dispatch(firstValue(fvalue)),
      secondValue : svalue => dispatch(secondValue(svalue))
    };
  }
const validNumber = new RegExp(/^\d*\.?\d*$/);
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstValue : "",
          secondValue : ""
        }
        this.handleFirstValues = this.handleFirstValues.bind(this);
        this.handleSecondValues = this.handleSecondValues.bind(this);
    }
    handleFirstValues(e) {
      if (validNumber.test(e.target.value)) {
        this.setState({[e.target.name] : e.target.value})
        this.props.firstValue({[e.target.name] : e.target.value});
      }
    }

    handleSecondValues(e) {
      if (validNumber.test(e.target.value)) {
        this.setState({[e.target.name] : e.target.value})
        this.props.secondValue({[e.target.name] : e.target.value});
      }
    }
  render() {
    return (
        <div>
            <div>
              <Navbar />
              <br />
              <div className="card">
                <input 
                     onChange={this.handleFirstValues} 
                     placeholder="Enter First Value" 
                     name="firstValue"
                     value={this.state.firstValue} />
                <br />
                <input 
                      onChange={this.handleSecondValues} 
                      placeholder="Enter Second value" 
                      name="secondValue"
                      value={this.state.secondValue} />
              </div>
              <div className="Button-div">
                <Add />
                <Substract />
              </div>
              <div className="Button-div">
                <Multiply />
                <Divide />
              </div>
            </div>
            <div style={{display : this.props.results !== ""  ? 'block' : 'none'}}>
              Result : {this.props.results}
            </div>
      </div>
    )
   }
}

const ContentList = connect(mapStateToProps,mapDispatchToProps)(Content);

export default ContentList;

