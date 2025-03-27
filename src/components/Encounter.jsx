export default function Encounter({ location, children }) {
    return (
        <div className="flex flex-col h-fit m-3 border bg-white border-amber-500 rounded-t-lg">
            <div className="bg-amber-300 text-center py-2 rounded-t-lg">{location}</div>
            <div className="p-2">
                <h4>Description:</h4>
                {children}
            </div>
        </div>
    )
}