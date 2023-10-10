import Image from "next/image"
import slider from '@/public/welder.jpg'
import logo from '@/public/logo_30-lat-transbet.png'

export default function HeroTwo() {
    return (
        <div className="relative bg-gray-50">
            <div className="mx-auto max-w-7xl border-x lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                    <Image
                        className="h-16 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                            Prefabrykaty zbrojeniowe i
                            wyroby hutnicze
                        </h1>
                        <p className="mt-6 text-lg max-w-md leading-8 text-gray-600">
                            Produkcja i sprzedaż prefabrykatów zbrojeniowych oraz wyrobów hutniczych.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="bg-black px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                Cała oferta
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                    <Image
                        className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                        src={slider}
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-700 opacity-40"></div>
                </div>
            </div>
        </div>
    )
}
