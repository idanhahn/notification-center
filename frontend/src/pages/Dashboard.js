import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';

export default function Dashboard() {
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    fetch('http://localhost:4000/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: data.content,
        recipient: 'all',
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex' }}>
        <TextField
          {...register('content')}
          label="Content"
          variant="outlined"
        />
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
}
