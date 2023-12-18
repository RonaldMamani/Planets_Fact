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
                md:px-12 md:grid-rows-5 md:gap-8
                ">
                <div className="
                    flex justify-center relative z-0
                    md:row-span-3
                    ">
                    {overview &&
                        <img className="max-w-[185px] max-h-[185px]" src={Planet} alt="" />
                    }
                    {structure &&
                        <img className="max-w-[185px] max-h-[185px]" src={InternPlanet} alt="" />
                    }
                    {surface &&
                        <>
                            <img className="max-w-[185px] max-h-[185px]" src={Planet} alt="" />
                            <img className="w-[70$] h-[70%] absolute top-24" src={GeologyPlanet} alt="" />
                        </>
                    }
                </div>
                <div className="
                    md:grid md:grid-cols-2 md:items-center
                    md:row-span-2
                    ">
                    <PlanetsDescrition 
                        name="Mecury"
                        descrition={`
                            ${overview && `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 
                            87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, 
                            and is a rocky body like Earth.`}

                            ${structure && `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer 
                            core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the 
                            Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`}

                            ${surface && `Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains 
                            and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous 
                            than either Mars's or the Moon’s.`}
                            `}
                        href="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                    />
                    <div className="
                        max-[767px]:hidden flex flex-col gap-5
                        md:items-end
                        ">
                        <ButtonStatePlanet 
                        content="Overview"
                        number="01"
                        className={`${overview ? 'text-white bg-[#419EBB]' : 'text-gray-500'}`}
                        onClick={handleButtonOverview}
                        />
                        <ButtonStatePlanet 
                            content="Structure"
                            number="02"
                            className={`${structure ? 'text-white bg-[#419EBB]' : 'text-gray-500'}`}
                            onClick={handleButtonStructure}
                        />
                        <ButtonStatePlanet 
                            content="Surface"
                            number="03" 
                            className={`${surface ? 'text-white bg-[#419EBB]' : 'text-gray-500'}`}
                            onClick={handleButtonSurface}
                        />
                    </div>
                </div>
                <div className="
                    
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