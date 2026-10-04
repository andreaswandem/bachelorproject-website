import { ExternalLink } from "lucide-react";

const AboutProject = () => {

    return (
        <section className="bg-[var(--md-sys-color-surface-container-lowest)] px-4 py-6 sm:px-12">
            {/* Tittel */}
            <h2 className="text-[var(--md-sys-color-on-surface)] text-3xl mb-4">
                <span className="font-semibold text-[var(--md-sys-color-primary)]">Om</span> bachelorprosjektet
            </h2>

            {/* Intro */}
            <p className="text-[var(--md-sys-color-on-surface-variant)] leading-relaxed mb-4">
                Bachelorprosjektet er avslutningen på studiet vårt, der vi løser en reell IT-utfordring i samarbeid med en bedrift. 
                Sammen med dere definerer vi mål og omfang, slik at oppgaven gir oss faglige utfordringer og dere et nyttig resultat.
            </p>

            {/* Overgang */}
            <p className="text-[var(--md-sys-color-on-surface)] leading-relaxed mb-4 font-semibold">
                Dette innebærer samarbeidet i praksis:
            </p>


            {/* Punktliste */}
            <ul className="text-[var(--md-sys-color-on-surface-variant)] space-y-4 leading-relaxed list-disc list-inside">
                <li>
                    <span className="text-[var(--md-sys-color-on-surface)] font-semibold">
                        Veiledning og dialog: {" "}
                    </span>
                    Dere stiller med en veileder som følger fremdriften og kan gi faglige råd underveis. Vi får også veiledning fra Kristiania.
                </li>

                <li>
                    <span className="text-[var(--md-sys-color-on-surface)] font-semibold">
                        Arbeidsplass og utstyr: {" "} 
                    </span>
                    Som utgangspunkt forventes det av kristiania at dere kan stille med arbeidsplass 3-4 dager i uken.
                </li>

                <li>
                    <span className="text-[var(--md-sys-color-on-surface)] font-semibold">
                        Eierskap og rettigheter: {" "} 
                    </span>
                    Dere eier sluttproduktet, mens vi beholder rettighetene til bachelorrapporten.
                </li>

                <li>
                    <span className="text-[var(--md-sys-color-on-surface)] font-semibold">
                        Kostnad: {" "} 
                    </span>
                    Vi gjennomfører prosjektet som en del av utdanningen og skal ikke motta betaling eller andre ytelser for arbeidet.
                </li>
            </ul>

            {/* Lenke til Kristiana */}
            <p className="mt-4 ">
                <a 
                    href="https://www.kristiania.no/arbeidsliv/bachelorprosjekt/"
                    className="font-semibold text-[var(--md-sys-color-primary)] underline underline-offset-2 flex gap-1 items-center"
                >
                    <span>
                        Les mer <span className="hidden sm:inline"> om bachelorprosjektet </span> hos Kristiania
                    </span>
                    <ExternalLink className="h-5 w-5"/>
                </a>
            </p>
        </section>
    )
}

export default AboutProject;