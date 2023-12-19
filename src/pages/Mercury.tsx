import { useState } from "react";

import Planet from "../assets/planet-mercury.svg"
import InternPlanet from "../assets/planet-mercury-internal.svg"
import GeologyPlanet from "../assets/geology-mercury.png"

import PlanetsDescrition from "../components/PlanetsDescrition";
import PlanetStatistics from "../components/PlanetStatistics";
import ButtonStatePlanet from "../components/ButtonStatePlanet";

export default function Mercury() {
    
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
                    className={`${overview ? 'text-white border-b-4 border-[#419EBB]' : 'text-gray-500'}`}
                    onClick={handleButtonOverview}
                />
                <ButtonStatePlanet 
                    content="Structure" 
                    className={`${structure ? 'text-white border-b-4 border-[#419EBB]' : 'text-gray-500'}`}
                    onClick={handleButtonStructure}
                />
                <ButtonStatePlanet 
                    content="Surface" 
                    className={`${surface ? 'text-white border-b-4 border-[#419EBB]' : 'text-gray-500'}`}
                    onClick={handleButtonSurface}
                />
            </nav>
            <section className="
                grid grid-rows-3 gap-5 items-center
                px-5 py-5
                md:px-10 md:py-8 md:grid-rows-5 md:gap-10
                lg:px-48 lg:pt-14 lg:gap-12 lg:grid-cols-3 lg:grid-rows-4
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
                                w-[185px] h-[185px]
                                lg:w-[290px] lg:h-[290px]
                            " 
                            src={Planet} 
                            alt="" />
                    }
                    {structure &&
                        <img 
                            className="
                                w-[185px] h-[185px]
                                lg:w-[290px] lg:h-[290px]
                                " 
                            src={InternPlanet} 
                            alt="" />
                    }
                    {surface &&
                        <>
                            <img 
                                className="
                                    w-[115px] h-[115px]
                                    md:w-[185px] md:h-[185px]
                                    lg:w-[290px] lg:h-[290px]
                                    " 
                                src={Planet} 
                                alt="" />
                            <img 
                                className="
                                    w-[80px] h-[100px] absolute top-16
                                    md:w-[120px] md:h-[140px] md:top-32
                                    lg:w-[150px] lg:h-[180px] lg:top-52
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
                        name="Mecury"
                        descrition={`
                            ${overview ? `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 
                            87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, 
                            and is a rocky body like Earth.` : ''}

                            ${structure ? `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer 
                            core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the 
                            Solar System at 5.427 g/cm3 , only slightly less than Earth's density.` : ''}

                            ${surface ? `Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains 
                            and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous 
                            than either Mars's or the Moon’s.` : ''}
                            `}
                        href="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                    />
                    <div className="
                        max-[767px]:hidden flex flex-col gap-3
                        md:items-end
                        lg:gap-5
                        ">
                        <ButtonStatePlanet 
                        content="Overview"
                        number="01"
                        className={`${overview ? 'text-white bg-[#419EBB]' : 'text-gray-500 hover:bg-white'}`}
                        onClick={handleButtonOverview}
                        />
                        <ButtonStatePlanet 
                            content="Structure"
                            number="02"
                            className={`${structure ? 'text-white bg-[#419EBB]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonStructure}
                        />
                        <ButtonStatePlanet 
                            content="Surface"
                            number="03" 
                            className={`${surface ? 'text-white bg-[#419EBB]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonSurface}
                        />
                    </div>
                </div>
                <div className="
                    lg:col-span-3
                    ">
                    <PlanetStatistics 
                        rotation="58.6 days"
                        revolution="87.97 days"
                        radius="2,439.7 km"
                        temp="430°c"
                    />
                </div>
            </section>
        
        </>
    )
}