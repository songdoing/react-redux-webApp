import {createStore} from 'redux';
var initState = {
    mode : 'WELCOME',
    welcome_content : {
        title : 'WEB',
        desc : 'Hello, WEB'
    },
    selected_content_id : 1,
    max_content_id : 3,
    contents : [
        {id : 1, title : 'HTML', desc : 'HTML is ...'},
        {id : 2, title : 'CSS', desc : 'CSS is ...'},
        {id : 3, title : 'JS', desc : 'JS is ...'}
    ]
}
function reducer(state = initState, action) {
    //언제나 한번은 초기 실행되고, 그때의 값을 세팅해줌
    /*
    if (state === undefined) {
        return initState;
    }
    */
   if(action.type === 'WELCOME') {
       //state 값을 바꿔줘야하는데 직빵으로 하면 데이터를 immutability어긋, 따라서 복제해서 사용
       return {...state, mode:'WELCOME' }; //WEB클릭하면서 onclick 이벤트(Header.jsx)발생하고 action.mode를 담는다(welcome)
   }
   if(action.type === 'READ') {
        return {...state, mode:'READ',
        selected_content_id:action.id}     
   }
   if(action.type === 'CREATE') {
       return {...state, mode:'CREATE'}
   }
   if(action.type === 'CREATE_PROCESS'){
       var newId = state.max_content_id+1;
       var newContents = [
           ...state.contents,
           {id : state.max_content_id+1,
            title : action.title,
            desc : action.desc}
        ];
        return {
            ...state,
            contents : newContents,
            max_content_id:newId,
            mode : 'READ',
            selected_content_id:newId
        }
   }
   return state;
}
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//redux dev tool를 사용하기 위해서 두번째 인자로..