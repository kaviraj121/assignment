import React from 'react'
import './SidebarLeft.css';
import { Avatar } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PieChartIcon from '@material-ui/icons/PieChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import DateRangeIcon from '@material-ui/icons/DateRange';


function SidebarLeft() {
    return (
        <div className = "sidebarLeft">
            <div className="logo">
                <img src="data:image/png;base64,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" alt="logo" />
            </div>
            <div className="button">
            <button><DashboardIcon /><span>Dashboard</span></button><br />
            <button><PieChartIcon /><span>Assets</span></button><br />
            <button><BarChartIcon /><span>Tracker</span></button><br />
            <button><DateRangeIcon /><span>Planning &#38; advisory</span></button>
            </div>
            <div className="avatar">
                <Avatar />
            </div>
        </div>
    )
}

export default SidebarLeft
