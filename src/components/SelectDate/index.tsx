import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

const SelectDate = () => {
  const [fromDate, setFromDate] = useState<Dayjs | null>(dayjs());
  const [toDate, setToDate] = useState<Dayjs | null>(dayjs());

  console.log('formDate >', fromDate);
  console.log('toDate >', toDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <DatePicker
          label="Від"
          value={fromDate}
          onChange={newValue => setFromDate(newValue)}
          slotProps={{ textField: { fullWidth: true } }}
        />
        <DatePicker
          label="До"
          value={toDate}
          onChange={newValue => setToDate(newValue)}
          minDate={fromDate || undefined}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default SelectDate;
