import { Box, Container } from '@mui/material';
import DashboardHeader from '../../components/DashboardHeader';
import { Charts } from '../../components/Charts';
import RecentTransactionsTable from '../../components/RecentTransactions';
import { useState } from 'react';
import CreateTransactionForm from '../../components/CreateTransactionForm';

const Dashboard = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: '1.5rem 0',
      }}
    >
      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          height: 100 + '%',
          padding: '2rem',
          borderRadius: '1rem',
          backgroundColor: '#E7F3FA',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <DashboardHeader />
        <Box
          component="ul"
          sx={{
            padding: 0,
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            borderRadius: '1rem',
          }}
        >
          <Box
            component="li"
            sx={{
              borderRadius: '1rem',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexDirection: 'column',
              backgroundColor: '#689CD0',
            }}
          >
            <button
              className="create-button"
              onClick={() => setIsCreateModalOpen(true)}
            >
              Создать транзакцию
            </button>
          </Box>
          <Box
            component="li"
            sx={{
              borderRadius: '1rem',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexDirection: 'column',
              backgroundColor: '#98E19C',
            }}
          >
            Пункт 2
          </Box>
          <Box
            component="li"
            sx={{
              borderRadius: '1rem',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexDirection: 'column',
              backgroundColor: '#b298e1',
            }}
          >
            Пункт 3
          </Box>
          <Box
            component="li"
            sx={{
              borderRadius: '1rem',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexDirection: 'column',
              backgroundColor: '#A9D6E6',
            }}
          >
            Пункт 4
          </Box>
        </Box>
      </Box>
      <Box display="flex" height="400px">
        <Box
          width="50%"
          border="2px solid #dcd9d9"
          borderRadius="5px"
          padding="10px"
          marginTop="20px"
          marginRight="10px"
        >
          <Charts />
        </Box>
        <Box
          width="50%"
          border="2px solid #dcd9d9"
          borderRadius="5px"
          padding="10px"
          marginTop="20px"
          overflow="auto"
        >
          <RecentTransactionsTable />
          <CreateTransactionForm
            isOpen={isCreateModalOpen}
            onClose={() => setIsCreateModalOpen(false)}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
