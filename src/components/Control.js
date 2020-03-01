import React, { Component} from 'react';
import PropTypes from 'prop-types';
const propTypes = {
    onPlus : PropTypes.func,
    onSubtract : PropTypes.func,
    onRandommizeColor : PropTypes.func
}

function creatWarning(funcName){
    return () => console.warn(funcName +' is not defined')
}
const defaultProps = {
    onPlus : () => creatWarning('onPlus'),
    onSubtract : () => creatWarning('onSubtract'),
    onRandommizeColor : () => creatWarning('onRandommizeColor'),
}

export default class Control extends Component{
    render(){
        return(
            <>
            <button onClick={this.props.onPlus}>+</button>
            <button onClick={this.props.onSubtract}>-</button>
            <button onClick={this.props.onRandommizeColor}>Randomize Color</button>
            </>
        )
    }
}