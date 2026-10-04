import { Users, CalendarDays, Clock, GraduationCap } from "lucide-react";

const ShortInfo = () => {

    return (
        <section className="bg-[#FCF8F5] px-4 py-4 sm:px-14 border-y-4 border-[#D4CABC]">

            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">

                {/* Periode */}
                <div className="hover:text-[#397572] transition-colors delay-100 duration-100">
                    <dt className="flex items-center justify-center gap-1 font-semibold">
                        <CalendarDays className="w-5 h-5" />
                        Periode
                    </dt>
                    <dd className="mt-1">
                        Januar–mai 2027
                        <span className="block mx-auto mt-6 w-18 border-b-1 border-[#D4CABC] lg:hidden" />
                    </dd>
                </div>

                {/* Arbeidsmengde */}
                <div className="hover:text-[#A6533D] transition-colors delay-100 duration-100">
                    <dt className="flex items-center justify-center gap-1 font-semibold ">
                        <Clock className="w-5 h-5" />
                        Arbeidsmengde
                    </dt>
                    <dd className="mt-1">
                        3–4 dager i uken
                        <span className="block mx-auto mt-6 w-18 border-b-1 border-[#D4CABC] lg:hidden" />
                    </dd>
                </div>

                {/* Omfang */}
                <div className="hover:text-[#77618D] transition-colors delay-100 duration-100">
                    <dt className="flex items-center justify-center gap-1 font-semibold ">
                        <GraduationCap className="w-5 h-5" />
                        Omfang
                    </dt>
                    <dd className="mt-1">22,5 studiepoeng</dd>
                </div>

                {/* Gruppen */}
                <div className="hover:text-[#647345] transition-colors delay-100 duration-100">
                    <dt className="flex items-center justify-center gap-1 font-semibold">
                        <Users className="w-5 h-5" />
                        Gruppen
                    </dt>
                    <dd className="mt-1">
                        3 studenter
                    </dd>
                </div>

            </dl>
            
        </section>
    )

}

export default ShortInfo;