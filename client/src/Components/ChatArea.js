import React, {useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import MessagesSelf from "./MessagesSelf";
import MessagesOthers from "./MessagesOthers";
const ChatArea = ({ props }) => {
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
var props=conversations[0];
  return (
    <div className="chatArea-container">
      <div className="ChatArea-header">
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{props.name}</p>
          <p className="con-timeStamp">{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="messages-container">
        <MessagesOthers />
        <MessagesSelf />
        <MessagesOthers />
        <MessagesSelf />
        <MessagesOthers />
        <MessagesSelf />
        <MessagesOthers />
        <MessagesSelf />
        <MessagesOthers />
        <MessagesSelf />
        <MessagesOthers />
        <MessagesSelf />
        <MessagesOthers />
        <MessagesSelf />
      </div>
      <div className="text-input-area">
        <input placeholder="Type a message" className="search-box" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
