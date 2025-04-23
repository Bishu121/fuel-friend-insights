
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type QuickEntryCardProps = {
  title: string;
  fields: Array<{
    id: string;
    label: string;
    type: string;
    placeholder?: string;
  }>;
  onSubmit: (data: Record<string, string>) => void;
};

export function QuickEntryCard({ title, fields, onSubmit }: QuickEntryCardProps) {
  const [formData, setFormData] = React.useState<Record<string, string>>(
    fields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
  );

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData(fields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {}));
  };

  return (
    <Card className="card-gradient overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          {fields.map((field) => (
            <div key={field.id} className="grid gap-1">
              <Label htmlFor={field.id} className="text-xs">
                {field.label}
              </Label>
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="h-9"
              />
            </div>
          ))}
          <Button type="submit" size="sm" className="w-full mt-3">
            Save
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
