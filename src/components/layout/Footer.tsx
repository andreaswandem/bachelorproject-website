import { ExternalLink } from "lucide-react";

const Footer = () => {

    return (
        <footer className="bg-[#B83543] flex flex-wrap items-center justify-between px-4 py-2 rounded-b-lg gap-2">
            {/* venstre side */}
            <p className="text-white">Laget med React</p>

            {/* høyre side */}
            <a 
                href="https://github.com/andreaswandem/bachelorproject-website"
                className="flex items-center gap-1 text-white"
            >
                <span className="hidden sm:inline">Se kildekoden på</span>
                GitHub
                <ExternalLink className="h-4 w-4" />
            </a>
        </footer>
    )
}

export default Footer;