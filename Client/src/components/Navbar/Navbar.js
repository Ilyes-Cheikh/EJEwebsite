import React, { useState, useEffect } from 'react';
import { Link as RLink} from 'react-router-dom';
import { Link as SLink} from 'react-scroll';
import './Navbar.css';
import img from '../../assets/img/logo3.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    navbarTransparent: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        position: 'fixed',
        width: '100%',
        top: '0',
        zIndex: '999'
    },
    navbarSolid: {
        backgroundColor: "#2ea3dd",
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        position: 'fixed',
        width: '100%',
        top: '0',
        zIndex: '999'
    },
}));
function Navbar() {
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('navbarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 350
            if (show) {
                setNavBackground('navbarSolid')
            } else {
                setNavBackground('navbarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return (
            window.removeEventListener('resize', showButton)
        )
    }, []);
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className='navbar' className={classes[navRef.current]}>
                    <div className='navbar-container'>
                        <RLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <img src={img} className="ejeLogo"/>
                        </RLink>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <RLink to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                </RLink>
                            </li>
                            
                            <li className='nav-item'>
                                <RLink
                                    to='/services'
                                    className='nav-links'
                                    onClick={closeMobileMenu}>
                                    Services
                </RLink>
                            </li>
                            <li className='nav-item'>
                                <RLink to='Gallery' className='nav-links' onClick={closeMobileMenu}>
                                    Gallery
                </RLink>
                            </li>
                            <li className='nav-item'>
                                <RLink to='Team' className='nav-links' onClick={closeMobileMenu}>
                                    Team
                </RLink>
                            </li>
                            
                            <li className='nav-item'>
                                <RLink
                                    to='/blogs'
                                    className='nav-links'
                                    onClick={closeMobileMenu}>
                                    Blog
                </RLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}
export default Navbar;