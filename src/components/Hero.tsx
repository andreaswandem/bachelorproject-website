import Typewriter from "typewriter-effect";

const Hero = () => {
	return (
		<section className="relative bg-(--md-sys-color-surface-container-lowest) bg-cover bg-right px-4 py-8 sm:px-22 sm:py-10">
			{/* Kristiania bilde */}
			<div className="absolute inset-0 bg-[url('/kristiania-banner.png')] bg-cover bg-right opacity-20 sm:opacity-55" />
			{/* Fade */}
			<div className="absolute inset-0 bg-linear-to-r from-(--md-sys-color-surface-container-lowest) via-(--md-sys-color-surface-container-lowest) to-transparent" />

			<div className="relative max-w-2xl">
				{/* Typewriter tittel */}
				<h1 className="min-h-18 text-3xl text-(--md-sys-color-on-surface) sm:min-h-0 sm:text-4xl">
					{" "}
					{/* min-h-18 = "midlertidlig" fix for mobilvisning */}
					<Typewriter
						options={{
							strings: [
								"Har dere en <strong class='font-semibold text-(--md-sys-color-primary)'>utfordring</strong> vi kan løse?",
								"Vi søker en <strong class='font-semibold text-(--md-sys-color-primary)'>samarbeidspartner.</strong>",
								"Skal vi skape noe <strong class='font-semibold text-(--md-sys-color-primary)'>verdifullt</strong> sammen?",
							],
							autoStart: true,
							loop: true,
							delay: 50,
							deleteSpeed: 25,
							pauseFor: 5000 /* Denne som manglet Type */,
						}}
					/>
				</h1>

				{/* Om */}
				<p className="mt-4 leading-relaxed text-(--md-sys-color-on-surface)">
					Vi er tre bachelorstudenter i frontend- og mobilutvikling ved
					Høyskolen Kristiania. Våren 2027 skal vi gjennomføre
					bachelorprosjektet vårt, og vi søker en bedrift som vil samarbeide om
					en reell utfordring. Har dere en idé dere vil utforske, en
					arbeidsprosess som kan forenkles, eller behov for en nettside,
					mobilapp eller et internt verktøy? Ta kontakt!
				</p>
			</div>
		</section>
	);
};

export default Hero;
