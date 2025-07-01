
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Settings, 
  Mic, 
  MessageSquare, 
  Phone, 
  Clock,
  Save,
  TestTube
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AIAgentSettings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    agentName: "RestaurantOS AI Assistant",
    voice: "professional-female",
    language: "en-IN",
    greeting: "Hello! Thank you for calling RestaurantOS. How can I help you today?",
    businessHours: "9:00 AM - 11:00 PM",
    autoRecord: true,
    transferToHuman: true,
    maxCallDuration: 15,
    apiKey: ""
  });

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "AI agent settings have been updated successfully.",
    });
  };

  const handleTest = () => {
    toast({
      title: "Test Call Started",
      description: "Testing AI agent with current settings...",
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-orange-600" />
              Basic Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="agentName">Agent Name</Label>
              <Input
                id="agentName"
                value={settings.agentName}
                onChange={(e) => setSettings({...settings, agentName: e.target.value})}
                placeholder="Enter AI agent name"
              />
            </div>

            <div>
              <Label htmlFor="voice">Voice Selection</Label>
              <select 
                id="voice"
                className="w-full p-2 border border-input rounded-md"
                value={settings.voice}
                onChange={(e) => setSettings({...settings, voice: e.target.value})}
              >
                <option value="professional-female">Professional Female</option>
                <option value="professional-male">Professional Male</option>
                <option value="friendly-female">Friendly Female</option>
                <option value="friendly-male">Friendly Male</option>
              </select>
            </div>

            <div>
              <Label htmlFor="language">Language</Label>
              <select 
                id="language"
                className="w-full p-2 border border-input rounded-md"
                value={settings.language}
                onChange={(e) => setSettings({...settings, language: e.target.value})}
              >
                <option value="en-IN">English (India)</option>
                <option value="hi-IN">Hindi</option>
                <option value="en-US">English (US)</option>
              </select>
            </div>

            <div>
              <Label htmlFor="businessHours">Business Hours</Label>
              <Input
                id="businessHours"
                value={settings.businessHours}
                onChange={(e) => setSettings({...settings, businessHours: e.target.value})}
                placeholder="e.g., 9:00 AM - 11:00 PM"
              />
            </div>
          </CardContent>
        </Card>

        {/* Advanced Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-600" />
              Call Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Auto Record Calls</Label>
                <p className="text-sm text-gray-600">Automatically record all calls for training</p>
              </div>
              <Switch 
                checked={settings.autoRecord}
                onCheckedChange={(checked) => setSettings({...settings, autoRecord: checked})}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Transfer to Human</Label>
                <p className="text-sm text-gray-600">Allow transfer to human agents</p>
              </div>
              <Switch 
                checked={settings.transferToHuman}
                onCheckedChange={(checked) => setSettings({...settings, transferToHuman: checked})}
              />
            </div>

            <div>
              <Label htmlFor="maxDuration">Max Call Duration (minutes)</Label>
              <Input
                id="maxDuration"
                type="number"
                value={settings.maxCallDuration}
                onChange={(e) => setSettings({...settings, maxCallDuration: parseInt(e.target.value)})}
                min="5"
                max="60"
              />
            </div>

            <div>
              <Label htmlFor="apiKey">ElevenLabs API Key</Label>
              <Input
                id="apiKey"
                type="password"
                value={settings.apiKey}
                onChange={(e) => setSettings({...settings, apiKey: e.target.value})}
                placeholder="Enter your ElevenLabs API key"
              />
              <p className="text-xs text-gray-500 mt-1">
                Required for AI voice generation. Get your key from ElevenLabs.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Greeting & Scripts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-green-600" />
            Greeting & Scripts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="greeting">Welcome Greeting</Label>
            <Textarea
              id="greeting"
              value={settings.greeting}
              onChange={(e) => setSettings({...settings, greeting: e.target.value})}
              placeholder="Enter the greeting message"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Order Taking Script</Label>
              <Textarea
                placeholder="Script for taking orders..."
                rows={4}
                className="mt-1"
              />
            </div>
            <div>
              <Label>Reservation Script</Label>
              <Textarea
                placeholder="Script for handling reservations..."
                rows={4}
                className="mt-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={handleTest} className="flex items-center gap-2">
          <TestTube className="h-4 w-4" />
          Test AI Agent
        </Button>
        
        <div className="flex items-center gap-3">
          <Button variant="outline">
            Reset to Default
          </Button>
          <Button onClick={handleSave} className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2">
            <Save className="h-4 w-4" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};
