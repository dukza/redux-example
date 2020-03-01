import React, { Component} from 'react';
import PropTypes from 'prop-types';

export default class Value extends Component{
    render(){
        return(
        <h1>{this.props.number}</h1>
        )
    }
}
const propTypes = {
    number: PropTypes.number,
}
const defaultProps = {
    number: -1
}