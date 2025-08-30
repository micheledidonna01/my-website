import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import DefaultLayout from './layout/DefaultLayout';
import Homepage from './pages/Homepage';
import Projectspage from './pages/Projectspage';
import Contactspage from './pages/Contactspage';
import Socialpage from './pages/Socialpage';
import StoryPage from './pages/StoryPage';
function App() {

  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path='projects' element={<Projectspage />} />
            <Route path='contacts' element={<Contactspage />} />
            <Route path='social' element={<Socialpage />} />
            <Route path='story' element={<StoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
