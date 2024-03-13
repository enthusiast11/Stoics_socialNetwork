import React, { useEffect, useState } from 'react';
import CreatePost from './components/pages/CreatePost/index';
import { Provider } from 'react-redux';
import store from './store';
import AuthForm from './components/elements/AuthForm/AuthForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/pages/User/Profile/Profile';
import LoginForm from './components/elements/LoginForm/LoginForm';


function App() {
  
  
 
  return (
    <Provider store={store}>
    <div>
        <Routes>
        <Route  path="/profile" element={<Profile/>} />
        <Route  path="/login" element={<LoginForm/>} />
        <Route  path="/auth" element={<AuthForm/>} />
        <Route  path="/" element={<div>Стартовая страница</div>} />
        
      </Routes>

      <div className="App">
        
          {/* <CreatePost /> */}
        </div>
    </div>
    </Provider> 
     
        
    
  );
}

export default App;
