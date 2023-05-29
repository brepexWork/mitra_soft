import React, {useState} from 'react';
import BurgerMenu from "./BurgerMenu";
import PopupMenu from "./PopupMenu";

const HeaderMobile = () => {

    const [active, setActive] = useState<boolean>(false)

    return (
        <header className={`sticky top-0 left-0`}>
            <div className={`flex justify-between items-center`}>

                <div className={`text-3xl font-bold px-4`}>Проект обо мне</div>

                <BurgerMenu
                    active={active}
                    setActive={setActive}
                />
            </div>

            {active && <PopupMenu />}
        </header>
    );
};

export default HeaderMobile;