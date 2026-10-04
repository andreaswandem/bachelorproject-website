import { Users, CalendarDays, Clock, GraduationCap } from "lucide-react";

const ShortInfo = () => {

    return (
        <section className="bg-[var(--md-sys-color-surface-container-lowest)] px-4 py-4 sm:px-14 border-y-4 border-[var(--md-sys-color-surface-dim)]">

            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">

                {/* Periode */}
                <div className="text-[var(--md-sys-color-on-surface)] group">
                    <dt className="flex items-center justify-center gap-1 font-semibold transition-colors delay-75 group-hover:text-[var(--md-sys-color-primary)]">
                        <CalendarDays className="w-5 h-5" />
                        Periode
                    </dt>
                    <dd className="mt-1 text-[var(--md-sys-color-on-surface-variant)]">
                        Januar–mai 2027
                        <span className="block mx-auto mt-6 w-18 border-b-1 border-[#D4CABC] lg:hidden" />
                    </dd>
                </div>

                {/* Arbeidsmengde */}
                <div className="text-[var(--md-sys-color-on-surface)] group">
                    <dt className="flex items-center justify-center gap-1 font-semibold transition-colors delay-75 group-hover:text-[var(--md-sys-color-primary)]">
                        <Clock className="w-5 h-5" />
                        Arbeidsmengde
                    </dt>
                    <dd className="mt-1 text-[var(--md-sys-color-on-surface-variant)]">
                        3–4 dager i uken
                        <span className="block mx-auto mt-6 w-18 border-b-1 border-[#D4CABC] lg:hidden" />
                    </dd>
                </div>

                {/* Omfang */}
                <div className="text-[var(--md-sys-color-on-surface)] group">
                    <dt className="flex items-center justify-center gap-1 font-semibold transition-colors delay-75 group-hover:text-[var(--md-sys-color-primary)]">
                        <GraduationCap className="w-5 h-5" />
                        Omfang
                    </dt>
                    <dd className="mt-1 text-[var(--md-sys-color-on-surface-variant)]">
                        22,5 studiepoeng
                    </dd>
                </div>

                {/* Gruppen */}
                <div className="text-[var(--md-sys-color-on-surface)] group">
                    <dt className="flex items-center justify-center gap-1 font-semibold transition-colors delay-75 group-hover:text-[var(--md-sys-color-primary)]">
                        <Users className="w-5 h-5" />
                        Gruppen
                    </dt>
                    <dd className="mt-1 text-[var(--md-sys-color-on-surface-variant)]">
                        3 studenter
                    </dd>
                </div>

            </dl>
            
        </section>
    )

}

export default ShortInfo;