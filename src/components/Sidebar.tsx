
import { useState } from "react";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Calendar, 
  Users, 
  TrendingUp, 
  Settings,
  Menu,
  X,
  Bell,
  ChefHat,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar = ({ activeModule, setActiveModule, collapsed, setCollapsed }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, badge: null },
    { id: "orders", label: "Orders", icon: ShoppingCart, badge: "12" },
    { id: "reservations", label: "Reservations", icon: Calendar, badge: "5" },
    { id: "employees", label: "Employees", icon: Users, badge: null },
    { id: "revenue", label: "Revenue", icon: TrendingUp, badge: null },
    { id: "ai-calling", label: "AI Calling", icon: Phone, badge: "Live" },
    { id: "settings", label: "Settings", icon: Settings, badge: null },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-50 ${collapsed ? 'w-16' : 'w-64'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <ChefHat className="h-8 w-8 text-orange-600" />
            <span className="font-bold text-xl text-gray-800">RestaurantOS</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="p-2"
        >
          {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-orange-100 text-orange-700 border border-orange-200' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && (
                <>
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <Badge 
                      variant="secondary" 
                      className={`ml-auto ${
                        item.id === 'ai-calling' 
                          ? 'bg-green-600 text-white animate-pulse' 
                          : 'bg-orange-600 text-white'
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </>
              )}
            </button>
          );
        })}
      </nav>

      {/* Quick Stats - Only show when not collapsed */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4 p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white">
          <div className="text-sm font-medium">Today's Revenue</div>
          <div className="text-2xl font-bold">₹28,450</div>
          <div className="text-xs opacity-90">+12% from yesterday</div>
        </div>
      )}
    </div>
  );
};
