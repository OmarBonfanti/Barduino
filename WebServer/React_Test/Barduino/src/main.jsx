

import './index.css';
import Sfondo from './Components/aFATTO/Sfondo/sfondo.jsx';
import Bar_logo from './Components/aFATTO/Logo/Bar_logo.jsx';


import { StrictMode } from 'react';
import ReactDOM from 'react-dom';


   // 
const root = document.getElementById('root');
if (root !== null) {
  ReactDOM.createRoot(root).render(
    <StrictMode>

      <Sfondo/>
      <Bar_logo/>

      
      
    </StrictMode>
  );
}
