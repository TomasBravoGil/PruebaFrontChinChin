import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { homeUrl, loginUrl, profileUrl, registerUrl } from './constants/urls.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage.jsx'
import { LoginPage } from './pages/Login/LoginPage.jsx'
import {RegisterPage} from './pages/Register/RegisterPage.jsx'
import { ProfilePage } from './pages/ProfilePage/ProfilePage.jsx'
import { Layout } from './pages/Layout/Layout.jsx'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx'


createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
   <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={homeUrl} element={<HomePage/>} /> 
          <Route path={profileUrl} element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }/>       
        </Route>
        <Route path={loginUrl} element={<LoginPage />}/>
        <Route path={registerUrl} element={<RegisterPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,  
)
