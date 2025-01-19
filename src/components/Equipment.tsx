// pages/EquipmentPage.tsx
import '../styles/FieldPage.css';
import { SideMenu } from '../components/SideMenu.tsx';
import { Header } from '../components/Header.tsx';
import { EquipmentTable } from '../components/EquipmentTable.tsx';

const mockData = [
    { equipmentName: 'Rake', equipmentType: 'Mechanical', availabilityStatus: 'Available', allocatedField: 'F0001', allocatedStaff: 'S0001' },
    { equipmentName: 'Hoe', equipmentType: 'Mechanical', availabilityStatus: 'Available', allocatedField: 'F0002', allocatedStaff: 'S0002' },
    { equipmentName: 'Tractor', equipmentType: 'Heavy', availabilityStatus: 'In Use', allocatedField: 'F0003', allocatedStaff: 'S0003' },
    { equipmentName: 'Shovel', equipmentType: 'Manual', availabilityStatus: 'Available', allocatedField: 'F0004', allocatedStaff: 'S0004' },
    { equipmentName: 'Plow', equipmentType: 'Mechanical', availabilityStatus: 'Under Maintenance', allocatedField: 'F0005', allocatedStaff: 'S0005' },
];

export function EquipmentPage() {
    return (
        <div className="flex h-screen">
            <SideMenu />
            <div className="container-main w-full">
                <main className="main-content w-full">
                    <Header title="Equipment Manage" />
                    <EquipmentTable data={mockData} />
                </main>
            </div>
        </div>
    );
}
