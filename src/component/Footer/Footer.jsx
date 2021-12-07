import React from 'react'
import './Footer.css'
import '../global.css'
export default function Footer() {
    return (
        <div class="fc-white footer">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-12 footer-col">
                    <h1 class="fc-hotpink">GRAND</h1>
                    <p>Aorem ipsum dolor sit amet elit sed lum tempor incididunt ut labore el dolore alg minim veniam quis nostrud ncididunt.</p>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12 footer-col">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><a class="fc-white tra-500" href="#"> About Conference </a></li>
                        <li><a class="fc-white tra-500" href="#">Our Speakers </a></li>
                        <li><a class="fc-white tra-500" href="#">Event Schedules</a></li>
                        <li><a class="fc-white tra-500" href="#">Latest News</a></li>
                        <li><a class="fc-white tra-500" href="#">Event Photo gallary</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12 footer-col">
                    <h4>RECENT POST</h4>
                    <div class="recent-post">
                        <div>
                            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsYXNzcm9vbXxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Image"/>
                        </div>
                        <div>
                            <p><a class="fc-white tra-500" href="#">Lorem lpsm dolor sumit</a></p>
                            <p>OCTOBER 12, 2023</p>
                        </div>
                    </div>
                    <div class="recent-post">
                        <div>
                            <img src="https://images.unsplash.com/photo-1552663651-2e4250e6c7c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZmVtYWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="Image"/>
                        </div>
                        <div>
                            <p><a class="fc-white tra-500" href="#">Lorem lpsm dolor sumit</a></p>
                            <p>OCTOBER 12, 2023</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12 footer-col">
                    <h4>SUBSCRIBE US</h4>
                    <div class="footer-form">
                        <input type="email" placeholder="Your Email"/>
                        <button class="bg-hotpink fc-white" ><i class="fas fa-angle-double-right"></i></button>
                    </div>
                    <h4 class="follow-us">FOLLOW US ON</h4>
                    <div class="footer-icon">
                        <i class="fab fa-facebook-square fb"></i>
                        <i class="fab fa-twitter-square twitter"></i>
                        <i class="fab fa-linkedin linkedin"></i>
                        <i class="fab fa-instagram insta"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}
