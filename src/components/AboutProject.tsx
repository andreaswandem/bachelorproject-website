import { ExternalLink } from "lucide-react";

const AboutProject = () => {
	return (
		<section className="border-r border-(--md-sys-color-outline-variant) bg-(--md-sys-color-surface-container-lowest) px-4 py-6 sm:px-12">
			{/* Tittel */}
			<h2 className="mb-4 text-3xl text-(--md-sys-color-on-surface)">
				<span className="font-semibold text-(--md-sys-color-primary)">
					Om
				</span>{" "}
				bachelorprosjektet
			</h2>

			{/* Intro */}
			<p className="mb-4 leading-relaxed text-(--md-sys-color-on-surface-variant)">
				Bachelorprosjektet er avslutningen på studiet vårt, der vi løser en
				reell IT-utfordring i samarbeid med en bedrift. Sammen med dere
				definerer vi mål og omfang, slik at oppgaven gir oss faglige
				utfordringer og dere et nyttig resultat.
			</p>

			{/* Overgang */}
			<p className="mb-4 leading-relaxed font-semibold text-(--md-sys-color-on-surface)">
				Dette innebærer samarbeidet i praksis:
			</p>

			{/* Punktliste */}
			<ul className="list-inside list-disc space-y-4 leading-relaxed text-(--md-sys-color-on-surface-variant)">
				<li>
					<span className="font-semibold text-(--md-sys-color-on-surface)">
						Veiledning og dialog:{" "}
					</span>
					Dere stiller med en veileder som følger fremdriften og kan gi faglige
					råd underveis. Vi får også veiledning fra Kristiania.
				</li>

				<li>
					<span className="font-semibold text-(--md-sys-color-on-surface)">
						Arbeidsplass og utstyr:{" "}
					</span>
					Som utgangspunkt forventes det av kristiania at dere kan stille med
					arbeidsplass 3-4 dager i uken.
				</li>

				<li>
					<span className="font-semibold text-(--md-sys-color-on-surface)">
						Eierskap og rettigheter:{" "}
					</span>
					Dere eier sluttproduktet, mens vi beholder rettighetene til
					bachelorrapporten.
				</li>

				<li>
					<span className="font-semibold text-(--md-sys-color-on-surface)">
						Kostnad:{" "}
					</span>
					Vi gjennomfører prosjektet som en del av utdanningen og skal ikke
					motta betaling eller andre ytelser for arbeidet.
				</li>
			</ul>

			{/* Lenke til Kristiana */}
			<p className="mt-4">
				<a
					href="https://www.kristiania.no/arbeidsliv/bachelorprosjekt/"
					className="flex items-center gap-1 font-semibold text-(--md-sys-color-primary) underline underline-offset-2"
				>
					<span>
						Les mer{" "}
						<span className="hidden sm:inline"> om bachelorprosjektet </span>{" "}
						hos Kristiania
					</span>
					<ExternalLink className="h-5 w-5" />
				</a>
			</p>
		</section>
	);
};

export default AboutProject;
