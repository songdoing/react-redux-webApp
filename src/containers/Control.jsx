import Control from '../components/Control';
import { connect } from 'react-redux';

export default connect(null, 
    function(dispatch) {
        return {
            onClick : function(mode) {
                dispatch({type : mode}); //dispatch 될때마다 store로
            }
        }
    }    
)(Control);