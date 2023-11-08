import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Navbar1 from './Component/Navbar';
import About from './Component/AboutPage';
import Skills from './Component/SkillsPage';
import Educations from './Component/Education';
import Certificateds from './Component/Certificated';
import Contacts from './Component/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Navbar1/>
    <About/>
    <Skills/>
    <Educations/>
    <Certificateds/>
    <Contacts/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
