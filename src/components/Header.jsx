import React, { Component } from 'react';
import {connect} from 'react-redux';

//Header component를 connect함수를 통해서 리덕스을 위한 가짜 component를 만들어서 import 함 
class Header extends Component {
    render() {
        return (
            <header>
                <h1><a href="#welcome" onClick = {function(){
                    this.props.onClick();
                }.bind(this)}>WEB</a></h1>
                World Wide Web
            </header>
        )
    }
}

export default connect(
    null,
    function(dispatch){
        return {
            onClick : function(){
                dispatch({type:'CHANGE_MODE', mode : 'WELCOME'})
            }
        }
    }
)(Header);
//최상위 compo인 index.js에서 provider를 import해야 에러 없음
