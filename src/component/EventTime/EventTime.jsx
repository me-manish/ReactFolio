import React from 'react'
import './EventTime.css'
import '../global.css'
export default function EventTime() {
    return (
            <div class="c-align event-start-time">
                <h3 class="bg-heading">EVENT WILL START IN</h3>

                <div class="time-part-div">
                <h5 id="clock-day"></h5>
                <p>DAYS</p>
                </div>

                <div class="time-part-div" >
                <h5 id="clock-hour"></h5>
                <p>HOURS</p>
                </div>

                <div class="time-part-div">
                <h5 id="clock-minute"></h5>
                <p>MINUTES</p>
                </div>

                <div class="time-part-div">
                <h5 id="clock-second"></h5>
                <p>SECONDS</p>
                </div>

                <button type="button" class="btn btn-secondary  btn-style bg-hotpink ">ADD TO MY CALENDER</button>
            
            </div>
    )
}
