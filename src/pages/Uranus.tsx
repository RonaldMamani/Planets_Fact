import { useState } from "react";

import Planet from "../assets/planet-uranus.svg"
import InternPlanet from "../assets/planet-uranus-internal.svg"
import GeologyPlanet from "../assets/geology-uranus.png"

import PlanetsDescrition from "../components/PlanetsDescrition";
import PlanetStatistics from "../components/PlanetStatistics";
import ButtonStatePlanet from "../components/ButtonStatePlanet";

export default function Uranus() {
    
    const [overview, setOverview] = useState(true)
    const [structure, setStructure] = useState(false)
    const [surface, setSurface] = useState(false)

    const handleButtonOverview = () => {
        setOverview(true)
        setStructure(false)
        setSurface(false)
    }

    const handleButtonStructure = () => {
        setOverview(false)
        setStructure(true)
        setSurface(false)
    }

    const handleButtonSurface = () => {
        setOverview(false)
        setStructure(false)
        setSurface(true)
    }

    return(
        <>
            <nav className="
                flex justify-between border-y border-gray-500 mt-8
                px-5
                md:hidden
                ">
                <ButtonStatePlanet 
                    content="Overview" 
                    className={`${overview ? 'text-white border-b-4 border-[#1EC1A2]' : 'text-gray-500'}`}
                    onClick={handleButtonOverview}
                />
                <ButtonStatePlanet 
                    content="Structure" 
                    className={`${structure ? 'text-white border-b-4 border-[#1EC1A2]' : 'text-gray-500'}`}
                    onClick={handleButtonStructure}
                />
                <ButtonStatePlanet 
                    content="Surface" 
                    className={`${surface ? 'text-white border-b-4 border-[#1EC1A2]' : 'text-gray-500'}`}
                    onClick={handleButtonSurface}
                />
            </nav>
            <section className="
                grid grid-rows-3 gap-5 items-center
                px-5 py-5
                md:px-10 md:py-8 md:grid-rows-5 md:gap-10
                lg:px-40 lg:pt-14 lg:gap-12 lg:grid-cols-3 lg:grid-rows-4
                xl:px-52
                ">
                <div className="
                    flex justify-center relative z-0
                    md:row-span-3
                    lg:col-span-2
                    ">
                    {overview &&
                        <img 
                            className="
                                w-[175px] h-[175px]
                                md:w-[290px] md:h-[290px]
                                lg:w-[460px] lg:h-[460px]
                            " 
                            src={Planet} 
                            alt="" />
                    }
                    {structure &&
                        <img 
                            className="
                                w-[175px] h-[175px]
                                md:w-[290px] md:h-[290px]
                                lg:w-[460px] lg:h-[460px]
                                " 
                            src={InternPlanet} 
                            alt="" />
                    }
                    {surface &&
                        <>
                            <img 
                                className="
                                    w-[175px] h-[175px]
                                    md:w-[290px] md:h-[290px]
                                    lg:w-[460px] lg:h-[460px]
                                    " 
                                src={Planet} 
                                alt="" />
                            <img 
                                className="
                                    w-[80px] h-[100px] absolute top-32
                                    md:w-[120px] md:h-[140px] md:top-48
                                    lg:w-[150px] lg:h-[180px] lg:top-80
                                    " 
                                src={GeologyPlanet} 
                                alt="" />
                        </>
                    }
                </div>
                <div className="
                    md:grid md:grid-cols-2 md:items-center
                    md:row-span-2
                    lg:row-span-3 lg:flex lg:flex-col lg:items-start lg:gap-5
                    ">
                    <PlanetsDescrition 
                        name="Uranus"
                        descrition={`
                            ${overview ? `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the 
                            sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest 
                            planetary radius and fourth-largest planetary mass in the Solar System.` : ''}

                            ${structure ? `The standard model of Uranus's structure is that it consists of three layers: a rocky 
                            (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium 
                            envelope. The core is relatively small, with a mass of only 0.55 Earth masses.` : ''}

                            ${surface ? `The composition of Uranus's atmosphere is different from its bulk, consisting mainly of 
                            molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of 
                            gas, is 0.15±0.03 in the upper troposphere.` : ''}
                            `}
                        href="https://en.wikipedia.org/wiki/Uranus#:~:text=Uranus%20is%20the%20seventh%20planet,called%20'ice'%20or%20volatiles."
                    />
                    <div className="
                        max-[767px]:hidden flex flex-col gap-5
                        md:items-end
                        ">
                        <ButtonStatePlanet 
                        content="Overview"
                        number="01"
                        className={`${overview ? 'text-white bg-[#1EC1A2]' : 'text-gray-500 hover:bg-white'}`}
                        onClick={handleButtonOverview}
                        />
                        <ButtonStatePlanet 
                            content="Structure"
                            number="02"
                            className={`${structure ? 'text-white bg-[#1EC1A2]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonStructure}
                        />
                        <ButtonStatePlanet 
                            content="Surface"
                            number="03" 
                            className={`${surface ? 'text-white bg-[#1EC1A2]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonSurface}
                        />
                    </div>
                </div>
                <div className="
                    lg:col-span-3
                    ">
                    <PlanetStatistics 
                        rotation="17.2 hours"
                        revolution="84 years"
                        radius="25,362 km"
                        temp="-195°c"
                    />
                </div>
            </section>
        
        </>
    )
}