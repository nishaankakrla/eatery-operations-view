
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  PhoneOff, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  User,
  Clock,
  MessageSquare
} from "lucide-react";

interface LiveCallMonitorProps {
  isCallActive: boolean;
  setIsCallActive: (active: boolean) => void;
}

export const LiveCallMonitor = ({ isCallActive, setIsCallActive }: LiveCallMonitorProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(75);

  const activeCalls = [
    {
      id: "call-001",
      customerName: "John Smith",
      phone: "+91 98765 43210",
      duration: "00:02:34",
      type: "Order Inquiry",
      status: "active"
    },
    {
      id: "call-002",
      customerName: "Sarah Johnson",
      phone: "+91 87654 32109",
      duration: "00:05:12",
      type: "Reservation",
      status: "active"
    },
    {
      id: "call-003",
      customerName: "Mike Wilson",
      phone: "+91 76543 21098",
      duration: "00:01:08",
      type: "Complaint",
      status: "on-hold"
    }
  ];

  const recentTranscripts = [
    {
      speaker: "Customer",
      message: "Hi, I'd like to make a reservation for 4 people tonight at 7 PM.",
      timestamp: "14:32:15"
    },
    {
      speaker: "AI Agent",
      message: "I'd be happy to help you with that reservation. Let me check our availability for tonight at 7 PM for 4 people.",
      timestamp: "14:32:18"
    },
    {
      speaker: "AI Agent",
      message: "Great news! We have availability at 7 PM. May I have your name and contact number?",
      timestamp: "14:32:22"
    },
    {
      speaker: "Customer",
      message: "Sure, it's Sarah Johnson and my number is +91 87654 32109.",
      timestamp: "14:32:28"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Active Calls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-green-600" />
            Active Calls
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeCalls.map((call) => (
            <div key={call.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{call.customerName}</h4>
                    <p className="text-sm text-gray-600">{call.phone}</p>
                  </div>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`${
                    call.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {call.status}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {call.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    {call.type}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Mic className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                    <PhoneOff className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          {activeCalls.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Phone className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p>No active calls</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Live Transcript */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            Live Transcript
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {recentTranscripts.map((transcript, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className={`p-2 rounded-full ${
                    transcript.speaker === 'AI Agent' 
                      ? 'bg-orange-100' 
                      : 'bg-blue-100'
                  }`}>
                    {transcript.speaker === 'AI Agent' ? (
                      <MessageSquare className="h-3 w-3 text-orange-600" />
                    ) : (
                      <User className="h-3 w-3 text-blue-600" />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">
                      {transcript.speaker}
                    </span>
                    <span className="text-xs text-gray-500">
                      {transcript.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{transcript.message}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Control Panel */}
          <div className="mt-6 pt-4 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant={isMuted ? "destructive" : "outline"}
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <MicOff className="h-3 w-3" /> : <Mic className="h-3 w-3" />}
                </Button>
                <Button size="sm" variant="outline">
                  {volume > 0 ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Recording
                </Badge>
                <span className="text-xs text-gray-500">Quality: HD</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
