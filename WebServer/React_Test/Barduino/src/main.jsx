import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import TopBar from './Components/Topbar/TopBar.jsx'
import Bar_logo from './Components/TopLogo/Bar_logo.jsx'
import SideBar from './Components/SideBar/SideBar.jsx'

//<Bar_logo />
//<TopBar />



 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   

      <TopBar/>
      <SideBar/>

  </React.StrictMode>,
)
