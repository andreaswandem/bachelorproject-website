import { Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 flex items-center justify-between bg-[var(--md-sys-color-surface-container)] shadow-lg sm:rounded-t-lg">
			{/* venstre side */}
			<div className="flex items-center gap-4">
				<img
					src="/kristiania-logo.jpg"
					className="h-14 w-auto sm:rounded-tl-lg"
				></img>
				<h1 className="text-[18px] font-semibold text-[var(--md-sys-color-on-surface)]">
					<span className="hidden sm:inline">Kristania </span>
					Bachelorprosjekt
				</h1>
			</div>

			{/* venstre side */}
			<button
				className="mr-4 cursor-pointer rounded-lg bg-[var(--md-sys-color-primary)] px-4 py-2 text-[var(--md-sys-color-on-primary)] hover:brightness-95 active:scale-95"
				onClick={() => setIsOpen((open) => !open)}
			>
				{isOpen ? "Lukk" : "Ta kontakt"}
			</button>

			{/* kontakt */}
			{isOpen && (
				<div className="absolute top-full right-4 mt-2 rounded-lg bg-[var(--md-sys-color-surface-container-high)] p-4 shadow-lg">
					<a
						href="mailto:anwa033@student.kristiania.no"
						className="flex items-center gap-2 text-[var(--md-sys-color-on-surface)]"
					>
						<Mail className="h-5 w-5 text-[var(--md-sys-color-primary)]" />
						anwa033@student.kristiania.no
					</a>
				</div>
			)}
		</header>
	);
};

export default Header;
