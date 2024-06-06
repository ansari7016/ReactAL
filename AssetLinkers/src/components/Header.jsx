import React from 'react';

const Header = () => {
    return (
        <div className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div>
                <input type="text" placeholder="Search..." className="border p-2 rounded" />
            </div>
        </div>
    );
};

export default Header;
