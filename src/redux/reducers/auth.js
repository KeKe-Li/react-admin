import {SET_AUTH} from "../actions/constrants";

function getUserID() {
    let nowID = localStorage.getItem("user_id");
    if (nowID === undefined || nowID === null) {
        return 0
    } else {
        return parseInt(nowID)
    }
}


function auth(state = {authed: false}, action) {
    switch (action.type) {
        case SET_AUTH:
            return {...state, authed: true};
        default:
            if (getUserID() !== 0) {
                return {...state, authed: true}
            }
            return state
    }

}



export  default auth