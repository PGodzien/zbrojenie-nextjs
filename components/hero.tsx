import Image from "next/image"
import welder from '@/public/welder.jpg'

export default function Hero() {

    return (
        <div className="border-b">
            <div className="relative isolate overflow-hidden pt-14 max-w-7xl mx-auto">
                <Image
                    src={welder}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="bg-black absolute inset-0 bg-opacity-50"></div>
                <div className="mx-auto max-w-2xl py-36 relative z-10">
                    <div className="">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Data to enrich your online business
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="bg-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black duration-200 transition"
                            >
                                Cała oferta
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
