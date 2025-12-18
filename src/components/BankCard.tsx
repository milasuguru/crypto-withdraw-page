import { Paper, Avatar, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const BankCard = () => (
  <Paper 
    elevation={0} 
    sx={{ 
      p: '14px 16px', 
      mb: 4, 
      display: 'flex', 
      alignItems: 'center', 
      borderRadius: '16px', 
      cursor: 'pointer',
      '&:hover': {
        bgcolor: '#FAFAFA' 
      }
    }}
  >
    <Avatar 
      sx={{ 
        bgcolor: '#F2F2F7', 
        color: 'primary.main', 
        fontWeight: 700, 
        mr: 2,
        width: 40,
        height: 40
      }}
    >
      A
    </Avatar>

    <Box sx={{ flexGrow: 1 }}>
      <Typography 
        sx={{ 
          fontWeight: 700, 
          fontSize: '15px', 
          lineHeight: 1.2 
        }}
      >
        Альфа-банк cash-in
      </Typography>
      <Typography variant="caption" sx={{ display: 'block', mt: 0.3 }}>
        1 USDT = 61.55 RUR
      </Typography>
    </Box>

    <ExpandMoreIcon sx={{ color: 'secondary.main', fontSize: '20px' }} />
  </Paper>
);