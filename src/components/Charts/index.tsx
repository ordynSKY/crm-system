import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', expenses: 400 },
  { name: 'Feb', expenses: 300 },
  { name: 'Mar', expenses: 200 },
  { name: 'Apr', expenses: 278 },
];

export const Charts: React.FC = () => {
  return (
    <>
      <h2 className="table-title" style={{ marginLeft: '30px' }}>
        Expenses
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="expenses" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
