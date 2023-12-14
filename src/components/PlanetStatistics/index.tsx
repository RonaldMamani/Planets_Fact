import DetailPlanet from "../DetailPlanet";

type Props = {
    rotation: string,
    revolution:string,
    radius: string,
    temp: string
}

export default function PlanetStatistics({ rotation,revolution,radius,temp } : Props) {
    return (
        <div className="flex flex-col gap-5">
            <DetailPlanet titleDetail="Rotattion Time" detail={rotation} />
            <DetailPlanet titleDetail="Revolution Time" detail={revolution} />
            <DetailPlanet titleDetail="Radius" detail={radius} />
            <DetailPlanet titleDetail="Averange Temp." detail={temp} />
        </div>
    )
}