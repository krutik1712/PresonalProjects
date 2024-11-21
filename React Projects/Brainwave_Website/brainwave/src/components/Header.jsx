import React, { useState } from 'react';
import { brainwave } from '../assets';
import { navigation } from '../constants';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export default function Header() {
    const [openNavigation, setOpenNavigation] = useState(false);
    const { hash: pathName } = useLocation();

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false)
            enablePageScroll()
        } else {
            setOpenNavigation(true)
            disablePageScroll()
        }
    };

    const closeNavigation = () => {
        if (!openNavigation) return
        enablePageScroll()
        setOpenNavigation(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90'}`}>
            <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 py-4">
                <a className='block w-[12rem] xl:mr-8' href='#hero'>
                    <img src={brainwave} alt="brainwave logo" width={190} height={40} />
                </a>
                <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:bg-transparent`}>
                    <div className='relative z-2 flex flex-col items-center justify-center lg:flex-row m-auto'>
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={closeNavigation}
                                className={`block font-code text-2xl uppercase text-n-1 p-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12 transition-colors ${item.onlyMobile ? 'lg:hidden' : ''} ${item.url === pathName ? 'lg:text-n-1' : 'lg:text-n-1/50'} lg:hover:text-n-1`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <HamburgerMenu />
                </nav>
                <div className='flex items-center'>
                    <a href="#signup" className='button hidden mr-8 text-n-1/50 hover:text-n-1 transition-colors lg:block'>
                        Sign up
                    </a>
                    <Button href='#login' className='hidden lg:flex'>
                        Login
                    </Button>
                </div>
                <Button onClick={toggleNavigation} className='ml-auto lg:hidden px-[1rem]'>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
}