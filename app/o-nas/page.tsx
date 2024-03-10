import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Contact from '@/components/contact'

export const metadata: Metadata = {
    title: 'O nas - Zbrojarnia Transbet',
    description: 'Poznaj naszą firmę i nasze wieloletnie doświadczenie w branży zbrojeniowej. Dowiedz się więcej o nas.',
}

export default function About() {
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
                    <div className="absolute inset-0 bg-gradient-to-bl from-black via-black to-orange-700 opacity-80"></div>
                    <div className="mx-auto max-w-7xl pb-24 pt-48 border-x border-gray-700 px-6 lg:px-8 relative z-10">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">O firmie</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Poznaj naszą firmę i nasze wieloletnie doświadczenie w branży zbrojeniowej. Dowiedz się więcej o nas.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                    <p className="text-base  leading-7 text-orange-600">Poznaj nas lepiej</p>
                    <h1 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Zbrojarnia Transbet</h1>
                    <p className="mt-6 text-xl leading-8 max-w-2xl">
                        Pragniemy poinformować, że firma Transbet Betoniarnie Sp. z o.o. Sp. K. oprócz produkcji betonów zajmuje się, również produkcją prefabrykatów zbrojeniowych.
                    </p>
                    <div className="mt-10 space-y-6">
                        <p>
                            Produkcja prefabrykatów zbrojeniowych, która realizuje Nasza zbrojarnia obejmuje wykonywanie prefabrykatów z prętów o średnicach od 6 mm do 40 mm. Ich profilowanie oraz cięcie umożliwiają nowoczesne giętarki oraz zaawansowane automaty zbrojarskie.
                        </p>
                        <p>
                            Dysponujemy zautomatyzowanym parkiem maszynowym, który gwarantuje bardzo wysoką precyzję wykonywanych elementów. Dzięki nim prefabrykaty zbrojarskie powstają w możliwie najkrótszym czasie.
                        </p>
                        <p>
                            Stal zbrojeniowa sprefabrykowana w firmie Transbet spełniają wszystkie obowiązujące normy branżowe. Każda pozycja (zbrojenia) pakowana jest w paczki i oznaczona poprzez przypiętą do nich etykietę z wyrysowanym kształtem pozycji i wszystkimi danymi niezbędnymi do ich identyfikacji. Ułatwia to proces wmontowania na budowie i zapewnia ciągłość prac zbrojarskich.
                        </p>
                        <p>
                            Dysponując zgranym zespołem, szybko realizujemy każde zlecenie zapewniając sprawną obsługę i doradztwo techniczne.
                        </p>
                        <p className=''>
                            Dostarczamy prefabrykaty w każde miejsce w Polsce.
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}

