import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

const users = [
  'User 1',
  'User 2',
  'User 3',
  'User 4',
  'User 5',
  'User 6',
  'User 7',
  'User 8',
  'User 9',
  'User 10',
];

const SelectUser = () => {
  const [user, setUser] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setUser(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel

      // id="demo-simple-select-label"
      >
        Users
      </InputLabel>
      <Select
        sx={{
          borderRadius: '.5rem',
        }}
        // labelId="demo-simple-select-label"
        // id="demo-simple-select"
        value={user}
        label="user"
        onChange={handleChange}
      >
        {users.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectUser;
