import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Park maszynowy',
        description:
            'Zautomatyzowany park maszynowy to gwarancja efektywności i precyzji. Dzięki zaawansowanej technologii, jesteśmy w stanie świadczyć usługi na najwyższym poziomie.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Terminy realizacji',
        description:
            'Nasz wykwalifikowany zespół pracuje sprawnie i efektywnie, aby dostarczyć zamówienia prefabrykatów najszybciej, jak to możliwe, bez kompromisów w jakości.',
        href: '#',
        icon: UsersIcon,
    },
    {
        name: 'Wysoka dostępność',
        description:
            'Nasza usługa dostawy sięga zarówno Polski, jak i innych krajów. Niezależnie od lokalizacji, dostarczymy Twoje zamówienie dokładnie tam, gdzie tego potrzebujesz.',
        href: '#',
        icon: TrashIcon,
    },
]

export default function Feature() {
    return (
        <div className="bg-white border-y">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 border-x py-24">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Dlaczego warto wybrać Transbet?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Poznaj kilka powodów dla których warto skorzystać z usług Zbrojarni Transbet w zakresie prefebrykatów zbrojeniowych oraz zbrojeń budowlanych.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    {/* <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div> */}
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 max-w-sm">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
