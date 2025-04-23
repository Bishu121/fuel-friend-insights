
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
  initials: string;
  status: "active" | "break" | "offline";
  shift?: string;
};

type TeamStatusCardProps = {
  title: string;
  members: TeamMember[];
  className?: string;
};

export function TeamStatusCard({ title, members, className }: TeamStatusCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-energy-success";
      case "break":
        return "bg-energy-warning";
      default:
        return "bg-neutral-300";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "On Shift";
      case "break":
        return "On Break";
      default:
        return "Offline";
    }
  };

  return (
    <Card className={cn("card-gradient", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={member.avatarUrl} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{member.name}</div>
                  <div className="text-xs text-muted-foreground">{member.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {member.shift && (
                  <Badge variant="outline" className="text-xs">
                    {member.shift}
                  </Badge>
                )}
                <div className="flex items-center">
                  <div className={cn("h-2 w-2 rounded-full mr-2", getStatusColor(member.status))} />
                  <span className="text-xs">{getStatusText(member.status)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
