import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Contact from '@/components/contact'

export const metadata: Metadata = {
    title: 'Strzemiona zbrojeniowe - Zbrojarnia Transbet',
    description: 'Najwyższa jakość i trwałość strzemion budowlanych. Strzemiona budowlane dostępne w różnych rozmiarach.',
}

export default function Strzemiona() {
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
                            <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">Strzemiona zbrojeniowe</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Najwyższa jakość i trwałość strzemion budowlanych. Strzemiona budowlane dostępne w różnych rozmiarach.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                    <p className="text-base  leading-7 text-orange-600">Stalowe strzemiona budowlane</p>
                    <h1 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Strzemiona budowlane</h1>
                    <p className="mt-6 text-xl leading-8">
                        Stalowe strzemiona zbrojeniowe to niezbędne narzędzie w budownictwie i przemyśle, które jest wykorzystywane do wzmocnienia betonu. Są one powszechnie stosowane w konstrukcjach, takich jak mosty, wieżowce, tunele i inne budynki o dużych obciążeniach.
                    </p>
                    <div className="mt-10 space-y-6">
                        <p>
                            Stalowe strzemiona zbrojeniowe są wykonane z wysokiej jakości stali, która charakteryzuje się wysoką wytrzymałością i odpornością na korozję. Dzięki temu są one w stanie wytrzymać duże naprężenia i zapewnić optymalną siłę i stabilność konstrukcji betonowych.
                        </p>
                        <p>
                            Główną funkcją stalowych strzemion zbrojeniowych jest przenoszenie sił rozciągających między betonem a stalą. W momencie, gdy beton jest narażony na obciążenia, takie jak nacisk, siła rozciągająca jest przenoszona na stalowe strzemiona, które z kolei rozpraszają tę siłę wzdłuż konstrukcji. Dzięki temu beton pozostaje wytrzymały i stabilny, nie pękając pod wpływem obciążeń.
                        </p>
                        <p>
                            Stalowe strzemiona zbrojeniowe są dostępne w różnych kształtach i rozmiarach, w zależności od wymagań projektu budowlanego. Najpopularniejsze modele to strzemiona prostokątne, zygzakowate, spiralne i śrubowe. Wybór odpowiedniego typu strzemion zależy od konkretnych potrzeb i specyfikacji konstrukcyjnych.
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}

