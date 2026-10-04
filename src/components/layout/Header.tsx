import { Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#FCF8F5] flex items-center justify-between sticky top-0 shadow-lg z-50 sm:rounded-t-lg">
            {/* venstre side */}
            <div className="flex items-center gap-4">
                <img src="/kristiania_logo.jpg" className="h-14 w-auto sm:rounded-tl-lg"></img>
                <h1 className="text-[18px] font-semibold text-black">
                    <span className="hidden sm:inline">Kristania </span>
                    Bachelorprosjekt
                </h1>
            </div>
    
            {/* venstre side */}
            <button 
                className="mr-4 bg-[#B83543] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#9E2D39] active:scale-95 transition-colors"
                onClick={() => setIsOpen(open => !open)}
            >
                {isOpen ? "Lukk" : "Ta kontakt"}
            </button>

            {/* kontakt */}
            {isOpen && (
                <div className="absolute top-full right-4 mt-2 bg-[#FCF8F5] p-4 rounded-lg shadow-lg">
                    <a 
                        href="mailto:anwa033@student.kristiania.no"
                        className="flex items-center gap-2"
                    >   
                        <Mail className="w-5 h-5 text-[#B83543]" />
                        anwa033@student.kristiania.no
                    </a>
                </div>
            )}

        </header>
    )
}

export default Header;