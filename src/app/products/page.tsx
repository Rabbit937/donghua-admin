"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
} from "lucide-react";

const products = [
  { id: 1, name: "Wireless Headphones Pro", category: "Electronics", price: 129.99, stock: 245, status: "In Stock", image: "🎧" },
  { id: 2, name: "Smart Watch Series 5", category: "Wearables", price: 299.99, stock: 89, status: "Low Stock", image: "⌚" },
  { id: 3, name: "Mechanical Keyboard RGB", category: "Electronics", price: 159.99, stock: 0, status: "Out of Stock", image: "⌨️" },
  { id: 4, name: "USB-C Hub 7-in-1", category: "Accessories", price: 79.99, stock: 512, status: "In Stock", image: "🔌" },
  { id: 5, name: "4K Webcam Pro", category: "Electronics", price: 199.99, stock: 78, status: "In Stock", image: "📹" },
  { id: 6, name: "Bluetooth Speaker Mini", category: "Audio", price: 59.99, stock: 23, status: "Low Stock", image: "🔊" },
];

const categories = ["All", "Electronics", "Wearables", "Accessories", "Audio"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Low Stock":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "Out of Stock":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <main className="min-h-screen">
        <header className="sticky top-0 z-20 h-16 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-bold text-zinc-50">Products</h1>
            <p className="text-sm text-zinc-500">Manage your product inventory</p>
          </div>
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </header>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <p className="text-sm text-zinc-400">Total Products</p>
                <p className="text-2xl font-bold text-zinc-50">1,234</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <p className="text-sm text-zinc-400">In Stock</p>
                <p className="text-2xl font-bold text-emerald-400">892</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <p className="text-sm text-zinc-400">Low Stock</p>
                <p className="text-2xl font-bold text-amber-400">156</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <p className="text-sm text-zinc-400">Out of Stock</p>
                <p className="text-2xl font-bold text-red-400">186</p>
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
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-10 pr-4 rounded-lg bg-zinc-800/50 border border-zinc-700 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={selectedCategory === cat ? "secondary" : "ghost"}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        selectedCategory === cat
                          ? "bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30"
                          : "text-zinc-400"
                      )}
                    >
                      {cat}
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
              <CardTitle className="text-zinc-50">All Products</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-800/50">
                    <tr className="text-left text-sm text-zinc-400">
                      <th className="px-4 py-3 font-medium">Product</th>
                      <th className="px-4 py-3 font-medium">Category</th>
                      <th className="px-4 py-3 font-medium">Price</th>
                      <th className="px-4 py-3 font-medium">Stock</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {filteredProducts.map((product) => (
                      <tr key={product.id} className="text-sm">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-xl">
                              {product.image}
                            </div>
                            <span className="font-medium text-zinc-200">{product.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-zinc-400">{product.category}</td>
                        <td className="px-4 py-3 text-zinc-200">${product.price.toFixed(2)}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-zinc-200">{product.stock}</span>
                            {product.stock < 50 && product.stock > 0 && (
                              <Progress value={(product.stock / 100) * 100} className="h-1.5 w-12 bg-zinc-800" />
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant="outline" className={getStatusColor(product.status)}>
                            {product.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="w-8 h-8 text-zinc-400 hover:text-zinc-200">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="w-8 h-8 text-zinc-400 hover:text-red-400">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
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
