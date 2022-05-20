import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile mt-20 bg-base-200">
            <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}

                <h1 className='text-2xl text-secondary font-medium'>Dashboard</h1>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-menu" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to='my-appointments'>My Appointments</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;