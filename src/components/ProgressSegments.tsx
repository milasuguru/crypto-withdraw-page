import { Box, Stack, Typography } from '@mui/material';

export const ProgressSegments = () => (
  <Box sx={{ mt: 2, mb: 4 }}>
    <Stack direction="row" spacing={0.5} sx={{ mb: 1.5 }}>
      {[1, 1, 0, 0].map((active, i) => (
        <Box 
          key={i} 
          sx={{ 
            height: 6, 
            flex: 1, 
            borderRadius: '2px', 
            bgcolor: active ? 'primary.main' : 'divider', 
            transition: 'background-color 0.3s ease'
          }} 
        />
      ))}
    </Stack>
    
    <Stack direction="row" justifyContent="space-between">
      {['min', '50%', '75%', 'max'].map((t, index) => (
        <Typography 
          key={t} 
          variant="caption" 
          sx={{ 
            fontSize: '11px', 
            fontWeight: 600,
            textAlign: index === 0 ? 'left' : index === 3 ? 'right' : 'center',
            flex: 1
          }} 
        >
          {t}
        </Typography>
      ))}
    </Stack>
  </Box>
);