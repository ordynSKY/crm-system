import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

const departments = ['Finance', 'Tech', 'YouTube', 'Farm', 'Buyers'];

type Props = {
  onChange: (department: string) => void;
};

const SelectDepartament = ({ onChange }: Props) => {
  const [department, setDepartment] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setDepartment(value);
    onChange(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Department</InputLabel>
      <Select
        sx={{
          borderRadius: '.5rem',
        }}
        value={department}
        label="Department"
        onChange={handleChange}
      >
        <MenuItem value="">All Departments</MenuItem>
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
