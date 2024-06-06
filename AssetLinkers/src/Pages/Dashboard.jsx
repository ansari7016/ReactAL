import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopHeader from '../components/TopHeader';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="flex h-screen">
                <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <div className="flex-1 flex flex-col">
                    <TopHeader onSidebarToggle={handleSidebarToggle} />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
