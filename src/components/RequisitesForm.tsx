import React, { useState } from 'react';
import { Stack, Paper, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';
import { DetailsField } from './DetailsField';

export const RequisitesForm = () => {
  const [idType, setIdType] = useState('card');

  return (
    <Stack spacing={1.5}>
      <Paper elevation={0} sx={{ p: 0.5, pl: 1, borderRadius: '12px' }}>
        <RadioGroup row value={idType} onChange={(e) => setIdType(e.target.value)}>
          <FormControlLabel 
            value="card" 
            control={<Radio size="small" />} 
            label={<Typography variant="body2">Номер карты</Typography>} 
          />
          <FormControlLabel 
            value="contract" 
            control={<Radio size="small" />} 
            label={<Typography variant="body2">Номер договора</Typography>} 
          />
        </RadioGroup>
      </Paper>

      <DetailsField placeholder={idType === 'card' ? "Номер карты" : "Номер договора"} />
      <DetailsField placeholder="ФИО владельца" />
      <DetailsField placeholder="Адрес" />
    </Stack>
  );
};