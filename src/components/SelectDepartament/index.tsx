import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

const departments = ['Finance', 'Tech', 'YouTube', 'Farm', 'Buyers'];

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
        sx={{
          borderRadius: '.5rem',
        }}
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
