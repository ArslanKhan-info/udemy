import { FETCH_OFFERS_SUCCESS, UPDATE_OFFER_STATUS_SUCCESS } from "type";
import * as api from "../api";





export const createOffer = (offerData)=> api.createOffer(offerData)


const GetOfferUserInfo =async (offerData,userType)=>{
    const service = await offerData.service.get()
    const user= await offerData[userType].get()
    offerData.service = service.data()
    offerData.service.id = service.id
    offerData[userType]= user.data()
    return offerData
}

export const getSentOffers =uid=>dispatch=>
    api
        .getSentOffers(uid)
        .then(async offersData=>{
            const offers = await Promise.all(offersData.map(offer=>GetOfferUserInfo(offer,'toUser')))
            dispatch({
                type:FETCH_OFFERS_SUCCESS,
                offers,
                offerType:'sent'
            })
        })

export const getReceivedOffer =uid=>dispatch=>
    api
        .getReceivedOffer(uid)
        .then(async offersData=>{
            const offers = await Promise.all(offersData.map(offer=>GetOfferUserInfo(offer,'fromUser')))
            dispatch({
                type:FETCH_OFFERS_SUCCESS,
                offers,
                offerType:'receive'
            })
        })

export const updateOfferStatus =(offerid,status)=>dispatch=>{
    api.updateOfferStatus(offerid,status)
       .then(_=>{
            dispatch({
                type:UPDATE_OFFER_STATUS_SUCCESS,
                status,
                offerType:'receive',
                offerid
            })
       })
}

