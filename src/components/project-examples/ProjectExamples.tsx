import { Laptop, Smartphone, RefreshCw, Calendar, Puzzle } from "lucide-react";
import ProjectExampleCard from "./ProjectExampleCard";

const projectExamples = [
	{
		title: "Webutvikling",
		description:
			"Trenger dere en nettside eller en løsning som brukes i nettleseren? Vi kan utvikle alt fra en oversiktlig bedriftsside til en kundeportal.",
		icon: Laptop,
	},
	{
		title: "Mobilapplikasjon",
		description:
			"Trenger bedriften din kanskje en mobilapplikasjon? Enten om det skal være en native eller en kryssplattform applikasjon, vi blir med på utviklingen.",
		icon: Smartphone,
	},
	{
		title: "Delprosjekt",
		description:
			"Har dere et prosjekt i gang og ser etter ekstra arbeidskraft? Vi kan ta ansvaret for en avgrenset oppgave og utvikle den videre i samarbeidet med teamet deres.",
		icon: Puzzle,
	},
	{
		title: "Modernisering",
		description:
			"Bruker dere mye tid på tungvinte rutiner, eller mangler systemene deres noe? Vi kan se på hvordan systemene brukes i dag, og gjøre dem mer oversiktlige.",
		icon: RefreshCw,
	},
	{
		title: "Booking og reservasjon",
		description:
			"Trenger dere en enklere måte å håndtere bestillinger på? Vi kan ta en titt på deres eksisterende løsning og se hva som kan forbedres.",
		icon: Calendar,
	},
];

const ProjectExamples = () => {
	return (
		<section className="border-y-2 border-(--md-sys-color-outline-variant) bg-(--md-sys-color-surface-container-lowest) px-4 py-6 sm:px-12">
			{/* Tittel */}
			<h2 className="mb-4 text-3xl text-(--md-sys-color-on-surface)">
				<span className="font-semibold text-(--md-sys-color-primary)">Hva</span>{" "}
				kan vi bygge?
			</h2>
			
			{/* kort */}
			<div className="flex scrollbar-none gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
				{projectExamples.map((project) => (
					<ProjectExampleCard key={project.title} {...project} />
				))}

				{/* siste kort */}
				<article className="flex w-68 shrink-0 flex-col justify-center rounded-lg border-2 border-(--md-sys-color-outline-variant) p-4 text-center inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20 md:w-100">
					<h3 className="mb-2 font-semibold text-(--md-sys-color-on-surface)">
						Deres prosjekt?
					</h3>
					<p className="text-(--md-sys-color-on-surface-variant)">
						Send oss en e-post om prosjektet deres, så kan vi se på det sammen.
					</p>
				</article>
			</div>
		</section>
	);
};

export default ProjectExamples;
