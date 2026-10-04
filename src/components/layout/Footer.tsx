import { ExternalLink } from "lucide-react";

const Footer = () => {
	return (
		<footer className="flex flex-wrap items-center justify-between gap-2 rounded-b-lg bg-[var(--md-sys-color-secondary)] px-4 py-2 text-[var(--md-sys-color-on-secondary)]">
			{/* venstre side */}
			<p className="">Laget med React</p>

			{/* høyre side */}
			<a
				href="https://github.com/andreaswandem/bachelorproject-website"
				className="flex items-center gap-1"
			>
				<span className="hidden sm:inline">Se kildekoden på</span>
				GitHub
				<ExternalLink className="h-4 w-4" />
			</a>
		</footer>
	);
};

export default Footer;
