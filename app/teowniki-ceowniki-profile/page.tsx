import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'

export const metadata: Metadata = {
    title: 'Teowniki, ceowniki i profile - Zbrojarnia Transbet',
    description: 'Bogata oferta teowników, ceowników i profili – różne rozmiary i grubości ceowników, teowników i profili stalowych.',
}

export default function Kosze() {
    return (
        <div className="border-b">
            <div className="relative border-b border-gray-700 isolate overflow-hidden bg-gray-900">
                <Image
                    src={slider}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black opacity-80"></div>
                <div className="mx-auto max-w-7xl pb-24 pt-48 border-x border-gray-700 px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">Teowniki, ceowniki i profile</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Bogata oferta teowników, ceowników i profili – różne rozmiary i grubości ceowników, teowników i profili stalowych
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                <p className="text-base  leading-7 text-orange-600">Prefabrykaty zbrojeniowe</p>
                <h1 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Teowniki, ceowniki i profile</h1>
                <p className="mt-6 text-xl leading-8">
                    Teowniki i ceowniki stalowe są powszechnie stosowane w konstrukcjach budowlanych jako elementy nośne, szczególnie w przypadku budynków o dużej wysokości.
                </p>
                <div className="mt-10 space-y-6">
                    <p>
                        Teowniki i ceowniki stalowe są niezwykle ważnymi elementami konstrukcyjnymi w budowlach, zwłaszcza w przypadku budynków o dużej wysokości. Są one używane jako elementy nośne, które zapewniają stabilność i wytrzymałość całej konstrukcji.
                    </p>
                    <p>
                        Teowniki i ceowniki stalowe są wykonane z wysokiej jakości stali, co gwarantuje ich trwałość i odporność na obciążenia. Ich konstrukcja jest oparta na prostokątnej ramie, która jest wzmocniona za pomocą dodatkowych elementów w celu zwiększenia wytrzymałości. Teowniki mają przekrój I, podczas gdy ceowniki mają przekrój C, co oznacza, że ​​teowniki są sztywniejsze i bardziej odporne na ugięcia.
                    </p>
                    <p>
                        Teowniki i ceowniki stalowe są szeroko stosowane w różnych obszarach budownictwa, takich jak budynki mieszkalne, komercyjne, przemysłowe, mosty, wieże i wiele innych. Ich główną rolą jest przenoszenie obciążenia z górnego punktu konstrukcji na dolne, co zapewnia jej stabilność. Bez teowników i ceowników stalowych wiele budynków nie mogłoby istnieć.
                    </p>
                    <p>
                        W przypadku budynków o dużej wysokości, teowniki i ceowniki stalowe są niezbędne do utrzymania stabilności całej konstrukcji. Dzięki swojej wyjątkowej wytrzymałości i sztywności, doskonale radzą sobie z ogromnymi obciążeniami, które występują na wysokościach. Ich zastosowanie w takich budynkach jest nie tylko konieczne, ale również kluczowe dla bezpieczeństwa mieszkańców i użytkowników.
                    </p>
                </div>
            </div>
        </div>
    )
}

