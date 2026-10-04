import { Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[var(--md-sys-color-surface-container)] flex items-center justify-between sticky top-0 shadow-lg z-50 sm:rounded-t-lg">
            {/* venstre side */}
            <div className="flex items-center gap-4">
                <img src="/kristiania_logo.jpg" className="h-14 w-auto sm:rounded-tl-lg"></img>
                <h1 className="text-[var(--md-sys-color-on-surface)] text-[18px] font-semibold">
                    <span className="hidden sm:inline">Kristania </span>
                    Bachelorprosjekt
                </h1>
            </div>
    
            {/* venstre side */}
            <button 
                className="mr-4 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] px-4 py-2 rounded-lg cursor-pointer hover:brightness-95 active:scale-95"
                onClick={() => setIsOpen(open => !open)}
            >
                {isOpen ? "Lukk" : "Ta kontakt"}
            </button>

            {/* kontakt */}
            {isOpen && (
                <div className="absolute top-full right-4 mt-2 bg-[var(--md-sys-color-surface-container-high)] p-4 rounded-lg shadow-lg">
                    <a 
                        href="mailto:anwa033@student.kristiania.no"
                        className="flex items-center gap-2 text-[var(--md-sys-color-on-surface)]"
                    >   
                        <Mail className="w-5 h-5" />
                        anwa033@student.kristiania.no
                    </a>
                </div>
            )}

        </header>
    )
}

export default Header;