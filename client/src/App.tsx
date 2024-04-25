import React, { useEffect, useState } from 'react';
import CreatePost from './components/pages/CreatePost/CreatePost';
import { Provider } from 'react-redux';
import store from './store';
import AuthForm from './components/AuthForm/AuthForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/pages/User/Profile/Profile';
import { StartPage } from './components/pages/StartPage/StartPage';
import Edit from './components/pages/Edit/Edit';
import { RootState } from './store';
import { useSelector } from 'react-redux';
import AuthPage from './components/pages/Auth/Auth';
import styles from './global.module.css'
import Login from './components/pages/Login/Login'

import PostList from './components/pages/PostList/PostList';
function App() {
  

  const userId = useSelector((state: RootState) => state.userId.id);
  console.log(userId);
  
    
 
  return (
    <Provider store={store}>
    <div style={styles}>
        <Routes>
        <Route  path="/" element={<StartPage/>} />
        <Route path="/posts" element={<PostList/>} />
        <Route  path={`/${userId}`} element={<Profile/>} />
        <Route  path={`/${userId}/edit`} element={<Edit/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/auth" element={<AuthPage/>} />
        
      </Routes>

      <div className="App">
        
        </div>
    </div>
    </Provider> 
     
        
    
  );
}

export default App;
