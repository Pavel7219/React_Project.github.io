import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTodo} from '../actions/index'

class BuysItem extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){

            return (
                <div className="todoWrapper" >
                    <button  onClick={(e)=>this.props.deleteTodo(this.props.todo.id)} className="removeTodo" >delete</button>{this.props.todo.text}
                </div>
            )
        }

}


export default BuysItem;