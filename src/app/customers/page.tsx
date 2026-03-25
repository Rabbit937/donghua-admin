"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  Search,
  Filter,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  MoreHorizontal,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const customers = [
  { id: 1, name: "Sarah Connor", email: "sarah.c@email.com", phone: "+1 234-567-8901", location: "Los Angeles, CA", orders: 12, totalSpent: 2847.50, status: "Active", joinDate: "2023-06-15" },
  { id: 2, name: "John Smith", email: "john.s@email.com", phone: "+1 234-567-8902", location: "New York, NY", orders: 8, totalSpent: 1923.00, status: "Active", joinDate: "2023-08-22" },
  { id: 3, name: "Emma Wilson", email: "emma.w@email.com", phone: "+1 234-567-8903", location: "Chicago, IL", orders: 23, totalSpent: 5621.75, status: "VIP", joinDate: "2023-02-10" },
  { id: 4, name: "Michael Brown", email: "michael.b@email.com", phone: "+1 234-567-8904", location: "Houston, TX", orders: 5, totalSpent: 892.25, status: "Active", joinDate: "2024-01-05" },
  { id: 5, name: "Lisa Anderson", email: "lisa.a@email.com", phone: "+1 234-567-8905", location: "Phoenix, AZ", orders: 15, totalSpent: 3420.00, status: "Active", joinDate: "2023-05-20" },
  { id: 6, name: "David Lee", email: "david.l@email.com", phone: "+1 234-567-8906", location: "Philadelphia, PA", orders: 3, totalSpent: 456.99, status: "Inactive", joinDate: "2024-02-28" },
  { id: 7, name: "Jennifer Taylor", email: "jennifer.t@email.com", phone: "+1 234-567-8907", location: "San Antonio, TX", orders: 19, totalSpent: 4156.50, status: "VIP", joinDate: "2023-04-12" },
  { id: 8, name: "Robert Martinez", email: "robert.m@email.com", phone: "+1 234-567-8908", location: "San Diego, CA", orders: 7, totalSpent: 1234.75, status: "Active", joinDate: "2023-11-30" },
];

const statuses = ["All", "Active", "VIP", "Inactive"];

type SortField = "name" | "orders" | "totalSpent" | "joinDate";
type SortOrder = "asc" | "desc";

function SortIcon({ field, sortField, sortOrder }: { field: SortField; sortField: SortField; sortOrder: SortOrder }) {
  if (sortField !== field) return null;
  return sortOrder === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />;
}

export default function CustomersPage() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("totalSpent");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const filteredCustomers = customers
    .filter((customer) => {
      const matchesStatus = selectedStatus === "All" || customer.status === selectedStatus;
      const matchesSearch =
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const order = sortOrder === "asc" ? 1 : -1;
      if (typeof aVal === "string" && typeof bVal === "string") {
        return aVal.localeCompare(bVal) * order;
      }
      return ((aVal as number) - (bVal as number)) * order;
    });

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("desc");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "VIP": return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "Inactive": return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
      default: return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
    }
  };

  const getInitials = (name: string) => name.split(" ").map((n) => n[0]).join("").toUpperCase();

  return (
    <div className="min-h-screen bg-zinc-950">
      <main className="min-h-screen">
        <header className="sticky top-0 z-20 h-16 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-bold text-zinc-50">Customers</h1>
            <p className="text-sm text-zinc-500">Manage your customers</p>
          </div>
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Customer
          </Button>
        </header>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <p className="text-sm text-zinc-400">Total Customers</p>
                <p className="text-2xl font-bold text-zinc-50">5,678</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <p className="text-sm text-zinc-400">Active</p>
                <p className="text-2xl font-bold text-emerald-400">4,231</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <p className="text-sm text-zinc-400">VIP</p>
                <p className="text-2xl font-bold text-amber-400">892</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <p className="text-sm text-zinc-400">New This Month</p>
                <p className="text-2xl font-bold text-indigo-400">234</p>
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
                    placeholder="Search customers..."
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
              <CardTitle className="text-zinc-50">All Customers</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-800/50">
                    <tr className="text-left text-sm text-zinc-400">
                      <th className="px-4 py-3 font-medium">Customer</th>
                      <th className="px-4 py-3 font-medium">Contact</th>
                      <th className="px-4 py-3 font-medium">Location</th>
                      <th className="px-4 py-3 font-medium cursor-pointer hover:text-zinc-200" onClick={() => handleSort("orders")}>
                        <div className="flex items-center gap-1">Orders <SortIcon field="orders" sortField={sortField} sortOrder={sortOrder} /></div>
                      </th>
                      <th className="px-4 py-3 font-medium cursor-pointer hover:text-zinc-200" onClick={() => handleSort("totalSpent")}>
                        <div className="flex items-center gap-1">Total Spent <SortIcon field="totalSpent" sortField={sortField} sortOrder={sortOrder} /></div>
                      </th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {filteredCustomers.map((customer) => (
                      <tr key={customer.id} className="text-sm">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10">
                              <AvatarFallback className="bg-indigo-500/20 text-indigo-400">{getInitials(customer.name)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-zinc-200">{customer.name}</p>
                              <p className="text-xs text-zinc-500">Since {customer.joinDate}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-zinc-400">
                              <Mail className="w-3 h-3" />
                              <span className="text-xs">{customer.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-400">
                              <Phone className="w-3 h-3" />
                              <span className="text-xs">{customer.phone}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2 text-zinc-400">
                            <MapPin className="w-4 h-4" />
                            <span>{customer.location}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-zinc-200">{customer.orders}</td>
                        <td className="px-4 py-3 text-emerald-400 font-medium">${customer.totalSpent.toFixed(2)}</td>
                        <td className="px-4 py-3">
                          <Badge variant="outline" className={getStatusColor(customer.status)}>{customer.status}</Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Button variant="ghost" size="icon" className="w-8 h-8 text-zinc-400 hover:text-zinc-200">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
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
