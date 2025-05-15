import React, { useState } from 'react';
import './TransactionModal.css';

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

type TransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction;
  onSave: (updatedTransaction: Transaction) => void;
};

export function TransactionModal({
  isOpen,
  onClose,
  transaction,
  onSave,
}: TransactionModalProps) {
  const [newCategory, setNewCategory] = useState<string>('');
  const [newAmount, setNewAmount] = useState<number | ''>('');

  const handleSave = () => {
    if (newCategory && newAmount !== '') {
      const updatedTransaction = {
        ...transaction,
        split: [
          ...transaction.split,
          { category: newCategory, amount: Number(newAmount) },
        ],
      };
      onSave(updatedTransaction);
      setNewCategory('');
      setNewAmount('');
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Transaction details</h2>

        <div className="form-group">
          <div className="input-group">
            <label className="input-label">Date</label>
            <div className="input-field input-field-readonly">
              {new Date(transaction.date).toLocaleDateString()}
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Amount</label>
            <div className="input-field input-field-readonly">
              ${transaction.amount}
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Notes</label>
            <div className="input-field input-field-readonly textarea">
              {transaction.notes || 'No notes'}
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">New expense item</label>
            <div className="split-group">
              <input
                type="text"
                value={newCategory}
                onChange={e => setNewCategory(e.target.value)}
                placeholder="Category"
                className="input-field split-input"
              />
              <input
                type="number"
                value={newAmount}
                onChange={e =>
                  setNewAmount(e.target.value ? Number(e.target.value) : '')
                }
                placeholder="Amount"
                className="input-field split-input"
              />
            </div>
          </div>
        </div>

        <div className="button-group">
          <button onClick={onClose} className="button button-cancel">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="button button-save"
            disabled={!newCategory || newAmount === ''}
          >
            Add transaction
          </button>
        </div>
      </div>
    </div>
  );
}
