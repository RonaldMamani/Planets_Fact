import { useState } from "react";

import Planet from "../assets/planet-mars.svg"
import InternPlanet from "../assets/planet-mars-internal.svg"
import GeologyPlanet from "../assets/geology-mars.png"

import PlanetsDescrition from "../components/PlanetsDescrition";
import PlanetStatistics from "../components/PlanetStatistics";
import ButtonStatePlanet from "../components/ButtonStatePlanet";

export default function Mars() {
    
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
                    className={`${overview ? 'text-white border-b-4 border-[#D14C32]' : 'text-gray-500'}`}
                    onClick={handleButtonOverview}
                />
                <ButtonStatePlanet 
                    content="Structure" 
                    className={`${structure ? 'text-white border-b-4 border-[#D14C32]' : 'text-gray-500'}`}
                    onClick={handleButtonStructure}
                />
                <ButtonStatePlanet 
                    content="Surface" 
                    className={`${surface ? 'text-white border-b-4 border-[#D14C32]' : 'text-gray-500'}`}
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
                                w-[130px] h-[130px]
                                md:w-[215px] md:h-[215px]
                                lg:w-[335px] lg:h-[335px]
                            " 
                            src={Planet} 
                            alt="" />
                    }
                    {structure &&
                        <img 
                            className="
                                w-[130px] h-[130px]
                                md:w-[215px] md:h-[215px]
                                lg:w-[335px] lg:h-[335px]
                                " 
                            src={InternPlanet} 
                            alt="" />
                    }
                    {surface &&
                        <>
                            <img 
                                className="
                                    w-[130px] h-[130px]
                                    md:w-[215px] md:h-[215px]
                                    lg:w-[335px] lg:h-[335px]
                                    " 
                                src={Planet} 
                                alt="" />
                            <img 
                                className="
                                    w-[80px] h-[100px] absolute top-20
                                    md:w-[120px] md:h-[140px] md:top-40
                                    lg:w-[150px] lg:h-[180px] lg:top-60
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
                        name="Mars"
                        descrition={`
                            ${overview ? `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, 
                            being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often 
                            referred to as the "Red Planet".` : ''}

                            ${structure ? `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense 
                            materials. Scientists initially determined that the core is at least partially liquid. Current models of 
                            its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.` : ''}

                            ${surface ? `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, 
                            metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic 
                            basalt, although parts are more silica-rich than typical basalt.` : ''}
                            `}
                        href="https://en.wikipedia.org/wiki/Mars"
                    />
                    <div className="
                        max-[767px]:hidden flex flex-col gap-5
                        md:items-end
                        ">
                        <ButtonStatePlanet 
                        content="Overview"
                        number="01"
                        className={`${overview ? 'text-white bg-[#D14C32]' : 'text-gray-500 hover:bg-white'}`}
                        onClick={handleButtonOverview}
                        />
                        <ButtonStatePlanet 
                            content="Structure"
                            number="02"
                            className={`${structure ? 'text-white bg-[#D14C32]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonStructure}
                        />
                        <ButtonStatePlanet 
                            content="Surface"
                            number="03" 
                            className={`${surface ? 'text-white bg-[#D14C32]' : 'text-gray-500 hover:bg-white'}`}
                            onClick={handleButtonSurface}
                        />
                    </div>
                </div>
                <div className="
                    lg:col-span-3
                    ">
                    <PlanetStatistics 
                        rotation="1.03 days"
                        revolution="1.88 years"
                        radius="3,389.5 km"
                        temp="−28°c"
                    />
                </div>
            </section>
        
        </>
    )
}