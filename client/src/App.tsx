import React, { useEffect, useState } from 'react';
import CreatePost from './components/pages/CreatePost/index';
import { Provider } from 'react-redux';
import store from './store';
import AuthForm from './components/modules/AuthForm/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/pages/User/Profile/Profile';
import LoginForm from './components/pages/Login/LoginForm';
import { StartPage } from './components/pages/StartPage';
import Edit from './components/pages/Edit';
import { RootState } from './store';
import { useSelector } from 'react-redux';


function App() {
  
  const userId = useSelector((state: RootState) => state.auth.userId)
 
  return (
    <Provider store={store}>
    <div>
        <Routes>
        <Route  path={`/${userId}`} element={<Profile/>} />
        <Route  path="/edit" element={<Edit/>} />
        <Route  path="/login" element={<LoginForm/>} />
        <Route  path="/auth" element={<AuthForm/>} />
        <Route  path="/" element={<StartPage/>} />
        
      </Routes>

      <div className="App">
        
          {/* <CreatePost /> */}
        </div>
    </div>
    </Provider> 
     
        
    
  );
}

export default App;
