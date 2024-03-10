import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Contact from '@/components/contact'

export const metadata: Metadata = {
    title: 'Stal zbrojeniowa na strzemiona - Zbrojarnia Transbet',
    description: 'Stal zbrojeniowa na strzemiona budowlane dostarczana według potrzeb na podstawie projektu budowlanego.',
}

export default function Prefabrykaty() {
    return (
        <>
            <Nav />
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
                            <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">Stal zbrojeniowa na strzemiona</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Stal zbrojeniowa na strzemiona budowlane dostarczana według potrzeb na podstawie projektu budowlanego.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                    <p className="text-base  leading-7 text-orange-600">Stal zbrojeniowa na strzemiona</p>
                    <h1 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Stal zbrojeniowa</h1>
                    <p className="mt-6 text-xl leading-8">
                        Stal zbrojeniowa to stal konstrukcyjna ogólnego przeznaczenia, która jest szeroko używana w budownictwie i innych sektorach przemysłu. Jest to materiał o dużej wytrzymałości, elastyczności i odporności na korozję, co czyni go idealnym wyborem do wzmocnienia struktur budynków, mostów, dróg i innych konstrukcji.
                    </p>
                    <div className="mt-10 space-y-6">
                        <p>
                            Stal zbrojeniowa jest powszechnie stosowana w betonowych konstrukcjach, aby zwiększyć ich nośność i wytrzymałość na naprężenia. W betonie, który sam w sobie ma niewielką wytrzymałość na rozciąganie, stal zbrojeniowa jest używana jako materiał wzmocniający, który przenosi obciążenia rozciągające. To znaczy, że stal zbrojeniowa pomaga betonowi znieść naprężenia wynikające z obciążenia, zmniejszając ryzyko pęknięć i uszkodzeń konstrukcyjnych.
                        </p>
                        <p>
                            Stal zbrojeniowa ma charakterystyczną strukturę w postaci prętów lub siatek, które są zazwyczaj wyprodukowane w formie prętów gładkich lub prętów z ząbkowanym wzorem. Pręty mają zwykle okrągły przekrój, choć mogą również mieć inne kształty, takie jak kwadratowe czy prostokątne. Pręty stalowe są umieszczane w betonie przed jego uformowaniem, tak aby były odpowiednio rozmieszczone i wzmocnione.
                        </p>
                        <p>
                            Stal zbrojeniowa ma wiele zalet w porównaniu do innych materiałów konstrukcyjnych. Po pierwsze, jest ona wyjątkowo mocna, co pozwala na budowę dużych i trwałych struktur. Po drugie, stal zbrojeniowa jest elastyczna, co oznacza, że może wytrzymywać różne naprężenia i ruchy bez pęknięć czy uszkodzeń. Ponadto, stal zbrojeniowa jest odporna na korozję, co znacznie zwiększa jej trwałość i długowieczność.
                        </p>
                        <p>
                            Betonowa konstrukcja wzmocniona stalą zbrojeniową ma również wiele zalet. Przede wszystkim, beton w połączeniu ze stalą zbrojeniową tworzy bardziej wytrzymałą i stabilną strukturę niż sam beton. Dodatkowo, beton ma również zdolność do przenoszenia obciążeń ściskających, podczas gdy stal zbrojeniowa przenosi obciążenia rozciągające. Dzięki temu połączeniu materiałów, konstrukcje betonowe mogą wytrzymać większe obciążenia i naprężenia, co jest kluczowe w przypadku budowy mostów, wysokich budynków i innych struktur narażonych na duże obciążenia.
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}

