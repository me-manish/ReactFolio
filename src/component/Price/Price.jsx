import React from 'react'
import './Price.css'
import '../global.css'
export default function Price() {
    return (
        <div>

        <div class="href-pricing" id="pricing"></div>
        <div class="pricing">
                    <h1 class="bg-heading fc-white c-align">Our Pricing</h1>
                    <p class="sm-heading fc-white c-align">Global Grand Event on Digital Design</p>

                <div class="card-deck">

                    <div class="col-lg-4 col-sm-6">  

                        <div class="card c-align pricing-card">  
                            
                            <i class="far fa-edit icon-top"></i>
                            <h4 class="card-title">Basic Pass</h4>
                            <p class="price">$29</p>
                            <p>452 TICKETS AVAILABLE</p>

                                
                            <ul class="text-align-left">
                                <li> <i class="far fa-check-circle"></i> Entrance</li>
                                <li> <i class="far fa-check-circle"></i> Coffee Break</li>
                                <li> <i class="far fa-check-circle"></i> Lunch on all days</li>
                                <li> <i class="far fa-times-circle"></i>Access to all areas</li>
                                <li> <i class="far fa-times-circle"></i>Certificate</li>
                                <li> <i class="far fa-check-circle"></i> Workshop</li>
                            </ul>
                            
                                
                            <div>
                                <button class="btn bg-hotpink fc-white">BUY TICKET</button>
                            </div>
                
                        </div>
                    </div>
                    


                    <div class="col-lg-4 col-sm-6">  

                            <div class="card c-align pricing-card">    
                            <i class="fas fa-layer-group icon-top"></i>
                            <h4 class="card-title">STANDARD PASS</h4>
                            <p class="price">$40</p>   
                            <p>452 TICKETS AVAILABLE</p>

                            <ul class="text-align-left">
                                <li> <i class="far fa-check-circle"></i> Entrance</li>
                                <li> <i class="far fa-check-circle"></i> Coffee Break</li>
                                <li> <i class="far fa-check-circle"></i> Lunch on all days</li>
                                <li> <i class="far fa-times-circle"></i>Access to all areas</li>
                                <li><i class="far fa-times-circle"></i>Certificate</li>
                                <li> <i class="far fa-check-circle"></i> Workshop</li>
                            </ul>
                
                            <div>
                                <button class="btn bg-hotpink fc-white">BUY TICKET</button>
                            </div>

                        </div>

                    </div>
                



                    <div class="col-lg-4 col-sm-6">    

                        <div class="card c-align pricing-card">    
                            <i class="fas fa-leaf icon-top"></i>
                            <h4 class="card-title">PREMIUM PASS</h4>
                            <p class="price">$68</p>
                            <p>452 TICKETS AVAILABLE</p>

                            <ul class="text-align-left">
                                <li> <i class="far fa-check-circle"></i> <span>  Entrance </span> </li>
                                <li> <i class="far fa-check-circle"></i> <span>  Coffee Break </span> </li>
                                <li> <i class="far fa-check-circle"></i> <span>  Lunch on all days </span> </li>
                                <li> <i class="far fa-times-circle"></i> <span> Access to all areas </span> </li>
                                <li> <i class="far fa-times-circle"></i> <span> Certificate </span> </li>
                                <li> <i class="far fa-check-circle"></i> <span>  Workshop </span> </li>
                            </ul>
                
                            <div>
                                <button class="btn bg-hotpink fc-white">BUY TICKET</button>
                            </div>
                
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
