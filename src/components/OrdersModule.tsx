
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Search, 
  Filter,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";

export const OrdersModule = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const orders = [
    {
      id: "#1234",
      customer: "Rajesh Kumar",
      table: "Table 5",
      items: ["Butter Chicken", "Naan x2", "Basmati Rice"],
      amount: 850,
      status: "preparing",
      time: "2 mins ago",
      orderTime: "7:45 PM",
      type: "dine-in"
    },
    {
      id: "#1235",
      customer: "Priya Sharma",
      table: "Takeaway",
      items: ["Chicken Biryani", "Raita", "Papad"],
      amount: 650,
      status: "ready",
      time: "5 mins ago",
      orderTime: "7:40 PM",
      type: "takeaway"
    },
    {
      id: "#1236",
      customer: "Amit Patel",
      table: "Table 2",
      items: ["Dal Makhani", "Roti x4", "Pickle"],
      amount: 420,
      status: "delivered",
      time: "8 mins ago",
      orderTime: "7:35 PM",
      type: "dine-in"
    },
    {
      id: "#1237",
      customer: "Delivery #789",
      table: "Delivery",
      items: ["Paneer Tikka", "Jeera Rice", "Lassi"],
      amount: 720,
      status: "preparing",
      time: "12 mins ago",
      orderTime: "7:30 PM",
      type: "delivery"
    },
    {
      id: "#1238",
      customer: "Sneha Reddy",
      table: "Table 8",
      items: ["Fish Curry", "Appam x3", "Coconut Rice"],
      amount: 980,
      status: "new",
      time: "15 mins ago",
      orderTime: "7:25 PM",
      type: "dine-in"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-700 border-blue-200";
      case "preparing": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "ready": return "bg-green-100 text-green-700 border-green-200";
      case "delivered": return "bg-gray-100 text-gray-700 border-gray-200";
      case "cancelled": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-blue-100 text-blue-700 border-blue-200";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "dine-in": return "bg-purple-100 text-purple-700";
      case "takeaway": return "bg-orange-100 text-orange-700";
      case "delivery": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new": return <AlertCircle className="h-4 w-4" />;
      case "preparing": return <Clock className="h-4 w-4" />;
      case "ready": return <CheckCircle className="h-4 w-4" />;
      case "delivered": return <CheckCircle className="h-4 w-4" />;
      case "cancelled": return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || order.status === activeTab;
    return matchesSearch && matchesTab;
  });

  const orderStats = {
    total: orders.length,
    new: orders.filter(o => o.status === "new").length,
    preparing: orders.filter(o => o.status === "preparing").length,
    ready: orders.filter(o => o.status === "ready").length,
    delivered: orders.filter(o => o.status === "delivered").length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
          <p className="text-gray-600 mt-1">Track and manage all orders in real-time</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-700">{orderStats.total}</p>
              <p className="text-sm text-blue-600">Total Orders</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-700">{orderStats.new}</p>
              <p className="text-sm text-orange-600">New Orders</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-700">{orderStats.preparing}</p>
              <p className="text-sm text-yellow-600">Preparing</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-700">{orderStats.ready}</p>
              <p className="text-sm text-green-600">Ready</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200 bg-gray-50">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-700">{orderStats.delivered}</p>
              <p className="text-sm text-gray-600">Delivered</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders List */}
      <Card>
        <CardHeader>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="new">New ({orderStats.new})</TabsTrigger>
              <TabsTrigger value="preparing">Preparing ({orderStats.preparing})</TabsTrigger>
              <TabsTrigger value="ready">Ready ({orderStats.ready})</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bold text-lg">{order.id}</span>
                      <Badge className={getStatusColor(order.status)} variant="outline">
                        {getStatusIcon(order.status)}
                        <span className="ml-1 capitalize">{order.status}</span>
                      </Badge>
                      <Badge className={getTypeColor(order.type)}>
                        {order.type}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Customer & Table</p>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-gray-600">{order.table}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Items</p>
                        <div className="space-y-1">
                          {order.items.map((item, index) => (
                            <p key={index} className="text-sm">{item}</p>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Time & Amount</p>
                        <p className="font-medium">₹{order.amount}</p>
                        <p className="text-sm text-gray-600">{order.orderTime} • {order.time}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 ml-4">
                    {order.status === "new" && (
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        Accept Order
                      </Button>
                    )}
                    {order.status === "preparing" && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Mark Ready
                      </Button>
                    )}
                    {order.status === "ready" && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Mark Delivered
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
