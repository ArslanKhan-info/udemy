import { FETCH_MESSAGES_SUCCESS, FETCH_USER_SERVICES, RESET_AUTH_STATE, SET_AUTH_USER } from "type"








const initial_state ={
    user:null,
    isAuth:false,
    isAuthResolved:false
}

const auth =(state=initial_state,action)=>{
    switch (action.type){
        case (SET_AUTH_USER):
            return ({user:action.user,isAuthResolved:true,isAuth:!!action.user})
        case(RESET_AUTH_STATE):
            return ({...state,isAuthResolved:false})
        case(FETCH_USER_SERVICES):
            return({...state,user:{...state.user,services:action.services}})
        case FETCH_MESSAGES_SUCCESS:
            return({...state,user:{...state.user,messages:action.messages}})
        default:
            return state
    }
}

export default auth