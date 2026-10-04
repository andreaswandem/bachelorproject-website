import Typewriter from "typewriter-effect";

const Hero = () => {

    return (
        <section className="bg-[var(--md-sys-color-surface-container-lowest)] relative bg-cover bg-right px-4 py-8 sm:px-22 sm:py-10">

            {/* Kristiania bilde */}
            <div className="absolute inset-0 bg-[url('/kristiania_banner.png')] bg-cover bg-right opacity-20 sm:opacity-55"/>
            {/* Fade */}
            <div className="absolute inset-0 bg-gradient-to-r
                            from-[var(--md-sys-color-surface-container-lowest)]
                            via-[var(--md-sys-color-surface-container-lowest)]
                            to-transparent" 
            />

            <div className="relative max-w-2xl">
                {/* Typewriter tittel */}
                <h1 className="text-[var(--md-sys-color-on-surface)] text-3xl min-h-[72px] sm:min-h-[0] sm:text-4xl"> {/* min-h-[72px] = "midlertidlig" fix for mobilvisning */}
                    <Typewriter
                        options = {{
                            strings: [
                                "Har dere en <strong class='font-semibold text-[var(--md-sys-color-primary)]'>utfordring</strong> vi kan løse?",
                                "Vi søker en <strong class='font-semibold text-[var(--md-sys-color-primary)]'>samarbeidspartner.</strong>",
                                "Skal vi skape noe <strong class='font-semibold text-[var(--md-sys-color-primary)]'>verdifullt</strong> sammen?"
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 25,
                            pauseFor: 5000 /* Denne som manglet Type */
                        }}
                    />
                </h1>
                
                {/* Om */}
                <p className="text-[var(--md-sys-color-on-surface)] mt-4 leading-relaxed">
                    Vi er tre bachelorstudenter i frontend- og mobilutvikling ved Høyskolen Kristiania. 
                    Våren 2027 skal vi gjennomføre bachelorprosjektet vårt, og vi søker en bedrift som vil samarbeide 
                    om en reell utfordring. Har dere en idé dere vil utforske, en arbeidsprosess som kan forenkles, 
                    eller behov for en nettside, mobilapp eller et internt verktøy? Ta kontakt!
                </p>
            </div>
        </section>
    )
}

export default Hero;