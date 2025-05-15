import { Box, Typography } from '@mui/material';
import SelectDate from '../SelectDate';
import SelectDepartament from '../SelectDepartament';
import SelectUser from '../SelectUser';
import { Dayjs } from 'dayjs';

type Props = {
  setSelectedDepartment: (department: string) => void;
  setDateRange: (fromDate: Dayjs | null, toDate: Dayjs | null) => void;
};

const DashboardHeader = ({ setSelectedDepartment, setDateRange }: Props) => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        gap: '3rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: '600',
          textTransform: 'capitalize',
          fontSize: '2.25rem',
        }}
      >
        dashboard
      </Typography>

      <Box
        component="ul"
        sx={{
          padding: '0px',
          listStyle: 'none',
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(4, minmax(8rem, 12rem))',
        }}
      >
        <Box
          component="li"
          sx={{
            gridColumn: '2 span',
          }}
        >
          <SelectDate onChange={setDateRange} />
        </Box>
        <Box component="li">
          <SelectDepartament onChange={setSelectedDepartment} />
        </Box>
        <Box component="li">
          <SelectUser />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
