"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eye, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const allOrders = [
  {
    id: "ORD-7842",
    customer: "Sarah Chen",
    email: "sarah.chen@email.com",
    product: "Wireless Headphones Pro",
    status: "Delivered",
    amount: "$299.00",
    date: "2026-03-18",
    avatar: "SC",
  },
  {
    id: "ORD-7841",
    customer: "Michael Park",
    email: "m.park@email.com",
    product: "Smart Watch Series 5",
    status: "Shipped",
    amount: "$549.00",
    date: "2026-03-18",
    avatar: "MP",
  },
  {
    id: "ORD-7840",
    customer: "Emma Wilson",
    email: "emma.w@email.com",
    product: "Laptop Stand Aluminum",
    status: "Processing",
    amount: "$89.00",
    date: "2026-03-17",
    avatar: "EW",
  },
  {
    id: "ORD-7839",
    customer: "James Lee",
    email: "james.lee@email.com",
    product: "Mechanical Keyboard RGB",
    status: "Pending",
    amount: "$159.00",
    date: "2026-03-17",
    avatar: "JL",
  },
  {
    id: "ORD-7838",
    customer: "Lisa Wang",
    email: "lisa.wang@email.com",
    product: "USB-C Hub 7-in-1",
    status: "Delivered",
    amount: "$79.00",
    date: "2026-03-16",
    avatar: "LW",
  },
];

const statusStyles: Record<string, { bg: string; text: string }> = {
  Pending: { bg: "bg-amber-500/10", text: "text-amber-400" },
  Processing: { bg: "bg-blue-500/10", text: "text-blue-400" },
  Shipped: { bg: "bg-violet-500/10", text: "text-violet-400" },
  Delivered: { bg: "bg-emerald-500/10", text: "text-emerald-400" },
};

const ORDERS_PER_PAGE = 5;

export function RecentOrders() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allOrders.length / ORDERS_PER_PAGE);
  const startIndex = (currentPage - 1) * ORDERS_PER_PAGE;
  const paginatedOrders = allOrders.slice(startIndex, startIndex + ORDERS_PER_PAGE);

  return (
    <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-zinc-50">Recent Orders</CardTitle>
        <Button variant="ghost" size="sm" className="text-indigo-400 hover:text-indigo-300">
          View All
          <Eye className="w-4 h-4 ml-2" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {paginatedOrders.map((order) => {
            const statusStyle = statusStyles[order.status] || statusStyles.Pending;
            return (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 rounded-lg bg-zinc-800/30 hover:bg-zinc-800/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600">
                    <AvatarFallback className="text-white text-sm font-medium">
                      {order.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-zinc-200">{order.customer}</span>
                      <Badge
                        variant="secondary"
                        className={cn("text-xs font-medium", statusStyle.bg, statusStyle.text)}
                      >
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-500">{order.product}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                    <p className="font-medium text-zinc-200">{order.amount}</p>
                    <p className="text-sm text-zinc-500">{order.date}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-md text-zinc-400 hover:text-zinc-200">
                      <MoreHorizontal className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
                      <DropdownMenuItem className="text-zinc-300 focus:text-zinc-100">
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-zinc-300 focus:text-zinc-100">
                        Track Order
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-400 focus:text-red-300">
                        Cancel Order
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800">
          <p className="text-sm text-zinc-500">
            Showing {startIndex + 1}-{Math.min(startIndex + ORDERS_PER_PAGE, allOrders.length)} of {allOrders.length}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={cn(
                  "w-9",
                  currentPage === page
                    ? "bg-indigo-500 text-white hover:bg-indigo-600"
                    : "text-zinc-400 hover:bg-zinc-800"
                )}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
