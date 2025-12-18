import { Stack, Typography, Checkbox, FormControlLabel } from '@mui/material';

export const RequisitesHeader = () => (
  <Stack 
    direction="row" 
    justifyContent="space-between" 
    alignItems="center" 
    sx={{ 
      mb: 1.5, 
      mt: 3,   
      width: '100%' 
    }}
  >
    <Typography variant="h6">
      Реквизиты
    </Typography>
    
    <FormControlLabel 
      sx={{ 
        mr: 0, 
        '& .MuiTypography-root': { 
          fontSize: '13px', 
          fontWeight: 500,
          ml: -0.5,
          color: 'secondary.main' 
        }
      }}
      control={
        <Checkbox 
          defaultChecked 
          size="small" 
          disableRipple 
          sx={{ p: 0.5 }} 
        />
      } 
      label="Сохранить реквизиты"
    />
  </Stack>
);