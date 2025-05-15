import { useTransactionStore } from '../../store/transactionStore';
import './TotalExpenses.css';

export const TotalExpenses: React.FC = () => {
  const { transactions } = useTransactionStore();

  // Calculate total expenses
  const total = transactions.reduce((sum: any, tx: any) => sum + tx.amount, 0);

  return (
    <div className="total-expenses-container">
      <h3 className="total-expenses-title">Total Expenses</h3>
      <p className="total-expenses-amount">${total.toLocaleString()}</p>
    </div>
  );
};
