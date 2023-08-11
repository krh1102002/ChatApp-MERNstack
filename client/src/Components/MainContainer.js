import React,{useState} from 'react';
import '../Styles/MainStyles.css'
import SideBar from './SideBar';
import ChatArea from './ChatArea'
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users_Groups from './Users_Groups';
import Users from './Users';
import Groups from './Groups';
import { Outlet } from 'react-router-dom';
const MainContainer = () => {
    
    return <div className='main-container'>
        <SideBar/>
        <Outlet/>
        {/* <Welcome/>  */}
        {/* <CreateGroups/> */}
        {/* <ChatArea */}
        {/* <Users/> */}
        {/* <Groups/> */}
    </div>
};

export default MainContainer;