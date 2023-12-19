import { useState } from "react";

import Planet from "../assets/planet-jupiter.svg"
import InternPlanet from "../assets/planet-jupiter-internal.svg"
import GeologyPlanet from "../assets/geology-jupiter.png"

import PlanetsDescrition from "../components/PlanetsDescrition";
import PlanetStatistics from "../components/PlanetStatistics";
import ButtonStatePlanet from "../components/ButtonStatePlanet";

export default function Jupiter() {
    
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
                    className={`${overview ? 'text-white border-b-4 border-[#D83A34]' : 'text-gray-500'}`}
                    onClick={handleButtonOverview}
                />
                <ButtonStatePlanet 
                    content="Structure" 
                    className={`${structure ? 'text-white border-b-4 border-[#D83A34]' : 'text-gray-500'}`}
                    onClick={handleButtonStructure}
                />
                <ButtonStatePlanet 
                    content="Surface" 
                    className={`${surface ? 'text-white border-b-4 border-[#D83A34]' : 'text-gray-500'}`}
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
                                w-[225px] h-[225px]
                                md:w-[370px] md:h-[370px]
                                lg:w-[580px] lg:h-[580px]
                            " 
                            src={Planet} 
                            alt="" />
                    }
                    {structure &&
                        <img 
                            className="
                                w-[225px] h-[225px]
                                md:w-[370px] md:h-[370px]
                                lg:w-[580px] lg:h-[580px]
                                " 
                            src={InternPlanet} 
                            alt="" />
                    }
                    {surface &&
                        <>
                            <img 
                                className="
                                    w-[225px] h-[225px]
                                    md:w-[370px] md:h-[370px]
                                    lg:w-[580px] lg:h-[580px]
                                    " 
                                src={Planet} 
                                alt="" />
                            <img 
                                className="
                                    w-[80px] h-[100px] absolute top-40
                                    md:w-[120px] md:h-[140px] md:top-52
                                    lg:w-[150px] lg:h-[180px] lg:top-96
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
                        name="Jupiter"
                        descrition={`
                            ${overview ? `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas 
                            giant with a mass two and a half times that of all the other planets in the Solar System combined, but less 
                            than one-thousandth the mass of the Sun.` : ''}

                            ${structure ? `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into 
                            its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after 
                            Jupiter's formation, which would have disrupted an originally solid Jovian core.` : ''}

                            ${surface ? `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm 
                            located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 
                            1665.` : ''}
                            `}
                        href="https://en.wikipedia.org/wiki/Jupiter"
                    />
                    <div className="
                        max-[767px]:hidden flex flex-col gap-5
                        md:items-end
                        ">
                        <ButtonStatePlanet 
                        content="Overview"
                        number="01"
                        className={`${overview ? 'text-white bg-[#D83A34]' : 'text-gray-500 hover:bg-white'}`}
                        onClick={handleButtonOverview}
                        />
                        <ButtonStatePlanet 
                            content="Structure"
                            number="02"
                            className={`${structure ? 'text-white bg-[#D83A34]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonStructure}
                        />
                        <ButtonStatePlanet 
                            content="Surface"
                            number="03" 
                            className={`${surface ? 'text-white bg-[#D83A34]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonSurface}
                        />
                    </div>
                </div>
                <div className="
                    lg:col-span-3
                    ">
                    <PlanetStatistics 
                        rotation="9.93 hours"
                        revolution="11.86 years"
                        radius="69,911 km"
                        temp="-108°c"
                    />
                </div>
            </section>
        
        </>
    )
}