
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  onClick?: () => void;
};

export function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  className,
  onClick,
}: StatCardProps) {
  return (
    <Card className={cn("card-gradient overflow-hidden", className)} onClick={onClick}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon && <div className="text-primary">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
      {trend && (
        <CardFooter className="px-6 py-2">
          <div
            className={cn(
              "text-xs flex items-center",
              trend.isPositive ? "text-energy-success" : "text-energy-danger"
            )}
          >
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%{" "}
            <span className="ml-1">vs last week</span>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
