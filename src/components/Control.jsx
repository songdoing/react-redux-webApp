import React, { Component } from 'react'

export default class Control extends Component {
    render() {// container가 onClick들을 받는다
        return (
            <ul>
                <li><a href = "create" onClick = {function(e){
                    this.props.onClick('CREATE');
                    e.preventDefault();//페이지가 넘어가지 않도록 API를 넣는다
                }.bind(this)}>create</a></li>
                <li><a href = "update" onClick = {function(e){
                    this.props.onClick('UPDATE');
                    e.preventDefault();
                }.bind(this)}>update</a></li>
                <li>
                    <input type="button" value = "delete" onClick = {function(e){
                        this.props.onClick('DELETE');
                        e.preventDefault();
                }.bind(this)}></input>
                </li> 
            </ul>
        )
    }
}
