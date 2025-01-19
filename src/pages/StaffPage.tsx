import '../styles/FieldPage.css';
import {SideMenu} from "../components/SideMenu.tsx";

export function StaffPage() {
    return (
        <div className='flex h-screen'>
            <SideMenu/>
            <div className="container-main w-full">
                <main className="main-content w-full">
                    <header className="content-header m-10">
                        <h1 className="text-3xl font-bold">Staff Manage</h1>
                        <div className="search-container flex justify-end items-center">
                            <input type="text" placeholder="Search..." className="search-bar border border-gray-300 rounded px-4 py-2 mr-2"/>
                            <button className="search-btn bg-green-600 text-black px-4 py-2 rounded">Search</button>
                        </div>
                    </header>
                    <div className="table-container mx-10">
                        <table className="w-full border-collapse border border-gray-300 text-left">
                            <thead className="bg-green-800 text-white">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">First Name</th>
                                <th className="border border-gray-300 px-4 py-2">Designation</th>
                                <th className="border border-gray-300 px-4 py-2">Contact</th>
                                <th className="border border-gray-300 px-4 py-2">Email</th>
                                <th className="border border-gray-300 px-4 py-2">Role</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-black">John</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Manager</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">+1 234 567 890</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">john@example.com</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Admin</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">
                                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">View</button>
                                    <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-black">Jane</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Assistant</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">+1 987 654 321</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">jane@example.com</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Staff</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">
                                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">View</button>
                                    <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-black">Michael</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Supervisor</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">+1 123 456 789</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">michael@example.com</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Admin</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">
                                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">View</button>
                                    <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-black">Sarah</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Clerk</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">+1 789 456 123</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">sarah@example.com</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Staff</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">
                                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">View</button>
                                    <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-black">David</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Technician</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">+1 654 321 789</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">david@example.com</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Staff</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">
                                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">View</button>
                                    <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-black">Emily</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">HR Manager</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">+1 321 654 987</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">emily@example.com</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Admin</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">
                                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">View</button>
                                    <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-black">Sophia</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Accountant</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">+1 987 321 654</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">sophia@example.com</td>
                                <td className="border border-gray-300 px-4 py-2 text-black">Staff</td>
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
