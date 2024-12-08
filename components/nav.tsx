'use client'
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import Image from 'next/image'
import logo from '@/public/logo-steeltrans-white.svg'
import ueStars from '@/public/ue-stars.svg'

const links = [
    { href: '#_', label: 'PL' },
    { href: '/ua', label: 'UA' },
    { href: '/en', label: 'EN' },
    { href: '/cz', label: 'CZ' },
    { href: '/sk', label: 'SK' },
]
const navigation = [
    { name: 'Strona główna', href: '/' },
    { name: 'O nas', href: 'o-nas' },
    { name: 'Oferta', href: 'oferta' },
    { name: 'Kariera', href: 'https://transbet.com.pl/kariera' },
    { name: 'Transbet TCS', href: 'https://transbettcs.com' }
]

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 40);
        });
    }, []);

    return (
        <header className={scroll ? "bg-white border-b border-gray-700 fixed z-30 w-full top-0" : "bg-transparent text-white border-b border-gray-700 fixed z-50 w-full top-0"}>
            <nav className="mx-auto flex max-w-7xl border-x border-gray-700  items-center justify-between relative" aria-label="Global">
                <div className="flex">
                    <a href="/" className="border-r border-gray-700 px-8 hover:bg-orange-500 transition duration-200">
                        <span className="sr-only">Your Company</span>
                        {/* <p className=" uppercase">Transbet Zbrojarnia</p> */}
                        <Image src={logo} className={scroll ? "w-40 h-auto stroke-black grayscale invert" : "w-40 h-auto"} alt="" />
                        {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
                    </a>
                </div>
                <div className="flex lg:hidden border-l border-gray-700 w-24 h-24">
                    <button
                        type="button"
                        className="flex items-center justify-center text-white bg-black h-full w-full"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex ml-8 lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="leading-6 no-underline underline-offset-4 hover:text-orange-500 duration-150 hover:underline hover:underline-offset-4 trannsiotion">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="h-20 w-20 flex justify-center items-center text-sm relative z-10 leading-6 border-l border-gray-700 bg-[#004494] text-[#ffd617]  hover:bg-black transition duration-200">
                        <Image className='w-14 h-14' alt='' src={ueStars} />
                    </div>
                    <Menu>
                        <Menu.Button>
                            <div className="relative">
                                <div className="h-20 w-20 flex justify-center items-center text-sm relative z-10 leading-6 border-l border-gray-700 bg-black text-white hover:text-black hover:bg-orange-500 transition duration-200">PL</div>
                                <Menu.Items>
                                    <div className="absolute inset-0 flex flex-col">
                                        {links.map((link) => (
                                            /* Use the `active` state to conditionally style the active item. */
                                            <Menu.Item key={link.href} as={Fragment}>
                                                {({ active }) => (
                                                    <a
                                                        href={link.href}
                                                        className={`${active ? 'inline-bloack text-sm relative z-10 leading-6 py-6 border-l border-gray-700  px-8 bg-black text-white hover:text-white hover:bg-black transition duration-200' : 'text-sm relative z-10 leading-6 py-6 border-l border-gray-700  px-8 bg-orange-500 text-white hover:text-white hover:bg-orange-500 transition duration-200'
                                                            }`}
                                                    >
                                                        {link.label}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </div>
                        </Menu.Button>
                    </Menu>
                    <a href="#kontakt" className="text-sm  leading-6 border-l border-gray-700 h-20 px-4 flex justify-center items-center bg-orange-500 text-white hover:text-black hover:bg-orange-500 transition duration-200">
                        Skontaktuj się <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
                <a href='https://transbettcs.com' target='_blank' className="bg-orange-500 text-white hover:text-black transition duration-150 absolute left-0 -bottom-16 z-50 w-44 py-2 h-12 flex items-center justify-center">Budowa tuneli <span aria-hidden="true" className='ml-2'>&rarr;</span></a>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {/* <p className=" uppercase">Transbet Zbrojarnia</p> */}
                            <Image src={logo} className="invert grayscale w-40 h-auto" alt="" />
                            {/* <Image
                                className="h-8 w-auto"
                                src={logo}
                                alt=""
                            /> */}
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className=" divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <Menu>
                                    <Menu.Button>
                                        <div className="relative">
                                            <div className="text-sm relative z-10 leading-6 border-l border-gray-700 h-full px-8 py-6 bg-black text-white hover:text-black hover:bg-orange-500 transition duration-200">EN</div>
                                            <Menu.Items>
                                                <div className="absolute inset-0 flex flex-col">
                                                    {links.map((link) => (
                                                        /* Use the `active` state to conditionally style the active item. */
                                                        <Menu.Item key={link.href} as={Fragment}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={link.href}
                                                                    className={`${active ? 'inline-bloack text-sm relative z-10 leading-6 py-6 border-l border-gray-700  px-8 bg-black text-white hover:text-white hover:bg-black transition duration-200' : 'text-sm relative z-10 leading-6 py-6 border-l border-gray-700  px-8 bg-orange-500 text-white hover:text-white hover:bg-orange-500 transition duration-200'
                                                                        }`}
                                                                >
                                                                    {link.label}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </div>
                                            </Menu.Items>
                                        </div>
                                    </Menu.Button>
                                </Menu>
                                <a
                                    href="#kontakt"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Skontaktuj się
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
