import { useForm } from 'react-hook-form';

import { TextField, Button, Box } from '@mui/material';
import PasswordTextField from '../components/PasswordTextField';

export default function Login() {
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField {...register('email')} label="email" variant="outlined" />

        <PasswordTextField register={register}></PasswordTextField>

        <Button type="submit">Login</Button>
      </Box>
    </form>
  );
}
