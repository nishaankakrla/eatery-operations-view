
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Users, Phone, Plus, CheckCircle, XCircle } from "lucide-react";

export const ReservationsModule = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const reservations = [
    {
      id: "R001",
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      date: "2025-01-07",
      time: "7:30 PM",
      party: 4,
      table: "Table 12",
      status: "confirmed",
      notes: "Anniversary dinner",
      email: "rajesh@email.com"
    },
    {
      id: "R002",
      name: "Priya Sharma",
      phone: "+91 87654 32109",
      date: "2025-01-07",
      time: "8:00 PM",
      party: 2,
      table: "Table 6",
      status: "pending",
      notes: "Window seating preferred",
      email: "priya@email.com"
    },
    {
      id: "R003",
      name: "Amit Patel",
      phone: "+91 76543 21098",
      date: "2025-01-07",
      time: "8:30 PM",
      party: 6,
      table: "Table 15",
      status: "confirmed",
      notes: "Business dinner",
      email: "amit@email.com"
    },
    {
      id: "R004",
      name: "Sneha Reddy",
      phone: "+91 65432 10987",
      date: "2025-01-08",
      time: "7:00 PM",
      party: 3,
      table: "Table 8",
      status: "pending",
      notes: "Birthday celebration",
      email: "sneha@email.com"
    },
    {
      id: "R005",
      name: "Vikram Singh",
      phone: "+91 54321 09876",
      date: "2025-01-08",
      time: "9:00 PM",
      party: 8,
      table: "Table 20",
      status: "confirmed",
      notes: "Family gathering",
      email: "vikram@email.com"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-700 border-green-200";
      case "pending": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "cancelled": return "bg-red-100 text-red-700 border-red-200";
      case "completed": return "bg-gray-100 text-gray-700 border-gray-200";
      default: return "bg-blue-100 text-blue-700 border-blue-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed": return <CheckCircle className="h-4 w-4" />;
      case "pending": return <Clock className="h-4 w-4" />;
      case "cancelled": return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredReservations = reservations.filter(reservation =>
    reservation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.phone.includes(searchTerm) ||
    reservation.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const reservationStats = {
    today: reservations.filter(r => r.date === "2025-01-07").length,
    confirmed: reservations.filter(r => r.status === "confirmed").length,
    pending: reservations.filter(r => r.status === "pending").length,
    totalCovers: reservations.reduce((sum, r) => sum + r.party, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reservations</h1>
          <p className="text-gray-600 mt-1">Manage table bookings and reservations</p>
        </div>
        <div className="flex items-center gap-3">
          <Input
            placeholder="Search reservations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          <Button className="gap-2 bg-orange-600 hover:bg-orange-700">
            <Plus className="h-4 w-4" />
            New Reservation
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-blue-700">{reservationStats.today}</p>
                <p className="text-sm text-blue-600">Today's Bookings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-green-700">{reservationStats.confirmed}</p>
                <p className="text-sm text-green-600">Confirmed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold text-yellow-700">{reservationStats.pending}</p>
                <p className="text-sm text-yellow-600">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold text-purple-700">{reservationStats.totalCovers}</p>
                <p className="text-sm text-purple-600">Total Covers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reservations List */}
      <Card>
        <CardHeader>
          <CardTitle>Reservations List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredReservations.map((reservation) => (
              <div key={reservation.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-bold text-lg">{reservation.id}</span>
                      <Badge className={getStatusColor(reservation.status)} variant="outline">
                        {getStatusIcon(reservation.status)}
                        <span className="ml-1 capitalize">{reservation.status}</span>
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Guest Details</p>
                        <p className="font-medium">{reservation.name}</p>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {reservation.phone}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Date & Time</p>
                        <p className="font-medium flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {reservation.date}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {reservation.time}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Party & Table</p>
                        <p className="font-medium flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {reservation.party} guests
                        </p>
                        <p className="text-sm text-gray-600">{reservation.table}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Notes</p>
                        <p className="text-sm text-gray-700">{reservation.notes}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 ml-4">
                    {reservation.status === "pending" && (
                      <>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Confirm
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          Decline
                        </Button>
                      </>
                    )}
                    {reservation.status === "confirmed" && (
                      <>
                        <Button size="sm" variant="outline">
                          Call Guest
                        </Button>
                        <Button size="sm" variant="outline">
                          Modify
                        </Button>
                      </>
                    )}
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
