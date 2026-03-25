"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: LucideIcon;
  iconColor?: string;
}

export function StatsCard({ title, value, change, changeType, icon: Icon, iconColor = "text-indigo-400" }: StatsCardProps) {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-zinc-400">{title}</p>
            <p className="text-2xl font-bold text-zinc-50">{value}</p>
            <div className="flex items-center gap-1">
              {changeType === "positive" ? (
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-400" />
              )}
              <span className={cn("text-sm font-medium", changeType === "positive" ? "text-emerald-400" : "text-red-400")}>
                {change}
              </span>
              <span className="text-sm text-zinc-500">from last month</span>
            </div>
          </div>
          <div className={cn("p-3 rounded-xl bg-zinc-800/50", iconColor)}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
