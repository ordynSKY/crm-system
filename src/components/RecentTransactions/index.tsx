import React, { useState } from 'react';
import { Dayjs } from 'dayjs';
import { TransactionModal } from '../TransactionModal';
import { useTransactionStore } from '../../store/transactionStore';
import './RecentTransactionsTable.css';

type SplitItem = {
  category: string;
  amount: number;
};

type Transaction = {
  amount: number;
  date: string;
  notes: string;
  split: SplitItem[];
  department: string;
};

type Props = {
  department: string;
  fromDate: Dayjs | null;
  toDate: Dayjs | null;
};

export default function RecentTransactionsTable({
  department,
  fromDate,
  toDate,
}: Props) {
  const { transactions, updateTransaction } = useTransactionStore();
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Filter transactions by department and date range
  const filteredTransactions = transactions.filter((tx: any) => {
    const matchesDepartment = department ? tx.department === department : true;
    const txDate = new Date(tx.date);
    const from = fromDate ? fromDate.startOf('day').toDate() : null;
    const to = toDate ? toDate.endOf('day').toDate() : null;

    const matchesDate = (!from || txDate >= from) && (!to || txDate <= to);

    return matchesDepartment && matchesDate;
  });

  const handleRowClick = (transaction: Transaction, index: number) => {
    setSelectedTransaction(transaction);
    setSelectedIndex(index);
  };

  const handleSave = (updatedTransaction: Transaction) => {
    if (selectedIndex !== null) {
      updateTransaction(selectedIndex, updatedTransaction);
    }
    setSelectedTransaction(null);
  };

  return (
    <div className="table-container">
      <h2 className="table-title">Recent Transactions</h2>
      <div className="table-wrapper">
        <table className="table">
          <thead className="table-header">
            <tr>
              <th className="table-cell table-cell-header">Date</th>
              <th className="table-cell table-cell-header">Amount</th>
              <th className="table-cell table-cell-header">Note</th>
              <th className="table-cell table-cell-header">Category</th>
              <th className="table-cell table-cell-header">Department</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((tx: any, index: any) => (
              <tr
                key={index}
                className="table-row"
                onClick={() => handleRowClick(tx, index)}
              >
                <td className="table-cell">
                  {new Date(tx.date).toLocaleDateString()}
                </td>
                <td className="table-cell">${tx.amount}</td>
                <td className="table-cell">{tx.notes}</td>
                <td className="table-cell">
                  <ul className="category-list">
                    {tx.split.map((item: any, i: any) => (
                      <li key={i}>
                        {item.category}: ${item.amount}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="table-cell">{tx.department}</td>
              </tr>
            ))}
            {filteredTransactions.length === 0 && (
              <tr>
                <td className="table-cell table-cell-empty" colSpan={5}>
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedTransaction && (
        <TransactionModal
          isOpen={!!selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
          transaction={selectedTransaction}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
