import { Box, Container } from '@mui/material';
import DashboardHeader from '../../components/DashboardHeader';
import { Charts } from '../../components/Charts';
import RecentTransactionsTable from '../../components/RecentTransactions';
import { useState } from 'react';

type SplitItem = {
  category: string;
  amount: number;
};

type Transaction = {
  amount: number;
  date: string;
  notes: string;
  split: SplitItem[];
};

const Dashboard = () => {
  const [transactions, setTransactions] = useState([
    {
      amount: 10000,
      date: '2025-05-13',
      notes: 'Запуск связки TikTok',
      split: [
        { category: 'TikTok Ads', amount: 7000 },
        { category: 'Proxy', amount: 2000 },
        { category: 'Акки', amount: 1000 },
      ],
    },
    {
      amount: 5000,
      date: '2025-05-12',
      notes: 'Обновление креативов',
      split: [
        { category: 'Дизайн', amount: 3000 },
        { category: 'FB Ads', amount: 2000 },
      ],
    },
    {
      amount: 5000,
      date: '2025-05-12',
      notes: 'Обновление креативов',
      split: [
        { category: 'Дизайн', amount: 3000 },
        { category: 'FB Ads', amount: 2000 },
      ],
    },
    {
      amount: 5000,
      date: '2025-05-12',
      notes: 'Обновление креативов',
      split: [
        { category: 'Дизайн', amount: 3000 },
        { category: 'FB Ads', amount: 2000 },
      ],
    },
  ]);
  const handleUpdateTransaction = (
    index: number,
    updatedTransaction: Transaction
  ) => {
    const newTransactions = [...transactions];
    newTransactions[index] = updatedTransaction;
    setTransactions(newTransactions);
  };
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
          backgroundColor: '#fff',
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
            Пункт 1
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
            <RecentTransactionsTable
              transactions={transactions}
              onUpdateTransaction={handleUpdateTransaction}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
