import React from 'react'
import headshot from './assets/headshot.jpeg'
import mailIcon from './assets/Mail.png'


function Info() {
    return(
        <div className="Info">
            <img className="headshot" src={headshot} />
            <h1>Joseph Santibout</h1>
            <button className="email-button">
                <img className="mailIcon" src={mailIcon}/>
                Email
            </button>
        </div>
    )
}


export default Info