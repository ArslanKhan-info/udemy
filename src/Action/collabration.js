import { COLLABORATION_CREATED_FROM_OFFER,FETCH_MESSAGES_SUCCESS } from "type";
import * as api from "../api";




export const createCollabration =(collaboration,message)=>dispatch=>
    api.createCollabration(collaboration)
       .then(collabId=>{
            message.cta=`collaborations/${collabId}`
            api.createMessage(message)
            api.markOfferAsInCollaboration(collaboration.fromOffer)
            dispatch({
                type:COLLABORATION_CREATED_FROM_OFFER,
                offerid:collaboration.fromOffer,
                offerType:'sent'
            })
       })

export const subscribeToMessage = (uid)=>dispatch=>{
    api.subscribeToMessage(uid,messages=>{
        dispatch({
            type:FETCH_MESSAGES_SUCCESS,
            messages,
        })
    })
}

export const markMessageRead =(message)=>
    api.markMessageRead(message)