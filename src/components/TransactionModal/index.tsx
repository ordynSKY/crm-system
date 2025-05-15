import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
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
  department: string;
};

type TransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction;
  onSave: (updatedTransaction: Transaction) => void;
};

const departments = ['Finance', 'Tech', 'YouTube', 'Farm', 'Buyers'];

export function TransactionModal({
  isOpen,
  onClose,
  transaction,
  onSave,
}: TransactionModalProps) {
  const [amount, setAmount] = useState(transaction.amount);
  const [date, setDate] = useState(transaction.date);
  const [notes, setNotes] = useState(transaction.notes);
  const [split, setSplit] = useState<SplitItem[]>(transaction.split);
  const [department, setDepartment] = useState(transaction.department);
  const [error, setError] = useState<string>('');

  const addSplitItem = () => {
    setSplit([...split, { category: '', amount: 0 }]);
    setError('');
  };

  const updateSplitItem = (
    index: number,
    field: keyof SplitItem,
    value: string | number
  ) => {
    const newSplit = [...split];
    newSplit[index] = { ...newSplit[index], [field]: value };
    setSplit(newSplit);
    setError('');
  };

  const handleDepartmentChange = (event: SelectChangeEvent) => {
    setDepartment(event.target.value as string);
    setError('');
  };

  const handleSave = () => {
    if (
      !amount ||
      !date ||
      !department ||
      split.some(item => !item.category || item.amount <= 0)
    ) {
      setError('Заполните все поля');
      return;
    }

    const updatedTransaction: Transaction = {
      amount,
      date,
      notes,
      split: split.filter(item => item.category && item.amount > 0),
      department,
    };
    onSave(updatedTransaction);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Редактировать транзакцию</h2>

        <div className="form-group">
          <div className="input-group">
            <label className="input-label">Дата</label>
            <input
              type="date"
              value={date}
              onChange={e => {
                setDate(e.target.value);
                setError('');
              }}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Сумма</label>
            <input
              type="number"
              value={amount}
              onChange={e => {
                setAmount(Number(e.target.value));
                setError('');
              }}
              placeholder="Введите сумму"
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Комментарий</label>
            <textarea
              value={notes}
              onChange={e => {
                setNotes(e.target.value);
                setError('');
              }}
              placeholder="Введите комментарий"
              className="input-field textarea"
            />
          </div>

          <div className="input-group">
            <FormControl fullWidth>
              <InputLabel>Department</InputLabel>
              <Select
                value={department}
                label="Department"
                onChange={handleDepartmentChange}
                sx={{ borderRadius: '.5rem' }}
              >
                {departments.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="input-group">
            <label className="input-label">Статьи расходов</label>
            {split.map((item, index) => (
              <div key={index} className="split-group">
                <input
                  type="text"
                  value={item.category}
                  onChange={e =>
                    updateSplitItem(index, 'category', e.target.value)
                  }
                  placeholder="Категория"
                  className="input-field split-input"
                />
                <input
                  type="number"
                  value={item.amount || ''}
                  onChange={e =>
                    updateSplitItem(
                      index,
                      'amount',
                      Number(e.target.value) || 0
                    )
                  }
                  placeholder="Сумма"
                  className="input-field split-input"
                />
              </div>
            ))}
            <button onClick={addSplitItem} className="button button-add">
              Добавить категорию
            </button>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="button-group">
          <button onClick={onClose} className="button button-cancel">
            Отмена
          </button>
          <button onClick={handleSave} className="button button-save">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}
