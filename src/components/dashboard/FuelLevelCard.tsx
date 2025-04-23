
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type FuelInfo = {
  type: string;
  level: number;
  capacity: number;
  unit: string;
  alert?: boolean;
};

type FuelLevelCardProps = {
  title: string;
  fuels: FuelInfo[];
  className?: string;
};

export function FuelLevelCard({ title, fuels, className }: FuelLevelCardProps) {
  const getLevelColor = (level: number, alert?: boolean) => {
    if (alert) return "bg-energy-danger";
    if (level < 30) return "bg-energy-warning";
    return "bg-energy-success";
  };

  const formatCapacity = (level: number, capacity: number, unit: string) => {
    return `${level.toLocaleString()} / ${capacity.toLocaleString()} ${unit}`;
  };

  return (
    <Card className={cn("card-gradient", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-5">
          {fuels.map((fuel) => (
            <div key={fuel.type} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{fuel.type}</span>
                <span className={cn(
                  "text-xs", 
                  fuel.alert ? "text-energy-danger" : fuel.level < 30 ? "text-energy-warning" : ""
                )}>
                  {formatCapacity(fuel.level, fuel.capacity, fuel.unit)}
                </span>
              </div>
              <Progress 
                value={(fuel.level / fuel.capacity) * 100} 
                className={cn("h-2", getLevelColor(fuel.level, fuel.alert))} 
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
