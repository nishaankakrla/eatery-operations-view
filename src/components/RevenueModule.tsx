
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  DollarSign, 
  CreditCard, 
  PieChart,
  Download,
  Calendar,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { RevenueChart } from "./charts/RevenueChart";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell } from 'recharts';

export const RevenueModule = () => {
  const dailyStats = [
    { name: 'Mon', revenue: 24000, orders: 45 },
    { name: 'Tue', revenue: 26500, orders: 52 },
    { name: 'Wed', revenue: 22800, orders: 38 },
    { name: 'Thu', revenue: 28900, orders: 58 },
    { name: 'Fri', revenue: 32100, orders: 67 },
    { name: 'Sat', revenue: 35600, orders: 78 },
    { name: 'Sun', revenue: 28450, orders: 55 },
  ];

  const paymentMethods = [
    { name: 'Cash', value: 45, color: '#f59e0b' },
    { name: 'Card', value: 35, color: '#3b82f6' },
    { name: 'UPI', value: 15, color: '#10b981' },
    { name: 'Others', value: 5, color: '#6b7280' },
  ];

  const topItems = [
    { name: 'Butter Chicken', sales: 45, revenue: 22500 },
    { name: 'Biryani', sales: 38, revenue: 19000 },
    { name: 'Dal Makhani', sales: 32, revenue: 12800 },
    { name: 'Naan', sales: 67, revenue: 10050 },
    { name: 'Paneer Tikka', sales: 28, revenue: 16800 },
  ];

  const revenueStats = {
    today: 28450,
    yesterday: 25200,
    thisWeek: 198350,
    lastWeek: 185200,
    thisMonth: 842500,
    lastMonth: 785600
  };

  const calculateChange = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100;
    return {
      percentage: Math.abs(change).toFixed(1),
      isPositive: change >= 0
    };
  };

  const todayChange = calculateChange(revenueStats.today, revenueStats.yesterday);
  const weekChange = calculateChange(revenueStats.thisWeek, revenueStats.lastWeek);
  const monthChange = calculateChange(revenueStats.thisMonth, revenueStats.lastMonth);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Revenue Analytics</h1>
          <p className="text-gray-600 mt-1">Track sales performance and financial insights</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            This Week
          </Button>
          <Button className="gap-2 bg-green-600 hover:bg-green-700">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Today's Revenue</p>
                <p className="text-3xl font-bold text-green-700">₹{revenueStats.today.toLocaleString()}</p>
                <div className="flex items-center gap-1 mt-1">
                  {todayChange.isPositive ? (
                    <ArrowUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-600" />
                  )}
                  <span className={`text-sm ${todayChange.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {todayChange.percentage}% vs yesterday
                  </span>
                </div>
              </div>
              <DollarSign className="h-12 w-12 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">This Week</p>
                <p className="text-3xl font-bold text-blue-700">₹{revenueStats.thisWeek.toLocaleString()}</p>
                <div className="flex items-center gap-1 mt-1">
                  {weekChange.isPositive ? (
                    <ArrowUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-600" />
                  )}
                  <span className={`text-sm ${weekChange.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {weekChange.percentage}% vs last week
                  </span>
                </div>
              </div>
              <TrendingUp className="h-12 w-12 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">This Month</p>
                <p className="text-3xl font-bold text-purple-700">₹{revenueStats.thisMonth.toLocaleString()}</p>
                <div className="flex items-center gap-1 mt-1">
                  {monthChange.isPositive ? (
                    <ArrowUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-600" />
                  )}
                  <span className={`text-sm ${monthChange.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {monthChange.percentage}% vs last month
                  </span>
                </div>
              </div>
              <PieChart className="h-12 w-12 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Daily Revenue Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    formatter={(value) => [`₹${value?.toLocaleString()}`, 'Revenue']}
                    labelStyle={{ color: '#666' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              Payment Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                  <RechartsPieChart data={paymentMethods} cx="50%" cy="50%" outerRadius={80}>
                    {paymentMethods.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </RechartsPieChart>
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {paymentMethods.map((method) => (
                <div key={method.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: method.color }}
                  ></div>
                  <span className="text-sm">{method.name}: {method.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Selling Items */}
      <Card>
        <CardHeader>
          <CardTitle>Top Selling Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topItems.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-orange-700">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.sales} orders</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">₹{item.revenue.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
