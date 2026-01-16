'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);
    const closeNav = () => setIsOpen(false);

    return (
        <header className={`flex justify-end p-4 relative z-50 ${isOpen ? 'nav-open' : ''}`}>
            <button
                className="fixed top-4 left-4 z-[1000] bg-transparent border-0 cursor-pointer p-2 md:hidden"
                onClick={toggleNav}
                aria-label="Toggle navigation"
            >
                <div className={`hamburger block relative bg-accent w-10 h-1 rounded transition-transform duration-250 
          ${isOpen ? 'rotate-135' : ''}
          before:content-[''] before:absolute before:left-0 before:right-0 before:bg-accent before:h-1 before:rounded before:transition-transform before:duration-250 before:-top-2
          after:content-[''] after:absolute after:left-0 after:right-0 after:bg-accent after:h-1 after:rounded after:transition-transform after:duration-250 after:top-2
          ${isOpen ? 'before:rotate-90 before:top-0 after:rotate-90 after:top-0' : ''}`}
                ></div>
                {/* Note: The detailed hamburger animation logic from CSS might be simpler to recreate with conditional classes or just simpler icons for now. 
            I'll use a standard hamburger icon or the CSS logic if possible. 
            The original CSS used pseudo-elements. 
        */}
            </button>

            {/* 
        Original CSS for hamburger:
        .hamburger::before { top: 6px; }
        .hamburger::after { bottom: 6px; }
        Is actually a bit complex to convert exactly to tailwind utility classes without custom css.
        I will use a simpler approach for the button visuals or rely on the custom CSS I might add back or just standard Tailwind.
        Let's stick to a simpler reliable implementation for now.
      */}

            <nav className={`fixed top-0 bottom-0 left-0 right-0 bg-dark text-light transform transition-transform duration-300 ease-in-out z-40
                ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
                md:relative md:transform-none md:translate-x-0 md:bg-transparent md:text-foreground md:flex md:justify-end md:inset-auto`}>
                <ul className="list-none flex flex-col justify-evenly items-center h-full m-0 p-0 md:flex-row md:justify-end md:gap-8 md:h-auto">
                    <li className="ml-0">
                        <Link href="/#home" className="color-inherit font-bold text-xl no-underline hover:text-accent" onClick={closeNav}>首页</Link>
                    </li>
                    <li className="ml-0">
                        <Link href="/#services" className="color-inherit font-bold text-xl no-underline hover:text-accent" onClick={closeNav}>烘焙知识</Link>
                    </li>
                    <li className="ml-0">
                        <Link href="/#about" className="color-inherit font-bold text-xl no-underline hover:text-accent" onClick={closeNav}>自我介绍</Link>
                    </li>
                    <li className="ml-0">
                        <Link href="/#work" className="color-inherit font-bold text-xl no-underline hover:text-accent" onClick={closeNav}>我的作品</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
