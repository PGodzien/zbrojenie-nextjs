import Map from "./map"

export default function Contact() {
    return (
        <div id="kontakt" className="">
            <div className="bg-white border-b">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 border-x py-24 sm:py-32">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl  tracking-tight text-gray-900">Kontaktné konštrukčné výstuže</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Prosím, kontaktujte našu posilňovňu. Naši špecialisti čakajú na otázky ohľadom ponuky výrobkov z ocele.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        <div>
                            <h3 className="border-l border-orange-600 pl-6  text-gray-900">Kontakt</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <a href="mailto:zbrojarnia@transbet.com.pl">zbrojarnia@transbet.com.pl</a>
                                <p>+48 539 677 770</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-orange-600 pl-6  text-gray-900">Adresa</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <p>Topolowa 5</p>
                                <p>37-700 Przemyśl</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-orange-600 pl-6  text-gray-900">Podnikanie</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <p>TRANSBET BETONIARNIE GROCHOWICZ Sp. K.</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-orange-600 pl-6  text-gray-900">Údaje</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <p>NIP: 795-10-07-169</p>
                                <p>KRS: 0000573370</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            <Map />
        </div>
    )
}
