import Source from "../../assets/icon-source.svg" 

type Props = {
    name: string,
    descrition: string,
    href: string
}

export default function PlanetsDescrition({ name,descrition,href } : Props) {
    return (
        <div className="
            flex flex-col gap-6 text-center
            md:text-start md:items-start
            ">
            <h4 className="
                text-5xl text-white font-bold uppercase
                lg:text-6xl
                ">{name}</h4>
            <p className="
                text-gray-400 pb-3 
                md:w-[365px] md:text-sm 
                lg:text-base 
                ">{descrition}</p>
            <span className="flex justify-center gap-2 items-center font-bold">
                <span className="text-gray-600">Source</span>
                <a target="_blank" href={href} className="flex items-center gap-1">
                    <span className="text-gray-400">wikipedia</span>
                    <img src={Source} alt="Icone de Source" />
                </a>
            </span>
        </div>
    )
}