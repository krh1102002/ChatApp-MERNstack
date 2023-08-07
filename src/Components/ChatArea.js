import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import MessagesSelf from "./MessagesSelf";
import MessagesOthers from "./MessagesOthers";
const ChatArea = ({ props }) => {
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
        <MessagesSelf />{" "}
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
