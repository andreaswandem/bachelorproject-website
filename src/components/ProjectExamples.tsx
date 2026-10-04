import { Laptop, Smartphone, CalendarCheck, RefreshCw, Calendar, Puzzle } from "lucide-react";

const ProjectExamples = () => {

    return (
        <section className="bg-[#FCF8F5] px-4 py-6 sm:px-12 border-y-4 border-[#D4CABC]">
            <h2 className="text-3xl mb-4">
                <span className="font-semibold text-[#B83543]">Hva</span> kan vi bygge?
            </h2>

            <div className="flex gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {/* Webutvikling */}
                <article className="group shrink-0 bg-white p-4 rounded-lg w-68 md:w-100 inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20">
                    <h3 className="font-semibold flex items-center justify-between mb-2">
                        Webutvikling
                        <Laptop className="w-5 h-5 group-hover:scale-115 group-hover:text-[#397572]" />
                    </h3>
                    <p className="leading-relaxed">
                        Trenger dere en nettside eller en løsning som brukes i nettleseren?
                        Vi kan utvikle alt fra en oversiktlig bedriftsside til en kundeportal.
                    </p>
                </article>

                {/* Mobilapplikasjon */}
                <article className="group shrink-0 bg-white p-4 rounded-lg w-68 md:w-100 inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20">
                    <h3 className="font-semibold flex items-center justify-between mb-2">
                        Mobilapplikasjon
                        <Smartphone className="w-5 h-5 group-hover:scale-115 group-hover:rotate-15 group-hover:text-[#A6533D]" />
                    </h3>
                    <p className="leading-relaxed">
                        Trenger bedriften din kanskje en mobilapplikasjon? Enten om det skal være en native eller en 
                        kryssplattform applikasjon, vi blir med på utviklingen.
                    </p>
                </article>

                {/* Større prosjekt */}
                <article className="group shrink-0 bg-white p-4 rounded-lg w-68 md:w-100 inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20">
                    <h3 className="font-semibold flex items-center justify-between mb-2">
                        Delprosjekt
                        <Puzzle className="w-5 h-5 group-hover:scale-115 group-hover:block group-hover:text-[#77618D]" />
                    </h3>
                    <p className="leading-relaxed">
                        Har dere et prosjekt i gang og ser etter ekstra arbeidskraft?
                        Vi kan ta ansvaret for en avgrenset oppgave og utvikle den videre i samarbeidet med teamet deres.
                    </p>
                </article>

                {/* Modernisering */}
                <article className="group shrink-0 bg-white p-4 rounded-lg w-68 md:w-100 inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20">
                    <h3 className="font-semibold flex items-center justify-between mb-2">
                        Modernisering
                        <RefreshCw className="w-5 h-5 group-hover:scale-115 group-hover:animate-spin group-hover:text-[#647345]" />
                    </h3>
                    <p className="leading-relaxed">
                        Bruker dere mye tid på tungvinte rutiner, eller mangler systemene deres noe? 
                        Vi kan se på hvordan systemene brukes i dag, og gjøre dem mer oversiktlige.
                    </p>
                </article>

                {/* Booking */}
                <article className="group shrink-0 bg-white p-4 rounded-lg w-68 md:w-100 inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20">
                    <h3 className="font-semibold flex items-center justify-between mb-2">
                        Booking og reservasjon
                        <Calendar className="w-5 h-5 group-hover:hidden" />
                        <CalendarCheck className="hidden w-5 h-5 group-hover:scale-115 group-hover:block group-hover:text-[#4F6F8F]" />
                    </h3>
                    <p className="leading-relaxed">
                        Trenger dere en enklere måte å håndtere bestillinger på? 
                        Vi kan ta en titt på dere eksisterende løsning og se hva som kan forbedres.
                    </p>
                </article>

                {/* Unik */}
                <article className="shrink-0 p-4 border-2 border-[#D4CABC] rounded-lg w-68 md:w-100 text-center flex flex-col justify-center inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20">
                    <h3 className="font-semibold mb-2">Deres prosjekt?</h3>
                    <p>Send oss en e-post om prosjektet deres, så kan vi se på det sammen.</p>
                </article>                
            </div>
        </section>
    )
}

export default ProjectExamples;