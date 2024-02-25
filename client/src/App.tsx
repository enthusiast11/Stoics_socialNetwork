import React, { useEffect, useState } from 'react';
import CreatePost from './components/pages/CreatePost/index';
import { Provider } from 'react-redux';
import store from './store';
import AuthForm from './components/AuthForm/AuthForm';


function App() {
  
  
 
  return (
    <Provider store={store}>
        <div className="App">
        <CreatePost />
        <AuthForm/>
    
      </div>
    </Provider>
    
  );
}

export default App;
