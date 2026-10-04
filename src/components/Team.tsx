import { ChevronRight } from "lucide-react";

const Team = () => {
	return (
		<section className="bg-[var(--md-sys-color-surface-container-lowest)] px-4 py-4 md:px-12 md:py-8">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				{/* Andreas */}
				<button className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:-translate-y-1 hover:font-semibold hover:shadow-xl">
					<div>
						<img src="/placeholder-img.webp" alt="" className="w-full" />
					</div>
					<div className="bg-[var(--md-sys-color-surface-container-low)] px-4 py-4 text-left">
						<h2 className="font-semibold text-[var(--md-sys-color-on-surface-variant)]">
							Andreas B Wandem
						</h2>
						<p className="flex items-center text-[var(--md-sys-color-primary)]">
							Se profil
							<ChevronRight className="h-5 w-5" />
						</p>
					</div>
				</button>

				{/* Kristoffer */}
				<button className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:-translate-y-1 hover:font-semibold hover:shadow-xl">
					<div>
						<img src="/placeholder-img.webp" alt="" className="w-full" />
					</div>
					<div className="bg-[var(--md-sys-color-surface-container-low)] px-4 py-4 text-left">
						<h2 className="font-semibold text-[var(--md-sys-color-on-surface-variant)]">
							Kristoffer Eide
						</h2>
						<p className="flex items-center text-[var(--md-sys-color-primary)]">
							Se profil
							<ChevronRight className="h-5 w-5" />
						</p>
					</div>
				</button>

				{/* Ian */}
				<button className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:-translate-y-1 hover:font-semibold hover:shadow-xl">
					<div>
						<img src="/placeholder-img.webp" alt="" className="w-full" />
					</div>
					<div className="bg-[var(--md-sys-color-surface-container-low)] px-4 py-4 text-left">
						<h2 className="font-semibold text-[var(--md-sys-color-on-surface-variant)]">
							Ian Skaug Kaid
						</h2>
						<p className="flex items-center text-[var(--md-sys-color-primary)]">
							Se profil
							<ChevronRight className="h-5 w-5" />
						</p>
					</div>
				</button>
			</div>
		</section>
	);
};

export default Team;
