type Props = {
    titleDetail: string,
    detail: string
}

export default function DetailPlanet({ titleDetail, detail } : Props) {
    return (
        <div className="flex justify-between items-center border-white/20 border p-3 uppercase">
            <h6 className="text-sm text-white/50 font-bold">{titleDetail}</h6>
            <span className="text-xl text-white font-medium">{detail}</span>
        </div>
    )
}