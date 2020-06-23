import React from 'react';
import Message from './Message'

class NotConfirmMessage extends React.Component {

    render() {
        return (
            <div>
              <Message {...this.props}/>
            </div>
        );
    }
}

export default NotConfirmMessage
