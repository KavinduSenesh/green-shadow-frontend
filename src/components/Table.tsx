// components/EquipmentTable.tsx
interface EquipmentData {
    equipmentName: string;
    equipmentType: string;
    availabilityStatus: string;
    allocatedField: string;
    allocatedStaff: string;
}

export function EquipmentTable({ data }: { data: EquipmentData[] }) {
    return (
        <div className="table-container mx-10">
            <table className="w-full border-collapse border border-gray-300 text-left">
                <thead className="bg-green-800 text-white">
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Equipment Name</th>
                    <th className="border border-gray-300 px-4 py-2">Equipment Type</th>
                    <th className="border border-gray-300 px-4 py-2">Availability Status</th>
                    <th className="border border-gray-300 px-4 py-2">Allocated Field</th>
                    <th className="border border-gray-300 px-4 py-2">Allocated Staff</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2 text-black">{item.equipmentName}</td>
                        <td className="border border-gray-300 px-4 py-2 text-black">{item.equipmentType}</td>
                        <td className="border border-gray-300 px-4 py-2 text-black">{item.availabilityStatus}</td>
                        <td className="border border-gray-300 px-4 py-2 text-black">{item.allocatedField}</td>
                        <td className="border border-gray-300 px-4 py-2 text-black">{item.allocatedStaff}</td>
                        <td className="border border-gray-300 px-4 py-2 text-black">
                            <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">View</button>
                            <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
