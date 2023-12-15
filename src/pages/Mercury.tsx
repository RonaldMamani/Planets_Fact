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
                ">
                <div className="flex justify-center relative z-0">
                    {overview &&
                        <img className="w-[30%] h-[30%]" src={Planet} alt="" />
                    }
                    {structure &&
                        <img className="w-[30%] h-[30%]" src={InternPlanet} alt="" />
                    }
                    {surface &&
                        <>
                            <img className="w-[30%] h-[30%]" src={Planet} alt="" />
                            <img className="w-[80$] h-[80%] absolute top-20" src={GeologyPlanet} alt="" />
                        </>
                    }
                </div>
                <PlanetsDescrition 
                    name="Mecury"
                    descrition={`
                        ${overview && `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 
                        87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, 
                        and is a rocky body like Earth.`}
                        ${structure && `structure`}
                        ${surface && `surface`}
                        `}
                    href="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                />
                <PlanetStatistics 
                    rotation="58.6 days"
                    revolution="87.97 days"
                    radius="2,439.7 km"
                    temp="430°c"
                />
            </section>
        
        </>
    )
}