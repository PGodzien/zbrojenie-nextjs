import { CalendarIcon, CogIcon, MapIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Strojový park',
        description:
            'Automatizované stroje sú zárukou efektívnosti a presnosti. Vďaka vyspelej technológii sme schopní poskytovať služby na najvyššej úrovni.',
        href: '#',
        icon: CogIcon,
    },
    {
        name: 'Termíny dokončenia',
        description:
            'Náš skúsený tím pracuje efektívne a efektívne, aby doručil vaše prefabrikované objednávky čo najrýchlejšie, bez kompromisov v oblasti kvality.',
        href: '#',
        icon: CalendarIcon,
    },
    {
        name: 'Vysoká dostupnosť',
        description:
            'Naša doručovacia služba zasahuje do Poľska aj do iných krajín. Bez ohľadu na to, kde sa nachádzate, vašu objednávku doručíme presne tam, kde ju potrebujete.',
        href: '#',
        icon: MapIcon,
    },
    {
        name: 'Servis a poradenstvo',
        description:
            'Naši odborníci poskytujú profesionálnu podporu a zabezpečujú neustálu dostupnosť neoceniteľných rád a tipov, aby ste zaistili tie najlepšie skúsenosti.',
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
                    Betónová oceľ a prefabrikované prvky od Transbet
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Zistite niekoľko dôvodov, prečo sa oplatí využiť služby zbrojovky Transbet v oblasti výstuže prefabrikátov a výstuže konštrukcií.
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
