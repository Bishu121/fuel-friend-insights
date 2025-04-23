
import { FuelLevelCard } from "../FuelLevelCard";
import { EquipmentStatusCard } from "../EquipmentStatusCard";
import { Equipment, FuelLevel } from "@/hooks/useDashboardData";

interface InventoryTabProps {
  fuelLevels: FuelLevel[];
  equipment: Equipment[];
}

export function InventoryTab({ fuelLevels, equipment }: InventoryTabProps) {
  return (
    <>
      <FuelLevelCard title="All Fuel Inventory" fuels={fuelLevels} className="mb-6" />
      <EquipmentStatusCard title="All Equipment Status" equipment={equipment} />
    </>
  );
}
