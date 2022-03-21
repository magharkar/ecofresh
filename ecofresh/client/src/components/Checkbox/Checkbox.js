import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ColorCheckboxes() {
  return (
      <Checkbox
        {...label}
        sx={{
          color: "#582e44",
          '&.Mui-checked': {
            color: "#582e44",
          },
        }}
      />
  );
}