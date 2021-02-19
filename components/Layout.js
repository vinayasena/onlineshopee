import React from 'react'
import NavBar from './NavBar'
import Modal from './Modal'

function Layout({children}) {
    return (
        <div className="container">
            <NavBar/>  
            <Modal/>
            {children}          
        </div>
    )
}

export default Layout
