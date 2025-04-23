
import { DashboardHeader } from "./DashboardHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewTab } from "./tabs/OverviewTab";
import { SalesTab } from "./tabs/SalesTab";
import { TeamTab } from "./tabs/TeamTab";
import { InventoryTab } from "./tabs/InventoryTab";
import { useDashboardData } from "@/hooks/useDashboardData";

export function MainDashboard() {
  const {
    salesData,
    fuelSalesData,
    teamMembers,
    equipmentStatus,
    fuelLevels,
    financialData,
    quickEntryFields,
  } = useDashboardData();

  return (
    <div className="container px-4 py-2 mx-auto">
      <DashboardHeader />
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="animate-fade-in">
          <OverviewTab
            salesData={salesData}
            teamMembers={teamMembers}
            equipmentStatus={equipmentStatus}
            fuelLevels={fuelLevels}
            financialData={financialData}
            quickEntryFields={quickEntryFields}
          />
        </TabsContent>

        <TabsContent value="sales" className="animate-fade-in">
          <SalesTab fuelSalesData={fuelSalesData} />
        </TabsContent>

        <TabsContent value="team" className="animate-fade-in">
          <TeamTab teamMembers={teamMembers} />
        </TabsContent>

        <TabsContent value="inventory" className="animate-fade-in">
          <InventoryTab
            fuelLevels={fuelLevels}
            equipment={equipmentStatus}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
