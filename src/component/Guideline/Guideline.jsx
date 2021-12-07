import React from 'react'
import './Guideline.css'
import '../global.css'
export default function Guildeline() {
    return (

        <div class="guidline padding-top-bottom">
            <h1 class="bg-heading c-align">Event Guidline</h1>
            <p class="c-align">Global Grand Event on Digital Design</p>

        <div class="row">

           
            <div class="col-md-6 guideline-image"> 
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsYXNzcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="Image"/>
            </div>

            <div class="col">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <h3>Check List</h3>
                <ul>
                    <li> <i class="far fa-check-circle"></i> Lorem Ipsum is simply dummy</li>
                    <li> <i class="far fa-check-circle"></i> Ipsum passages, and more recently</li>
                    <li> <i class="far fa-check-circle"></i> PageMaker including versions</li>
                    <li> <i class="far fa-check-circle"></i> Lorem Ipsum is simply dummy</li>
                </ul>
            </div>

        </div>
        </div>
    )
}
