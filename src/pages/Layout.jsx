import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Sidebar from '../components/Sidebar.jsx'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <NavBar/>
        <div className="columns mt-6" style={{minHeight:"100vh"}}>
            <div className="column is-2"><Sidebar/></div>
            <div className="column has-background-light">
                <main>{children}</main>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Layout