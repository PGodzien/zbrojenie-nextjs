import { CalendarIcon, CogIcon, MapIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Strojový park',
        description:
            'Automatizované stroje jsou zárukou efektivity a přesnosti. Díky vyspělé technologii jsme schopni poskytovat služby na té nejvyšší úrovni.',
        href: '#',
        icon: CogIcon,
    },
    {
        name: 'Termíny dokončení',
        description:
            'Náš zkušený tým pracuje efektivně a efektivně, aby dodal vaše prefabrikované zakázky co nejrychleji, bez kompromisů v kvalitě.',
        href: '#',
        icon: CalendarIcon,
    },
    {
        name: 'Vysoká dostupnost',
        description:
            'Naše zásilková služba zasahuje do Polska a dalších zemí. Bez ohledu na vaši polohu doručíme vaši objednávku přesně tam, kde ji potřebujete.',
        href: '#',
        icon: MapIcon,
    },
    {
        name: 'Servis a poradenství',
        description:
            'Naši odborníci poskytují profesionální podporu a zajišťují stálou dostupnost neocenitelných rad a tipů, které vám zajistí ty nejlepší zkušenosti.',
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
                    Betonářská ocel a prefabrikované prvky od společnosti Transbet
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Zjistěte několik důvodů, proč se vyplatí využít služeb zbrojovky Transbet v oblasti prefabrikované výztuže a výztuže staveb.
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
