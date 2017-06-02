import * as types from '../actions/actionTypes';
import InitialState from './InitialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';    
}

export default (state = InitialState.numAjaxCallsInProgress, action) => {
    if (action.type == types.BEGIN_AJAX_CALL) {
        return state + 1;
    } 
    else if (action.type == types.AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)){
        return state - 1;
    }
    return state;
};