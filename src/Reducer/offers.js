
import { combineReducers } from "redux"
import { COLLABORATION_CREATED_FROM_OFFER, FETCH_OFFERS_SUCCESS, UPDATE_OFFER_STATUS_SUCCESS } from "type"








const offerReducer = offerType=>{

    return (state=[],action)=>{
        if(action.offerType !== offerType){
            return state
        }
        switch(action.type){
            case FETCH_OFFERS_SUCCESS :
                return ([...action.offers])
            case(UPDATE_OFFER_STATUS_SUCCESS):{
                const nextstate=[...state]
                const index = nextstate.findIndex(offer=>offer.id === action.offerid)
                nextstate[index].status = action.status
                return nextstate
            }
            case COLLABORATION_CREATED_FROM_OFFER:{
                const nextstate=[...state]
                const index = nextstate.findIndex(offer=>offer.id === action.offerid)
                nextstate[index].collaborationCreated = true
                return nextstate
            }
            default:
                return state
        }
    }
}



export const offers = combineReducers({
    received:offerReducer('receive'),
    sent:offerReducer('sent')
})
