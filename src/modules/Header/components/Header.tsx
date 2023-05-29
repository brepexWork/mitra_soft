import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={`py-4`}>
            <div className={`container mx-auto`}>
                <div className={`flex items-center justify-between`}>
                    <div className={`flex items-center`}>
                        <NavLink
                            to={'/project'}
                            className={({isActive}) => `${isActive && 'text-custom_brown'} text-2xl hover:text-colors-gray-500 duration-300 font-bold mr-4`}
                        >Об проекте</NavLink>

                        <NavLink
                            to={'/about_me'}
                            className={({isActive}) => `${isActive && 'text-custom_brown'} text-2xl hover:text-colors-gray-500 duration-300 font-bold mr-4`}
                        >Обо мне</NavLink>

                        <NavLink
                            to={'/'}
                            className={({isActive}) => `${isActive && 'text-custom_brown'} text-2xl hover:text-colors-gray-500 duration-300 font-bold`}
                        >Список постов</NavLink>

                    </div>

                    <div>
                        <div className={`text-xl block text-end font-bold`}>Дмитрий Путилов Андреевич</div>
                        <a className={`text-2xl block text-end text-custom_red font-normal`} href="tel::_79059818973">+7 905 981-89-73</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;