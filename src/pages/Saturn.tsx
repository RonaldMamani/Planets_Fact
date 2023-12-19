import { useState } from "react";

import Planet from "../assets/planet-saturn.svg"
import InternPlanet from "../assets/planet-saturn-internal.svg"
import GeologyPlanet from "../assets/geology-saturn.png"

import PlanetsDescrition from "../components/PlanetsDescrition";
import PlanetStatistics from "../components/PlanetStatistics";
import ButtonStatePlanet from "../components/ButtonStatePlanet";

export default function Saturn() {
    
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
                    className={`${overview ? 'text-white border-b-4 border-[#CD5120]' : 'text-gray-500'}`}
                    onClick={handleButtonOverview}
                />
                <ButtonStatePlanet 
                    content="Structure" 
                    className={`${structure ? 'text-white border-b-4 border-[#CD5120]' : 'text-gray-500'}`}
                    onClick={handleButtonStructure}
                />
                <ButtonStatePlanet 
                    content="Surface" 
                    className={`${surface ? 'text-white border-b-4 border-[#CD5120]' : 'text-gray-500'}`}
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
                                w-[255px] h-[255px]
                                md:w-[425px] md:h-[425px]
                                lg:w-[650px] lg:h-[650px]
                            " 
                            src={Planet} 
                            alt="" />
                    }
                    {structure &&
                        <img 
                            className="
                                w-[255px] h-[255px]
                                md:w-[425px] md:h-[425px]
                                lg:w-[650px] lg:h-[650px]
                                " 
                            src={InternPlanet} 
                            alt="" />
                    }
                    {surface &&
                        <>
                            <img 
                                className="
                                    w-[255px] h-[255px]
                                    md:w-[425px] md:h-[425px]
                                    lg:w-[650px] lg:h-[650px]
                                    " 
                                src={Planet} 
                                alt="" />
                            <img 
                                className="
                                    w-[80px] h-[100px] absolute top-40
                                    md:w-[120px] md:h-[140px] md:top-64
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
                        name="Saturn"
                        descrition={`
                            ${overview ? `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after 
                            Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has 
                            one-eighth the average density of Earth.` : ''}

                            ${structure ? `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas 
                            phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached 
                            at a radius containing 99.9% of Saturn's mass.` : ''}

                            ${surface ? `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. 
                            The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles 
                            with a smaller amount of rocky debris and dust. ` : ''}
                            `}
                        href="https://en.wikipedia.org/wiki/Saturn"
                    />
                    <div className="
                        max-[767px]:hidden flex flex-col gap-5
                        md:items-end
                        ">
                        <ButtonStatePlanet 
                        content="Overview"
                        number="01"
                        className={`${overview ? 'text-white bg-[#CD5120]' : 'text-gray-500 hover:bg-white'}`}
                        onClick={handleButtonOverview}
                        />
                        <ButtonStatePlanet 
                            content="Structure"
                            number="02"
                            className={`${structure ? 'text-white bg-[#CD5120]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonStructure}
                        />
                        <ButtonStatePlanet 
                            content="Surface"
                            number="03" 
                            className={`${surface ? 'text-white bg-[#CD5120]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonSurface}
                        />
                    </div>
                </div>
                <div className="
                    lg:col-span-3
                    ">
                    <PlanetStatistics 
                        rotation="10.8 hours"
                        revolution="29.46 years"
                        radius="58,232 km"
                        temp="-138°c"
                    />
                </div>
            </section>
        
        </>
    )
}