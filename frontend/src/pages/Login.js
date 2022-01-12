import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import PasswordTextField from '../components/PasswordTextField';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          {...register('email')}
          label="email"
          variant="outlined"
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />

        <PasswordTextField
          register={register}
          errors={errors}
        ></PasswordTextField>

        <Button type="submit">Login</Button>
      </Box>
    </form>
  );
}
