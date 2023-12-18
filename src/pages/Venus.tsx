import { useState } from "react";

import Planet from "../assets/planet-venus.svg"
import InternPlanet from "../assets/planet-venus-internal.svg"
import GeologyPlanet from "../assets/geology-venus.png"

import PlanetsDescrition from "../components/PlanetsDescrition";
import PlanetStatistics from "../components/PlanetStatistics";
import ButtonStatePlanet from "../components/ButtonStatePlanet";

export default function Venus() {
    
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
                    className={`${overview ? 'text-white border-b-4 border-[#EDA249]' : 'text-gray-500'}`}
                    onClick={handleButtonOverview}
                />
                <ButtonStatePlanet 
                    content="Structure" 
                    className={`${structure ? 'text-white border-b-4 border-[#EDA249]' : 'text-gray-500'}`}
                    onClick={handleButtonStructure}
                />
                <ButtonStatePlanet 
                    content="Surface" 
                    className={`${surface ? 'text-white border-b-4 border-[#EDA249]' : 'text-gray-500'}`}
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
                                w-[250px] h-[250px]
                                lg:w-[400px] lg:h-[400px]
                            " 
                            src={Planet} 
                            alt="" />
                    }
                    {structure &&
                        <img 
                            className="
                                w-[250px] h-[250px]
                                lg:w-[400px] lg:h-[400px]
                                " 
                            src={InternPlanet} 
                            alt="" />
                    }
                    {surface &&
                        <>
                            <img 
                                className="
                                    w-[250px] h-[250px]
                                    lg:w-[400px] lg:h-[400px]
                                    " 
                                src={Planet} 
                                alt="" />
                            <img 
                                className="
                                    w-[120px] h-[140px] absolute top-24
                                    md:top-36
                                    lg:w-[155px] lg:h-[175px] lg:top-60
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
                        name="Venus"
                        descrition={`
                            ${overview ? `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. 
                            As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare 
                            occasions, visible to the naked eye in broad daylight.` : ''}

                            ${structure ? `The similarity in size and density between Venus and Earth suggests they share a similar internal 
                            structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid 
                            because the two planets have been cooling at about the same rate.` : ''}

                            ${surface ? `Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several 
                            times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only 
                            volcanic complex of this size on Earth is the Big Island of Hawaii.` : ''}
                            `}
                        href="https://en.wikipedia.org/wiki/Venus"
                    />
                    <div className="
                        max-[767px]:hidden flex flex-col gap-5
                        md:items-end
                        ">
                        <ButtonStatePlanet 
                        content="Overview"
                        number="01"
                        className={`${overview ? 'text-white bg-[#EDA249]' : 'text-gray-500 hover:bg-white'}`}
                        onClick={handleButtonOverview}
                        />
                        <ButtonStatePlanet 
                            content="Structure"
                            number="02"
                            className={`${structure ? 'text-white bg-[#EDA249]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonStructure}
                        />
                        <ButtonStatePlanet 
                            content="Surface"
                            number="03" 
                            className={`${surface ? 'text-white bg-[#EDA249]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonSurface}
                        />
                    </div>
                </div>
                <div className="
                    lg:col-span-3
                    ">
                    <PlanetStatistics 
                        rotation="243 days"
                        revolution="224.7 days"
                        radius="6,051.8 km"
                        temp="471°c"
                    />
                </div>
            </section>
        
        </>
    )
}