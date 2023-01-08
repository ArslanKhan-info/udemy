import { combineReducers } from "redux"
import { IS_FEATCHING, SERVICE_DETAILS } from "type"








const initServices =()=>{

    const item =(state={},action)=>{
        switch(action.type){
            case SERVICE_DETAILS:
                return action.serviceDetails
            default :
                return state
        }
    }

    const isFeatching = (state=false,action)=>{
        switch(action.type){
            case IS_FEATCHING:
                return true
            case SERVICE_DETAILS:
                return false
            default:
                return state
        }
    }


    
    return combineReducers({item,isFeatching})
}

const serviceDetails =initServices()

export default serviceDetails