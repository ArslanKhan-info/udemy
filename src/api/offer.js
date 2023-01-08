import { createRef } from "api";
import { db} from "db"
import "firebase/compat/auth";
import "firebase/compat/firestore";


export const createOffer=offerObject=>
    db
        .collection('offers')
        .add(offerObject)
        .then(res=>res)

export const getSentOffers =async uid=>{
    const user=createRef('profiles',uid)
    return db
        .collection('offers')
        .where('fromUser','==',user)
        .get()
        .then(res=>res.docs.map(offer=>({id:offer.id,...offer.data()})))
}

export const getReceivedOffer =async (uid)=>{
    const user=createRef('profiles',uid)
    return db
        .collection('offers')
        .where('toUser','==',user)
        .get()
        .then(res=>res.docs.map(offer=>({id:offer.id,...offer.data()})))

}

export const updateOfferStatus =(offerId,status)=>
    db.collection('offers')
      .doc(offerId)
      .update({status})
