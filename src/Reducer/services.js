import { combineReducers } from "redux"
import { FETCH_SERVICES } from "type"





const initServiceDetails = ()=>{
    const all=(state=[],action)=>{
        switch(action.type){
            case FETCH_SERVICES:
                return action.services
            default :
                return state
        }
    }
    return combineReducers({all})
}
const fetchServices = initServiceDetails()
export default fetchServices