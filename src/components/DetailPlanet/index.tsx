type Props = {
    titleDetail: string,
    detail: string
}

export default function DetailPlanet({ titleDetail, detail } : Props) {
    return (
        <div className="flex justify-between border-white/20 border p-2 uppercase">
            <h6 className="text-xs text-white/50 font-bold">{titleDetail}</h6>
            <span className="text-xl text-white font-normal">{detail}</span>
        </div>
    )
}