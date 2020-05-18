import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        var tags = [];
        for(var i=0; i<this.props.data.length; i++) {
            var d = this.props.data[i];
            tags.push(<li key = {d.id}><a href = "#{d.title}" data-id = {d.id} onClick = {function(e){
                this.props.onClick(Number(e.target.dataset.id));  //props에 dataset.id담기(숫자로 캐스팅), container의 onclick으로
            }.bind(this)}>{d.title}</a></li>)
        }
        return (
            <nav>
                <ol>
                    {tags}
                </ol>
            </nav>
        )
    }
}
