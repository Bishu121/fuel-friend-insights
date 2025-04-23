
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Gauge, Fuel } from "lucide-react";
import { cn } from "@/lib/utils";

type Equipment = {
  id: string;
  name: string;
  status: "operational" | "maintenance" | "issue";
  health: number;
  lastMaintenance?: string;
  type: "pump" | "tank" | "generator";
};

type EquipmentStatusCardProps = {
  title: string;
  equipment: Equipment[];
  className?: string;
};

export function EquipmentStatusCard({ title, equipment, className }: EquipmentStatusCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-energy-success border-energy-success";
      case "maintenance":
        return "text-energy-warning border-energy-warning";
      default:
        return "text-energy-danger border-energy-danger";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operational";
      case "maintenance":
        return "In Maintenance";
      default:
        return "Issue Detected";
    }
  };

  const getHealthColor = (health: number) => {
    if (health > 70) return "bg-energy-success";
    if (health > 40) return "bg-energy-warning";
    return "bg-energy-danger";
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "pump":
        return <Gauge className="h-5 w-5 mr-2" />;
      default:
        return <Fuel className="h-5 w-5 mr-2" />;
    }
  };

  return (
    <Card className={cn("card-gradient", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {equipment.map((item) => (
            <div
              key={item.id}
              className="bg-white p-3 rounded-md shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {getIcon(item.type)}
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
                <Badge 
                  variant="outline" 
                  className={cn("text-xs border", getStatusColor(item.status))}
                >
                  {getStatusText(item.status)}
                </Badge>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Health</span>
                  <span>{item.health}%</span>
                </div>
                <Progress value={item.health} className={cn("h-1.5", getHealthColor(item.health))} />
              </div>
              {item.lastMaintenance && (
                <div className="text-xs text-muted-foreground mt-2">
                  Last maintenance: {item.lastMaintenance}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
