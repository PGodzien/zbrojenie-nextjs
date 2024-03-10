import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'

export const metadata: Metadata = {
    title: 'O nás - Transbet Armory',
    description: 'Spoznajte našu spoločnosť a naše dlhoročné skúsenosti v zbrojárskom priemysle. Zistite o nás viac.',
}

export default function About() {
    return (
        <>
            <div className="border-b">
                <div className="relative border-b border-gray-700 isolate overflow-hidden bg-gray-900">
                    <Image
                        src={slider}
                        alt=""
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-black via-black to-orange-700 opacity-80"></div>
                    <div className="mx-auto max-w-7xl pb-24 pt-48 border-x border-gray-700 px-6 lg:px-8 relative z-10">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">O spoločnosti</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Spoznajte našu spoločnosť a naše dlhoročné skúsenosti v zbrojárskom priemysle. Zistite o nás viac.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                    <p className="text-base  leading-7 text-orange-600">Spoznajte nás lepšie</p>
                    <h1 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Zbrojnica Transbet</h1>
                    <p className="mt-6 text-xl leading-8 max-w-2xl">
                    Radi by sme Vás informovali, že Transbet Betonarnie Sp. z o. o. Sp. K. sa okrem výroby betónu zaoberá aj výrobou prefabrikovaných výstužných prvkov.
                    </p>
                    <div className="mt-10 space-y-6">
                        <p>
                        Výroba prefabrikátov armovacích prvkov realizovaná našou armatúrou zahŕňa výrobu prefabrikátov z tyčí s priemermi od 6 mm do 40 mm. Ich profilovanie a rezanie je možné pomocou moderných ohýbacích strojov a pokrokových armovacích strojov.
                        </p>
                        <p>
                        Disponujeme automatizovaným strojovým parkom, ktorý zaručuje veľmi vysokú presnosť vyrábaných prvkov. Vďaka nim vznikajú prefabrikované výstužné prvky v čo najkratšom čase.
                        </p>
                        <p>
                        Betónová oceľ prefabrikovaná spoločnosťou Transbet spĺňa všetky príslušné priemyselné normy. Každá položka (výstuž) je zabalená do balíkov a označená k nim pripevneným štítkom s tvarom položky a všetkými údajmi potrebnými na jej identifikáciu. To uľahčuje proces inštalácie na stavenisku a zabezpečuje kontinuitu armovacích prác.
                        </p>
                        <p>
                        S dobre koordinovaným tímom rýchlo vybavíme každú objednávku a poskytujeme efektívne služby a technické poradenstvo.
                        </p>
                        <p className=''>
                        Prefabrikáty dodávame na každé miesto v Poľsku a strednej a východnej Európe.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

