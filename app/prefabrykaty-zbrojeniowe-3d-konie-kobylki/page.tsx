import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'

export const metadata: Metadata = {
    title: 'Preabrykaty zbrojeniowe 3D (konie, kobyłki) - Zbrojarnia Transbet',
    description: 'Wykonujemy gotowe elementy 3D zbrojenia budowlanego i dostarczamy je na terenie całego kraju.',
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
                        <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">Preabrykaty zbrojeniowe 3D (konie, kobyłki)</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Wykonujemy gotowe elementy 3D zbrojenia budowlanego i dostarczamy je na terenie całego kraju.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                <p className="text-base  leading-7 text-orange-600">Konie i kobyłki</p>
                <h1 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Prefabrykaty zbrojeniowe 3D</h1>
                <p className="mt-6 text-xl leading-8">
                Dystanse, znane również jako „kobyłki”, są nieodłącznym elementem w konstrukcji płyt żelbetowych. Są one używane do oddzielenia dolnego i górnego zbrojenia w celu zapewnienia prawidłowego ustawienia i konstrukcji płyty.
                </p>
                <div className="mt-10 space-y-6">
                    <p>
                    Konstrukcja dystansów jest tak zaprojektowana, aby mogły one wytrzymać ogromne siły i naprężenia, jakim są poddawane płyty żelbetowe. Mają one specyficzną formę, która pozwala im wytrzymać takie obciążenia. Wygięcie dystansów pod kątem prostym jest konieczne dla zapewnienia prawidłowej kontroli wytrzymałości i równowagi konstrukcji.
                    </p>
                    <p>
                    W kontekście dystansów, termin „kobyłki” jest często używany jako ich potoczna nazwa. Nazwa ta odnosi się do ich kształtu, który przypomina kopyta końskie. Kobyłki są stabilne i trwałe, dlatego są popularnym wyborem w konstrukcjach żelbetowych.
                    </p>
                </div>
            </div>
        </div>
    )
}

