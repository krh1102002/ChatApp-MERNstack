import React,{useState} from "react";
import ChatArea from "./ChatArea";
import {IconButton} from "@mui/material";
import NightlightIcon from '@mui/icons-material/Nightlight';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import ConversatationItem from "./ConversatationItem";
import "../Styles/MainStyles.css";
const SideBar = () => {
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
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
        <IconButton>
        <AccountCircleIcon />
        </IconButton>
        </div>
        <div>

        <IconButton>
        <PersonAddIcon />
        </IconButton>
        <IconButton>
        <GroupAddIcon />
        </IconButton>
        <IconButton>
        <AddCircleIcon />
        </IconButton>
        <IconButton>
        <NightlightIcon />
        </IconButton>
        </div>
      </div>
      <div className="sb-search"><IconButton><SearchIcon/></IconButton><input className="search-box"
       placeholder="search"/></div>
      <div className="sb-conversation">
        {
            conversations.map((conversation)=>{
                return (<ConversatationItem props={conversation} key={conversation.name}/>)
                
            })
        }
        
      </div>
    </div>
  );
};

export default SideBar;
