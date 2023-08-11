import React from 'react';

const MessagesSelf = () => {
    var props2={name:"you",message:"this is a sample message"}
    return (
        <div className="self-messsage-container">
            <div className="messageBox">
                <p>{props2.message}</p>
                <p className="self-timeStamp">12:00am</p>
            </div>
        </div>
    );
};

export default MessagesSelf;