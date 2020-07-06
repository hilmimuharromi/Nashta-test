import React from 'react'
import { Navbar } from 'react-bulma-components'
import { Link } from 'react-router-dom'

export default function NavbarCom() {
    return (
        <Navbar className="is-fixed-top navbar" color="primary">
            <div className="navbar-start">
                <Link to="/" className="navbar-item">Home</Link>
            </div>
            <div className="navbar-end">
                <Link to="/addevent" className="navbar-item">+ Add Event</Link>
                <Link to="/dashboard" className="navbar-item">Dashboard</Link>
            </div>
        </Navbar>
    )
}