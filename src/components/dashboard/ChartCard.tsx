
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { cn } from "@/lib/utils";

type ChartData = {
  name: string;
  value?: number;
  [key: string]: string | number | undefined;
};

type ChartCardProps = {
  title: string;
  data: ChartData[];
  type?: "bar" | "line";
  dataKey: string;
  className?: string;
  xAxisKey?: string;
  color?: string;
  subtitle?: string;
};

export function ChartCard({
  title,
  data,
  type = "bar",
  dataKey,
  className,
  xAxisKey = "name",
  color = "#2A9D8F",
  subtitle,
}: ChartCardProps) {
  return (
    <Card className={cn("card-gradient overflow-hidden", className)}>
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold">{title}</CardTitle>
            {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            {type === "bar" ? (
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis 
                  dataKey={xAxisKey}
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    background: "white", 
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                  }}
                  cursor={{ fill: "rgba(42, 157, 143, 0.05)" }}
                />
                <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
              </BarChart>
            ) : (
              <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis 
                  dataKey={xAxisKey}
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    background: "white", 
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey={dataKey} 
                  stroke={color} 
                  strokeWidth={2}
                  dot={{ fill: color, r: 2 }}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
