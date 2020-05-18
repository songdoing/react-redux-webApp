import React, { Component } from 'react'

export default class Create extends Component {
    render() {
        return (
            <form>
                <p>
                <input type = "text" name = "title" placeholder="title"></input> 
                </p>
                <p>
                <textarea type = "text" name = "desc" placeholder="description"></textarea> 
                </p>
                <p><input type="submit" value = "SUBMIT"></input></p>
            </form>
        )
    }
}
