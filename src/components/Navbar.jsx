import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ theme, toggleTheme }) {
    return (
        <header>
            <div className="container" style={{ position: 'relative' }}>
                <button 
                    onClick={toggleTheme} 
                    className="theme-toggle"
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <Link to="/">
                    <motion.h1 
                        className="main-title"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        SILLAGE
                    </motion.h1>
                </Link>
                <motion.p 
                    className="subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    THE ARCHITECTURE OF NICHE SCENT
                </motion.p>
            </div>
        </header>
    );
}
