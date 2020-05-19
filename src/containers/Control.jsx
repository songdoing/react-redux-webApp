import Control from '../components/Control';
import { connect } from 'react-redux';

export default connect(null, 
    function(dispatch) {
        return {
            onClick : function(mode) {
                 //creat.update.delete 버튼 눌릴때마다 onClick
                if(mode === 'DELETE_PROCESS') {
                    if(!window.confirm('Are you sure?')){
                        return;
                    }
                }
                 dispatch({type : mode}); //dispatch 될때마다 store로
            }
        }
    }    
)(Control);