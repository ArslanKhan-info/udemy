import React from 'react'
import ServiceItem from 'components/service/serviceItem'
import WithAuth from 'hoc/forAuth'
import { getSentOffers } from 'Action'
import { connect } from 'react-redux'
import { newCollaboration, newMessage } from 'helper/offer'
import { createCollabration } from 'Action'

class SentOffers extends React.Component {

  componentDidMount(){
    this.props.dispatch(getSentOffers(this.props.auth.user.uid))
  }
  createCollaboration(offer){
    const {auth : {user},dispatch}=this.props
    const collaboration = newCollaboration({offer,fromUser:user})
    const message =newMessage({offer,fromUser:user})
    dispatch(createCollabration(collaboration,message))
  }
  render() {
    const {offers} =this.props
    return (
      <div className="container">
        <div className="content-wrapper">
          <h1 className="title">Sent Offers</h1>
          <div className="columns">
            { offers.map(offer => (
              <div 
                key={offer.id}
                className="column is-one-third">
                <ServiceItem
                  noButton
                  className="offer-card"
                  service={offer.service}>
                  <div className="tag is-large">
                    {offer.status}
                  </div>
                  <hr />
                  <div className="service-offer">
                    <div>
                      <span className="label">To User:</span> {offer.toUser.fullName}
                    </div>
                    <div>
                      <span className="label">Note:</span> {offer.note}
                    </div>
                    <div>
                      <span className="label">Price:</span> ${offer.price}
                    </div>
                    <div>
                      <span className="label">Time:</span> {offer.time} hours
                    </div>
                  </div>
                  { offer.status === 'accepted' && !offer.collaborationCreated &&
                    <div>
                      <hr />
                      <button 
                        onClick={() => this.createCollaboration(offer)}
                        className="button is-success">Collaborate</button>
                    </div>
                  }
                </ServiceItem>
              </div>
              ))
            }
            </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({offers}) => ({ offers: offers.sent })

export default WithAuth(connect(mapStateToProps)(SentOffers))