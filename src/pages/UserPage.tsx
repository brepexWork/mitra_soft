import React from 'react';
import {UserInformation} from '../modules/User'

const UserPage = () => {
    return (
        <div className={`container mx-auto`}>
            <UserInformation />
        </div>
    );
};

export default UserPage;