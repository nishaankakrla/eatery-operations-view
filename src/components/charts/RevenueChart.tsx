
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', revenue: 24000 },
  { name: 'Tue', revenue: 26500 },
  { name: 'Wed', revenue: 22800 },
  { name: 'Thu', revenue: 28900 },
  { name: 'Fri', revenue: 32100 },
  { name: 'Sat', revenue: 35600 },
  { name: 'Sun', revenue: 28450 },
];

export const RevenueChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
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
            stroke="#ea580c" 
            strokeWidth={3}
            dot={{ fill: '#ea580c', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#ea580c', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
