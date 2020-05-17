import {createStore} from 'redux';
var initState = {
    mode : 'WELCOME',
    welcome_content : {
        title : 'WEB',
        desc : 'Hello, WEB'
    },
    selected_content_id : 1,
    contents : [
        {id : 1, title : 'HTML', desc : 'HTML is ...'},
        {id : 1, title : 'CSS', desc : 'CSS is ...'},
        {id : 1, title : 'JS', desc : 'JS is ...'}
    ]
}
function reducer(state = initState, action) {
    //always have initial render => initial value setting need
    /*
    if (state === undefined) {
        return initState;
    }
    */
   return state;
}
export default createStore(reducer);