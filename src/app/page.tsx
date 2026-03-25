"use client";

import { StatsCard } from "@/components/StatsCard";
import { RevenueChart } from "@/components/RevenueChart";
import { RecentOrders } from "@/components/RecentOrders";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  Plus,
  FileText,
  Bell,
  Search,
  Calendar,
} from "lucide-react";

const topProducts = [
  { name: "Wireless Headphones Pro", sales: 1245, revenue: 124500, progress: 78 },
  { name: "Smart Watch Series 5", sales: 892, revenue: 89200, progress: 56 },
  { name: "Mechanical Keyboard RGB", sales: 756, revenue: 75600, progress: 47 },
  { name: "USB-C Hub 7-in-1", sales: 634, revenue: 63400, progress: 39 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Main Content */}
      <main className="min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-20 h-16 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-bold text-zinc-50">Dashboard</h1>
            <p className="text-sm text-zinc-500">Welcome back, Admin</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search..."
                className="w-64 h-10 pl-10 pr-4 rounded-lg bg-zinc-800/50 border border-zinc-700 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative text-zinc-400">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-500" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400">
              <Calendar className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Total Revenue"
              value="$124,563"
              change="+12.5%"
              changeType="positive"
              icon={DollarSign}
              iconColor="text-emerald-400"
            />
            <StatsCard
              title="Total Orders"
              value="1,234"
              change="+8.2%"
              changeType="positive"
              icon={ShoppingCart}
              iconColor="text-blue-400"
            />
            <StatsCard
              title="Total Customers"
              value="5,678"
              change="+5.1%"
              changeType="positive"
              icon={Users}
              iconColor="text-violet-400"
            />
            <StatsCard
              title="Conversion Rate"
              value="3.24%"
              change="-0.4%"
              changeType="negative"
              icon={TrendingUp}
              iconColor="text-amber-400"
            />
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>

          {/* Charts and Orders */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>

            {/* Top Products */}
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-zinc-50">Top Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-zinc-500 w-4">{index + 1}</span>
                        <span className="text-sm font-medium text-zinc-200">{product.name}</span>
                      </div>
                      <span className="text-sm font-medium text-emerald-400">${product.revenue.toLocaleString()}</span>
                    </div>
                    <Progress value={product.progress} className="h-2 bg-zinc-800" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Orders */}
          <RecentOrders />
        </div>
      </main>
    </div>
  );
}
