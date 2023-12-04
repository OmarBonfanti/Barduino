

import './index.css';
import Sfondo from './Components/sfondo/sfondo.jsx';
import Bar_logo from './Components/TopLogo/Bar_logo.jsx';
import MainDrink from './Components/MainDrink/MainDrink.jsx';



import { StrictMode } from 'react';
import ReactDOM from 'react-dom';


   // 
const root = document.getElementById('root');
if (root !== null) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <Sfondo/>
      <Bar_logo/>
      <MainDrink/>
    </StrictMode>
  );
}