import React from 'react';

const Modal = ({ showModal, setShowModal, name, setName, email, setEmail, phone, setPhone, allow_to_post, setAllowtoPost, handleSave }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center ${showModal ? '' : 'hidden'}`}>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50"></div>
            <div className="bg-white p-6 rounded-md shadow-md z-10">
                <h2 className="text-xl font-semibold mb-4">Edit User</h2>

                <label htmlFor="Name" className="block mb-1">Name :</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                />

                <label htmlFor="Email">Email :</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                />

                <label htmlFor="Phone">Phone :</label>
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                />

                {/* <div className="mb-4">
                    <label htmlFor="allowToPost" className="block mb-1">Allow to Post :</label>
                    <select
                        id="allowToPost"
                        value={allow_to_post}
                        onChange={(e) => setAllowtoPost(e.target.value)}
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="1">Allow</option>
                        <option value="0">Deny</option>
                    </select>
                </div> */}

                <div className="flex justify-end">
                    <button
                        onClick={() => setShowModal(false)}
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Modal;