import Nav from '../components/Nav';
import {connect} from 'react-redux';

export default connect(
    function(state) {
        return {data:state.contents}
    },
    function(dispatch) {
        return {
            onClick : function(id){
                dispatch({type:'READ', id:id}); 
                //내부의 this.props.onClick(e.target.dataset.id)를 실행.인자로 id받아 store에 dispatch함
                //action과 id값을 받는다. 
            }
        }
    }
)(Nav);