export default function Information() {
    return (
        <div className="flex flex-col items-center">
            <h2>Enter Encounter Info</h2>
            <label>Location:</label>
            <input type="text" className="border w-[60%]" placeholder="Enter location name" />

            <label>Monsters:</label>
            <input type="text" className="border w-[60%] mb-2" placeholder="Add monsters" />
            <div className="flex">
                <div className="border rounded-[20px] px-2">Goblin<span className="ml-2 hover:cursor-pointer">&times;</span></div>
                <div className="border rounded-[20px] px-2">Dragon<span className="ml-2 hover:cursor-pointer">&times;</span></div>
            </div>


            <label>Traps:</label>
            <input type="text" className="border w-[60%]" placeholder="Add traps" />

            <label>Other information:</label>
            <textarea className="border w-[60%]"></textarea>

            <button className="border mt-2 p-2 hover:cursor-pointer">Add encounter</button>
        </div>
    )
}