
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Calendar,
  DollarSign,
  Clock,
  Star,
  AlertCircle
} from "lucide-react";
import { RevenueChart } from "./charts/RevenueChart";
import { OrdersChart } from "./charts/OrdersChart";

export const Dashboard = () => {
  const stats = [
    {
      title: "Today's Revenue",
      value: "₹28,450",
      change: "+12%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Active Orders",
      value: "23",
      change: "5 new",
      trend: "up",
      icon: ShoppingCart,
      color: "text-blue-600"
    },
    {
      title: "Reservations",
      value: "18",
      change: "3 upcoming",
      trend: "neutral",
      icon: Calendar,
      color: "text-purple-600"
    },
    {
      title: "Staff Present",
      value: "12/15",
      change: "3 absent",
      trend: "down",
      icon: Users,
      color: "text-orange-600"
    }
  ];

  const recentOrders = [
    { id: "#1234", table: "Table 5", items: "Butter Chicken, Naan x2", amount: "₹850", status: "preparing", time: "2 mins ago" },
    { id: "#1235", table: "Takeaway", items: "Biryani, Raita", amount: "₹650", status: "ready", time: "5 mins ago" },
    { id: "#1236", table: "Table 2", items: "Dal Makhani, Roti x4", amount: "₹420", status: "delivered", time: "8 mins ago" },
    { id: "#1237", table: "Table 8", items: "Paneer Tikka, Rice", amount: "₹720", status: "preparing", time: "12 mins ago" },
  ];

  const upcomingReservations = [
    { name: "Rajesh Kumar", time: "7:30 PM", party: 4, table: "Table 12", phone: "+91 98765 43210" },
    { name: "Priya Sharma", time: "8:00 PM", party: 2, table: "Table 6", phone: "+91 87654 32109" },
    { name: "Amit Patel", time: "8:30 PM", party: 6, table: "Table 15", phone: "+91 76543 21098" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing": return "bg-yellow-100 text-yellow-700";
      case "ready": return "bg-green-100 text-green-700";
      case "delivered": return "bg-gray-100 text-gray-700";
      default: return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Clock className="h-4 w-4" />
            Last updated: 2 mins ago
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className={`text-sm mt-1 ${stat.color}`}>{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Revenue Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-blue-600" />
              Orders Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <OrdersChart />
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Orders</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{order.id}</span>
                      <Badge variant="outline">{order.table}</Badge>
                      <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{order.items}</p>
                    <p className="text-xs text-gray-500">{order.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{order.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Reservations */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Today's Reservations</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingReservations.map((reservation, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{reservation.name}</span>
                      <Badge variant="outline">{reservation.table}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Party of {reservation.party} • {reservation.time}</p>
                    <p className="text-xs text-gray-500">{reservation.phone}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Call</Button>
                    <Button size="sm">Confirm</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts Section */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <AlertCircle className="h-5 w-5" />
            Today's Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>3 employees are absent today</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Table 7 has been waiting for 15 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Revenue target 85% achieved</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
