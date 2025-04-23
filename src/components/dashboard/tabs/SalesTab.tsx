
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartCard } from "../ChartCard";
import { SalesData } from "@/hooks/useDashboardData";

interface SalesTabProps {
  fuelSalesData: SalesData[];
}

export function SalesTab({ fuelSalesData }: SalesTabProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-8">
        <ChartCard
          title="Fuel Sales Comparison"
          subtitle="Petrol vs Diesel sales (liters)"
          data={fuelSalesData}
          dataKey="petrol"
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
  );
}
