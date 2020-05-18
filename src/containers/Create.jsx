import Create from '../components/Create';
import { connect } from 'react-redux';

//event를 받으므로 두번째 인자에
export default connect(
    null,
    function(dispatch) {
        return {
            onSubmit : function(title, desc) {
                dispatch({type : 'CREATE_PROCESS', title, desc});
            }
        }
    }
)(Create);