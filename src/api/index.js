import { db} from "db"

export * from './auth'
export * from './services'
export * from './offer'
export * from './collabration'

export const createRef = (collection,docId)=> db.doc(`${collection}/${docId}`)