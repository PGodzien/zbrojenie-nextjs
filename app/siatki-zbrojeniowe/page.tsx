import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Contact from '@/components/contact'

export const metadata: Metadata = {
    title: 'Siatki zbrojeniowe - Zbrojarnia Transbet',
    description: 'Siatki zbrojeniowe w różnych rozmiarach, wykonanych z różnorodnych materiałów oraz charakteryzujących się zróżnicowanymi parametrami technicznymi.',
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
                            <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">Siatki zbrojeniowe</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Siatki zbrojeniowe w różnych rozmiarach, wykonanych z różnorodnych materiałów oraz charakteryzujących się zróżnicowanymi parametrami technicznymi
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                    <p className="text-base  leading-7 text-orange-600">Siatka zbrojeniowa</p>
                    <h1 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Siatki zbrojeniowe</h1>
                    <p className="mt-6 text-xl leading-8">
                        Siatki zbrojeniowe są wykonane z metalu, najczęściej z drutu stalowego. Są one umieszczane wewnątrz struktury betonowej przed jej uformowaniem. Ich głównym zadaniem jest zwiększenie wytrzymałości i stabilności konstrukcji.
                    </p>
                    <div className="mt-10 space-y-6">
                        <p>
                            Główną korzyścią wynikającą z zastosowania siatek zbrojeniowych jest zwiększona wytrzymałość betonu na naprężenia. Beton, jako materiał, ma stosunkowo niską wytrzymałość na rozciąganie. W momencie, gdy obciążenie podnosi się do pewnego poziomu, beton zaczyna pękać. Jednak dzięki obecności siatek zbrojeniowych, które działają jako dodatkowa siła nośna, beton jest zdolny do przenoszenia większych naprężeń bez pękania.
                        </p>
                        <p>
                            Siatki zbrojeniowe również zwiększają wytrzymałość betonu na ściskanie. Kiedy beton jest poddawany dużemu obciążeniu ściskającemu, siatki zbrojeniowe pomagają w równomiernym rozkładzie tego obciążenia na całą konstrukcję. To sprawia, że beton jest bardziej odporny na zgniatanie i nie ulega uszkodzeniom, które mogłyby pojawić się w przypadku braku zbrojenia.
                        </p>
                        <p>
                            Warto również wspomnieć o ekonomicznych korzyściach wynikających z zastosowania siatek zbrojeniowych. Choć początkowy koszt zakupu i instalacji siatek może być nieco wyższy, to ich obecność znacząco wpływa na długoterminowe oszczędności. Dzięki zwiększonej wytrzymałości i trwałości betonu, konstrukcje wymagają mniej kosztownych napraw i konserwacji w przyszłości, co prowadzi do zmniejszenia kosztów utrzymania budynku.
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}

