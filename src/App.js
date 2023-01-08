import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { ToastContainer } from 'react-toastify';
import ServiceApp from 'serviceapp';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthChange, resetAuthState, storeAuthUser, subscribeToMessage } from 'Action';



class App extends React.Component {

  componentDidMount(){
    this.UnsubScribe = onAuthChange(authuser=>{
      store.dispatch(resetAuthState())
      store.dispatch(storeAuthUser(authuser))
      store.dispatch(subscribeToMessage(authuser.uid))
    })
  }
  componentWillUnmount(){
    this.UnsubScribe()
  }
  render(){
    return (
      <Provider store={store}>
      <ToastContainer position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"/>
        <BrowserRouter>
          <ServiceApp/>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
