import Typewriter from "typewriter-effect";

const Hero = () => {

    return (
        <section className="relative bg-[#FCF8F5] bg-cover bg-right px-4 py-8 sm:px-22 sm:py-10">

            {/* AI bilde av krisitania */}
            <div className="absolute inset-0 bg-[url('/kristiania_banner.png')] bg-cover bg-right opacity-20 sm:opacity-55"/>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#FCF8F5_0%,rgba(252,248,245,0.85)_55%,transparent_100%)]" />

            <div className="relative max-w-2xl">
                {/* Typewriter tittel */}
                <h1 className="text-3xl min-h-[72px] sm:min-h-[0] sm:text-4xl"> {/* min-h-[72px] = "midlertidlig" fix for mobilvisning */}
                    <Typewriter
                        options = {{
                            strings: [
                                "Har dere en <strong class='font-bold text-[#B83543]'>utfordring</strong> vi kan løse?",
                                "Vi søker en <strong class='font-bold text-[#B83543]'>samarbeidspartner.</strong>",
                                "Skal vi skape noe <strong class='font-bold text-[#B83543]'>verdifullt</strong> sammen?"
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
                <p className="mt-4 leading-relaxed">
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