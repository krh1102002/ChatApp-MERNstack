import React,{useState} from 'react';
import '../Styles/MainStyles.css'
import SideBar from './SideBar';
import ChatArea from './ChatArea'
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users_Groups from './Users_Groups';
const MainContainer = () => {
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
    return <div className='main-container'>
        <SideBar/>
        {/* <Welcome/>  */}
        {/* <CreateGroups/> */}
        {/* <ChatArea props={conversations[0]}/> */}
        <Users_Groups/>
    </div>
};

export default MainContainer;