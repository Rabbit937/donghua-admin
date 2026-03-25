"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Search,
  Filter,
  Download,
  Eye,
  Truck,
  CheckCircle,
  XCircle,
  Clock,
  Package,
} from "lucide-react";

const orders = [
  { id: "ORD-001", customer: "Sarah Connor", email: "sarah.c@email.com", product: "Wireless Headphones Pro", amount: 129.99, status: "Delivered", date: "2024-03-18" },
  { id: "ORD-002", customer: "John Smith", email: "john.s@email.com", product: "Smart Watch Series 5", amount: 299.99, status: "Shipped", date: "2024-03-17" },
  { id: "ORD-003", customer: "Emma Wilson", email: "emma.w@email.com", product: "USB-C Hub 7-in-1", amount: 79.99, status: "Processing", date: "2024-03-17" },
  { id: "ORD-004", customer: "Michael Brown", email: "michael.b@email.com", product: "4K Webcam Pro", amount: 199.99, status: "Pending", date: "2024-03-16" },
  { id: "ORD-005", customer: "Lisa Anderson", email: "lisa.a@email.com", product: "Mechanical Keyboard RGB", amount: 159.99, status: "Cancelled", date: "2024-03-15" },
  { id: "ORD-006", customer: "David Lee", email: "david.l@email.com", product: "Bluetooth Speaker Mini", amount: 59.99, status: "Delivered", date: "2024-03-15" },
  { id: "ORD-007", customer: "Jennifer Taylor", email: "jennifer.t@email.com", product: "Wireless Headphones Pro", amount: 129.99, status: "Shipped", date: "2024-03-14" },
  { id: "ORD-008", customer: "Robert Martinez", email: "robert.m@email.com", product: "Smart Watch Series 5", amount: 299.99, status: "Processing", date: "2024-03-14" },
];

const statusConfig: Record<string, { color: string; icon: React.ElementType }> = {
  Pending: { color: "bg-amber-500/10 text-amber-400 border-amber-500/20", icon: Clock },
  Processing: { color: "bg-blue-500/10 text-blue-400 border-blue-500/20", icon: Package },
  Shipped: { color: "bg-violet-500/10 text-violet-400 border-violet-500/20", icon: Truck },
  Delivered: { color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", icon: CheckCircle },
  Cancelled: { color: "bg-red-500/10 text-red-400 border-red-500/20", icon: XCircle },
};

const statuses = ["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

export default function OrdersPage() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = orders.filter((order) => {
    const matchesStatus = selectedStatus === "All" || order.status === selectedStatus;
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-950">
      <main className="min-h-screen">
        <header className="sticky top-0 z-20 h-16 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-bold text-zinc-50">Orders</h1>
            <p className="text-sm text-zinc-500">Manage your orders</p>
          </div>
          <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
            <Download className="w-4 h-4 mr-2" />
            Export Orders
          </Button>
        </header>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Pending</p>
                    <p className="text-xl font-bold text-zinc-50">23</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Package className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Processing</p>
                    <p className="text-xl font-bold text-zinc-50">45</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Shipped</p>
                    <p className="text-xl font-bold text-zinc-50">78</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Delivered</p>
                    <p className="text-xl font-bold text-zinc-50">1,088</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Search by order ID, customer..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-10 pr-4 rounded-lg bg-zinc-800/50 border border-zinc-700 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {statuses.map((status) => (
                    <Button
                      key={status}
                      variant={selectedStatus === status ? "secondary" : "ghost"}
                      onClick={() => setSelectedStatus(status)}
                      className={cn(
                        selectedStatus === status
                          ? "bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30"
                          : "text-zinc-400"
                      )}
                    >
                      {status}
                    </Button>
                  ))}
                </div>
                <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardHeader className="border-b border-zinc-800">
              <CardTitle className="text-zinc-50">All Orders</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-800/50">
                    <tr className="text-left text-sm text-zinc-400">
                      <th className="px-4 py-3 font-medium">Order ID</th>
                      <th className="px-4 py-3 font-medium">Customer</th>
                      <th className="px-4 py-3 font-medium">Product</th>
                      <th className="px-4 py-3 font-medium">Amount</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Date</th>
                      <th className="px-4 py-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {filteredOrders.map((order) => {
                      const config = statusConfig[order.status] || statusConfig.Pending;
                      const StatusIcon = config.icon;
                      return (
                        <tr key={order.id} className="text-sm">
                          <td className="px-4 py-3 font-medium text-indigo-400">{order.id}</td>
                          <td className="px-4 py-3">
                            <div>
                              <p className="text-zinc-200 font-medium">{order.customer}</p>
                              <p className="text-zinc-500 text-xs">{order.email}</p>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-zinc-300">{order.product}</td>
                          <td className="px-4 py-3 text-zinc-200 font-medium">${order.amount.toFixed(2)}</td>
                          <td className="px-4 py-3">
                            <Badge variant="outline" className={config.color}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {order.status}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-zinc-400">{order.date}</td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="icon" className="w-8 h-8 text-zinc-400 hover:text-zinc-200">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
