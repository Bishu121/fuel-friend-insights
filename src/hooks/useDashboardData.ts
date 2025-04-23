
import { useState } from "react";

export type SalesData = {
  name: string;
  value: number;
  petrol?: number;
  diesel?: number;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  initials: string;
  status: "active" | "break" | "offline";
  shift: string;
};

export type Equipment = {
  id: string;
  name: string;
  status: "operational" | "maintenance" | "issue";
  health: number;
  lastMaintenance: string;
  type: "pump";
};

export type FuelLevel = {
  type: string;
  level: number;
  capacity: number;
  unit: string;
  alert?: boolean;
};

export type FinancialData = {
  revenue: { category: string; amount: number; change: number };
  expenses: { category: string; amount: number; change: number };
  profit: { category: string; amount: number; change: number };
};

export type QuickEntryField = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

export function useDashboardData() {
  // Sample data for charts
  const salesData: SalesData[] = [
    { name: "Mon", value: 4500 },
    { name: "Tue", value: 5200 },
    { name: "Wed", value: 4800 },
    { name: "Thu", value: 5100 },
    { name: "Fri", value: 5800 },
    { name: "Sat", value: 6200 },
    { name: "Sun", value: 5500 },
  ];

  const fuelSalesData: SalesData[] = [
    { name: "Mon", petrol: 1200, diesel: 1800 },
    { name: "Tue", petrol: 1300, diesel: 1900 },
    { name: "Wed", petrol: 1100, diesel: 1700 },
    { name: "Thu", petrol: 1350, diesel: 1850 },
    { name: "Fri", petrol: 1500, diesel: 2000 },
    { name: "Sat", petrol: 1600, diesel: 2100 },
    { name: "Sun", petrol: 1400, diesel: 1950 },
  ];

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Raj Kumar",
      role: "Station Manager",
      initials: "RK",
      status: "active",
      shift: "Morning",
    },
    {
      id: "2",
      name: "Preeti Singh",
      role: "Pump Attendant",
      initials: "PS",
      status: "active",
      shift: "Morning",
    },
    {
      id: "3",
      name: "Vikram Patel",
      role: "Pump Attendant",
      initials: "VP",
      status: "break",
      shift: "Morning",
    },
    {
      id: "4",
      name: "Anita Sharma",
      role: "Cashier",
      initials: "AS",
      status: "offline",
      shift: "Evening",
    },
  ];

  const equipmentStatus: Equipment[] = [
    {
      id: "1",
      name: "Petrol Pump #1",
      status: "operational",
      health: 96,
      lastMaintenance: "15 days ago",
      type: "pump",
    },
    {
      id: "2",
      name: "Diesel Pump #1",
      status: "operational",
      health: 92,
      lastMaintenance: "20 days ago",
      type: "pump",
    },
    {
      id: "3",
      name: "Diesel Pump #2",
      status: "issue",
      health: 45,
      lastMaintenance: "60 days ago",
      type: "pump",
    },
  ];

  const fuelLevels: FuelLevel[] = [
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

  const financialData: FinancialData = {
    revenue: { category: "Revenue", amount: 85400, change: 2.5 },
    expenses: { category: "Expenses", amount: 52600, change: 1.8 },
    profit: { category: "Profit", amount: 32800, change: 3.2 },
  };

  const quickEntryFields: QuickEntryField[] = [
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

  return {
    salesData,
    fuelSalesData,
    teamMembers,
    equipmentStatus,
    fuelLevels,
    financialData,
    quickEntryFields,
  };
}
