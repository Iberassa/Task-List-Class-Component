import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    getStyle = () => {
        return {
            background: 'rgb(166, 166, 241)',
            padding: '10px',
            boarderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render() {
        const { id, title }=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type ="checkbox" onChange={()=>this.props.markComplete(id)}/>{' '}
                    {title}
                    <button style={btnstyle} onClick ={()=>this.props.deleteTodo(id)}>x</button>
                </p><hr/>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnstyle ={
    background:'rgb(243, 11, 11)',
    color:'#fff',
    boarder: 'none',
    padding:'3px 5px',
    borderRadius: '50%',
    cursor:'pointer',
    float: 'right'

}
