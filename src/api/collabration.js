
import { db} from "db"

export const createCollabration =(collaboration)=>
   db.collection('collaborations')
     .add(collaboration)
     .then(res=>res.id)

export const createMessage =(message)=>db.collection('profiles')
  .doc(message.toUser)
  .collection('messages')
  .add(message)
  .then(res=>res)

export const markOfferAsInCollaboration  =(offerId)=>
    db.collection('offers')
      .doc(offerId)
      .update({collaborationCreated:true})

export const subscribeToMessage =(userId,callBack)=>
    db.collection('profiles')
      .doc(userId)
      .collection('messages')
      .onSnapshot(snapshot =>callBack(snapshot.docs.map(message=>({id:message.id,...message.data()}))))

export const markMessageRead = message=>
    db.collection('profiles')
      .doc(message.toUser)
      .collection('messages')
      .doc(message.id)
      .update({isRead:true})