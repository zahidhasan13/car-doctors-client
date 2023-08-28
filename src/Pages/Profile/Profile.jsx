import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Profile = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(() => {})
    }
    return (
        <div>
            Name: {user?.email}
            {
                user && <button onClick={handleLogOut} className='bg-[#FF3811] px-5 py-2 rounded my-4 text-white font-bold'>Logout</button>
            }
        </div>
    );
};

export default Profile;