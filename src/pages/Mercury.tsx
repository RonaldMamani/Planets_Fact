import PlanetsDescrition from "../components/PlanetsDescrition";
import Planet from "../assets/planet-mercury.svg"
import PlanetStatistics from "../components/PlanetStatistics";
import NavStatePlanet from "../components/NavStatePlanet";
import { useState } from "react";

export default function Mercury() {
    
    const [overview,setOverview] = useState(false)

    return(
        <>
            <NavStatePlanet 
                className={`${overview ? 'text-white' : 'text-gray-400'}`}
            />
            <section className="grid grid-rows-3 gap-5 items-center">
                <div className="flex justify-center">
                    <img className="w-[111px] h-[111px]" src={Planet} alt="" />
                </div>
                <PlanetsDescrition 
                    name="Mecury"
                    descrition="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 
                    87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, 
                    and is a rocky body like Earth."
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