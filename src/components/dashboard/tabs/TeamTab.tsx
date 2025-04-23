
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TeamStatusCard } from "../TeamStatusCard";
import { TeamMember } from "@/hooks/useDashboardData";

interface TeamTabProps {
  teamMembers: TeamMember[];
}

export function TeamTab({ teamMembers }: TeamTabProps) {
  return (
    <>
      <TeamStatusCard title="All Team Members" members={teamMembers} className="mb-6" />
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Team schedule and performance metrics will be available here.</p>
        </CardContent>
      </Card>
    </>
  );
}
