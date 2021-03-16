import React from 'react'
import './SidebarRight.css';

function SidebarRight() {
    return (
        <div className="sidebarRight">
            <div className ="button-sidebar">
                <button className="button1">+ Action</button>
            </div>
            <div className="container">
                <img src="https://images.pexels.com/photos/4386322/pexels-photo-4386322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="compounding logo" />
                <p>Understand the value of Conmpounding!</p>
                <button>Learn Now</button>
            </div>

            <div className="container1">
                <img src="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tracking" />
                <p>Track all your expenses on daily basis</p>
                <button>Track Now</button>
            </div>
            
        </div>
    )
}

export default SidebarRight
