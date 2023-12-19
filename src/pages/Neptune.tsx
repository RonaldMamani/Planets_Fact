import { useState } from "react";

import Planet from "../assets/planet-neptune.svg"
import InternPlanet from "../assets/planet-neptune-internal.svg"
import GeologyPlanet from "../assets/geology-neptune.png"

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
                    className={`${overview ? 'text-white border-b-4 border-[#2D68F0]' : 'text-gray-500'}`}
                    onClick={handleButtonOverview}
                />
                <ButtonStatePlanet 
                    content="Structure" 
                    className={`${structure ? 'text-white border-b-4 border-[#2D68F0]' : 'text-gray-500'}`}
                    onClick={handleButtonStructure}
                />
                <ButtonStatePlanet 
                    content="Surface" 
                    className={`${surface ? 'text-white border-b-4 border-[#2D68F0]' : 'text-gray-500'}`}
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
                                md:w-[285px] md:h-[285px]
                                lg:w-[450px] lg:h-[450px]
                            " 
                            src={Planet} 
                            alt="" />
                    }
                    {structure &&
                        <img 
                            className="
                                w-[175px] h-[175px]
                                md:w-[285px] md:h-[285px]
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
                                    md:w-[285px] md:h-[285px]
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
                        name="Neptune"
                        descrition={`
                            ${overview ? `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it 
                            is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It 
                            is 17 times the mass of Earth, more massive than its near-twin Uranus.` : ''}

                            ${structure ? `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% 
                            of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of 
                            methane, ammonia and water are found in the lower regions.` : ''}

                            ${surface ? `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also 
                            present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared 
                            portion of the spectrum.` : ''}
                            `}
                        href="https://en.wikipedia.org/wiki/Neptune"
                    />
                    <div className="
                        max-[767px]:hidden flex flex-col gap-5
                        md:items-end
                        ">
                        <ButtonStatePlanet 
                        content="Overview"
                        number="01"
                        className={`${overview ? 'text-white bg-[#2D68F0]' : 'text-gray-500 hover:bg-white'}`}
                        onClick={handleButtonOverview}
                        />
                        <ButtonStatePlanet 
                            content="Structure"
                            number="02"
                            className={`${structure ? 'text-white bg-[#2D68F0]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonStructure}
                        />
                        <ButtonStatePlanet 
                            content="Surface"
                            number="03" 
                            className={`${surface ? 'text-white bg-[#2D68F0]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonSurface}
                        />
                    </div>
                </div>
                <div className="
                    lg:col-span-3
                    ">
                    <PlanetStatistics 
                        rotation="16.08 hours"
                        revolution="164.79 years"
                        radius="24,622 km"
                        temp="-201°c"
                    />
                </div>
            </section>
        
        </>
    )
}