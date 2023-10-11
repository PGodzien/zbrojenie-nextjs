import Image from "next/image"
import welder from '@/public/welder.jpg'

export default function Hero() {

    return (
        <div className="border-b border-gray-700 relative -mt-20">
            <Image
                src={welder}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-700 opacity-80"></div> */}
            <div className="relative isolate overflow-hidden pt-40 max-w-7xl mx-auto border-x border-gray-700 ">
                <div className="mx-auto max-w-4xl py-48 relative z-10 px-8">
                    <div className="">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Prefabrykaty zbrojeniowe i wyroby hutnicze
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Produkcja i sprzedaż prefabrykatów zbrojeniowych oraz wyrobów hutniczych.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6 relative z-30">
                            <a
                                href="#kontakt"
                                className="bg-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black duration-200 transition"
                            >
                                Skontaktuj się
                            </a>
                            <a href="/oferta" className="text-sm font-semibold leading-6 text-white">
                                Pełna oferta <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
