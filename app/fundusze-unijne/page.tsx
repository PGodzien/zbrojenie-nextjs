import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Contact from '@/components/contact'
import ue from '@/public/flagi-ue-projekt.webp'

export const metadata: Metadata = {
    title: 'Fundusze Unijne - Transbet',
    description: 'Dowiedz się, jak Transbet korzysta z funduszy unijnych w celu rozwoju i innowacji w branży budowlanej.',
}

export default function About() {
    return (
        <>
            <Nav />
            <div className="border-b">
                <div className="relative border-b border-gray-700 isolate overflow-hidden bg-gray-900">
                    <Image
                        src={slider}
                        alt="Fundusze unijne"
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-black via-black to-orange-700 opacity-80"></div>
                    <div className="mx-auto max-w-7xl pb-24 pt-48 border-x border-gray-700 px-6 lg:px-8 relative z-10">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl tracking-tight text-white sm:text-6xl">Fundusze Unijne</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Poznaj, jak firma Steeltrans korzysta z funduszy unijnych, aby wspierać innowacje i rozwój w branży budowlanej.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                    <Image className='pb-12' alt='' src={ue} />
                    <div className="mx-auto prose">
                        <p className="text-base leading-7 text-orange-600">Inwestujemy w przyszłość</p>
                        <h1 className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl">Wdrożenie nowej technologii produkcji zbrojeń stalowych do zastosowania w konstrukcjach żelbetowych</h1>
                        <p className="mt-6 text-xl leading-8 max-w-2xl">
                            <b className="">Firma STEELTRANS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</b></p>
                    </div>
                    <div className="mt-10 space-y-6 prose mx-auto">
                        <p>jest w trakcie realizacji projektu współfinansowanego z Europejskiego Funduszu Rozwoju Regionalnego w ramach Priorytetu nr FEPK.01 „Konkurencyjna i Cyfrowa Gospodarka” programu regionalnego Fundusze Europejskie dla Podkarpacia 2021-2027 „Wdrożenie nowej technologii produkcji zbrojeń stalowych do zastosowania w konstrukcjach żelbetowych.”</p>
                        <p><strong>Numer projektu:</strong> FEPK.01.03-IZ.00-001/23</p>

                        <h2>Cele i planowane efekty projektu:</h2>
                        <p>Projekt realizujemy, aby wdrożyć nową technologię produkcji zbrojeń stalowych z innowacyjnym zabezpieczeniem powierzchni krytycznych przed korozją.</p>
                        <p>Na podstawie własnych doświadczeń produkcyjnych oraz prac badawczo-rozwojowych, opracowano proces produkcji, który eliminuje kluczowe problemy technologiczne, takie jak:</p>
                        <ul>
                            <li>Korozja prętów stalowych w krytycznych obszarach,</li>
                            <li>Niewłaściwe składowanie i transport prętów,</li>
                            <li>Niska jakość powierzchni po cięciu.</li>
                        </ul>
                        <p>Efektem projektu będzie opracowanie nowoczesnej linii produkcyjnej o następujących innowacyjnych cechach:</p>
                        <ul>
                            <li>Automatyzacja wszystkich etapów obróbki prętów,</li>
                            <li>Precyzyjne programowanie procesów cięcia,</li>
                            <li>Ekologiczne zabezpieczenie powierzchni stalowych,</li>
                            <li>Zwiększona wydajność i jakość produkcji.</li>
                        </ul>

                        <h2>Zakupy inwestycyjne:</h2>
                        <p>W ramach projektu zakupione zostaną:</p>
                        <ul>
                            <li><strong>Gilotyna do cięcia prętów</strong> o długości do 12 m, wyposażona w systemy automatycznego przesuwu i cięcia,</li>
                            <li><strong>Urządzenie do wykonywania zbrojenia do pali żelbetowych</strong>, umożliwiające precyzyjne i zautomatyzowane spawanie elementów zbrojeniowych.</li>
                        </ul>

                        <h2>Projekt jest skierowany do:</h2>
                        <ul>
                            <li>Firm budowlanych i wykonawczych, realizujących inwestycje w infrastrukturę drogową, mostową, portową i przemysłową,</li>
                            <li>Inwestorów publicznych i prywatnych odpowiedzialnych za budowę obiektów infrastrukturalnych, takich jak drogi, mosty, elektrownie, tunele czy porty.</li>
                        </ul>

                        <h2>Beneficjenci projektu:</h2>
                        <ul>
                            <li><strong>Klienci biznesowi</strong> – otrzymają wysokiej jakości zbrojenia stalowe, odporne na korozję i spełniające najwyższe standardy techniczne,</li>
                            <li><strong>Firma Steeltrans</strong> – dzięki wdrożeniu innowacyjnej technologii umocni swoją pozycję konkurencyjną na rynku krajowym i międzynarodowym,</li>
                            <li><strong>Środowisko naturalne</strong> – poprzez ograniczenie odpadów produkcyjnych i emisji hałasu, projekt pozytywnie wpłynie na środowisko.</li>
                        </ul>

                        <h2>Wartość projektu:</h2>
                        <p>2 541 795,00 PLN</p>

                        <h2>Wysokość wkładu z Funduszy Europejskich:</h2>
                        <p>1 446 550,00 PLN</p>

                        <p>#FunduszeUE #FunduszeEuropejskie</p>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}
