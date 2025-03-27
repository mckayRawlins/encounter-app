export default function Button({ children, onClick }) {
    return (
        <button className="border px-2 ml-2"
            onClick={onClick}
        >
            {children}
        </button>
    )
}