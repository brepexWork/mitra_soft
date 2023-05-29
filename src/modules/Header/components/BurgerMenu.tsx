import React, {FC, useState} from 'react';
import {isBooleanObject} from "util/types";
import PositionElement from "../../../helpers/PositionElement";

interface IProps {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerMenu:FC<IProps> = ({active, setActive}) => {

    return (
        <div
            className={`relative w-10 h-10 box-content p-2 z-30`}
            onClick={() => setActive(state => !state)}
        >
            <span className={`w-full h-1 bg-colors-black rounded-full block mt-2 ${active && `${PositionElement} rotate-45`} duration-300`}></span>
            <span className={`w-full h-1 bg-colors-black rounded-full block mt-2 ${active && `${PositionElement} hidden`} duration-300`}></span>
            <span className={`w-full h-1 bg-colors-black rounded-full block mt-2 ${active && `${PositionElement} -rotate-45`} duration-300`}></span>
        </div>
    );
};

export default BurgerMenu;