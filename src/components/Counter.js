import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';
import {connect} from 'react-redux';
// import {connect, bindActionCreators} from 'react-redux';
import * as actions from '../actions';

class Counter extends Component{
    constructor(props){
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }
    setRandomColor(){
        const color=[
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ]
        this.props.handelSetColor(color)
    }
    render(){
        const color = this.props.color;
        const style = {
            background:`rgb(${color[0]},${color[1]},${color[2]})`
        }
        return(
            <div style={style}>
                <Value number={this.props.number}/>
                <Control
                    onPlus={this.props.handelIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        )
    }
}
// 리덕스 값과 스테이트의 값 연결
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
        handleDecrement : () => {dispatch(actions.decrement())},
        handelSetColor : (color) => {dispatch(actions.setColor(color))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);