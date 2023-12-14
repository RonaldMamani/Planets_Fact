import Source from "../../assets/icon-source.svg" 
import DetailPlanet from "../DetailPlanet"

type Props = {
    name: string,
    descrition: string,
    href: string
    rotationT: string,
    revolutionTT: string,
    radius: string,
    temp: string
}

export default function PlanetsDescrition({ name,descrition,href,rotationT,revolutionTT,radius,temp } : Props) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 text-center text-gray-400">
                <h4 className="text-6xl text-white font-bold uppercase">{name}</h4>
                <p className="">{descrition}</p>
                <span className="flex justify-center gap-2 items-center">
                    <span>Source</span>
                    <a href={href} className="flex items-center gap-2">
                        <span className="">wikipedia</span>
                        <img src={Source} alt="Icone de Source" />
                    </a>
                </span>
            </div>
            <div className="flex flex-col gap-5">
                <DetailPlanet titleDetail="Rotattion Time" detail={rotationT} />
                <DetailPlanet titleDetail="Revolution Time" detail={revolutionTT} />
                <DetailPlanet titleDetail="Radius" detail={radius} />
                <DetailPlanet titleDetail="Averange Temp." detail={temp} />
            </div>
        </div>
    )
}