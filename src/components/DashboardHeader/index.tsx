import { Box, Typography } from '@mui/material';
import SelectDate from '../SelectDate';
import SelectDepartament from '../SelectDepartament';
import SelectUser from '../SelectUser';

const DashboardHeader = () => {
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
          fontWeight: '900',
          textTransform: 'capitalize',
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
          gridTemplateColumns: 'repeat(3, minmax(8rem, 16rem))',
        }}
      >
        <Box component="li">
          <SelectDate />
        </Box>
        <Box component="li">
          <SelectDepartament />
        </Box>
        <Box component="li">
          <SelectUser />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
