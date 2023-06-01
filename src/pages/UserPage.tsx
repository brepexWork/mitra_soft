import React from 'react';
import {UserInformation} from '../modules/User'

const UserPage = () => {
    return (
        <div className={`container mx-auto px-4 lg:px-0`}>
            <UserInformation />
        </div>
    );
};

export default UserPage;