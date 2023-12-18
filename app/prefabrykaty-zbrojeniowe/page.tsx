import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'

export const metadata: Metadata = {
    title: 'Prefabtykaty zbrojeniowe - Zbrojarnia Transbet',
    description: 'Odkryj naszą bogatą ofertę prefabrykatów zbrojeniowych najwyższej jakości. Kompleksowe rozwiązania.',
}

export default function Prefabrykaty() {
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
                        <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">Prefabtykaty zbrojeniowe</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Odkryj naszą bogatą ofertę prefabrykatów zbrojeniowych najwyższej jakości. Kompleksowe rozwiązania budowlane.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                <p className="text-base  leading-7 text-orange-600">Prefabrykacja zbrojeniowa</p>
                <h1 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Prefabrykaty zbrojeniowe</h1>
                <p className="mt-6 text-xl leading-8">
                    Prefabrykaty zbrojeniowe to gotowe elementy zbrojeniowe stosowane w budownictwie, które są produkowane w fabrykach i dostarczane na plac budowy w postaci gotowych do ułożenia elementów. Są one coraz popularniejsze ze względu na swoje liczne korzyści i zalety w porównaniu do tradycyjnych metod zbrojenia.
                </p>
                <div className="mt-10 space-y-6">
                    <p>
                        Jedną z głównych zalet prefabrykatów zbrojeniowych jest oszczędność czasu. Produkcja prefabrykatów odbywa się w kontrolowanych warunkach fabrycznych, co pozwala na równoczesne prowadzenie innych prac na placu budowy. Gotowe elementy zbrojeniowe są dostarczane na czas, co eliminuje potrzebę czekania na przygotowanie zbrojenia na miejscu budowy. To przyspiesza cały proces budowlany i pozwala na szybsze zakończenie projektu.
                    </p>
                    <p>
                        Prefabrykaty zbrojeniowe są również bardziej trwałe i precyzyjne w porównaniu do tradycyjnych metod. Dzięki kontrolowanym warunkom fabrycznym, elementy zbrojeniowe są dokładnie wymierzone i wyprodukowane z wysokiej jakości materiałów. To zapewnia większą pewność, że zbrojenie będzie spełniało wszystkie wymagania konstrukcyjne i będzie trwałe przez długie lata.
                    </p>
                    <p>
                        Kolejnym ważnym atutem prefabrykatów zbrojeniowych jest większa kontrola jakości. Podczas procesu produkcji, elementy zbrojeniowe są poddawane rygorystycznym testom i kontrolom jakości, aby upewnić się, że spełniają wszystkie normy i przepisy. To zapewnia większe bezpieczeństwo oraz mniejsze ryzyko wadliwego zbrojenia, które mogłoby wpłynąć na wytrzymałość i stabilność konstrukcji.
                    </p>
                </div>
            </div>
        </div>
    )
}

