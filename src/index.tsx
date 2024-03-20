import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import EducationSlide from './slides/education/EducationSlide'
import SlideShow from './slides/SlideShow';
import slidesData from './slides/_slidesData'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/resume" element={<SlideShow data={slidesData} index={0} />} />
        <Route path='/resume/experiences' element={<SlideShow data={slidesData} index={0} />} />
        <Route path='/resume/educations' element={<SlideShow data={slidesData} index={1} />} />
        <Route path='/resume/certifications' element={<SlideShow data={slidesData} index={2} />} />
        <Route path='/resume/projects' element={<SlideShow data={slidesData} index={3} />} />
        <Route path='/resume/achievements' element={<SlideShow data={slidesData} index={4} />} />
        <Route path='/resume/github' element={<SlideShow data={slidesData} index={5} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
