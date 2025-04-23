
import { BadgePercent, ChartBar, Fuel } from "lucide-react";
import { StatCard } from "../StatCard";
import { ChartCard } from "../ChartCard";
import { TeamStatusCard } from "../TeamStatusCard";
import { EquipmentStatusCard } from "../EquipmentStatusCard";
import { FuelLevelCard } from "../FuelLevelCard";
import { FinancialSummaryCard } from "../FinancialSummaryCard";
import { QuickEntryCard } from "../QuickEntryCard";
import { SalesData, TeamMember, Equipment, FuelLevel, FinancialData, QuickEntryField } from "@/hooks/useDashboardData";

interface OverviewTabProps {
  salesData: SalesData[];
  teamMembers: TeamMember[];
  equipmentStatus: Equipment[];
  fuelLevels: FuelLevel[];
  financialData: FinancialData;
  quickEntryFields: QuickEntryField[];
}

export function OverviewTab({
  salesData,
  teamMembers,
  equipmentStatus,
  fuelLevels,
  financialData,
  quickEntryFields,
}: OverviewTabProps) {
  const handleQuickEntry = (data: Record<string, string>) => {
    console.log("Quick entry data submitted:", data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-3">
        <StatCard
          title="Today's Revenue"
          value="₹ 85,400"
          icon={<BadgePercent className="h-4 w-4" />}
          trend={{ value: 2.5, isPositive: true }}
        />
      </div>
      <div className="col-span-1 md:col-span-3">
        <StatCard
          title="Petrol Sales"
          value="1,450 L"
          icon={<Fuel className="h-4 w-4" />}
          trend={{ value: 3.2, isPositive: true }}
        />
      </div>
      <div className="col-span-1 md:col-span-3">
        <StatCard
          title="Diesel Sales"
          value="1,850 L"
          icon={<Fuel className="h-4 w-4" />}
          trend={{ value: 1.8, isPositive: true }}
        />
      </div>
      <div className="col-span-1 md:col-span-3">
        <StatCard
          title="Profit Margin"
          value="38.4%"
          icon={<ChartBar className="h-4 w-4" />}
          trend={{ value: 0.5, isPositive: true }}
        />
      </div>

      <div className="col-span-1 md:col-span-8">
        <ChartCard
          title="Weekly Sales Overview"
          subtitle="Total revenue for the past 7 days"
          data={salesData}
          dataKey="value"
          type="bar"
        />
      </div>
      <div className="col-span-1 md:col-span-4">
        <QuickEntryCard
          title="Quick Daily Entry"
          fields={quickEntryFields}
          onSubmit={handleQuickEntry}
        />
      </div>

      <div className="col-span-1 md:col-span-4">
        <FuelLevelCard
          title="Fuel Stock Levels"
          fuels={fuelLevels}
        />
      </div>
      <div className="col-span-1 md:col-span-4">
        <FinancialSummaryCard
          title="Financial Summary"
          revenue={financialData.revenue}
          expenses={financialData.expenses}
          profit={financialData.profit}
        />
      </div>
      <div className="col-span-1 md:col-span-4">
        <TeamStatusCard title="Team Status" members={teamMembers} />
      </div>
      <div className="col-span-1 md:col-span-12">
        <EquipmentStatusCard
          title="Equipment Status"
          equipment={equipmentStatus}
        />
      </div>
    </div>
  );
}
