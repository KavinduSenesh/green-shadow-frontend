import '../styles/FieldPage.css'
import {SideMenu} from "../components/SideMenu.tsx";

export function EquipmentPage() {
    return (
        <div className='flex h-screen'>
            <SideMenu/>
            <div className="container-main w-full">
                <main className="main-content w-full">
                    <header className="content-header m-10">
                        <h1 className="text-3xl font-bold">Equipment Manage</h1>
                        <div className="search-container flex justify-end items-center">
                            <input type="text" placeholder="Search..." className="search-bar border border-gray-300 rounded px-4 py-2 mr-2"/>
                            <button className="search-btn bg-green-600 text-black px-4 py-2 rounded">Search</button>
                        </div>
                    </header>
                    <div className="table-container mx-10">
                        <table className="w-full border-collapse border border-gray-300 text-left">
                            <thead className="bg-green-800 text-white">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Equipment Name</th>
                                <th className="border border-gray-300 px-4 py-2">Equipment Type</th>
                                <th className="border border-gray-300 px-4 py-2">Availability Status	</th>
                                <th className="border border-gray-300 px-4 py-2">Allocated Field</th>
                                <th className="border border-gray-300 px-4 py-2">allocated Staff</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>

                                <td className="border border-gray-300 px-4 py-2 text-black">Rake</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">mechanical</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Available</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">F0001</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">S0001
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-black">
                                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">View</button>
                                    <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                            <tr>

                                <td className="border border-gray-300 px-4 py-2 text-black">Hoe</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Mechanical</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Available</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">F0002</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">S0002
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-black">
                                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">View</button>
                                    <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}