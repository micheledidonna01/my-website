import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import DefaultLayout from './layout/DefaultLayout';
import Homepage from './pages/Homepage';
import Projectspage from './pages/Projectspage';
import Contactspage from './pages/Contactspage';
import Socialpage from './pages/Socialpage';
import StoryPage from './pages/StoryPage';
import WorkPage from './pages/WorkPage';
import SchoolPage from './pages/SchoolPage';
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
          </Route>
          <Route path='/story' element={<DefaultLayout />} >
            <Route index element={<StoryPage />} />
            <Route path='work' element={<WorkPage />} />
            <Route path='school' element={<SchoolPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
