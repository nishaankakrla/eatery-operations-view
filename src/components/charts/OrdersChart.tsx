
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '9AM', orders: 12 },
  { time: '11AM', orders: 28 },
  { time: '1PM', orders: 45 },
  { time: '3PM', orders: 22 },
  { time: '5PM', orders: 18 },
  { time: '7PM', orders: 38 },
  { time: '9PM', orders: 42 },
  { time: '11PM', orders: 25 },
];

export const OrdersChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="time" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip 
            formatter={(value) => [`${value} orders`, 'Orders']}
            labelStyle={{ color: '#666' }}
          />
          <Bar 
            dataKey="orders" 
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
