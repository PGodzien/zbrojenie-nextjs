'use client'
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Menu } from '@headlessui/react'

const links = [
    { href: '#_', label: 'SK' },
    { href: '/pl', label: 'PL' },
    { href: '/ua', label: 'UA' },
    { href: '/en', label: 'EN' },
    { href: '/cz', label: 'CZ' },
]
const navigation = [
    { name: 'Domov', href: '/sk/' },
    { name: 'O nás', href: '/sk/o-nas/' },
    { name: 'Ponuka', href: '/sk/ponuka/' },
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
            <nav className="mx-auto flex max-w-7xl border-x border-gray-700  items-center justify-between" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/sk" className="border-r border-gray-700  py-6 px-8 hover:bg-orange-500 transition duration-200">
                        <span className="sr-only">Your Company</span>
                        <p className=" uppercase">Zbrojnica Transbet</p>
                        {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
                    </a>
                </div>
                <div className="flex lg:hidden border-l border-gray-700  py-6 px-8">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm  leading-6">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Menu>
                        <Menu.Button>
                            <div className="relative">
                                <div className="text-sm relative z-10 leading-6 border-l border-gray-700 h-full px-8 py-6 bg-black text-white hover:text-black hover:bg-orange-500 transition duration-200">SK</div>
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
                    <a href="#kontakt" className="text-sm  leading-6 py-6 border-l border-gray-700  px-8 bg-orange-500 text-white hover:text-black hover:bg-orange-500 transition duration-200">
                        Kontakt <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/sk" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <p className=" uppercase">Zbrojnica Transbet</p>
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
                                            <div className="text-sm relative z-10 leading-6 border-l border-gray-700 h-full px-8 py-6 bg-black text-white hover:text-black hover:bg-orange-500 transition duration-200">SK</div>
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
                                    Kontakt
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
