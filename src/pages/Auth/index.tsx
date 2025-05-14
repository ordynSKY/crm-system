import { Button, TextField, Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type SignInFormData = {
  email: string;
  password: string;
};

interface SignInPageProps {
  setIsAuth: Function;
  isAuth: boolean;
}

const SignInPage = ({ setIsAuth, isAuth }: SignInPageProps) => {
  const { register, handleSubmit } = useForm<SignInFormData>();
  let navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/');
  }, []);

  const onSubmit: SubmitHandler<SignInFormData> = async (data: any) => {
    try {
      //   const response = await fetch('/api/login', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(data),
      //   });

      //   if (!response.ok) throw new Error('Invalid credentials');
      //   const result = await response.json();

      localStorage.setItem('token', 'admin_user');

      setIsAuth(true);

      navigate('/');
    } catch (err) {
      alert('Ошибка авторизации');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 300,
        margin: '100px auto',
      }}
    >
      <Typography variant="h5">Вход</Typography>
      <TextField label="Email" {...register('email')} type="email" required />
      <TextField
        label="Пароль"
        {...register('password')}
        type="password"
        required
      />
      <Button type="submit" variant="contained">
        Войти
      </Button>
    </Box>
  );
};

export default SignInPage;
