import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'

export const metadata: Metadata = {
    title: 'About us - Transbet Armory',
    description: 'Get to know our company and our many years of experience in the arms industry. Find out more about us.',
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
                            <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">About company</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Get to know our company and our many years of experience in the arms industry. Find out more about us.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                    <p className="text-base  leading-7 text-orange-600">Get to know us better</p>
                    <h1 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Transbet Armory</h1>
                    <p className="mt-6 text-xl leading-8 max-w-2xl">
                        We would like to inform you that Transbet Betonarnie Sp. z o. o. Sp. K., in addition to the production of concrete, is also involved in the production of prefabricated reinforcement elements.
                    </p>
                    <div className="mt-10 space-y-6">
                        <p>
                            The production of prefabricated reinforcement elements carried out by our reinforcement plant includes the production of prefabricated elements from bars with diameters ranging from 6 mm to 40 mm. Their profiling and cutting is possible with modern bending machines and advanced reinforcement machines.
                        </p>
                        <p>
                            We have an automated machine park that guarantees very high precision of manufactured elements. Thanks to them, prefabricated reinforcement elements are created in the shortest possible time.
                        </p>
                        <p>
                            Reinforcing steel prefabricated by Transbet meets all applicable industry standards. Each item (reinforcement) is packed in packages and marked with a label attached to them with the shape of the item and all the data necessary to identify it. This facilitates the installation process on the construction site and ensures continuity of reinforcement works.
                        </p>
                        <p>
                            With a well-coordinated team, we quickly complete each order, providing efficient service and technical advice.
                        </p>
                        <p className=''>
                            We deliver prefabricated elements to every place in Poland.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

