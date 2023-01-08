import React from 'react'
import { Link } from 'react-router-dom'

class ServiceItem extends React.Component{

    shortText =(text,maxLength=40)=>{
        if(!text) return '' 
        if(text.length <= maxLength) return text
        return text.substr(0,maxLength) +'...'
    }
    render(){
        const {service, children, className, noButton}=this.props
        return(
            (<div key={service.id} className="column is-one-third">
                <div 
                    className={`feature-card is-bordered has-text-centered revealOnScroll delay-1 ${className}`} 
                    data-animation="fadeInLeft">
                <div className="card-title">
                    <h4>{service.title}</h4>
                </div>
                <div className="card-icon">
                    <img src={service.image} alt=""/>
                </div>
                <div className="card-text">
                    <p>{this.shortText(service.description)}</p>
                </div>
                { children &&
                    <div className="card-text">
                        { children }
                    </div>
                }
                { !noButton &&
                    <div className="card-action">
                        <Link 
                            to={`/serviceDetail/${service.id}`}
                            className="button btn-align-md accent-btn raised">Learn More</Link>
                    </div>
                }
                </div>
            </div>)
        )
    }
}

export default ServiceItem