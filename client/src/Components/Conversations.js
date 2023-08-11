import React, { useState } from 'react';
import ConversatationItem from './ConversatationItem';
import { useSelector } from 'react-redux';

const Conversations = () => {
    var lightTheme =useSelector((state)=>state.themeKey.theme)
    const [conversations,setConversations]=useState([
        {
            name:"Test#1",
            lastMessage:"Last Message #1",
            timeStamp:"Today"
        },
        {
            name:"Test#2",
            lastMessage:"Last Message #2",
            timeStamp:"Today"
        },
        {
            name:"Test#3",
            lastMessage:"Last Message #3",
            timeStamp:"Today"
        },
    ])
    return (
        <div className={"sb-conversation" + (lightTheme?"":" dark")}>
        {
            conversations.map((conversation)=>{
                return (<ConversatationItem props={conversation} key={conversation.name}/>)
                
            })
        }
        
      </div>
    );
};

export default Conversations;