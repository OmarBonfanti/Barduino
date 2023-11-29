/*import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import TopBar from './Components/Topbar/TopBar.jsx'
import Bar_logo from './Components/TopLogo/Bar_logo.jsx'
import SideBar from './Components/SideBar/SideBar.jsx'
import Sfondo from './Components/sfondo/sfondo.jsx'

//<Bar_logo />
//<TopBar />



 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   

      <Sfondo/>

      

  </React.StrictMode>,
)
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sfondo from './Components/sfondo/sfondo.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Sfondo/>
  </React.StrictMode>,
  document.getElementById('root')
);