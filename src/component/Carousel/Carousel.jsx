import React from 'react'
import './Carousel.css'
import '../global.css'
export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://images.unsplash.com/photo-1531848487411-dddce85bc8b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcnNlbnRhdGlvbiUyMGluJTIwY29tcGFueXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1531848487411-dddce85bc8b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcnNlbnRhdGlvbiUyMGluJTIwY29tcGFueXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60https://images.unsplash.com/photo-1531848487411-dddce85bc8b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcnNlbnRhdGlvbiUyMGluJTIwY29tcGFueXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="First slide"/>
                    <div class="text-carousel carousel-caption ">
                        <h5>Global Grand Event on Digital Design </h5>
                        <h1>DESIGN THINKING CONFERENCE</h1>
                        <button type="button" class="btn btn-secondary fc-white btn-style bg-hotpink btn-slide1">GET TICKET</button>
                        <button type="button" class="btn btn-outline-secondary fc-white btn-style btn-slide1">EXPLORE MORE</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://images.unsplash.com/photo-1602831412005-d8efa804b7b3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fHN0b25lJTIwaGlsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="Second slide"/>
                    <div class="text-carousel carousel-caption ">
                        <h5>Global Grand Event on Digital Design </h5>
                        <h1>22 AMAZING SPEAKERS</h1>
                        <button type="button" class="btn btn-outline-secondary  fc-white btn-style btn-slide2">LEARN MORE</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://images.unsplash.com/photo-1536286144513-881bfbd3f292?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eSUyMGF0JTIwbmlnaHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="Third slide"/>
                    <div class="text-carousel carousel-caption ">
                        <h5>Global Grand Event on Digital Design </h5>
                        <h1>BOOK YOUR SEAT NOW</h1>
                        <button type="button" class="btn btn-secondary  fc-white btn-style bg-hotpink">EXPLORE</button>
                    </div>
                </div>
                </div>


                <div class="prev-next">

                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
        </div>
    )
}
