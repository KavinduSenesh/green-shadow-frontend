// components/Header.tsx
export function Header({ title }: { title: string }) {
    return (
        <header className="content-header m-10">
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className="search-container flex justify-end items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-bar border border-gray-300 rounded px-4 py-2 mr-2"
                />
                <button className="search-btn bg-green-600 text-black px-4 py-2 rounded">
                    Search
                </button>
            </div>
        </header>
    );
}
