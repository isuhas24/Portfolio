'use client'

import { Box } from "@mui/material";
import Style from './Navbar.module.scss';
import { info } from "@/info/info";
import Link from "next/link";
import Toggler from "./home/Toggler";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        to: '/',
        type: 'initials',
        active: 'home'
    },
    {
        name: 'Projects',
        to: '/projects',
        active: 'projects'
    }
]

export default function Navbar({darkMode, handleClick, active, setActive}){
    return(
        <Box
            component={'nav'}
            width={'100%'}
            position={'fixed'}
            className={`${Style.nav} ${darkMode ? Style.dark : Style.light}`}
        >
            <Box
                // component={'ul'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={{ xs: '2rem', md: '8rem' }}
                textTransform={'lowercase'}
                fontSize={'1rem'}
            >
                {
                    links.map((link, index) => (
                        <Box
                            // component={'li'}
                            key={index}
                            className={`${Style.listItem} ${link.active === active && !link.type ? Style.active : ''}`}
                            sx={{ borderImageSource: info.gradient }}
                        >
                            <Link
                                href={link.to}
                                onClick={() => setActive(link.active)}
                                className={Style.link}
                            >
                                {!link.type && <p style={{ padding: '1rem 0 0.5rem 0' }}>{link.name}</p>}
                                {link.type && <h1 style={{ fontSize: '3rem' }}>{link.name}</h1>}
                            </Link>
                        </Box>
                    ))
                }
                <Box
                    className={Style.listItem}
                >
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </Box>
            </Box>
        </Box>
    )
}