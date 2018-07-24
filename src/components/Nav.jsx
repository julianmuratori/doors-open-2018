import React, { Component } from 'react'
import './css/Nav.css'

class Nav extends Component {
    state = {
        isOpen: false
    }

    
    render() {
        return (
            <div className="nav">
               <div className="menuBar">
                    <div className="menuBar__left">
                        <div className="menuBar__left--burger"></div>
                    </div>
               </div>
            </div>
        )
    }
}

export default Nav