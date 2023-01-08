import {
    FETCH_SERVICES,
    IS_FEATCHING,
    SERVICE_DETAILS,
    FETCH_USER_SERVICES
  } from "type";
  import * as api from "../api";




export const fetchSertvices = () =>(dispatch) => 
  api
    .fetchServices()
    .then(services=> dispatch({
        type: FETCH_SERVICES,
        services
      })
    )


export const getServiceDEtails = (id) =>async (dispatch, getState) => {
  const lastItem = getState();
  if (lastItem.serviceDetails.item.id === id) {
    return Promise.resolve();
  }
  dispatch({ type: IS_FEATCHING });
  return api.getServiceDEtails(id).then(async serviceDetails =>{
    const user = await serviceDetails.user.get()
    serviceDetails.user = user.data()
    serviceDetails.user.uid=user.id
    return dispatch({
      type: SERVICE_DETAILS,
      serviceDetails,
    })
  })
}

export const addServices = (ServiceData, uid)=>{
  ServiceData.price= parseInt(ServiceData.price,10)
  ServiceData.user= api.createRef('profiles',uid)
  ServiceData.userId=uid
  return api.SetServices(ServiceData)
}

export const fetchUserServices = (uid) => async (dispatch) => 
  api
    .fetchUserServices(uid)
    .then(services=>dispatch({
        type: FETCH_USER_SERVICES,
        services
      })
    )