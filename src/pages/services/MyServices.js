import React from 'react'
import WithAuth from 'hoc/forAuth'
import { fetchUserServices } from 'Action'
import ServiceItem from 'components/service/serviceItem'

class UserServices extends React.Component {

  componentDidMount() {
    const {auth:{user}}=this.props
    this.props.dispatch(fetchUserServices(user.uid))
  }


  render() {
    const {user:{services}} = this.props.auth
    return (
        <div className="container">
            <div className="content-wrapper">
                <h1 className="title">Your Services</h1>
                <div className="columns is-multiline">
                    {services.map((s) => (
                        <div key={s.id} className="column">
                        <ServiceItem service={s} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
  }
}


export default WithAuth(UserServices)