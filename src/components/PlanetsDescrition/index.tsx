import Source from "../../assets/icon-source.svg" 
import DetailPlanet from "../DetailPlanet"

type Props = {
    name: string,
    descrition: string,
    href: string
}

export default function PlanetsDescrition({ name,descrition,href } : Props) {
    return (
        <div className="flex flex-col gap-6 text-center">
            <h4 className="text-5xl text-white font-bold uppercase">{name}</h4>
            <p className="text-gray-400 pb-3">{descrition}</p>
            <span className="flex justify-center gap-2 items-center font-bold text-sm">
                <span className="text-gray-600">Source</span>
                <a href={href} className="flex items-center gap-1">
                    <span className="text-gray-400">wikipedia</span>
                    <img src={Source} alt="Icone de Source" />
                </a>
            </span>
        </div>
    )
}