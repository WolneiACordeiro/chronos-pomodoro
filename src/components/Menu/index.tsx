import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvaliableThemes>(() => {
        const storedTheme = (localStorage.getItem('theme') as AvaliableThemes) || 'dark';
        return storedTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    };

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme;
        });
    }
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
    <div className={styles.menu}>
        <a className={styles.menuLink} href="#" aria-label='Ir para a Home' title='Home'>
            <HouseIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Ver Histórico' title='Histórico'>
            <HistoryIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Ir para Configurações' title='Configurações'>
            <SettingsIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Mudar Tema' title='Tema' onClick={handleThemeChange}>
            {nextThemeIcon[theme]}
        </a>
    </div>
    )
}