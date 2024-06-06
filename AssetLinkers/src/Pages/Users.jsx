import React, { useState } from 'react'
import UserTable from '../components/DataTable'
import Sidebar from '../components/Sidebar'
import TopHeader from '../components/TopHeader'

const Users = () => {
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
                    <div className="p-4 overflow-x-auto">
                        <UserTable />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users