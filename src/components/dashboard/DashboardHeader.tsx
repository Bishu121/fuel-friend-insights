
import React from "react";
import { Card } from "@/components/ui/card";
import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between w-full py-4 mb-6">
      <div>
        <h1 className="text-2xl font-semibold">Fuel Friend Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString("en-US", { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
      
      <div className="flex items-center space-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-destructive" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end">
            <div className="space-y-2">
              <h4 className="font-medium">Notifications</h4>
              <div className="text-sm">
                <div className="border-l-4 border-energy-warning px-3 py-2 mb-2 bg-neutral-50">
                  <p className="font-medium">Diesel stock running low</p>
                  <p className="text-muted-foreground">Estimated to last 2 more days</p>
                </div>
                <div className="border-l-4 border-energy-info px-3 py-2 bg-neutral-50">
                  <p className="font-medium">Fuel delivery scheduled</p>
                  <p className="text-muted-foreground">Tomorrow at 10:00 AM</p>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56" align="end">
            <div className="space-y-1">
              <h4 className="font-medium mb-2">Settings</h4>
              <Button variant="ghost" className="w-full justify-start text-sm">Account</Button>
              <Button variant="ghost" className="w-full justify-start text-sm">Preferences</Button>
              <Button variant="ghost" className="w-full justify-start text-sm">Help & Support</Button>
            </div>
          </PopoverContent>
        </Popover>

        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback className="bg-primary text-primary-foreground">OP</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
