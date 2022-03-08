import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Press Enter';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl() {
  return (
    <Box component="form" noValidate autoComplete="off" position ="flex">
      <FormControl sx={{ width: '55ch', padding: 3}}>
        <OutlinedInput placeholder="Search for initiatives" />
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
}