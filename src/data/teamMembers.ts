export type TeamMember = {
    id: string;
    name: string;
    image: string;
    location: string;
    bio: string;
    linkedin: string;
    github: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: "andreas",
        name: "Andreas Bernhard Wandem",
        image: "/andreas.jpg",
        location: "Oslo, Norge",
        bio: `
            Andreas er spesielt interessert i mobilutvikling og bruker mye tid på å finpusse design og brukeropplevelse. 
            For tiden utvikler han egne iOS-applikasjoner og eksperimenterer med Raspberry Pi-prosjekter. På fritiden 
            finner du ham i skibakken klokken seks om morgenen under Skimores frokostkjøring, 
            eller på brettet som vindsurfer, avhengig av årstiden.
        `,
        linkedin: "https://www.linkedin.com/in/andreas-bernhard-wandem-9b7a76375/",
        github: "https://github.com/andreaswandem"
    },
    {
        id: "kristoffer",
        name: "Kristoffer Eide",
        image: "/kristoffer.jpg",
        location: "Årnes, Norge",
        bio: `
            Kristoffer liker å bygge ting selv og jobber ofte med egne prosjekter på fritiden, blant annet flere spill. 
            Han har erfaring med React, TypeScript, Swift og Kotlin. Før han gikk over til IT jobbet han i nærmere ti år 
            som barnehagelærer, noe som har gitt ham solid erfaring med samarbeid, ansvar og kommunikasjon.
        `,
        linkedin: "https://www.linkedin.com/in/kristoffer-eide-6381bb348/",
        github: "https://github.com/KrisEide"
    },
    {
        id: "ian",
        name: "Ian Skaug Kaid",
        image: "/placeholder-img.webp",
        location: "Norge",
        bio: "Bilde og biograf kommer",
        linkedin: "https://www.linkedin.com/in/iansk/",
        github: "https://github.com/IaSKad"
    }
];

