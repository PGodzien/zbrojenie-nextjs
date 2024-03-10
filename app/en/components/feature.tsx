import { CalendarIcon, CogIcon, MapIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Machine park',
        description:
            'Automated machinery is a guarantee of efficiency and precision. Thanks to advanced technology, we are able to provide services at the highest level.',
        href: '#',
        icon: CogIcon,
    },
    {
        name: 'Completion dates',
        description:
            'Our skilled team works efficiently and effectively to deliver your prefab orders as quickly as possible, without compromising on quality.',
        href: '#',
        icon: CalendarIcon,
    },
    {
        name: 'High availability',
        description:
            'Our delivery service reaches both Poland and other countries. Regardless of your location, we will deliver your order exactly where you need it.',
        href: '#',
        icon: MapIcon,
    },
    {
        name: 'Service and advice',
        description:
            'Our experts provide professional support, ensuring constant availability of invaluable advice and tips to ensure you get the best experience.',
        href: '#',
        icon: UsersIcon,
    },
]

export default function Feature() {
    return (
        <div className="bg-white border-y">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 border-x py-24">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl  tracking-tight text-gray-900 sm:text-4xl">
                        Reinforcing steel and prefabricated elements from Transbet
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Find out some reasons why it is worth using the services of the Transbet Armory in the field of prefabricated reinforcement and construction reinforcement.
                    </p>
                </div>
                <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base  leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center bg-black">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
