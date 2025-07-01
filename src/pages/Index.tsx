
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { OrdersModule } from "@/components/OrdersModule";
import { ReservationsModule } from "@/components/ReservationsModule";
import { EmployeeModule } from "@/components/EmployeeModule";
import { RevenueModule } from "@/components/RevenueModule";
import { SettingsModule } from "@/components/SettingsModule";

const Index = () => {
  const [activeModule, setActiveModule] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderActiveModule = () => {
    switch (activeModule) {
      case "dashboard":
        return <Dashboard />;
      case "orders":
        return <OrdersModule />;
      case "reservations":
        return <ReservationsModule />;
      case "employees":
        return <EmployeeModule />;
      case "revenue":
        return <RevenueModule />;
      case "settings":
        return <SettingsModule />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'} overflow-auto`}>
        <div className="p-6">
          {renderActiveModule()}
        </div>
      </main>
    </div>
  );
};

export default Index;
