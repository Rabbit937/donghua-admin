"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RevenueChart } from "@/components/RevenueChart";
import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  TrendingDown,
  Eye,
  Clock,
} from "lucide-react";

const stats = [
  { title: "Total Revenue", value: "$124,563", change: "+12.5%", changeType: "positive", icon: DollarSign, iconColor: "text-emerald-400" },
  { title: "Total Orders", value: "1,234", change: "+8.2%", changeType: "positive", icon: ShoppingCart, iconColor: "text-blue-400" },
  { title: "Total Customers", value: "5,678", change: "+5.1%", changeType: "positive", icon: Users, iconColor: "text-violet-400" },
  { title: "Conversion Rate", value: "3.24%", change: "-0.4%", changeType: "negative", icon: TrendingUp, iconColor: "text-amber-400" },
];

const topProducts = [
  { name: "Wireless Headphones Pro", sales: 1245, revenue: 124500, progress: 78 },
  { name: "Smart Watch Series 5", sales: 892, revenue: 89200, progress: 56 },
  { name: "Mechanical Keyboard RGB", sales: 756, revenue: 75600, progress: 47 },
  { name: "USB-C Hub 7-in-1", sales: 634, revenue: 63400, progress: 39 },
  { name: "4K Webcam Pro", sales: 523, revenue: 52300, progress: 32 },
];

const trafficSources = [
  { source: "Organic Search", visitors: 45230, percentage: 38 },
  { source: "Direct", visitors: 28450, percentage: 24 },
  { source: "Social Media", visitors: 21340, percentage: 18 },
  { source: "Referral", visitors: 14230, percentage: 12 },
  { source: "Email", visitors: 9750, percentage: 8 },
];

const recentActivity = [
  { action: "New order #ORD-001", time: "2 minutes ago", type: "order" },
  { action: "Product low stock alert", time: "15 minutes ago", type: "alert" },
  { action: "New customer registration", time: "32 minutes ago", type: "customer" },
  { action: "Order #ORD-002 shipped", time: "1 hour ago", type: "order" },
  { action: "Review submitted for Product", time: "2 hours ago", type: "review" },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <main className="min-h-screen">
        <header className="sticky top-0 z-20 h-16 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex items-center px-6">
          <div>
            <h1 className="text-xl font-bold text-zinc-50">Analytics</h1>
            <p className="text-sm text-zinc-500">View your store performance and insights</p>
          </div>
        </header>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.title} className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-zinc-400">{stat.title}</p>
                    <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                  </div>
                  <div className="mt-2">
                    <p className="text-2xl font-bold text-zinc-50">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {stat.changeType === "positive" ? (
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-400" />
                      )}
                      <span className={stat.changeType === "positive" ? "text-emerald-400" : "text-red-400"}>{stat.change}</span>
                      <span className="text-zinc-500 text-sm">from last month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>

            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader className="border-b border-zinc-800">
                <CardTitle className="text-zinc-50">Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                {trafficSources.map((source) => (
                  <div key={source.source} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-300">{source.source}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-400">{source.visitors.toLocaleString()}</span>
                        <span className="text-xs text-zinc-500">{source.percentage}%</span>
                      </div>
                    </div>
                    <Progress value={source.percentage} className="h-2 bg-zinc-800" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader className="border-b border-zinc-800">
                <CardTitle className="text-zinc-50">Top Products</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-zinc-500 w-4">{index + 1}</span>
                        <span className="text-sm font-medium text-zinc-200">{product.name}</span>
                      </div>
                      <span className="text-sm font-medium text-emerald-400">${product.revenue.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Progress value={product.progress} className="h-2 flex-1 bg-zinc-800" />
                      <span className="text-xs text-zinc-500 w-12">{product.sales} sales</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader className="border-b border-zinc-800">
                <CardTitle className="text-zinc-50">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                        {activity.type === "order" && <ShoppingCart className="w-4 h-4 text-blue-400" />}
                        {activity.type === "alert" && <Clock className="w-4 h-4 text-amber-400" />}
                        {activity.type === "customer" && <Users className="w-4 h-4 text-emerald-400" />}
                        {activity.type === "review" && <Eye className="w-4 h-4 text-violet-400" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-zinc-200">{activity.action}</p>
                        <p className="text-xs text-zinc-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
