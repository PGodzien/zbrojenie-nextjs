import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'

export const metadata: Metadata = {
    title: 'Про нас - Transbet Armory',
    description: 'Познайомтеся з нашою компанією та нашим багаторічним досвідом у збройовій промисловості. Дізнайтеся більше про нас.',
}

export default function пронас() {
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
                            <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">Про компанію</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Познайомтеся з нашою компанією та нашим багаторічним досвідом у збройовій промисловості. Дізнайтеся більше про нас.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                    <p className="text-base  leading-7 text-orange-600">Познайомтеся з нами ближче</p>
                    <h1 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Transbet Armory</h1>
                    <p className="mt-6 text-xl leading-8 max-w-2xl">
                        Повідомляємо, що Transbet Betonarnie Sp. z o. o. Sp. К., крім виробництва бетону, займається також виробництвом збірних арматурних елементів.</p>
                    <div className="mt-10 space-y-6">
                        <p>
                            Виробництво збірних арматурних елементів, яке здійснює наш арматурний завод, включає виробництво збірних елементів зі стрижнів діаметром від 6 мм до 40 мм. Їх профілювання та різання можливо за допомогою сучасних згинальних верстатів і передових арматурних верстатів.
                        </p>
                        <p>
                            Ми маємо автоматизований машинний парк, який гарантує дуже високу точність виготовлених елементів. Завдяки їм збірні елементи армування створюються в найкоротші терміни.
                        </p>
                        <p>
                            Збірна арматура Transbet відповідає всім діючим галузевим стандартам. Кожна деталь (арматура) упаковується в пакети і маркується прикріпленим до них ярликом з формою деталі та всіма даними, необхідними для її ідентифікації. Це полегшує процес монтажу на будівельному майданчику та забезпечує безперервність армувальних робіт.
                        </p>
                        <p>
                            Завдяки злагодженій команді ми швидко виконуємо кожне замовлення, надаючи ефективне обслуговування та технічну консультацію.
                        </p>
                        <p className=''>
                            Ми доставляємо готові елементи в будь-яку точку Польщі.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

