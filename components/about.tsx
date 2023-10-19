'use client'
import Image from "next/image"
import slider from '@/public/slider_02.jpg'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { PlayCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"

export default function About() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className="border-b bg-gray-50">
            <div className="relative max-w-7xl mx-auto overflow-hidden border-x">
                <div className="relative h-80 overflow-hidden bg-black md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                    <Image
                        className="h-full w-full object-cover"
                        src={slider}
                        alt=""
                    />
                    <div className="absolute inset-0 z-10 flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <button
                            type="button"
                            onClick={openModal}
                            className="w-40 h-40 text-white hover:text-orange-500 duration-200 transition"
                        >
                            <PlayCircleIcon />
                        </button>
                    </div>

                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-90" />

                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-4xl mx-auto shadow-xl transition-all">
                                            <button
                                                type="button"
                                                className="absolute opacity-20 hover:opacity-100 text-white z-50 w-14 h-14 -top-20 right-0"
                                                onClick={closeModal}
                                            >
                                                <XCircleIcon />
                                            </button>
                                            <div className="">
                                                <div className="w-full h-full">
                                                    <iframe className="youtube-video" src="https://www.youtube.com/embed/EtQ8sad15s8?si=QCe94DBdYxN0jRYZ" title="Zbrojenie Budowlane Transbet - Prefabrykaty Zbrojeniowe i Wyroby Hutnicze" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-700 opacity-50"></div>
                </div>
                <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                        <h2 className="text-base  leading-7 text-orange-400">Stal zbrojeniowa i zbrojenie budowlane</h2>
                        <h3 className="mt-2 text-3xl  tracking-tight sm:text-4xl">Produkcja prefabrykatów zbrojeniowych</h3>
                        <p className="mt-6 text-base leading-7">
                            Nasza zbrojarnia obejmuje wykonywanie prefabrykatów z prętów o średnicach od 6 mm do 40 mm. Wykorzystujemy stal B500A,B500B oraz B500SP.
                        </p>
                        <div className="mt-8">
                            <a
                                href="/oferta"
                                className="bg-black px-6 py-4 text-sm  text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                Cała oferta
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
