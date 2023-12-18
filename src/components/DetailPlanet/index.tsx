type Props = {
    titleDetail: string,
    detail: string
}

export default function DetailPlanet({ titleDetail, detail } : Props) {
    return (
        <div className="
            flex justify-between items-center border-white/20 border p-3 uppercase
            md:flex-col md:gap-3 md:items-start md:w-full
            ">
            <h6 className="text-sm text-white/50 font-bold md:text-xs">{titleDetail}</h6>
            <span className="
                text-xl text-white font-medium
                md:text-2xl
                ">{detail}</span>
        </div>
    )
}