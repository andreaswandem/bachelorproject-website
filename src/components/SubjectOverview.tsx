import { Construction } from "lucide-react";

const SubjectOverview = () => {
	return (
		<section className="hidden flex-col items-center justify-center gap-3 border-l-1 border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface-container-lowest)] p-8 md:flex">
			<Construction className="h-14 w-14 text-[var(--md-sys-color-secondary)]" />
			<p className="text-[var(--md-sys-color-on-surface-variant)]">
				Her kommer en interaktiv emneoversikt
			</p>
		</section>
	);
};

export default SubjectOverview;
