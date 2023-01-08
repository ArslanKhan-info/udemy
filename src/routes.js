import React from 'react'
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home'
import Login from 'pages/Login';
import Register from 'pages/Register';
import Faq from 'pages/Faq';
import Profile from 'pages/Profile';
import Services from 'pages/Services';
import ServiceDetail from 'pages/ServiceDetail';
import Secrate from 'pages/Secrate';
import ServicesCreate from 'pages/services/ServicesCreate';
import MyServices from 'pages/services/MyServices';
import SentOffers from 'pages/offer/OfferSent';
import ReceivedOffers from 'pages/offer/OfferReceived';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='faq' element={<Faq/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='secrate' element={<Secrate/>}/>
        <Route path='services/new' element={<ServicesCreate/>}/>
        <Route path='services/me' element={<MyServices/>}/>
        <Route path='serviceDetail/:id' element={<ServiceDetail/>}/>
        <Route path='offers/sent' element={<SentOffers/>}/>
        <Route path='offers/received' element={<ReceivedOffers/>}/>
    </Routes>
  )
}

export default Router