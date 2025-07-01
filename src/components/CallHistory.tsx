
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Search, 
  Download, 
  Play, 
  PhoneCall,
  User,
  Calendar,
  Filter
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const CallHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const callHistory = [
    {
      id: "CH001",
      customerName: "John Smith",
      phone: "+91 98765 43210",
      date: "2024-01-15",
      time: "14:30",
      duration: "5:23",
      type: "Order",
      status: "Completed",
      outcome: "Order Placed - ₹850",
      recording: true
    },
    {
      id: "CH002",
      customerName: "Sarah Johnson",
      phone: "+91 87654 32109",
      date: "2024-01-15",
      time: "15:45",
      duration: "3:12",
      type: "Reservation",
      status: "Completed",
      outcome: "Table Booked - 4 people, 7 PM",
      recording: true
    },
    {
      id: "CH003",
      customerName: "Mike Wilson",
      phone: "+91 76543 21098",
      date: "2024-01-15",
      time: "16:20",
      duration: "8:45",
      type: "Complaint",
      status: "Transferred",
      outcome: "Transferred to Manager",
      recording: true
    },
    {
      id: "CH004",
      customerName: "Emily Davis",
      phone: "+91 65432 10987",
      date: "2024-01-14",
      time: "19:15",
      duration: "2:55",
      type: "Inquiry",
      status: "Completed",
      outcome: "Menu Information Provided",
      recording: true
    },
    {
      id: "CH005",
      customerName: "Robert Brown",
      phone: "+91 54321 09876",
      date: "2024-01-14",
      time: "20:30",
      duration: "4:18",
      type: "Order",
      status: "Completed",
      outcome: "Order Placed - ₹1,200",
      recording: false
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusColors = {
      "Completed": "bg-green-100 text-green-800",
      "Transferred": "bg-yellow-100 text-yellow-800",
      "Failed": "bg-red-100 text-red-800",
      "Ongoing": "bg-blue-100 text-blue-800"
    };
    
    return (
      <Badge variant="secondary" className={statusColors[status as keyof typeof statusColors] || "bg-gray-100 text-gray-800"}>
        {status}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    const typeColors = {
      "Order": "bg-orange-100 text-orange-800",
      "Reservation": "bg-blue-100 text-blue-800",
      "Complaint": "bg-red-100 text-red-800",
      "Inquiry": "bg-purple-100 text-purple-800"
    };
    
    return (
      <Badge variant="secondary" className={typeColors[type as keyof typeof typeColors] || "bg-gray-100 text-gray-800"}>
        {type}
      </Badge>
    );
  };

  const filteredCalls = callHistory.filter(call => {
    const matchesSearch = call.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         call.phone.includes(searchTerm) ||
                         call.outcome.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === "all" || call.type.toLowerCase() === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search calls by name, phone, or outcome..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <select 
                className="p-2 border border-input rounded-md"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="order">Orders</option>
                <option value="reservation">Reservations</option>
                <option value="complaint">Complaints</option>
                <option value="inquiry">Inquiries</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" />
                More Filters
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call History Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-600" />
            Call History ({filteredCalls.length} calls)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Outcome</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCalls.map((call) => (
                <TableRow key={call.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <User className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{call.customerName}</p>
                        <p className="text-sm text-gray-600">{call.phone}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="h-3 w-3 text-gray-400" />
                      <span>{call.date}</span>
                      <span className="text-gray-500">at</span>
                      <span>{call.time}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-3 w-3 text-gray-400" />
                      {call.duration}
                    </div>
                  </TableCell>
                  <TableCell>{getTypeBadge(call.type)}</TableCell>
                  <TableCell>{getStatusBadge(call.status)}</TableCell>
                  <TableCell>
                    <p className="text-sm text-gray-900">{call.outcome}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {call.recording && (
                        <Button size="sm" variant="outline">
                          <Play className="h-3 w-3" />
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredCalls.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <PhoneCall className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p>No calls found matching your criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
