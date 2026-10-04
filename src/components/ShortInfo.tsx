import { Users, CalendarDays, Clock, GraduationCap } from "lucide-react";

const ShortInfo = () => {
	return (
		<section className="border-y-2 border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface-container-lowest)] px-4 py-4 sm:px-14">
			<dl className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
				{/* Periode */}
				<div className="group text-[var(--md-sys-color-on-surface)]">
					<dt className="flex items-center justify-center gap-1 font-semibold transition-colors delay-75 group-hover:text-[var(--md-sys-color-primary)]">
						<CalendarDays className="h-5 w-5" />
						Periode
					</dt>
					<dd className="mt-1 text-[var(--md-sys-color-on-surface-variant)]">
						Januar–mai 2027
						<span className="mx-auto mt-6 block w-18 border-b-1 border-[var(--md-sys-color-outline)] lg:hidden" />
					</dd>
				</div>

				{/* Arbeidsmengde */}
				<div className="group text-[var(--md-sys-color-on-surface)]">
					<dt className="flex items-center justify-center gap-1 font-semibold transition-colors delay-75 group-hover:text-[var(--md-sys-color-primary)]">
						<Clock className="h-5 w-5" />
						Arbeidsmengde
					</dt>
					<dd className="mt-1 text-[var(--md-sys-color-on-surface-variant)]">
						3–4 dager i uken
						<span className="mx-auto mt-6 block w-18 border-b-1 border-[var(--md-sys-color-outline)] lg:hidden" />
					</dd>
				</div>

				{/* Omfang */}
				<div className="group text-[var(--md-sys-color-on-surface)]">
					<dt className="flex items-center justify-center gap-1 font-semibold transition-colors delay-75 group-hover:text-[var(--md-sys-color-primary)]">
						<GraduationCap className="h-5 w-5" />
						Omfang
					</dt>
					<dd className="mt-1 text-[var(--md-sys-color-on-surface-variant)]">
						22,5 studiepoeng
					</dd>
				</div>

				{/* Gruppen */}
				<div className="group text-[var(--md-sys-color-on-surface)]">
					<dt className="flex items-center justify-center gap-1 font-semibold transition-colors delay-75 group-hover:text-[var(--md-sys-color-primary)]">
						<Users className="h-5 w-5" />
						Gruppen
					</dt>
					<dd className="mt-1 text-[var(--md-sys-color-on-surface-variant)]">
						3 studenter
					</dd>
				</div>
			</dl>
		</section>
	);
};

export default ShortInfo;
