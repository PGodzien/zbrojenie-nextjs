import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'
import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Prefabrykaty zbrojeniowe',
        description: 'Nasze prefabrykaty zbrojeniowe to gwarancja solidności i wytrzymałości.',
    },
    {
        name: 'Prefabrykaty zbrojeniowe 3d (konie, kobyłki)',
        description: 'Solidne i wytrzymałe prefabrykaty 3D.'
    },
    {
        name: 'Strzemiona zbrojeniowe',
        description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
    },
    {
        name: 'Stal na strzemiona',
        description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.',
    },
    {
        name: 'Kosze zbrojeniowe (pale)',
        description: 'Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.',
    },
    {
        name: 'Klatki zbrojeniowe spawane (tubingi)',
        description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
    },
    {
        name: 'Łuki oraz koła',
        description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
    },
    {
        name: 'Siatki zbrojeniowe',
        description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
    },
    {
        name: 'Wyroby hutnicze (teowniki, ceowniki, profile itp.)',
        description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
    },
]

export const metadata: Metadata = {
    title: 'O nas - Zbrojarnia Transbet',
    description: 'Sprawdź naszą ofertę produktów zbrojeniowych i usług związanych z montażem i projektowaniem.',
}

export default function About() {
    return (
        <div className="">
            <div className="relative isolate overflow-hidden bg-gray-900">
                <Image
                    src={slider}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-black via-black to-orange-700 opacity-80"></div>
                <div className="mx-auto max-w-7xl pb-24 pt-48 border-x px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Oferta</h2>
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
                            <h2 className="text-base font-semibold leading-7 text-orange-600">Stal zbrojeniowa i prefabrykaty</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Produkcja prefabrykatów zbrojeniowych</p>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Produkcja prefabrykatów zbrojeniowych, którą realizuje nasza zbrojarnia obejmuje wykonywanie prefabrykatów z prętów o średnicach od 6 mm do 40 mm. Wykorzystujemy stal B500A,B500B oraz B500SP.
                            </p>
                        </div>
                        <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-9">
                                    <dt className="font-semibold text-gray-900">
                                        <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-orange-500" aria-hidden="true" />
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

