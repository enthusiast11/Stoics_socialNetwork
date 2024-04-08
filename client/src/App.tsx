import React, { useEffect, useState } from 'react';
import CreatePost from './components/pages/CreatePost/index';
import { Provider } from 'react-redux';
import store from './store';
import AuthForm from './components/modules/AuthForm/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/pages/User/Profile/Profile';
import { StartPage } from './components/pages/StartPage';
import Edit from './components/pages/Edit';
import { RootState } from './store';
import { useSelector } from 'react-redux';
import LoginPage from './components/pages/Login/LoginPage';
import AuthPage from './components/pages/Auth/AuthPage';


function App() {
  
  const userId = useSelector((state: RootState) => state.auth.userId)
  console.log(userId);
 
  return (
    <Provider store={store}>
    <div>
        <Routes>
        <Route  path={`/${userId}`} element={<Profile/>} />
        <Route  path={`/${userId}/edit`} element={<Edit/>} />
        <Route  path="/login" element={<LoginPage/>} />
        <Route  path="/auth" element={<AuthPage/>} />
        <Route  path="/" element={<StartPage/>} />
        
      </Routes>

      <div className="App">
        
        </div>
    </div>
    </Provider> 
     
        
    
  );
}

export default App;
