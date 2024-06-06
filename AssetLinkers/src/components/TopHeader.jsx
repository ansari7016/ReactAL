import React from 'react';
import { FaBars } from 'react-icons/fa';

const TopHeader = ({ onSidebarToggle }) => {
    return (
        <>
            <div className="bg-white shadow p-4 flex justify-between items-center">
                <button onClick={onSidebarToggle} className="md:hidden">
                    <FaBars />
                </button>
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <div>
                    <input type="text" placeholder="Search..." className="border p-2 rounded" />
                </div>
            </div>
        </>
    );
};

export default TopHeader;
