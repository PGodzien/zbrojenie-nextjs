import type { Metadata } from 'next'
import Image from 'next/image'
import slider from '@/public/welder.jpg'

export const metadata: Metadata = {
    title: 'Kosze zbrojeniowe - Zbrojarnia Transbet',
    description: 'Kosze zbrojeniowe na indywidualne zlecenie według specyfikacji z uwzględnieniem dokumentacji technicznej.',
}

export default function Kosze() {
    return (
        <div className="border-b">
            <div className="relative border-b border-gray-700 isolate overflow-hidden bg-gray-900">
                <Image
                    src={slider}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black opacity-80"></div>
                <div className="mx-auto max-w-7xl pb-24 pt-48 border-x border-gray-700 px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl  tracking-tight text-white sm:text-6xl">Kosze zbrojeniowe</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                        Kosze zbrojeniowe na indywidualne zlecenie według specyfikacji z uwzględnieniem dokumentacji technicznej.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700 px-8 py-24 border-x">
                <p className="text-base  leading-7 text-orange-600">Kosze zbrojeniowe PALE</p>
                <h1 className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">Kosze zbrojeniowe</h1>
                <p className="mt-6 text-xl leading-8">
                Kosze zbrojeniowe są jednym z kluczowych elementów w budownictwie, które stanowią podstawę konstrukcji wieńców stropowych, nadproży okiennych, słupków prostokątnych oraz belek i podciągów. Te niepozorne, metalowe struktury pełnią istotną rolę w zapewnieniu wytrzymałości i stabilności konstrukcji budynku.
                </p>
                <div className="mt-10 space-y-6">
                    <p>
                    Głównym celem koszy zbrojeniowych jest wzmocnienie betonu, który jest stosowany jako materiał konstrukcyjny. Beton w swojej czystej formie nie jest wystarczająco wytrzymały, aby wytrzymać duże obciążenia, takie jak ciężar budynku czy sejsmiczne wstrząsy. Dlatego konieczne jest zastosowanie zbrojenia, które jest wstępnie ukształtowanym zestawem stali, odpowiednio układającym się w konstrukcji betonowej.
                    </p>
                    <p>
                    Kosze zbrojeniowe są wykonane z drutu stalowego o odpowiedniej grubości w celu zapewnienia odpowiedniej wytrzymałości. Często są formowane w kształt siatki, co ułatwia ich montaż i umieszczanie w odpowiednich miejscach. Stalowa siatka jest elastyczna, co pozwala na jej uginanie i dopasowanie do różnych kształtów i wymiarów konstrukcji.
                    </p>
                    <p>
                    Podczas procesu budowlanego, kosze zbrojeniowe są wstawiane na odpowiednie miejsca w konstrukcji betonowej, a następnie zalewane betonem. W ten sposób tworzy się integralną strukturę, w której stalowa siatka pełni rolę wzmacniającą. Po wyschnięciu betonu, kosz zbrojony i beton tworzą jedną, niezwykle wytrzymałą jednostkę.
                    </p>
                </div>
            </div>
        </div>
    )
}

