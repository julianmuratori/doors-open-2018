import React from 'react'
import Background from '../assets/images/rcharris-ds.jpg'

const Welcome = () => {
    const styles = { 
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
    const inner = {
        paddingLeft: '25px',
        paddingTop: '15px',
        lineHeight: '1'
    }
    return (
        <div style={styles}>
            <div style={inner}>
                <h1>Doors</h1>
                <h1>Open</h1>
                <h1>Toronto</h1>
                <h1>May 26 + 27</h1>
                <h1>2018</h1>
            </div>
        </div>
    )
}

export default Welcome