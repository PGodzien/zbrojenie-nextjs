import { CalendarIcon, CogIcon, MapIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Park maszynowy',
        description:
            'Zautomatyzowany park maszynowy to gwarancja efektywności i precyzji. Dzięki zaawansowanej technologii, jesteśmy w stanie świadczyć usługi na najwyższym poziomie.',
        href: '#',
        icon: CogIcon,
    },
    {
        name: 'Terminy realizacji',
        description:
            'Nasz wykwalifikowany zespół pracuje sprawnie i efektywnie, aby dostarczyć zamówienia prefabrykatów najszybciej, jak to możliwe, bez kompromisów w jakości.',
        href: '#',
        icon: CalendarIcon,
    },
    {
        name: 'Wysoka dostępność',
        description:
            'Nasza usługa dostawy sięga zarówno Polski, jak i innych krajów. Niezależnie od lokalizacji, dostarczymy Twoje zamówienie dokładnie tam, gdzie tego potrzebujesz.',
        href: '#',
        icon: MapIcon,
    },
    {
        name: 'Obsługa i doradztwo',
        description:
            'Nasi eksperci służą profesjonalnym wsparciem, zapewniając ciągłą dostępność do nieocenionych rad i wskazówek, aby zapewnić Ci najlepsze doświadczenie.',
        href: '#',
        icon: UsersIcon,
    },
]

export default function Feature() {
    return (
        <div className="bg-white border-y">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 border-x py-24">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Stal zbrojeniowa i prefabrykaty od Transbet
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Poznaj kilka powodów dla których warto skorzystać z usług Zbrojarni Transbet w zakresie prefebrykatów zbrojeniowych oraz zbrojeń budowlanych.
                    </p>
                </div>
                <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
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
