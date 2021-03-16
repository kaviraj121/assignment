import React from 'react';
import './MainArea.css';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Chartbar from './Chartbar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function MainArea() {
    return (
        <div className="mainArea">
            <div className="header">
                <button className="icon1"><SettingsIcon /></button>
               <button className="icon2"><NotificationsIcon /></button>
               <div className="area">
                   <div className='bar'> 
                       <Chartbar />
                   </div>
                   <div className="barComponent">
                       <div className="component">
                           <div className="title">
                           <h5>Asset Balance</h5>
                            <span><MoreHorizIcon /></span>
                           </div>
                            <p>Enter amount:</p>
                            <input type="number" min="0"/>
                            <p className="p">Last Updated 3 dec</p>
                       </div>
                       <div className='component1'>
                           
                       </div>
                       <div className="component2">
                           
                       </div>

                       <div className="component3">
                           
                       </div>
                       <div className="component4">
                           
                       </div>

                   </div>
               </div>
            </div>
        </div>
    )
}

export default MainArea
