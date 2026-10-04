import { ChevronRight } from "lucide-react";

const Team = () => {

    return (
        <section className="bg-[#FCF8F5] px-4 py-4 md:px-12 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Andreas */}
                <button className="rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:font-semibold">
                    <div>
                        <img src="/placeholder_img.webp" alt="" className="w-full"/>
                    </div>
                    <div className="text-left px-4 py-4">
                        <h2 className="font-semibold">
                            Andreas B Wandem
                        </h2>
                        <p className="flex items-center text-[#B83543]">
                            Se profil
                            <ChevronRight className="w-5 h-5" />
                        </p>
                    </div>
                </button>

                {/* Kristoffer */}
                <button className="rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:font-semibold">
                    <div>
                        <img src="/placeholder_img.webp" alt="" className="w-full"/>
                    </div>
                    <div className="text-left px-4 py-4">
                        <h2 className="font-semibold">
                            Kristoffer Eide
                        </h2>
                        <p className="flex items-center text-[#B83543]">
                            Se profil
                            <ChevronRight className="w-5 h-5" />
                        </p>
                    </div>
                </button>

                {/* Ian */}
                <button className="rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:font-semibold">
                    <div>
                        <img src="/placeholder_img.webp" alt="" className="w-full"/>
                    </div>
                    <div className="text-left px-4 py-4">
                        <h2 className="font-semibold">
                            Ian Skaug Kaid
                        </h2>
                        <p className="flex items-center text-[#B83543]">
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