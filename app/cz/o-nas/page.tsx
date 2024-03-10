import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'

export const metadata: Metadata = {
    title: 'O nás - Transbet Armory',
    description: 'Poznejte naši společnost a naše dlouholeté zkušenosti ve zbrojním průmyslu. Zjistěte o nás více.',
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
                            <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">O společnosti</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Poznejte naši společnost a naše dlouholeté zkušenosti ve zbrojním průmyslu. Zjistěte o nás více.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                    <p className="text-base  leading-7 text-orange-600">Poznejte nás lépe</p>
                    <h1 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Zbrojnice Transbet</h1>
                    <p className="mt-6 text-xl leading-8 max-w-2xl">
                        Rádi bychom vás informovali, že Transbet Betonarnie Sp. z o. o. Sp. K. se kromě výroby betonu zabývá také výrobou prefabrikovaných armovacích prvků.
                    </p>
                    <div className="mt-10 space-y-6">
                        <p>
                            Výroba prefabrikovaných armovacích prvků prováděná naší armaturou zahrnuje výrobu prefabrikovaných prvků z tyčí o průměrech od 6 mm do 40 mm. Jejich profilování a řezání je možné pomocí moderních ohýbacích strojů a vyspělých armovacích strojů.
                        </p>
                        <p>
                            Disponujeme automatizovaným strojovým parkem, který zaručuje velmi vysokou přesnost vyráběných prvků. Díky nim vznikají prefabrikované výztužné prvky v co nejkratším čase.
                        </p>
                        <p>
                            Betonářská ocel prefabrikovaná společností Transbet splňuje všechny platné průmyslové normy. Každá položka (výztuž) je zabalena do balíků a označena k nim připevněným štítkem s tvarem položky a všemi údaji nutnými k její identifikaci. To usnadňuje proces instalace na staveništi a zajišťuje kontinuitu armovacích prací.
                        </p>
                        <p>
                            S dobře koordinovaným týmem rychle vyřídíme každou objednávku a poskytujeme efektivní služby a technické poradenství.
                        </p>
                        <p className=''>
                        Prefabrikáty dodáváme na každé místo v Polsku a střední a východní Evropě.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

