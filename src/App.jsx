import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import DefaultLayout from './layout/DefaultLayout';
import Homepage from './pages/Homepage';

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
