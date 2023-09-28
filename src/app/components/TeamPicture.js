

export const TeamPicture = (props) => {
    return (
    <div className="flex-shrink-0 p-14">
        <div className="text-center">
            <img className="mb-9 mx-auto rounded-full h-56 w-56 object-cover" src={props.src} alt=""/>
            <span className="inline-block mb-2 text-gray-300">{props.pos}</span>
            <h3 className="text-3xl text-black font-medium">{props.name}</h3>
        </div>
    </div>
    )
}
