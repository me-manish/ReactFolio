import React from 'react'
import './AboutEvent.css'
import '../global.css'

export default function AboutEvent() {
    return (
        <div>
            
            <div class="href-about" id="about"></div>
            <div  class="about-event">
                <h4 class="bg-heading c-align">ABOUT THIS EVENTS</h4>
                <p class="c-align">Global Grand Event on Digital Design</p>

                <div class="card-deck">

                    <div class="row">

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="card" >
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2luZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">WANNA KNOW OUR MISSION?</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                                    <a href="#" class="btn fc-white bg-hotpink btn-darkpink">Read More</a>
                                </div>
                            </div>
                        </div>
                            
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1528243097678-739049bbf2e7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcCUyMGluJTIwcGFydHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                                <div class="card-body">
                                    <h5 class="card-title">WHAT YOU WILL LEARN?</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                                    <a href="#" class="btn fc-white bg-hotpink btn-darkpink">Read More</a>
                                </div>
                            </div>
                        </div>
                            
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="card" >
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1570773455183-e95ad040b034?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8&auto=format&fit=crop&w=600&q=60" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">WHAT ARE THE BENIFITS?</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                                    <a href="#" class="btn fc-white bg-hotpink btn-darkpink">Read More</a>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>

            <div class="bg-hotpink time-box">
            <div class="row">
            
                <div class="col-lg-3 col-md-6  c-align fc-white time-div">
                    <i class="fas fa-map-marked-alt fa-4x icon-time-box"></i>
                    <h6>WST. CONFERENCE CENTER</h6>
                    <p>SAN FRANCISCO, CA</p>
                </div>

                <div class="col-lg-3 col-md-6  c-align fc-white time-div">
                    <i class="fas fa-clock fa-4x icon-time-box"></i>
                    <h6>FEBRUARY 14 - 19, 2023</h6>
                    <p>09:00 AM – 05:00 PM</p>
                </div>

                <div class="col-lg-3 col-md-6  c-align fc-white time-div">
                    <i class="fas fa-user-friends fa-4x icon-time-box"></i>
                    <h6>343 AVAILABLE SEATS</h6>
                    <p>HURRYUP! FEW TICKETS ARE LEFT</p>
                </div>

                <div class="col-lg-3 col-md-6  c-align fc-white time-div">
                    <i class="fas fa-mug-hot fa-4x icon-time-box"></i>
                    <h6>FREE LUNCH And SNACKS</h6>
                    <p>DON’T MISS IT</p>
                </div>
            </div>        
            </div>

        </div>
    )
}
