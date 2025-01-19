import '../styles/FieldPage.css'
import {SideMenu} from "../components/SideMenu.tsx";

export function VehiclePage() {
    return (
        <div className='flex h-screen'>
            <SideMenu/>
            <div className="container-main w-full">
                <main className="main-content w-full">
                    <header className="content-header m-10">
                        <h1 className="text-3xl font-bold">Vehicle Manage</h1>
                        <div className="search-container flex justify-end items-center">
                            <input type="text" placeholder="Search..." className="search-bar border border-gray-300 rounded px-4 py-2 mr-2"/>
                            <button className="search-btn bg-green-600 text-black px-4 py-2 rounded">Search</button>
                        </div>
                    </header>
                    <div className="table-container mx-10">
                        <table className="w-full border-collapse border border-gray-300 text-left">
                            <thead className="bg-green-800 text-white">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">license Plate Number</th>
                                <th className="border border-gray-300 px-4 py-2">Vehicle Category</th>
                                <th className="border border-gray-300 px-4 py-2">Fuel Type</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                                <th className="border border-gray-300 px-4 py-2">Remarks</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>

                                <td className="border border-gray-300 px-4 py-2 text-black">ABC-1234</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Car</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Petrol</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Available</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">No issues
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-black">
                                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">View</button>
                                    <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                            <tr>

                                <td className="border border-gray-300 px-4 py-2 text-black">ABC-1234</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Car</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Petrol</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Available</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">No issues
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