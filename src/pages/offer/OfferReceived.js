import React from 'react'
import ServiceItem from 'components/service/serviceItem'
import WithAuth from 'hoc/forAuth'
import { getReceivedOffer, updateOfferStatus } from 'Action'
import { connect } from 'react-redux'

class ReceivedOffers extends React.Component {

  componentDidMount(){
    this.props.dispatch(getReceivedOffer(this.props.auth.user.uid))
  }

  statusClass = status => {
    if (status === 'pending') return 'is-warning'
    if (status === 'accepted') return 'is-success'
    if (status === 'declined') return 'is-danger'
  }
  updateOffer = (offer,status) => {
    this.props.dispatch(updateOfferStatus(offer.id,status))
  }


  render() {
    const {offers}=this.props
    return (
      <div className="container">
        <div className="content-wrapper">
          <h1 className="title">Received Offers</h1>
          <div className="columns">
          { offers.map(offer => (
              <div 
                key={offer.id}
                className="column is-one-third">
                <ServiceItem
                  noButton
                  className="offer-card"
                  service={offer.service}>
                  <div className={`tag is-large ${this.statusClass(offer.status)}`}>
                    {offer.status}
                  </div>
                  <hr />
                  <div className="service-offer">
                    <div>
                      <span className="label">From User:</span> {offer.fromUser.fullName}
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
                    { offer.status === 'pending' &&
                    <div>
                      <hr />
                      <button 
                        onClick={() => this.updateOffer(offer,'accepted')} 
                        className="button is-success s-m-r">Accept</button>
                      <button 
                        onClick={() => this.updateOffer(offer,'declined')} 
                        className="button is-danger">Decline</button>
                    </div>
                  }
                  </div>
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

const mapStateToProps = ({offers}) => ({ offers: offers.received })

export default WithAuth(connect(mapStateToProps)(ReceivedOffers))