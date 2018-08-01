import React, { Component } from 'react'
import './css/Nav.css'

class Nav extends Component {
    state = {
        isActive: false,
        menuOptions: ['LOGIN', 'SEARCH', 'DISCOVER']
    }

    handleClick = () => {
        const { isActive } = this.state
        this.setState({ isActive: !isActive })
    }

    menuMap = (i) => {
        const { menuOptions } = this.state
        return (
            <div className="menu__link">
                <a href="#">
                    <h3>{i}</h3>
                </a>
            </div>
        )
    }

    
    render() {
        const { isActive, menuOptions } = this.state
        
        return (
            <div className="nav">
                <div className="menuBar" onClick={this.handleClick}>
                    <div className="menuBar__left">
                        <div className="menuBar__left--burger">
                        </div>
                    </div>
                    <div className="menuBar__center">
                        <h3>MENU</h3>
                    </div>
                    <div className="menuBar__right"></div>
               </div>
               
                <div className='menu'>
                    <ul className='menu__container'>
                        {
                            isActive ? (menuOptions.map(this.menuMap)) : (null)
                        }
                    </ul>
                </div>                                   
            </div>
        )
    }
}

export default Nav