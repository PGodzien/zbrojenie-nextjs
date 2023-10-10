import Image from "next/image"
import budimex from '@/public/budimex-logo.webp'
import besta from '@/public/besta-logo.webp'
import inzynieria from '@/public/inzynieria-logo.webp'
import skanska from '@/public/skanska-logo.webp'
import polaqua from '@/public/polaqua-logo.webp'

export default function Logos() {
    return (
        <div className="bg-white border-y">
            <div className="mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8 border-x">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-lg font-semibold leading-8 text-gray-900">
                        Zaufali nam liderzy z brany budowlanej:
                    </h2>
                    <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
                        <Image
                            className="col-span-2 h-24 w-full object-contain object-left lg:col-span-1"
                            src={budimex}
                            alt="Transistor"
                        />
                        <Image
                            className="col-span-2 h-24 w-full object-contain object-left lg:col-span-1"
                            src={besta}
                            alt="Transistor"
                        />
                        <Image
                            className="col-span-2 h-24 w-full object-contain object-left lg:col-span-1"
                            src={inzynieria}
                            alt="Transistor"
                        />
                        <Image
                            className="col-span-2 h-24 w-full object-contain object-left lg:col-span-1"
                            src={skanska}
                            alt="Transistor"
                        />
                        <Image
                            className="col-span-2 h-24 w-full object-contain object-left lg:col-span-1"
                            src={polaqua}
                            alt="Transistor"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
