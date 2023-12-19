import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'
import { CheckIcon } from '@heroicons/react/20/solid'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Prefabrykaty zbrojeniowe',
        description: 'Nasze prefabrykaty zbrojeniowe to gwarancja solidności i wytrzymałości.',
        url: 'prefabrykaty-zbrojeniowe',
    },
    {
        name: 'Prefabrykaty zbrojeniowe 3d (konie, kobyłki)',
        description: 'Solidne i wytrzymałe prefabrykaty 3D.'
    },
    {
        name: 'Strzemiona zbrojeniowe',
        description: 'Stalowe strzemiona zbrojeniowe. Dostępne w różnych rozmiarach. Najwyższa jakość i trwałość.',
        url: 'strzemiona-zbrojeniowe',
    },
    {
        name: 'Stal na strzemiona',
        description: 'Poza produkcją strzemion zbrojeniowych zajmujemy się równie dostarczaniem stali na strzemiona.',
        url: 'stal-zbrojeniowa',
    },
    {
        name: 'Kosze zbrojeniowe (pale)',
        description: 'Szybkie terminy realizacji oraz precyzja i wysoka jakość wykonania koszy zbrojeniowych. ',
        url: 'kosze-zbrojeniowe',
    },
    {
        name: 'Klatki zbrojeniowe spawane (tubingi)',
        description: 'Spawane klatki zbrojeniowe z najlepszej jakości materiałów. Trwałe i skuteczne rozwiązanie.',
    },
    {
        name: 'Łuki oraz koła',
        description: 'Łuki i koła zbrojeniowe zapewniają stabilność i bezpieczeństwo konstrukcji. Wybierz najlepsze.',
    },
    {
        name: 'Siatki zbrojeniowe',
        description: 'Jeden z najwaniejszych elementów zbrojenia – wykonujemy je z dbałością o jakość i detale.',
        url: 'siatki-zbrojeniowe',
    },
    {
        name: 'Wyroby hutnicze (teowniki, ceowniki, profile itp.)',
        description: 'Oferujemy różnorodne wyroby hutnicze, w tym teowniki, ceowniki i profile zbrojeniowe.',
        url: 'teowniki-ceowniki-profile',
    },
]

export const metadata: Metadata = {
    title: 'Oferta prefabrykatrów zbrojeniowych - Zbrojarnia Transbet',
    description: 'Sprawdź naszą ofertę produktów zbrojeniowych i usług związanych z montażem i projektowaniem.',
}

export default function About() {
    return (
        <div className="">
            <div className="relative border-b border-gray-700 isolate overflow-hidden bg-gray-900">
                <Image
                    src={slider}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-black via-black to-orange-700 opacity-80"></div>
                <div className="mx-auto max-w-7xl pb-24 pt-48 border-x border-gray-700 px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">Oferta</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Sprawdź naszą ofertę produktów zbrojeniowych i usług związanych z montażem i projektowaniem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white border-b">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 border-x">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div>
                            <h2 className="text-base  leading-7 text-orange-600">Stal zbrojeniowa i prefabrykaty</h2>
                            <h3 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Produkcja prefabrykatów zbrojeniowych</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Produkcja prefabrykatów zbrojeniowych, którą realizuje nasza zbrojarnia obejmuje wykonywanie prefabrykatów z prętów o średnicach od 6 mm do 40 mm. Wykorzystujemy stal B500A,B500B oraz B500SP.
                            </p>
                        </div>
                        <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-9">
                                    <dt className=" text-gray-900 uppercase group">
                                        <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-orange-500" aria-hidden="true" />
                                        <a href={feature.url} className="flex items-center group-hover:text-orange-500 no-underline group-hover:underline underline-offset-4 transition duration-100">
                                            <h5 className="">{feature.name}</h5>
                                            <span><ArrowRightIcon className='transform -rotate-45 ml-2 w-4 h-auto opacity-0 group-hover:opacity-100' /></span>
                                        </a>
                                    </dt>
                                    <dd className="mt-2">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-20">
                        <div>
                            <img className="h-auto max-w-full object-cover" src="/photos/prefabrykaty-zbrojeniowe-producent-01.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-01.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-02.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-03.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-04.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-05.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-06.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-07.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-08.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-09.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-010.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-011.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-012.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-013.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-014.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-016.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-017.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full" src="/photos/prefabrykaty-zbrojeniowe-producent-018.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

