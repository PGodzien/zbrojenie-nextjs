import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'
import { CheckIcon } from '@heroicons/react/20/solid'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Prefabrikované výstužné prvky',
        description: 'Naše prefabrikované výstužné prvky sú zárukou pevnosti a odolnosti.',
        // url: 'prefabrykaty-zbrojeniowe',
    },
    {
        name: '3D vystuženie prefabrikovaných prvkov (kužeľov, podperov)',
        description: 'Pevné a odolné 3D prefabrikáty.'
    },
    {
        name: 'Výstužné strmene',
        description: 'Oceľové výstužné strmene. Dostupné v rôznych veľkostiach. Najvyššia kvalita a odolnosť.',
        // url: 'strzemiona-zbrojeniowe',
    },
    {
        name: 'Oceľ na strmene',
        description: 'Okrem výroby výstužných strmeňov dodávame aj oceľ na strmene.',
        // url: 'stal-zbrojeniowa',
    },
    {
        name: 'Výstužné klietky (hromady)',
        description: 'Rýchle časy implementácie, ako aj presnosť a vysoká kvalita výstužných klietok.',
        // url: 'kosze-zbrojeniowe',
    },
    {
        name: 'Zvárané výstužné klietky (rúrky)',
        description: 'Zvárané výstužné klietky vyrobené z najkvalitnejších materiálov. Odolné a efektívne riešenie.',
    },
    {
        name: 'Oblúky a kruhy',
        description: 'Oblúky a výstužné kruhy zaisťujú stabilitu a bezpečnosť konštrukcie. Vyberte si to najlepšie.',
    },
    {
        name: 'Výstužné sieťky',
        description: 'Jeden z najdôležitejších prvkov výstuže - vyrábame ich s dôrazom na kvalitu a detail.',
        // url: 'siatki-zbrojeniowe',
    },
    {
        name: 'Hutnícke výrobky (T-profily, C-profily, profily atď.)',
        description: 'Ponúkame rôzne hutnícke výrobky vrátane T-profilov, C-profilov a výstužných profilov.',
        // url: 'teowniki-ceowniki-profile',
    },
]

export const metadata: Metadata = {
    title: 'Ponuka prefabrikovaných armovacích prvkov - Transbet Armory',
    description: 'Pozrite si našu ponuku výstužných produktov a služieb súvisiacich s montážou a projektovaním.',
}

export default function About() {
    return (
        <>
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
                            <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">Ponuka</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Pozrite si našu ponuku výstužných produktov a služieb súvisiacich s montážou a projektovaním.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border-b">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 border-x">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div>
                                <h2 className="text-base  leading-7 text-orange-600">Betónová oceľ a prefabrikáty</h2>
                                <h3 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Výroba prefabrikovaných výstužných prvkov</h3>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    Výroba prefabrikovaných výstužných prvkov vykonávaná našou armatúrou zahŕňa výrobu prefabrikovaných prvkov z tyčí s priemermi od 6 mm do 40 mm. Používame oceľ B500A, B500B a B500SP.
                                </p>
                            </div>
                            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className=" text-gray-900 uppercase group">
                                            <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-orange-500" aria-hidden="true" />
                                            <a href='' className="flex items-center group-hover:text-orange-500 no-underline group-hover:underline underline-offset-4 transition duration-100">
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
        </>
    )
}

