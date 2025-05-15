import { useState } from 'react';
import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

type Props = {
  onChange: (fromDate: Dayjs | null, toDate: Dayjs | null) => void;
};

const SelectDate = ({ onChange }: Props) => {
  const [fromDate, setFromDate] = useState<Dayjs | null>(null);
  const [toDate, setToDate] = useState<Dayjs | null>(null);

  const handleFromDateChange = (newValue: Dayjs | null) => {
    setFromDate(newValue);
    onChange(newValue, toDate);
  };

  const handleToDateChange = (newValue: Dayjs | null) => {
    setToDate(newValue);
    onChange(fromDate, newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: 'flex', gap: 2, maxWidth: 400 }}>
        <DatePicker
          label="From"
          value={fromDate}
          format="DD/MM/YYYY"
          onChange={handleFromDateChange}
          slotProps={{ textField: { fullWidth: true } }}
        />
        <DatePicker
          label="To"
          value={toDate}
          format="DD/MM/YYYY"
          onChange={handleToDateChange}
          minDate={fromDate || undefined}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default SelectDate;
