import React from 'react'
import fbIcon from './assets/Facebook_Icon.png'
import gitHubIcon from './assets/GitHub_Icon.png'
import instagramIcon from './assets/Instagram_Icon.png'
import linkedinIcon from './assets/Linkedin_Icon_grey.png'

function Footer() {
    return(
        <div className="Footer">
            <ul>
                <li>
                    <img src={fbIcon}/>
                </li>
                <li>
                    <img src={instagramIcon} />
                </li>
                <li>
                    <img src={linkedinIcon} />
                </li>
                <li>
                    <img src={gitHubIcon} />
                </li>
            
            </ul>
        </div>
    )
}

export default Footer