import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Contact from '@/components/contact'

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
                                Poznaj, jak firma Transbet korzysta z funduszy unijnych, aby wspierać innowacje i rozwój w branży budowlanej.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                    <div className="mx-auto prose">
                        <p className="text-base leading-7 text-orange-600">Inwestujemy w przyszłość</p>
                        <h1 className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl">Fundusze Unijne w Transbet</h1>
                        <p className="mt-6 text-xl leading-8 max-w-2xl">
                            Transbet Sp. z o.o. aktywnie uczestniczy w projektach finansowanych przez fundusze unijne, co pozwala na wdrażanie nowoczesnych technologii i zwiększanie efektywności produkcji.
                        </p>
                    </div>
                    <div className="mt-10 space-y-6 prose mx-auto">
                        <p>
                            Dzięki wsparciu funduszy unijnych, firma Transbet inwestuje w modernizację swojego parku maszynowego, co pozwala na jeszcze wyższą jakość naszych prefabrykatów oraz szybszą realizację zleceń.
                        </p>
                        <p>
                            Fundusze te umożliwiły również wprowadzenie innowacyjnych rozwiązań w zakresie produkcji stali zbrojeniowej, co przyczynia się do poprawy efektywności procesów oraz redukcji kosztów produkcji.
                        </p>
                        <p>
                            Realizacja projektów z dofinansowaniem unijnym pozwoliła nam na rozwój infrastruktury, co z kolei umożliwiło ekspansję na nowe rynki – zarówno w Polsce, jak i za granicą.
                        </p>
                        <p>
                            Jesteśmy dumni z tego, że dzięki funduszom unijnym możemy nie tylko zwiększyć konkurencyjność naszej firmy, ale również przyczynić się do rozwoju sektora budowlanego i infrastrukturalnego w Polsce.
                        </p>
                        <p>
                            Fundusze unijne to inwestycja w przyszłość, która pozwala na realizację ambitnych projektów, podnoszenie jakości naszych produktów oraz optymalizację procesów produkcyjnych.
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}
