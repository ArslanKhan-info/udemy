import { combineReducers } from "redux"
import auth from "./authReducer"
import { offers } from "./offers"
import serviceDetails from "./servicedetails"
import fetchServices from "./services"




 const mainreducer=combineReducers({
    services:fetchServices,
    serviceDetails:serviceDetails,
    auth,
    offers
  })



  export default mainreducer