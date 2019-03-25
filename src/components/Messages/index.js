import React from 'react'

class Messages extends React.Component {

    renderMessage(message){
        const {member, text} = message
        const {currentMember} = this.props
        const messageFromMe = member.id === currentMember.id
        const className = messageFromMe ? 
        'Messages-message currentMember' : 'Messages-message'

        return(
            <li className={className}>
                <span className='avatar'
                style={{backgroundColor: member.color}} />
                <div className='Message-content'>
                    <div className='username'>
                        {member.username}
                    </div>
                    <div>{text}</div>
                </div>
            </li>
        ) 

    }

    render(){
        const {messages} = this.props
        return(
            <ul>
                {messages.map(m => this.renderMessage(m))}
            </ul>
        )
    }
}

export default Messages