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
        <div className={`shadow-2xl sticky top-0 left-0 right-0 bg-colors-white z-10`}>
            {innerWidth && innerWidth < 1024 ? <HeaderMobile /> : <HeaderDesktop />}
        </div>
    );
};

export default Header;