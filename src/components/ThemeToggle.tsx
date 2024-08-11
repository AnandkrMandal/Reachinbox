import { useEffect, useState } from "react";

interface ThemeToggleProps {
    colour?: string;
    onToggle?: () => void;
    tabIndex?: number;
}

function ThemeToggle({ colour = 'bg-gray-600', onToggle = () => {}, tabIndex = 0 }: ThemeToggleProps) {
    const [darkMode, setDarkMode] = useState(false);
    const isOn = darkMode;

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(isOn ? 'light' : 'dark');
        root.classList.add(isOn ? 'dark' : 'light');
    }, [isOn]);

    const toggleDarkMode = () => {
        setDarkMode(!isOn);
        onToggle(); // Removed the argument to match the function signature
    };

    function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter') toggleDarkMode();
    }

    return (
        <div className="mr-10">
            <div
                role="checkbox"
                aria-checked={isOn ? 'true' : 'false'}
                tabIndex={tabIndex}
                onKeyDown={handleKeyDown}
                onClick={toggleDarkMode}
                className={`cursor-pointer w-11 h-5 ${colour} rounded-full relative px-1.5 flex items-center ${isOn ? '' : ' justify-end'}`}
            >
                <div className={`w-4 h-4 rounded-full absolute transform duration-200 ease-out bg-white left-0.5 ${isOn ? 'translate-x-6' : 'translate-x-0'}`} />
                {isOn ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="blue">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="orange">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414z" clipRule="evenodd" />
                    </svg>
                )}
            </div>
        </div>
    );
}

export default ThemeToggle;
