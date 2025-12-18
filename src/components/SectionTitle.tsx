import { Typography } from '@mui/material';

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Typography 
    variant="h6" 
    sx={{ 
      mb: 2, 
      mt: 1  
    }}
  >
    {children}
  </Typography>
);