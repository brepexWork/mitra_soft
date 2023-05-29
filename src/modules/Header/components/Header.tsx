import React, {useEffect, useState} from 'react';
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";


const Header = () => {

     const [innerWidth, setInnerWidth] = useState<number>()

    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
        };

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {innerWidth && innerWidth < 1024 ? <HeaderMobile /> : <HeaderDesktop />}
        </div>
    );
};

export default Header;