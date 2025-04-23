
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, ArrowUp, ChartBar } from "lucide-react";
import { cn } from "@/lib/utils";

type FinancialItem = {
  category: string;
  amount: number;
  change?: number;
};

type FinancialSummaryCardProps = {
  title: string;
  currency?: string;
  revenue: FinancialItem;
  expenses: FinancialItem;
  profit: FinancialItem;
  className?: string;
};

export function FinancialSummaryCard({
  title,
  currency = "₹",
  revenue,
  expenses,
  profit,
  className,
}: FinancialSummaryCardProps) {
  const formatCurrency = (amount: number) => {
    return `${currency} ${amount.toLocaleString()}`;
  };

  return (
    <Card className={cn("card-gradient", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">{title}</CardTitle>
          <ChartBar className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Revenue</span>
              <span className="font-medium">{formatCurrency(revenue.amount)}</span>
            </div>
            {revenue.change !== undefined && (
              <div className="flex items-center text-xs">
                {revenue.change >= 0 ? (
                  <ArrowUp className="h-3 w-3 text-energy-success mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 text-energy-danger mr-1" />
                )}
                <span
                  className={cn(
                    revenue.change >= 0 ? "text-energy-success" : "text-energy-danger"
                  )}
                >
                  {Math.abs(revenue.change)}% from yesterday
                </span>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Expenses</span>
              <span className="font-medium">{formatCurrency(expenses.amount)}</span>
            </div>
            {expenses.change !== undefined && (
              <div className="flex items-center text-xs">
                {expenses.change <= 0 ? (
                  <ArrowDown className="h-3 w-3 text-energy-success mr-1" />
                ) : (
                  <ArrowUp className="h-3 w-3 text-energy-danger mr-1" />
                )}
                <span
                  className={cn(
                    expenses.change <= 0 ? "text-energy-success" : "text-energy-danger"
                  )}
                >
                  {Math.abs(expenses.change)}% from yesterday
                </span>
              </div>
            )}
          </div>

          <Separator />

          <div className="space-y-1">
            <div className="flex justify-between text-sm font-medium">
              <span>Net Profit</span>
              <span>{formatCurrency(profit.amount)}</span>
            </div>
            {profit.change !== undefined && (
              <div className="flex items-center text-xs">
                {profit.change >= 0 ? (
                  <ArrowUp className="h-3 w-3 text-energy-success mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 text-energy-danger mr-1" />
                )}
                <span
                  className={cn(
                    profit.change >= 0 ? "text-energy-success" : "text-energy-danger"
                  )}
                >
                  {Math.abs(profit.change)}% from yesterday
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
