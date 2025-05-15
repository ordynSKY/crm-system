import { Dayjs } from 'dayjs';
import { useTransactionStore } from '../../store/transactionStore';
import './TotalExpenses.css';

type Props = {
  department: string;
  fromDate: Dayjs | null;
  toDate: Dayjs | null;
};

export const TotalExpenses: React.FC<Props> = ({
  department,
  fromDate,
  toDate,
}) => {
  const { transactions } = useTransactionStore();

  // Filter transactions by department and date range
  const filteredTransactions = transactions.filter(tx => {
    const matchesDepartment = department ? tx.department === department : true;
    const txDate = new Date(tx.date);
    const from = fromDate ? fromDate.startOf('day').toDate() : null;
    const to = toDate ? toDate.endOf('day').toDate() : null;

    const matchesDate = (!from || txDate >= from) && (!to || txDate <= to);

    return matchesDepartment && matchesDate;
  });

  // Calculate total expenses
  const total = filteredTransactions.reduce((sum, tx) => sum + tx.amount, 0);

  return (
    <div className="total-expenses-container">
      <h3 className="total-expenses-title">Total Expenses</h3>
      <p className="total-expenses-amount">${total.toLocaleString()}</p>
    </div>
  );
};
