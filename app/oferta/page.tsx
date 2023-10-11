import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'

export const metadata: Metadata = {
    title: 'O nas - Zbrojarnia Transbet',
    description: 'Poznaj naszą firmę i nasze wieloletnie doświadczenie w branży zbrojeniowej. Dowiedz się więcej o nas.',
}

export default function About() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900">
            <Image
                src={slider}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-black via-black to-orange-700 opacity-80"></div>
            <div className="mx-auto max-w-7xl pb-24 pt-48 border-x px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">O firmie</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Poznaj naszą firmę i nasze wieloletnie doświadczenie w branży zbrojeniowej. Dowiedz się więcej o nas.
                    </p>
                </div>
            </div>
        </div>
    )
}

