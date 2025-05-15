'use client'

import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Style from './BaseLayout.module.scss';
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import Home from './home';
import About from "./about";
import Project from "./project";

export default function BaseLayout({ children }){
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    const pathname = usePathname();
    const [active, setActive] = useState(pathname === '/' ? 'home' : pathname.slice(1));

    useEffect(() => {
        const stored = localStorage.getItem('darkMode');
        const initial = stored === 'true';
        setDarkMode(initial);
        setMounted(true);
    }, []);

    function handleToggleDarkMode() {
        const opposite = !darkMode;
        localStorage.setItem('darkMode', `${opposite}`);
        setDarkMode(opposite);
    }

    if (!mounted) return null;

    return(
        <Box
            className={darkMode ? Style.dark : Style.light}
        >
            <Grid
                container
                display={'flex'}
                flexDirection={'column'}
                minHeight={'100vh'}
                justifyContent={'space-between'}
            >
                <Grid item>
                    <Navbar 
                        darkMode={darkMode} 
                        handleClick={handleToggleDarkMode} 
                        active={active} 
                        setActive={setActive}
                    />
                </Grid>
                <Grid flexGrow={1} mt={'3rem'}>
                    {
                        pathname === '/' && (
                            <Home/>
                        )
                    }
                    {
                        pathname === '/about' && (
                            <About/>
                        )
                    }
                    {
                        pathname === '/projects' && (
                            <Project/>
                        )
                    }
                </Grid>
                <Grid>
                    <Box 
                        component={'footer'} 
                        className={Style.footer}
                        display={'flex'} 
                        flexDirection={'column'} 
                        alignItems={'center'}
                        py={'1.5rem'} 
                        sx={{ opacity: 0.7 }} 
                        width={'100%'}
                    >
                        <p>created with &hearts; by <a href={'/'}>Suhas Indrigi</a></p>
                        <p>&copy; 2025</p>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}