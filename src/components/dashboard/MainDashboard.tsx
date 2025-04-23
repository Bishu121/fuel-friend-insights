
import React from "react";
import { DashboardHeader } from "./DashboardHeader";
import { StatCard } from "./StatCard";
import { ChartCard } from "./ChartCard";
import { TeamStatusCard } from "./TeamStatusCard";
import { EquipmentStatusCard } from "./EquipmentStatusCard";
import { FuelLevelCard } from "./FuelLevelCard";
import { FinancialSummaryCard } from "./FinancialSummaryCard";
import { QuickEntryCard } from "./QuickEntryCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ChartBar, Fuel, Gauge, BadgePercent } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MainDashboard() {
  // Sample data for charts
  const salesData = [
    { name: "Mon", value: 4500 },
    { name: "Tue", value: 5200 },
    { name: "Wed", value: 4800 },
    { name: "Thu", value: 5100 },
    { name: "Fri", value: 5800 },
    { name: "Sat", value: 6200 },
    { name: "Sun", value: 5500 },
  ];

  const fuelSalesData = [
    { name: "Mon", petrol: 1200, diesel: 1800 },
    { name: "Tue", petrol: 1300, diesel: 1900 },
    { name: "Wed", petrol: 1100, diesel: 1700 },
    { name: "Thu", petrol: 1350, diesel: 1850 },
    { name: "Fri", petrol: 1500, diesel: 2000 },
    { name: "Sat", petrol: 1600, diesel: 2100 },
    { name: "Sun", petrol: 1400, diesel: 1950 },
  ];

  // Sample data for team status
  const teamMembers = [
    {
      id: "1",
      name: "Raj Kumar",
      role: "Station Manager",
      initials: "RK",
      status: "active" as const,
      shift: "Morning",
    },
    {
      id: "2",
      name: "Preeti Singh",
      role: "Pump Attendant",
      initials: "PS",
      status: "active" as const,
      shift: "Morning",
    },
    {
      id: "3",
      name: "Vikram Patel",
      role: "Pump Attendant",
      initials: "VP",
      status: "break" as const,
      shift: "Morning",
    },
    {
      id: "4",
      name: "Anita Sharma",
      role: "Cashier",
      initials: "AS",
      status: "offline" as const,
      shift: "Evening",
    },
  ];

  // Sample data for equipment status
  const equipmentStatus = [
    {
      id: "1",
      name: "Petrol Pump #1",
      status: "operational" as const,
      health: 96,
      lastMaintenance: "15 days ago",
      type: "pump" as const,
    },
    {
      id: "2",
      name: "Diesel Pump #1",
      status: "operational" as const,
      health: 92,
      lastMaintenance: "20 days ago",
      type: "pump" as const,
    },
    {
      id: "3",
      name: "Diesel Pump #2",
      status: "issue" as const,
      health: 45,
      lastMaintenance: "60 days ago",
      type: "pump" as const,
    },
  ];

  // Sample fuel levels
  const fuelLevels = [
    {
      type: "Petrol",
      level: 5200,
      capacity: 10000,
      unit: "L",
    },
    {
      type: "Diesel",
      level: 2800,
      capacity: 15000,
      unit: "L",
      alert: true,
    },
    {
      type: "Premium Petrol",
      level: 3500,
      capacity: 8000,
      unit: "L",
    },
  ];

  // Sample financial data
  const financialData = {
    revenue: { category: "Revenue", amount: 85400, change: 2.5 },
    expenses: { category: "Expenses", amount: 52600, change: 1.8 },
    profit: { category: "Profit", amount: 32800, change: 3.2 },
  };

  // Sample quick entry fields
  const quickEntryFields = [
    {
      id: "petrol_sales",
      label: "Today's Petrol Sales (liters)",
      type: "number",
      placeholder: "e.g., 1200",
    },
    {
      id: "diesel_sales",
      label: "Today's Diesel Sales (liters)",
      type: "number",
      placeholder: "e.g., 1500",
    },
    {
      id: "expenses",
      label: "Today's Expenses (₹)",
      type: "number",
      placeholder: "e.g., 5000",
    },
  ];

  const handleQuickEntry = (data: Record<string, string>) => {
    console.log("Quick entry data submitted:", data);
    // This would typically update your state or send data to an API
  };

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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Top stats row */}
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

            {/* Charts row */}
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

            {/* Bottom row */}
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
        </TabsContent>

        <TabsContent value="sales" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-span-8">
              <ChartCard
                title="Fuel Sales Comparison"
                subtitle="Petrol vs Diesel sales (liters)"
                data={fuelSalesData.map(item => ({
                  name: item.name,
                  value: item.petrol,
                  diesel: item.diesel
                }))}
                dataKey="value"
                type="line"
                color="#2A9D8F"
              />
            </div>
            <div className="col-span-1 md:col-span-4">
              <Card className="card-gradient h-full">
                <CardHeader>
                  <CardTitle>Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Detailed sales analysis will be available here.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="team" className="animate-fade-in">
          <TeamStatusCard title="All Team Members" members={teamMembers} className="mb-6" />
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Team schedule and performance metrics will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="animate-fade-in">
          <FuelLevelCard title="All Fuel Inventory" fuels={fuelLevels} className="mb-6" />
          <EquipmentStatusCard title="All Equipment Status" equipment={equipmentStatus} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
