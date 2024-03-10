import { CalendarIcon, CogIcon, MapIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'машинний парк',
        description:
            'Автоматизоване обладнання - гарантія ефективності та точності. Завдяки передовим технологіям ми можемо надавати послуги на найвищому рівні.',
        href: '#',
        icon: CogIcon,
    },
    {
        name: 'Терміни завершення',
        description:
            'Наша кваліфікована команда працює ефективно та результативно, щоб якнайшвидше доставити ваші замовлення на збірні конструкції без шкоди для якості.',
        href: '#',
        icon: CalendarIcon,
    },
    {
        name: 'Висока доступність',
        description:
            'Наша служба доставки досягає як Польщі, так і інших країн. Незалежно від вашого місця розташування ми доставимо ваше замовлення саме туди, куди вам потрібно.',
        href: '#',
        icon: MapIcon,
    },
    {
        name: 'Сервіс та консультації',
        description:
            'Наші експерти надають професійну підтримку, забезпечуючи постійну доступність безцінних порад і підказок, щоб забезпечити вам найкращий досвід.',
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
                        АРМАТУРНА СТАЛЬ ТА ЗБІРНІ КОМПОНЕНТИ ВІД ТРАНСБЕТ
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Дізнайтеся кілька причин, чому варто скористатися послугами Transbet Armory у сфері збірного армування та армування конструкцій.
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
