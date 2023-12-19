import { useState } from "react";

import Planet from "../assets/planet-earth.svg"
import InternPlanet from "../assets/planet-earth-internal.svg"
import GeologyPlanet from "../assets/geology-earth.png"

import PlanetsDescrition from "../components/PlanetsDescrition";
import PlanetStatistics from "../components/PlanetStatistics";
import ButtonStatePlanet from "../components/ButtonStatePlanet";

export default function Earth() {
    
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
                    className={`${overview ? 'text-white border-b-4 border-[#6D2ED5]' : 'text-gray-500'}`}
                    onClick={handleButtonOverview}
                />
                <ButtonStatePlanet 
                    content="Structure" 
                    className={`${structure ? 'text-white border-b-4 border-[#6D2ED5]' : 'text-gray-500'}`}
                    onClick={handleButtonStructure}
                />
                <ButtonStatePlanet 
                    content="Surface" 
                    className={`${surface ? 'text-white border-b-4 border-[#6D2ED5]' : 'text-gray-500'}`}
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
                                md:w-[280px] md:h-[280px]
                                lg:w-[450px] lg:h-[450px]
                            " 
                            src={Planet} 
                            alt="" />
                    }
                    {structure &&
                        <img 
                            className="
                                w-[175px] h-[175px]
                                md:w-[280px] md:h-[280px]
                                lg:w-[450px] lg:h-[450px]
                                " 
                            src={InternPlanet} 
                            alt="" />
                    }
                    {surface &&
                        <>
                            <img 
                                className="
                                    w-[175px] h-[175px]
                                    md:w-[280px] md:h-[280px]
                                    lg:w-[450px] lg:h-[450px]
                                    " 
                                src={Planet} 
                                alt="" />
                            <img 
                                className="
                                    w-[80px] h-[100px] absolute top-28
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
                        name="Earth"
                        descrition={`
                            ${overview ? `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's 
                            surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical 
                            properties and geological history have allowed life to evolve and thrive.` : ''}

                            ${structure ? `Earth's interior, like that of the other terrestrial planets, is divided into layers by their 
                            chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, 
                            which is underlain by a highly viscous solid mantle.` : ''}

                            ${surface ? `The total surface area of Earth is about 510 million km2. The continental crust consists of 
                            lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser 
                            volcanic rock that is the primary constituent of the ocean floors.` : ''}
                            `}
                        href="https://en.wikipedia.org/wiki/Earth"
                    />
                    <div className="
                        max-[767px]:hidden flex flex-col gap-5
                        md:items-end
                        ">
                        <ButtonStatePlanet 
                        content="Overview"
                        number="01"
                        className={`${overview ? 'text-white bg-[#6D2ED5]' : 'text-gray-500 hover:bg-white'}`}
                        onClick={handleButtonOverview}
                        />
                        <ButtonStatePlanet 
                            content="Structure"
                            number="02"
                            className={`${structure ? 'text-white bg-[#6D2ED5]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonStructure}
                        />
                        <ButtonStatePlanet 
                            content="Surface"
                            number="03" 
                            className={`${surface ? 'text-white bg-[#6D2ED5]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonSurface}
                        />
                    </div>
                </div>
                <div className="
                    lg:col-span-3
                    ">
                    <PlanetStatistics 
                        rotation="0.99 days"
                        revolution="365.26 days"
                        radius="6,371 km"
                        temp="16°c"
                    />
                </div>
            </section>
        
        </>
    )
}