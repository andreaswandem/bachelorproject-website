import {
	Laptop,
	Smartphone,
	CalendarCheck,
	RefreshCw,
	Calendar,
	Puzzle,
} from "lucide-react";

const ProjectExamples = () => {
	return (
		<section className="border-y-2 border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface-container-lowest)] px-4 py-6 sm:px-12">
			<h2 className="mb-4 text-3xl text-[var(--md-sys-color-on-surface)]">
				<span className="font-semibold text-[var(--md-sys-color-primary)]">
					Hva
				</span>{" "}
				kan vi bygge?
			</h2>

			<div className="flex [scrollbar-width:none] gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
				{/* Webutvikling */}
				<article className="group w-68 shrink-0 rounded-lg bg-[var(--md-sys-color-surface-container-low)] p-4 inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20 md:w-100">
					<h3 className="mb-2 flex items-center justify-between font-semibold text-[var(--md-sys-color-on-surface)]">
						Webutvikling
						<Laptop className="h-5 w-5 group-hover:scale-115 group-hover:text-[var(--md-sys-color-primary)]" />
					</h3>
					<p className="leading-relaxed text-[var(--md-sys-color-on-surface-variant)]">
						Trenger dere en nettside eller en løsning som brukes i nettleseren?
						Vi kan utvikle alt fra en oversiktlig bedriftsside til en
						kundeportal.
					</p>
				</article>

				{/* Mobilapplikasjon */}
				<article className="group w-68 shrink-0 rounded-lg bg-[var(--md-sys-color-surface-container-low)] p-4 inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20 md:w-100">
					<h3 className="mb-2 flex items-center justify-between font-semibold text-[var(--md-sys-color-on-surface)]">
						Mobilapplikasjon
						<Smartphone className="h-5 w-5 group-hover:scale-115 group-hover:rotate-15 group-hover:text-[var(--md-sys-color-primary)]" />
					</h3>
					<p className="leading-relaxed text-[var(--md-sys-color-on-surface-variant)]">
						Trenger bedriften din kanskje en mobilapplikasjon? Enten om det skal
						være en native eller en kryssplattform applikasjon, vi blir med på
						utviklingen.
					</p>
				</article>

				{/* Større prosjekt */}
				<article className="group w-68 shrink-0 rounded-lg bg-[var(--md-sys-color-surface-container-low)] p-4 inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20 md:w-100">
					<h3 className="mb-2 flex items-center justify-between font-semibold text-[var(--md-sys-color-on-surface)]">
						Delprosjekt
						<Puzzle className="h-5 w-5 group-hover:block group-hover:scale-115 group-hover:text-[var(--md-sys-color-primary)]" />
					</h3>
					<p className="leading-relaxed text-[var(--md-sys-color-on-surface-variant)]">
						Har dere et prosjekt i gang og ser etter ekstra arbeidskraft? Vi kan
						ta ansvaret for en avgrenset oppgave og utvikle den videre i
						samarbeidet med teamet deres.
					</p>
				</article>

				{/* Modernisering */}
				<article className="group w-68 shrink-0 rounded-lg bg-[var(--md-sys-color-surface-container-low)] p-4 inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20 md:w-100">
					<h3 className="mb-2 flex items-center justify-between font-semibold text-[var(--md-sys-color-on-surface)]">
						Modernisering
						<RefreshCw className="h-5 w-5 group-hover:scale-115 group-hover:animate-spin group-hover:text-[var(--md-sys-color-primary)]" />
					</h3>
					<p className="leading-relaxed text-[var(--md-sys-color-on-surface-variant)]">
						Bruker dere mye tid på tungvinte rutiner, eller mangler systemene
						deres noe? Vi kan se på hvordan systemene brukes i dag, og gjøre dem
						mer oversiktlige.
					</p>
				</article>

				{/* Booking */}
				<article className="group w-68 shrink-0 rounded-lg bg-[var(--md-sys-color-surface-container-low)] p-4 inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20 md:w-100">
					<h3 className="mb-2 flex items-center justify-between font-semibold text-[var(--md-sys-color-on-surface)]">
						Booking og reservasjon
						<Calendar className="h-5 w-5 group-hover:hidden" />
						<CalendarCheck className="hidden h-5 w-5 group-hover:block group-hover:scale-115 group-hover:text-[var(--md-sys-color-primary)]" />
					</h3>
					<p className="leading-relaxed text-[var(--md-sys-color-on-surface-variant)]">
						Trenger dere en enklere måte å håndtere bestillinger på? Vi kan ta
						en titt på dere eksisterende løsning og se hva som kan forbedres.
					</p>
				</article>

				{/* Unik */}
				<article className="flex w-68 shrink-0 flex-col justify-center rounded-lg border-2 border-[var(--md-sys-color-outline-variant)] p-4 text-center inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20 md:w-100">
					<h3 className="mb-2 font-semibold text-[var(--md-sys-color-on-surface)]">
						Deres prosjekt?
					</h3>
					<p className="text-[var(--md-sys-color-on-surface-variant)]">
						Send oss en e-post om prosjektet deres, så kan vi se på det sammen.
					</p>
				</article>
			</div>
		</section>
	);
};

export default ProjectExamples;
