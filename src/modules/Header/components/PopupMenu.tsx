import React from 'react';
import {NavLink} from "react-router-dom";

const PopupMenu = () => {
    return (
        <div className={`sticky top-0 left-0 z-20 w-full bg-colors-white shadow-xl mt-6`}>
            <div className={`py-4 px-4`}>
                <NavLink
                    to={'/project'}
                    className={({isActive}) => `${isActive && 'text-custom_brown'} text-4xl hover:text-colors-gray-500 duration-300 font-bold block`}
                >Об проекте</NavLink>

                <NavLink
                    to={'/about_me'}
                    className={({isActive}) => `${isActive && 'text-custom_brown'} text-4xl mt-4 hover:text-colors-gray-500 duration-300 font-bold block`}
                >Обо мне</NavLink>

                <NavLink
                    to={'/'}
                    className={({isActive}) => `${isActive && 'text-custom_brown'} text-4xl mt-4 hover:text-colors-gray-500 duration-300 font-bold block`}
                >Список постов</NavLink>

                <div className={`text-2xl mt-8 font-bold`}> Дмитрий Путилов Андреевич</div>
                <a className={`text-2xl text-custom_red font-medium mt-2 block`} href="tel::+79059818973">+7 905 981-89-73</a>
            </div>


        </div>
    );
};

export default PopupMenu;