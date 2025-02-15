import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';
import { CustomSpinner } from '@/ui';
import { authSchema, AuthFormData } from './types/authSchema';
import { useLogin } from './hooks/useLogin';
import { PATHS } from '@/assets';

export const LoginForm = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState, setError } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { errors, isSubmitting } = formState;

  const { mutateAsync } = useLogin();

  const onSubmit = async (data: AuthFormData) => {
    control._disableForm(true);
    try {
      const response = await mutateAsync(data);
      if (response.success) {
        navigate(PATHS.formPage);
      } else {
        setError('root', { type: 'manual', message: response.message || 'Ошибка при входе' });
      }
    } catch (error) {
      setError('root', { type: 'manual', message: `Ошибка сети или сервера ${error}` });
    } finally {
      control._disableForm(false);
    }
  };

  return (
    <Container maxWidth='xs'>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant='h5' align='center' gutterBottom>
          Вход в систему
        </Typography>
        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label='admin@mail.ru'
                fullWidth
                margin='normal'
                error={!!errors.email}
                helperText={errors.email?.message?.toString()}
              />
            )}
          />

          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label='Пароль'
                type='password'
                fullWidth
                placeholder='admin'
                margin='normal'
                error={!!errors.password}
                helperText={errors.password?.message?.toString()}
              />
            )}
          />
          {errors.root?.message && <Typography> {errors.root.message}</Typography>}

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? <CustomSpinner size={24} /> : 'Войти'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
