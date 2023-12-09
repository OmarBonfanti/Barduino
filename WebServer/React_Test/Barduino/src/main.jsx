

import './index.css';
import Sfondo from './Components/Sfondo/sfondo.jsx';


import { StrictMode } from 'react';
import ReactDOM from 'react-dom';


   // 
const root = document.getElementById('root');
if (root !== null) {
  ReactDOM.createRoot(root).render(
    <StrictMode>

      <Sfondo/>
      

      
      
    </StrictMode>
  );
}