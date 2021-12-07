import React from 'react'
import "./Navbar.css"
import '../global.css'

export default function Navbar() {
    return (
        <div>
            <div class="p-fix z-2 bg-f3f4f3 navbar-back-color">

            </div>

            <div class="p-fix z-2 main-navbar background-navbarText">
                
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <a class="navbar-brand" href="#" ><h1 class=" c-name ">GRAND</h1></a>
                    
                    <button style={{backgroundColor:'white'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="navbarText" style={{backgroundColor: 'rgb(245, 245, 245)'}}>
                    <div class="p-abs right-align-nav">
                    <ul class="navbar-nav">
                        <li class="active style-hover ">
                        <div class="p-abs bg-hotpink tra-300 style-border width-1"></div>
                        <a class="fc-hotpink nav-link" href="#" >HOME</a>
                        </li>
                        <li class="style-hover" >
                            <div class="p-abs bg-hotpink tra-300 style-border width-2"></div>
                        <a class="nav-link " href="#about">ABOUT</a>
                        </li>
                        <li class="style-hover" >
                            <div class="p-abs bg-hotpink tra-300 style-border width-4"></div>
                        <a class="nav-link" href="#schedules">SCHEDULES</a>
                        </li>

                        <li class="style-hover" >
                            <div class="p-abs bg-hotpink tra-300 style-border width-2"></div>
                        <a class="nav-link" href="#gallary">GALLERY</a>
                        </li>

                        <li class="style-hover" >
                            <div class="p-abs bg-hotpink tra-300 style-border width-3"></div>
                        <a class="nav-link" href="#faq">FAQ</a>
                        </li>
                        
                        <li class="style-hover" >
                            <div class="p-abs bg-hotpink tra-300 style-border width-4"></div>
                        <a class="nav-link" href="#sponsors">SPONSORS</a>
                        </li>

                        <li class="style-hover" >
                            <div class="p-abs bg-hotpink tra-300 style-border width-2"></div>
                        <a class="nav-link" href="#pricing">PRICING</a>
                        </li>
                        
                        <li class="style-hover" >
                            <div class="p-abs bg-hotpink tra-300 style-border width-2"></div>
                        <a class="nav-link" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                    </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
