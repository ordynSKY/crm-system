import React, { useState } from 'react';
import { TransactionModal } from '../TransactionModal';
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
};

type Props = {
  transactions: Transaction[];
  onUpdateTransaction?: (
    index: number,
    updatedTransaction: Transaction
  ) => void;
};

export default function RecentTransactionsTable({
  transactions,
  onUpdateTransaction,
}: Props) {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleRowClick = (transaction: Transaction, index: number) => {
    setSelectedTransaction(transaction);
    setSelectedIndex(index);
  };

  const handleSave = (updatedTransaction: Transaction) => {
    if (selectedIndex !== null && onUpdateTransaction) {
      onUpdateTransaction(selectedIndex, updatedTransaction);
    }
  };

  return (
    <div className="table-container">
      <h2 className="table-title">Recent transactions</h2>
      <div className="table-wrapper">
        <table className="table">
          <thead className="table-header">
            <tr>
              <th className="table-cell table-cell-header">Date</th>
              <th className="table-cell table-cell-header">Amount</th>
              <th className="table-cell table-cell-header">Note</th>
              <th className="table-cell table-cell-header">Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr
                key={index}
                className="table-row"
                onClick={() => handleRowClick(tx, index)}
              >
                <td className="table-cell">
                  {new Date(tx.date).toLocaleDateString()}
                </td>
                <td className="table-cell">₴{tx.amount}</td>
                <td className="table-cell">{tx.notes}</td>
                <td className="table-cell">
                  <ul className="category-list">
                    {tx.split.map((item, i) => (
                      <li key={i}>
                        {item.category}: ₴{item.amount}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
            {transactions.length === 0 && (
              <tr>
                <td className="table-cell table-cell-empty" colSpan={4}>
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
