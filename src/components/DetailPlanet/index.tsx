type Props = {
    titleDetail: string,
    detail: string
}

export default function DetailPlanet({ titleDetail, detail } : Props) {
    return (
        <div className="
            flex justify-between items-center border-white/20 border p-3 uppercase
            md:flex-col md:gap-3 md:items-start md:w-full
            lg:p-5 lg:gap-4
            ">
            <h6 className="
                text-sm text-white/50 font-bold 
                md:text-xs
                lg:text-sm
                ">{titleDetail}</h6>
            <span className="
                text-xl text-white font-medium
                md:text-2xl
                lg:text-4xl
                ">{detail}</span>
        </div>
    )
}