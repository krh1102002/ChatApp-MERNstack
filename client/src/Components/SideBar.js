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
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {toggleTheme} from '../Features/themeSlice'
import Conversations from "./Conversations";




const SideBar = () => {
    

var navigate=useNavigate();
const dispatch=useDispatch();
var lightTheme =useSelector((state)=>state.themeKey.theme)


  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme?"":" dark")}>
        <div className="">
        <IconButton>
        <AccountCircleIcon className={"icon" + (lightTheme?"":" dark")}></AccountCircleIcon>
        </IconButton>
        </div>
        <div className="other-icon">

        <IconButton onClick={()=>{navigate('users')}}>
        <PersonAddIcon  className={"icon" + (lightTheme?"":" dark")}/>
        </IconButton>
        <IconButton onClick={()=>{navigate('groups')}}>
        <GroupAddIcon  className={"icon" + (lightTheme?"":" dark")}/>
        </IconButton>
        <IconButton onClick={()=>{navigate('create-groups')}}>
        <AddCircleIcon  className={"icon" + (lightTheme?"":" dark")} />
        </IconButton>
        <IconButton onClick={()=>{
          dispatch(toggleTheme())
        }}>
        {lightTheme && <NightlightIcon  className={"icon " + (lightTheme ?"":" dark")}/>}
        {!lightTheme && <LightModeIcon  className={"icon " + (lightTheme ?"":" dark")}/>}
        </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme?"":" dark")}><IconButton><SearchIcon className={"icon " + (lightTheme ?"":" dark")}/></IconButton><input className={"search-box" + (lightTheme ? "":" dark")}
       placeholder="search"/></div>
      <Conversations/>
    </div>
  );
};

export default SideBar;
