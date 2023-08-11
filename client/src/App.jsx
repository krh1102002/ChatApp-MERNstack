import React from 'react';
import './App.css'
import MainContainer from './Components/MainContainer.js'
import Login from './Components/Login.js'
import { Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import ChatArea from './Components/ChatArea';
import Users from './Components/Users';
import Groups from './Components/Groups';
import Users_Groups from './Components/Users_Groups';
import CreateGroups from './Components/CreateGroups';
import ConversatationItem from './Components/ConversatationItem';
import Conversations from './Components/Conversations';
import Register from './Components/Register';

const App = () => {
  return (
    <div className='App'>
      {/* <MainContainer/> */}
    <Routes>
      <Route path="/login" element={ <Login/>}/>
      <Route path="/register" element={ <Register/>}/>
      <Route path='app' element={<MainContainer/>}>
          <Route path='welcome' element={<Welcome/>} />
          <Route path='chat' element={<ChatArea/>} />
          <Route path='users' element={<Users_Groups/>} />
          <Route path='groups' element={<Groups/>} />
          <Route path='create-groups' element={<CreateGroups/>} />
          <Route path='conversation' element={<Conversations/>} />
      </Route>
    </Routes>

     
    </div>
  );
};

export default App; 