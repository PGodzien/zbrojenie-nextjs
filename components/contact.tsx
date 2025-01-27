import Map from "./map"

export default function Contact() {
    return (
        <div id="kontakt" className="">
            <div className="bg-white border-b">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 border-x py-24 sm:py-32">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl  tracking-tight text-gray-900">Kontakt zbrojarnie steeltrans</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Zapraszamy do kontaktu z naszą zbrojarnią. Nasi specjaliści czekają na pytania dotyczące oferty wyrobów hutniczych.
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
                            <h3 className="border-l border-orange-600 pl-6  text-gray-900">Adres</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <p>Topolowa 5</p>
                                <p>37-700 Przemyśl</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-orange-600 pl-6  text-gray-900">Firma</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <p>Steeltrans Sp. z o.o.</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-orange-600 pl-6  text-gray-900">Dane</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <p>NIP: 7952536987</p>
                                <p>KRS: 0000618210</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            <Map />
        </div>
    )
}
