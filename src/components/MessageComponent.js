import { markMessageRead } from 'Action'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ReceivedMessages = ({dispatch, messages}) => {

  const markMessageReaded =(message)=>{
    markMessageRead(message)
  }

  const renderMessages = messages => {
    const  unReadMessages = messages.filter(m =>!m.isRead).map(message=>
      <div key={message.id}>
        <div className="from-user">
          <span>From: </span>{message.fromUser.name}
        </div>
        <hr />
        <div className="navbar-item navbar-item-message">
          <div>
           {message.text}
          </div>
          <Link onClick={() => {}} to='/collaborations/dsada99786967'>
            <div className="button is-success">Join</div>
          </Link>
          <button
            onClick={() =>markMessageReaded(message)}
            className="button is-warning">Later</button>
        </div>
      </div>
    )
  if (unReadMessages.length === 0) {
    return <div className="navbar-item">No Messages :(</div>
  }
  return unReadMessages
  }
  return renderMessages(messages)
}


const mapStateToProps = ({auth}) => ({messages:auth.user.messages })

export default connect(mapStateToProps)(ReceivedMessages)