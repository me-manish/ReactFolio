import React from 'react'
import './Form.css'
import '../global.css'

export default function Form() {
    return (
        <div>

            <div class="href-contact" id="contact"></div>
            <div class="form-box col-lg-6 col-sm-10">
                

            <h3 class="bg-heading c-align">DROP A MESSAGE</h3> 
            <p class="c-align">Global Grand Event on Digital Design</p>

            
            <form  onsubmit="submitForm() ; return false" class="form-design">

                <div class="form-group input_box-width">
                    <input type="text" class="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Enter Name"/>
                    <p class="fc-hotpink dp-none form-para" id="form-name">Please entre your name</p>
                </div>

                <div class="form-group input_box-width input-float">
                    <input type="email" class="form-control" id="inputEmail" placeholder="Entre Email"/>
                    <p class="fc-hotpink dp-none form-para" id="form-email">Please entre your Email</p>
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" id="inputSubject" placeholder="subject"/>
                    <p class="fc-hotpink dp-none form-para" id="form-subject">Please entre your message subject</p>
                    </div>

                <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                
                <button type="submit" class="btn btn-lg bg-hotpink fc-white submit-btn">SEND US NOW</button>
                </form>

            </div>

        </div>
    )
}
