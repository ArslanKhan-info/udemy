import { db} from "db"
import "firebase/compat/auth";
import "firebase/compat/firestore";






export const fetchServices=()=>
  db
  .collection('services')
  .get()
  .then(res=>{
    const services = res.docs.map(item=>({id: item.id,...item.data()}))
    return services
  })

export const getServiceDEtails =(id)=>
  db
  .collection('services')
  .doc(id)
  .get()
  .then(res=>({id: res.id,...res.data()}))

export const SetServices =(ServiceData)=>
  db
    .collection('services')
    .add(ServiceData)
    .then(res=>res)
    
export const fetchUserServices=(uid)=>
db
.collection('services')
.where("userId",'==',uid)
.get()
.then(res=>{
  const services = res.docs.map(item=>({id: item.id,...item.data()}))
  return services
})