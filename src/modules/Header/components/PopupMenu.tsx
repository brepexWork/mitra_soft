import React from 'react';
import {NavLink} from "react-router-dom";
import {Avatar} from "@mui/material";

const PopupMenu = () => {
    return (
        <div className={`sticky top-0 left-0 z-20 w-full bg-colors-white shadow-xl mt-6`}>
            <div className={`py-4 px-4`}>

                <div className={`flex items-center mb-8`}>
                    <Avatar
                        src={'https://img.hhcdn.ru/photo/706239102.jpeg?t=1685592601&h=XiWA9RL1ZLLwfM2EMrDFpg'}
                        sx={{width: "75px", height: "75px"}}
                    />

                    <div className={`ml-4`}>
                        <div className={`text-sm sm:text-xl font-bold`}> Дмитрий Путилов Андреевич</div>
                        <a className={`text-md sm:text-xl text-custom_red font-medium mt-2 block`} href="tel::+79059818973">+7 905 981-89-73</a>
                    </div>
                </div>

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
            </div>


        </div>
    );
};

export default PopupMenu;