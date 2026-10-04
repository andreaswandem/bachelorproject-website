import { ChevronRight } from "lucide-react";

const Team = () => {

    return (
        <section className="bg-[var(--md-sys-color-surface-container-lowest)] px-4 py-4 md:px-12 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Andreas */}
                <button className="rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:font-semibold">
                    <div>
                        <img src="/placeholder-img.webp" alt="" className="w-full"/>
                    </div>
                    <div className="text-left px-4 py-4 bg-[var(--md-sys-color-surface-container-low)]">
                        <h2 className="font-semibold text-[var(--md-sys-color-on-surface-variant)]">
                            Andreas B Wandem
                        </h2>
                        <p className="flex items-center text-[var(--md-sys-color-primary)]">
                            Se profil
                            <ChevronRight className="w-5 h-5" />
                        </p>
                    </div>
                </button>

                {/* Kristoffer */}
                <button className="rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:font-semibold">
                    <div>
                        <img src="/placeholder-img.webp" alt="" className="w-full"/>
                    </div>
                    <div className="text-left px-4 py-4 bg-[var(--md-sys-color-surface-container-low)]">
                        <h2 className="font-semibold text-[var(--md-sys-color-on-surface-variant)]">
                            Kristoffer Eide
                        </h2>
                        <p className="flex items-center text-[var(--md-sys-color-primary)]">
                            Se profil
                            <ChevronRight className="w-5 h-5" />
                        </p>
                    </div>
                </button>

                {/* Ian */}
                <button className="rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:font-semibold">
                    <div>
                        <img src="/placeholder-img.webp" alt="" className="w-full"/>
                    </div>
                    <div className="text-left px-4 py-4 bg-[var(--md-sys-color-surface-container-low)]">
                        <h2 className="font-semibold text-[var(--md-sys-color-on-surface-variant)]">
                            Ian Skaug Kaid
                        </h2>
                        <p className="flex items-center text-[var(--md-sys-color-primary)]">
                            Se profil
                            <ChevronRight className="w-5 h-5" />
                        </p>
                    </div>
                </button>

            </div>
        </section>
    )
    
}

export default Team;