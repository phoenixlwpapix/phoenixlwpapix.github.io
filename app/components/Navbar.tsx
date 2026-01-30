'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNav = () => setIsOpen(!isOpen);
    const closeNav = () => setIsOpen(false);

    const navLinks = [
        { href: '/#home', label: '首页' },
        { href: '/#services', label: '烘焙知识' },
        { href: '/#about', label: '自我介绍' },
        { href: '/#work', label: '我的作品' },
    ];

    return (
        <>
            {/* Desktop & Mobile Floating Pill Navbar */}
            <header 
                className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
                    ${isScrolled 
                        ? 'top-4 w-[95%] max-w-4xl' 
                        : 'top-6 w-[90%] max-w-3xl'
                    }
                `}
            >
                <div className={`
                    relative flex items-center justify-between px-6 py-3
                    bg-white/80 dark:bg-slate-900/80
                    backdrop-blur-xl
                    border border-white/20 dark:border-slate-700/50
                    shadow-lg shadow-black/5 dark:shadow-black/20
                    transition-all duration-500
                    ${isScrolled 
                        ? 'rounded-2xl' 
                        : 'rounded-full'
                    }
                `}>
                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="text-lg font-bold text-accent hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                    >
                        琮琮の手作工坊
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleNav}
                        className="md:hidden p-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-200"
                        aria-label={isOpen ? '关闭菜单' : '打开菜单'}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Full Screen Menu */}
            <div 
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300
                    ${isOpen 
                        ? 'opacity-100 pointer-events-auto' 
                        : 'opacity-0 pointer-events-none'
                    }
                `}
            >
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={closeNav}
                />
                
                {/* Menu Panel */}
                <nav className={`
                    absolute top-24 left-4 right-4
                    bg-white/95 dark:bg-slate-900/95
                    backdrop-blur-xl
                    border border-white/20 dark:border-slate-700/50
                    rounded-3xl
                    shadow-2xl
                    p-6
                    transition-all duration-300
                    ${isOpen 
                        ? 'translate-y-0 opacity-100' 
                        : '-translate-y-4 opacity-0'
                    }
                `}>
                    <ul className="flex flex-col gap-2">
                        {navLinks.map((link, index) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={closeNav}
                                    className="flex items-center gap-3 px-4 py-4 text-lg font-medium text-foreground hover:text-accent hover:bg-accent/10 rounded-2xl transition-all duration-200"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <span className="w-8 h-8 flex items-center justify-center bg-accent/10 text-accent rounded-full text-sm">
                                        {index + 1}
                                    </span>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}
