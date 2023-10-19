import Image from "next/image"
import welder from '@/public/slider_04.jpg'

export default function Hero() {

    return (
        <div className="border-b border-gray-700 relative -mt-20">
            <Image
                src={welder}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover lg:hidden"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black opacity-50"></div>

            <video className="absolute -z-10 w-auto min-w-full max-w-none hidden lg:block" autoPlay muted loop src="/wideo.mp4"></video>

            {/* <div className="absolute inset-0 bg-gradient-to-bl from-black via-black to-orange-700 opacity-60"></div> */}
            <div className="relative isolate overflow-hidden pt-40 max-w-7xl mx-auto border-x border-gray-700 ">
                <div className="mx-auto max-w-4xl py-24 md:py-48 relative z-10 px-8">
                    <div className="bg-black bg-opacity-10 backdrop-blur-sm p-10">
                        <h1 className="text-4xl tracking-tight text-white sm:text-6xl">
                            Prefabrykaty zbrojeniowe i wyroby hutnicze
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Produkcja i sprzedaż prefabrykatów zbrojeniowych oraz wyrobów hutniczych.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6 relative z-30">
                            <a
                                href="#kontakt"
                                className="bg-orange-500 px-6 py-4 text-sm  text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black duration-200 transition"
                            >
                                Skontaktuj się
                            </a>
                            <a href="/oferta" className="text-sm  leading-6 text-white">
                                Pełna oferta <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
