import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { Home } from './components/Home';
import  {About} from './components/About';
import  {Blog} from './components/Blog';
import  {Contact} from './components/Contact';
import { Posts } from './components/Posts';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Menu } from './components/Menu';
import { NotFound } from './components/NotFound';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
      <Menu/>
        <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/about' element={<About />}/>
            <Route  path='/blog' element={<Blog />}/>
            <Route  path='/contact' element={<Contact/>}/>
            <Route  path='/posts' element={<Posts/>}/>
            <Route  path='/posts/:id' element={<Posts/>}/>
            <Route  path='/*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
