
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  UserCheck, 
  UserX, 
  Clock,
  Phone,
  Mail,
  Plus,
  MoreHorizontal
} from "lucide-react";

export const EmployeeModule = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const employees = [
    {
      id: "EMP001",
      name: "Ramesh Kumar",
      role: "Head Chef",
      phone: "+91 98765 43210",
      email: "ramesh@restaurant.com",
      status: "present",
      checkIn: "9:00 AM",
      shift: "Morning",
      department: "Kitchen",
      experience: "5 years"
    },
    {
      id: "EMP002",
      name: "Priya Sharma",
      role: "Server",
      phone: "+91 87654 32109",
      email: "priya@restaurant.com",
      status: "present",
      checkIn: "10:30 AM",
      shift: "Morning",
      department: "Service",
      experience: "2 years"
    },
    {
      id: "EMP003",
      name: "Amit Patel",
      role: "Cashier",
      phone: "+91 76543 21098",
      email: "amit@restaurant.com",
      status: "absent",
      checkIn: "-",
      shift: "Evening",
      department: "Front Desk",
      experience: "3 years"
    },
    {
      id: "EMP004",
      name: "Sneha Reddy",
      role: "Sous Chef",
      phone: "+91 65432 10987",
      email: "sneha@restaurant.com",
      status: "present",
      checkIn: "8:45 AM",
      shift: "Morning",
      department: "Kitchen",
      experience: "4 years"
    },
    {
      id: "EMP005",
      name: "Vikram Singh",
      role: "Delivery Boy",
      phone: "+91 54321 09876",
      email: "vikram@restaurant.com",
      status: "present",
      checkIn: "11:00 AM",
      shift: "Full Day",
      department: "Delivery",
      experience: "1 year"
    },
    {
      id: "EMP006",
      name: "Anita Joshi",
      role: "Manager",
      phone: "+91 43210 98765",
      email: "anita@restaurant.com",
      status: "absent",
      checkIn: "-",
      shift: "Evening",
      department: "Management",
      experience: "8 years"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present": return "bg-green-100 text-green-700 border-green-200";
      case "absent": return "bg-red-100 text-red-700 border-red-200";
      case "late": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present": return <UserCheck className="h-4 w-4" />;
      case "absent": return <UserX className="h-4 w-4" />;
      case "late": return <Clock className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "head chef": return "bg-red-100 text-red-700";
      case "sous chef": return "bg-orange-100 text-orange-700";
      case "server": return "bg-blue-100 text-blue-700";
      case "cashier": return "bg-green-100 text-green-700";
      case "manager": return "bg-purple-100 text-purple-700";
      case "delivery boy": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const employeeStats = {
    total: employees.length,
    present: employees.filter(e => e.status === "present").length,
    absent: employees.filter(e => e.status === "absent").length,
    onTime: employees.filter(e => e.status === "present").length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employee Management</h1>
          <p className="text-gray-600 mt-1">Manage staff, attendance, and roles</p>
        </div>
        <div className="flex items-center gap-3">
          <Input
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          <Button className="gap-2 bg-orange-600 hover:bg-orange-700">
            <Plus className="h-4 w-4" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-blue-700">{employeeStats.total}</p>
                <p className="text-sm text-blue-600">Total Staff</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <UserCheck className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-green-700">{employeeStats.present}</p>
                <p className="text-sm text-green-600">Present Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <UserX className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-2xl font-bold text-red-700">{employeeStats.absent}</p>
                <p className="text-sm text-red-600">Absent Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold text-yellow-700">{Math.round((employeeStats.present / employeeStats.total) * 100)}%</p>
                <p className="text-sm text-yellow-600">Attendance Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Employee List */}
      <Card>
        <CardHeader>
          <CardTitle>Staff Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredEmployees.map((employee) => (
              <div key={employee.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-orange-100 text-orange-700">
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-lg">{employee.name}</span>
                        <Badge className={getRoleColor(employee.role)}>
                          {employee.role}
                        </Badge>
                        <Badge className={getStatusColor(employee.status)} variant="outline">
                          {getStatusIcon(employee.status)}
                          <span className="ml-1 capitalize">{employee.status}</span>
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Contact</p>
                          <p className="text-sm flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {employee.phone}
                          </p>
                          <p className="text-sm flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {employee.email}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Department</p>
                          <p className="font-medium">{employee.department}</p>
                          <p className="text-sm text-gray-600">{employee.experience}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Shift & Attendance</p>
                          <p className="font-medium">{employee.shift}</p>
                          <p className="text-sm text-gray-600">
                            Check-in: {employee.checkIn}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Employee ID</p>
                          <p className="font-medium">{employee.id}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 ml-4">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
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
