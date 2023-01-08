import { getServiceDEtails } from 'Action'
import Modal from 'components/modal'
import OfferModal from 'components/service/offerModal'
import Spinner from 'components/Spinner'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const ServiceDetail = (props) => {
    const {id} =useParams()
    const {dispatch,isFeatching} = props
    useEffect(()=>{
       dispatch(getServiceDEtails(id))
    },[id])


    if(isFeatching || id !== props.serviceDetails.id){return <Spinner/>}

  return (
    <section className="hero is-fullheight is-default is-bold">
        <div className="hero-body">
            <div className="container has-text-centered">
            <div className="columns is-vcentered">
                <div className="column is-5">
                <figure className="image is-4by3">
                    <img src={props.serviceDetails.image} alt="Description" />
                </figure>
                </div>
                <div className="column is-6 is-offset-1">
                <h1 className="title is-2">
                    {props.serviceDetails.title}
                </h1>
                <h2 className="subtitle is-4">
                   {props.serviceDetails.description}
                </h2>
                <br />
                <div className="has-text-centered">
                    <OfferModal auth={props.auth} service={props.serviceDetails}/>
              </div>
                </div>
            </div>
            </div>
        </div>
        <div className="hero-foot">
            <div className="container">
            <div className="tabs is-centered">
                <ul>
                <li><a>And this is the bottom</a></li>
                </ul>
            </div>
            </div>
        </div>
        </section>
  )
}

const getPropstoState=({serviceDetails,auth})=>({
    serviceDetails:serviceDetails.item,
    isFeatching:serviceDetails.isFeatching,
    auth
})
export default connect(getPropstoState)(ServiceDetail)