/* eslint jsx-a11y/anchor-is-valid: 0 */

import { fetchSertvices } from 'Action'
import Hero from 'components/Hero'
import ServiceItem from 'components/service/serviceItem'
import React from 'react'
import { connect } from 'react-redux'
class Home extends React.Component {

  state = {
    services:[]
  }

  componentDidMount(){
   this.props.dispatch(fetchSertvices())
  }

 

renderServices =(services)=>{
  return services.map((service,key)=><ServiceItem key={key} service={service}/>)
}
  render() {
    const {services}=this.props
    return (
      <div>
        <Hero/>
        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2" >Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">With great Responsability</h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns is-multiline">
                {this.renderServices(services)}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
const getStateToProps =(state)=>({services:state.services.all})
export default connect(getStateToProps)(Home)