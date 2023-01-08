
import { configureStore } from "@reduxjs/toolkit"
import mainreducer from "Reducer/Index"
import { createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"



// const addLogerToDispatch=store=>dispatch=>action =>
//   {
//     console.group(action.type)
//     console.log('prev state',store.getState())
//     console.log('action',action)
//     const retunValue = dispatch(action)
//     console.log('next state',store.getState())
//     console.groupEnd(action.type)
//   }

// const addPromisToDispatch =store=>dispatch=>action =>
// {
//     if(typeof action.then === 'function' ){
//       return action.then(dispatch)
//     }
//     return dispatch(action)
// }

// const thunk =store=>dispatch=>action =>
// {
//     if(typeof action === 'function' ){
//       return action(dispatch,store.getState)
//     }
//     return dispatch(action)
// }

// const initStore =()=>{
//   const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 
//   const store = createStore(mainreducer,browserSupport)

//   store.dispatch = addLogerToDispatch(store)(store.dispatch)
//   store.dispatch = addPromisToDispatch(store)(store.dispatch)
//   store.dispatch = thunk(store)(store.dispatch)
//   return store
// }

// export default initStore



const store = configureStore({
  reducer:mainreducer,
  middleware:[thunk,logger]
})

export default store



