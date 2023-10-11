import Image from "next/image"
import slider from '@/public/slider_02.jpg'

export default function About() {
    return (
        <div className="border-b bg-gray-50">
            <div className="relative max-w-7xl mx-auto overflow-hidden border-x">
                <div className="relative h-80 overflow-hidden bg-black md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                    <Image
                        className="h-full w-full object-cover"
                        src={slider}
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-700 opacity-50"></div>
                </div>
                <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                        <h2 className="text-base font-semibold leading-7 text-orange-400">Stal zbrojeniowa i zbrojenie budowlane</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Produkcja prefabrykatów zbrojeniowych</p>
                        <p className="mt-6 text-base leading-7">
                            Nasza zbrojarnia obejmuje wykonywanie prefabrykatów z prętów o średnicach od 6 mm do 40 mm. Wykorzystujemy stal B500A,B500B oraz B500SP.
                        </p>
                        <div className="mt-8">
                            <a
                                href="/oferta"
                                className="bg-black px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                Cała oferta
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
