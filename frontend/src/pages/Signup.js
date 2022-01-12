import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField } from '@mui/material';
import PasswordTextField from '../components/PasswordTextField';

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          {...register('firstName')}
          label="First Name"
          variant="outlined"
          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
        >
          First Name
        </TextField>
        <TextField
          {...register('lastName')}
          label="Last Name"
          variant="outlined"
          error={Boolean(errors.lastName)}
          helperText={errors.lastName?.message}
        >
          Last Name
        </TextField>
        <TextField
          {...register('email')}
          label="Email"
          variant="outlined"
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        >
          Email
        </TextField>
        <PasswordTextField register={register} errors={errors} />
        <Button type="submit">Signup</Button>
      </Box>
    </form>
  );
}
