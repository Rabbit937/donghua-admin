"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Moon,
  Save,
} from "lucide-react";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "appearance", label: "Appearance", icon: Globe },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    orderUpdates: true,
    marketing: false,
  });

  return (
    <div className="min-h-screen bg-zinc-950">
      <main className="min-h-screen">
        <header className="sticky top-0 z-20 h-16 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex items-center px-6">
          <div>
            <h1 className="text-xl font-bold text-zinc-50">Settings</h1>
            <p className="text-sm text-zinc-500">Manage your account settings</p>
          </div>
        </header>

        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <Card className="bg-zinc-900/50 border-zinc-800 lg:w-64 shrink-0">
              <CardContent className="p-4">
                <nav className="space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        activeTab === tab.id
                          ? "bg-indigo-500/10 text-indigo-400"
                          : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                      )}
                    >
                      <tab.icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>

            <div className="flex-1 space-y-6">
              {activeTab === "profile" && (
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-50">Profile Settings</CardTitle>
                    <CardDescription className="text-zinc-400">Update your account information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">A</span>
                      </div>
                      <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Change Avatar
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-zinc-300">First Name</Label>
                        <Input id="firstName" defaultValue="Admin" className="bg-zinc-800/50 border-zinc-700 text-zinc-200" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-zinc-300">Last Name</Label>
                        <Input id="lastName" defaultValue="User" className="bg-zinc-800/50 border-zinc-700 text-zinc-200" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-zinc-300">Email</Label>
                        <Input id="email" type="email" defaultValue="admin@donghua.com" className="bg-zinc-800/50 border-zinc-700 text-zinc-200" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-zinc-300">Phone</Label>
                        <Input id="phone" type="tel" defaultValue="+1 234-567-8900" className="bg-zinc-800/50 border-zinc-700 text-zinc-200" />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "notifications" && (
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-50">Notification Preferences</CardTitle>
                    <CardDescription className="text-zinc-400">Choose how you want to be notified</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-zinc-300">Notification Channels</h3>
                      {[
                        { key: "email", label: "Email Notifications" },
                        { key: "push", label: "Push Notifications" },
                        { key: "sms", label: "SMS Notifications" },
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between">
                          <span className="text-zinc-200">{item.label}</span>
                          <button
                            onClick={() => setNotifications((prev) => ({ ...prev, [item.key]: !prev[item.key as keyof typeof notifications] }))}
                            className={cn(
                              "w-11 h-6 rounded-full transition-colors relative",
                              notifications[item.key as keyof typeof notifications] ? "bg-indigo-500" : "bg-zinc-700"
                            )}
                          >
                            <span className={cn(
                              "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform",
                              notifications[item.key as keyof typeof notifications] ? "translate-x-6" : "translate-x-1"
                            )} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-zinc-300">Notification Types</h3>
                      {[
                        { key: "orderUpdates", label: "Order Updates" },
                        { key: "marketing", label: "Marketing & Promotions" },
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between">
                          <span className="text-zinc-200">{item.label}</span>
                          <button
                            onClick={() => setNotifications((prev) => ({ ...prev, [item.key]: !prev[item.key as keyof typeof notifications] }))}
                            className={cn(
                              "w-11 h-6 rounded-full transition-colors relative",
                              notifications[item.key as keyof typeof notifications] ? "bg-indigo-500" : "bg-zinc-700"
                            )}
                          >
                            <span className={cn(
                              "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform",
                              notifications[item.key as keyof typeof notifications] ? "translate-x-6" : "translate-x-1"
                            )} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "security" && (
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-50">Security Settings</CardTitle>
                    <CardDescription className="text-zinc-400">Manage your account security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-zinc-300">Change Password</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword" className="text-zinc-300">Current Password</Label>
                          <Input id="currentPassword" type="password" placeholder="Enter current password" className="bg-zinc-800/50 border-zinc-700 text-zinc-200" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword" className="text-zinc-300">New Password</Label>
                          <Input id="newPassword" type="password" placeholder="Enter new password" className="bg-zinc-800/50 border-zinc-700 text-zinc-200" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword" className="text-zinc-300">Confirm New Password</Label>
                          <Input id="confirmPassword" type="password" placeholder="Confirm new password" className="bg-zinc-800/50 border-zinc-700 text-zinc-200" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">Update Password</Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "billing" && (
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-50">Billing Settings</CardTitle>
                    <CardDescription className="text-zinc-400">Manage your subscription and payment methods</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-zinc-200 font-medium">Current Plan</h3>
                          <p className="text-sm text-zinc-400">Professional</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium">Active</span>
                      </div>
                      <p className="text-2xl font-bold text-zinc-50">$29<span className="text-sm text-zinc-400 font-normal">/month</span></p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-zinc-300">Payment Method</h3>
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                        <div className="w-12 h-8 bg-zinc-700 rounded flex items-center justify-center text-xs text-zinc-400">VISA</div>
                        <div>
                          <p className="text-zinc-200">**** **** **** 4242</p>
                          <p className="text-sm text-zinc-500">Expires 12/2025</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Manage Subscription
                    </Button>
                  </CardContent>
                </Card>
              )}

              {activeTab === "appearance" && (
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-50">Appearance Settings</CardTitle>
                    <CardDescription className="text-zinc-400">Customize the look and feel</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-zinc-300">Theme</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <button className="p-4 rounded-lg bg-zinc-950 border-2 border-indigo-500 text-center">
                          <Moon className="w-6 h-6 mx-auto mb-2 text-zinc-200" />
                          <span className="text-sm text-zinc-200">Dark</span>
                        </button>
                        <button className="p-4 rounded-lg bg-zinc-100 border border-zinc-300 text-center opacity-50 cursor-not-allowed">
                          <div className="w-6 h-6 mx-auto mb-2 bg-zinc-200 rounded-full" />
                          <span className="text-sm text-zinc-500">Light</span>
                        </button>
                        <button className="p-4 rounded-lg bg-gradient-to-b from-zinc-100 to-zinc-950 border border-zinc-300 text-center opacity-50 cursor-not-allowed">
                          <div className="w-6 h-6 mx-auto mb-2 bg-gradient-to-r from-zinc-200 to-zinc-800 rounded-full" />
                          <span className="text-sm text-zinc-500">System</span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
