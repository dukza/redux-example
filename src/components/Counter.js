import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';
import {connect} from 'react-redux';
// import {connect, bindActionCreators} from 'react-redux';
import * as actions from '../actions';

class Counter extends Component{
    render(){
        return(
            <>
            <Value number={this.props.number}/>
            <Control/>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        number: state.counter.number,
        color: state.ui.color
    };
}

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators(actions, dispatch);
    return{
        handelIncrement : () => {dispatch(actions.increment())},
        handelDncrement : () => {dispatch(actions.decrement())},
        handelSetColor : (color) => {dispatch(actions.setColor(color))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);