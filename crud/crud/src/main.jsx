import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreateUser from './users/CreateUser.jsx';
import 'boxicons'
import UserListing from './users/UserListing.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/create-user' element={<CreateUser/>}/>
      <Route path='/user-listing' element={<UserListing/>}/>
    </Routes>
  </BrowserRouter>,
)
