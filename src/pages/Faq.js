import WithAuth from 'hoc/forAuth'
import React from 'react'



const Faq = () => { 
    return(
        <h1>I am FAQ Page</h1>
    )
}

export default WithAuth(Faq)