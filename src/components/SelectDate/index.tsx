import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

const dates = [
  '2023-05-14',
  '2022-11-27',
  '2024-03-02',
  '2021-08-19',
  '2022-02-10',
  '2023-09-25',
  '2020-12-31',
  '2024-07-04',
  '2021-01-15',
  '2023-06-08',
];

const SelectDate = () => {
  const [date, setDate] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel

      // id="demo-simple-select-label"
      >
        Date
      </InputLabel>
      <Select
        // labelId="demo-simple-select-label"
        // id="demo-simple-select"
        value={date}
        label="date"
        onChange={handleChange}
      >
        {dates.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDate;
