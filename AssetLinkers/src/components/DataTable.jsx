import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from './Modal';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);
    const [editId, setEditId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // const [allow_to_post, setAllowtoPost] = useState('');
    const [showModal, setShowModal] = useState(false);

    const getUsers = async () => {
        try {
            const response = await axios.get("https://devstaging.a2zcreatorz.com/assetLinkerProject/api/allUser");
            setUsers(response.data.response);
            setFilterUsers(response.data.response);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const updateUser = async (id) => {
        const obj = {
            user_id: id,
            name,
            email,
            phone,
            // allow_to_post
        };

        console.log(obj);

        try {
            const response = await axios.post(`https://devstaging.a2zcreatorz.com/assetLinkerProject/api/update/user`, obj);
            setUsers(users.map((user) => (user.id === id ? response.data.response : user)));
            setEditId(null);
            setName('');
            setEmail('');
            setPhone('');
            // setAllowtoPost('');
            setShowModal(false);
        } catch (error) {
            console.error("Error updating user:", error.response ? error.response.data : error.message);
        }
    };

    const handleSave = () => {
        if (editId) {
            updateUser(editId);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const columns = [
        {
            name: 'MS_ID',
            selector: row => row.ms_id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: 'User Type',
            selector: row => row.user_type,
            sortable: true,
        },
        {
            name: 'Allow to Post',
            selector: row => row.allow_to_post,
            sortable: true,
        },
        {
            name: 'Action',
            cell: row => (
                <div className="flex space-x-2">
                    <FaEdit
                        onClick={() => {
                            setEditId(row.id);
                            setName(row.name);
                            setEmail(row.email);
                            setPhone(row.phone);
                            // setAllowtoPost(row.allow_to_post);
                            setShowModal(true);
                        }}
                        className="font-bold text-xl text-green-600 cursor-pointer"
                    />
                    <FaTrash className="font-bold text-xl text-red-600 cursor-pointer" />
                </div>
            ),
        },
    ];

    const handleFilter = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const newData = filterUsers.filter(row =>
            row.ms_id.toLowerCase().includes(searchTerm) ||
            row.name.toLowerCase().includes(searchTerm) ||
            row.user_type.toLowerCase().includes(searchTerm)
        );
        setUsers(newData);
    };

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="pb-4 bg-white">
                    <label className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            className="block pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 p-2"
                            placeholder="Search for items"
                            onChange={handleFilter}
                        />
                    </div>
                </div>
                <DataTable
                    columns={columns}
                    data={users}
                    pagination
                    highlightOnHover
                    pointerOnHover
                    striped
                />

                <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}
                    // allow_to_post={allow_to_post}
                    // setAllowtoPost={setAllowtoPost}
                    handleSave={handleSave}
                />

            </div>
        </>
    );
};

export default UserTable;
