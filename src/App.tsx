import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './scss/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Favourite from './pages/Favourite.jsx';
import Calendar from './pages/Calendar.jsx';

// eslint-disable-next-line react/function-component-definition
// const App: React.FC = () => (
function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <main>
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="calendar" element={<Calendar />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
