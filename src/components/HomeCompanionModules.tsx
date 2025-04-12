
import React from 'react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import { 
  ShoppingCart, Heart, Lightbulb, Clock, Calendar, Bell, 
  Droplet, Thermometer, Home, DollarSign, Utensils, 
  Refrigerator, Sun, Moon, Wind, Trash, Battery, Armchair,
  Flame, Coffee, HeartPulse
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ModuleProps {
  onViewMore?: () => void;
}

// Smart Kitchen Module
export const SmartKitchenModule: React.FC<ModuleProps> = ({ onViewMore }) => {
  const kitchenItems = [
    { name: "Refrigerator", status: "Online", temperature: "38°F", alerts: 0 },
    { name: "Oven", status: "Standby", temperature: "Off", alerts: 0 },
    { name: "Coffee Machine", status: "Scheduled", nextAction: "6:30 AM", alerts: 0 },
    { name: "Dishwasher", status: "Running", timeLeft: "32 min", alerts: 0 }
  ];

  return (
    <GlassCard className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-3">
            <Refrigerator className="h-6 w-6 text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Smart Kitchen</h3>
        </div>
        <GlassButton variant="ghost" onClick={onViewMore}>View All</GlassButton>
      </div>
      
      <div className="space-y-3">
        {kitchenItems.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center mr-3">
                {item.name === "Refrigerator" ? (
                  <Refrigerator className="h-4 w-4 text-cyan-400" />
                ) : item.name === "Oven" ? (
                  <Flame className="h-4 w-4 text-orange-400" />
                ) : item.name === "Coffee Machine" ? (
                  <Coffee className="h-4 w-4 text-amber-400" />
                ) : (
                  <Droplet className="h-4 w-4 text-blue-400" />
                )}
              </div>
              <div>
                <p className="text-white font-medium">{item.name}</p>
                <p className="text-gray-400 text-sm">{item.status}</p>
              </div>
            </div>
            <div>
              <p className="text-right text-gray-300">
                {item.temperature ? item.temperature : item.timeLeft ? item.timeLeft : item.nextAction}
              </p>
              {item.alerts > 0 && (
                <div className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full text-xs text-right mt-1">
                  {item.alerts} Alerts
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

// Family Health Monitor Module
export const FamilyHealthModule: React.FC<ModuleProps> = ({ onViewMore }) => {
  const familyMembers = [
    { name: "Alex", status: "Active", steps: 6240, sleep: "7.2h", metrics: "Normal" },
    { name: "Taylor", status: "Resting", steps: 3560, sleep: "8.5h", metrics: "Normal" },
    { name: "Jordan", status: "Active", steps: 2130, sleep: "6.8h", metrics: "Check" }
  ];

  return (
    <GlassCard className="p-6 bg-gradient-to-br from-rose-900/20 to-red-900/20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/20 to-red-500/20 flex items-center justify-center mr-3">
            <HeartPulse className="h-6 w-6 text-rose-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Family Health</h3>
        </div>
        <GlassButton variant="ghost" onClick={onViewMore}>View All</GlassButton>
      </div>
      
      <Table>
        <TableHeader className="bg-white/5">
          <TableRow>
            <TableHead className="text-gray-300">Name</TableHead>
            <TableHead className="text-gray-300">Steps</TableHead>
            <TableHead className="text-gray-300">Sleep</TableHead>
            <TableHead className="text-gray-300">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {familyMembers.map((member, idx) => (
            <TableRow key={idx} className="border-b border-white/5">
              <TableCell className="font-medium text-white">{member.name}</TableCell>
              <TableCell className="text-gray-300">{member.steps}</TableCell>
              <TableCell className="text-gray-300">{member.sleep}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  member.metrics === "Normal" ? "bg-green-500/20 text-green-300" : "bg-amber-500/20 text-amber-300"
                }`}>
                  {member.metrics}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </GlassCard>
  );
};

// Auto Grocery Assistant Module
export const AutoGroceryModule: React.FC<ModuleProps> = ({ onViewMore }) => {
  const groceryItems = [
    { name: "Milk", status: "Low", daysLeft: 1, autoOrder: true },
    { name: "Eggs", status: "Ok", daysLeft: 4, autoOrder: true },
    { name: "Bread", status: "Low", daysLeft: 2, autoOrder: false },
    { name: "Apples", status: "Ok", daysLeft: 5, autoOrder: true }
  ];

  return (
    <GlassCard className="p-6 bg-gradient-to-br from-emerald-900/20 to-green-900/20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 flex items-center justify-center mr-3">
            <ShoppingCart className="h-6 w-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Auto Grocery</h3>
        </div>
        <GlassButton variant="ghost" onClick={onViewMore}>View All</GlassButton>
      </div>
      
      <div className="space-y-3">
        {groceryItems.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center">
              <div>
                <p className="text-white font-medium">{item.name}</p>
                <div className="flex items-center">
                  <p className={`text-sm ${
                    item.status === "Low" ? "text-amber-400" : "text-green-400"
                  }`}>
                    {item.status}
                  </p>
                  {item.autoOrder && (
                    <span className="ml-2 text-xs bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded-full">
                      Auto
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <p className="text-right text-gray-300">
                {item.daysLeft} day{item.daysLeft !== 1 ? 's' : ''} left
              </p>
              <button className="mt-1 text-xs text-indigo-300 hover:text-indigo-200">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

// Smart Home Module
export const SmartHomeModule: React.FC<ModuleProps> = ({ onViewMore }) => {
  const devices = [
    { room: "Living Room", devices: 4, status: "All OK" },
    { room: "Kitchen", devices: 6, status: "All OK" },
    { room: "Bedroom", devices: 3, status: "1 Alert" },
    { room: "Bathroom", devices: 2, status: "All OK" }
  ];

  return (
    <GlassCard className="p-6 bg-gradient-to-br from-violet-900/20 to-indigo-900/20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 flex items-center justify-center mr-3">
            <Home className="h-6 w-6 text-violet-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Smart Home</h3>
        </div>
        <GlassButton variant="ghost" onClick={onViewMore}>View All</GlassButton>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {devices.map((room, idx) => (
          <div key={idx} className="p-3 bg-white/5 rounded-lg">
            <p className="text-white font-medium">{room.room}</p>
            <p className="text-gray-400 text-sm">{room.devices} devices</p>
            <p className={`mt-1 text-xs ${
              room.status === "All OK" ? "text-green-300" : "text-amber-300"
            }`}>
              {room.status}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Thermometer className="h-4 w-4 text-blue-400" />
            </div>
            <div>
              <p className="text-white font-medium">Temperature</p>
              <p className="text-gray-400 text-sm">Home is comfortable</p>
            </div>
          </div>
          <p className="text-white font-bold">72°F</p>
        </div>
      </div>
    </GlassCard>
  );
};

// Energy Monitor Module
export const EnergyMonitorModule: React.FC<ModuleProps> = ({ onViewMore }) => {
  return (
    <GlassCard className="p-6 bg-gradient-to-br from-amber-900/20 to-yellow-900/20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 flex items-center justify-center mr-3">
            <Battery className="h-6 w-6 text-amber-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Energy Monitor</h3>
        </div>
        <GlassButton variant="ghost" onClick={onViewMore}>View All</GlassButton>
      </div>
      
      <div className="p-4 bg-white/5 rounded-lg mb-4">
        <div className="flex justify-between mb-2">
          <p className="text-white">Today's usage</p>
          <p className="text-white font-bold">26.4 kWh</p>
        </div>
        <div className="h-4 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-500 to-yellow-500 rounded-full" style={{ width: '65%' }}></div>
        </div>
        <div className="flex justify-between mt-1">
          <p className="text-xs text-gray-400">0 kWh</p>
          <p className="text-xs text-gray-400">50 kWh</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-white/5 rounded-lg">
          <p className="text-gray-400 text-sm">Top consumer</p>
          <p className="text-white font-medium">HVAC System</p>
          <p className="text-amber-300 text-xs">8.2 kWh</p>
        </div>
        <div className="p-3 bg-white/5 rounded-lg">
          <p className="text-gray-400 text-sm">Savings vs. last week</p>
          <p className="text-white font-medium">12% less</p>
          <p className="text-green-300 text-xs">Good job!</p>
        </div>
      </div>
    </GlassCard>
  );
};

// Calendar Reminder Module
export const CalendarReminderModule: React.FC<ModuleProps> = ({ onViewMore }) => {
  const events = [
    { title: "Family Dinner", time: "18:30", priority: "High" },
    { title: "Doctor Appointment", time: "Tomorrow, 10:00", priority: "High" },
    { title: "Grocery Delivery", time: "Tomorrow, 14:00", priority: "Medium" }
  ];

  return (
    <GlassCard className="p-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center mr-3">
            <Calendar className="h-6 w-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Calendar</h3>
        </div>
        <GlassButton variant="ghost" onClick={onViewMore}>View All</GlassButton>
      </div>
      
      <div className="space-y-3">
        {events.map((event, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div>
              <p className="text-white font-medium">{event.title}</p>
              <p className="text-gray-400 text-sm">{event.time}</p>
            </div>
            <div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                event.priority === "High" 
                  ? "bg-red-500/20 text-red-300" 
                  : "bg-yellow-500/20 text-yellow-300"
              }`}>
                {event.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <GlassButton className="w-full mt-4" variant="outline">
        Add New Event
      </GlassButton>
    </GlassCard>
  );
};
