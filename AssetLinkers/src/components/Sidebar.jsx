import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import { RiAdvertisementLine } from "react-icons/ri";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <div>
            {/* Sidebar for larger screens */}
            <div className={`hidden md:flex md:flex-col h-full w-64 bg-gray-800 text-white p-4`}>
                <h2 className="text-2xl font-bold mb-8">Asset Linkers</h2>
                <ul className="space-y-4">
                    <li className="group flex items-center space-x-2">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center space-x-2 w-full p-2 rounded-md transition duration-300 ease-in-out ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                            }
                        >
                            <FaTachometerAlt />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="group flex items-center space-x-2">
                        <NavLink
                            to="/users"
                            className={({ isActive }) =>
                                `flex items-center space-x-2 w-full p-2 rounded-md transition duration-300 ease-in-out ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                            }
                        >
                            <FaUsers />
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li className="group flex items-center space-x-2">
                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                `flex items-center space-x-2 w-full p-2 rounded-md transition duration-300 ease-in-out ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                            }
                        >
                            <RiAdvertisementLine />
                            <span>Advertisments</span>
                        </NavLink>
                    </li>
                    <li className="group flex items-center space-x-2">
                        <NavLink
                            to="/logout"
                            className={({ isActive }) =>
                                `flex items-center space-x-2 w-full p-2 rounded-md transition duration-300 ease-in-out ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                            }
                        >
                            <FaSignOutAlt />
                            <span>Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Sidebar for smaller screens */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Asset Linkers</h2>
                    <button onClick={() => setIsSidebarOpen(false)}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="space-y-4">
                    <li className="group flex items-center space-x-2">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center space-x-2 w-full p-2 rounded-md transition duration-300 ease-in-out ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                            }
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <FaTachometerAlt />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="group flex items-center space-x-2">
                        <NavLink
                            to="/users"
                            className={({ isActive }) =>
                                `flex items-center space-x-2 w-full p-2 rounded-md transition duration-300 ease-in-out ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                            }
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <FaUsers />
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li className="group flex items-center space-x-2">
                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                `flex items-center space-x-2 w-full p-2 rounded-md transition duration-300 ease-in-out ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                            }
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <RiAdvertisementLine />
                            <span>Advertisment</span>
                        </NavLink>
                    </li>
                    <li className="group flex items-center space-x-2">
                        <NavLink
                            to="/logout"
                            className={({ isActive }) =>
                                `flex items-center space-x-2 w-full p-2 rounded-md transition duration-300 ease-in-out ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                            }
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <FaSignOutAlt />
                            <span>Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
