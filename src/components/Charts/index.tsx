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
import { Dayjs } from 'dayjs';
import { useTransactionStore } from '../../store/transactionStore';

type Transaction = {
  amount: number;
  date: string;
  department: string;
};

// Helper function to format date to "MMM YYYY" (e.g., "May 2025")
const formatMonth = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
};

// Helper function to aggregate transactions by month
const aggregateExpensesByMonth = (transactions: Transaction[]) => {
  const monthlyExpenses: { [key: string]: number } = {};

  transactions.forEach(tx => {
    const monthKey = formatMonth(tx.date);
    monthlyExpenses[monthKey] = (monthlyExpenses[monthKey] || 0) + tx.amount;
  });

  return Object.entries(monthlyExpenses)
    .map(([name, expenses]) => ({ name, expenses }))
    .sort((a, b) => new Date(a.name).getTime() - new Date(b.name).getTime());
};

type Props = {
  department: string;
  fromDate: Dayjs | null;
  toDate: Dayjs | null;
};

export const Charts: React.FC<Props> = ({ department, fromDate, toDate }) => {
  const { transactions } = useTransactionStore();

  // Filter transactions by department and date range
  const filteredTransactions = transactions.filter((tx: any) => {
    const matchesDepartment = department ? tx.department === department : true;
    const txDate = new Date(tx.date);
    const from = fromDate ? fromDate.startOf('day').toDate() : null;
    const to = toDate ? toDate.endOf('day').toDate() : null;

    const matchesDate = (!from || txDate >= from) && (!to || txDate <= to);

    return matchesDepartment && matchesDate;
  });

  const data = aggregateExpensesByMonth(filteredTransactions);

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
