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
import { useTransactionStore } from '../../store/transactionStore';

// Helper function to format date to "MMM YYYY" (e.g., "May 2025")
const formatMonth = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
};

// Helper function to aggregate transactions by month
const aggregateExpensesByMonth = (
  transactions: { amount: number; date: string }[]
) => {
  const monthlyExpenses: { [key: string]: number } = {};

  transactions.forEach(tx => {
    const monthKey = formatMonth(tx.date);
    monthlyExpenses[monthKey] = (monthlyExpenses[monthKey] || 0) + tx.amount;
  });

  return Object.entries(monthlyExpenses)
    .map(([name, expenses]) => ({ name, expenses }))
    .sort((a, b) => new Date(a.name).getTime() - new Date(b.name).getTime());
};

export const Charts: React.FC = () => {
  const { transactions } = useTransactionStore();
  const data = aggregateExpensesByMonth(transactions);

  return (
    <div className="chart-container">
      <h2 className="chart-title">Expenses</h2>
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
    </div>
  );
};
