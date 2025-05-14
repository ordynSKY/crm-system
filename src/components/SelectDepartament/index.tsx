import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

const departments = [
  'Department 1',
  'Department 2',
  'Department 3',
  'Department 4',
  'Department 5',
  'Department 6',
  'Department 7',
  'Department 8',
  'Department 9',
  'Department 10',
];

const SelectDepartament = () => {
  const [department, setDepartment] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setDepartment(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel

      // id="demo-simple-select-label"
      >
        Department
      </InputLabel>
      <Select
        // labelId="demo-simple-select-label"
        // id="demo-simple-select"
        value={department}
        label="department"
        onChange={handleChange}
      >
        {departments.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDepartament;
