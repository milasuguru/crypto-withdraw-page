import { Box, Paper, Typography, IconButton, Stack } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

interface VolumeProps {
  label: string;
  currency: string;
  value: string;
  active?: boolean;
  onClick?: () => void;
}

export const VolumeInput = ({ label, currency, value, active, onClick }: VolumeProps) => (
  <Box 
    onClick={onClick} 
    sx={{ 
      flex: 1,       
      minWidth: 0,   
      cursor: 'pointer' 
    }}
  >
    
    <Typography 
      variant="caption" 
      sx={{ 
        display: 'block', 
        mb: 1, 
        whiteSpace: 'nowrap', 
        overflow: 'hidden', 
        textOverflow: 'ellipsis',
        fontWeight: 500
      }}
    >
      {label}
    </Typography>
    
    <Paper 
      elevation={0}
      sx={{ 
        p: '12px 8px',
        height: '90px', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        transition: 'all 0.2s ease-in-out',
        
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: active ? 'info.main' : 'divider', 
        borderWidth: active ? '2px' : '1px',
        boxShadow: active ? '0px 4px 12px rgba(0, 122, 255, 0.15)' : 'none',
        
        m: active ? '-1px' : 0, 
        position: 'relative',
        zIndex: active ? 2 : 1
      }}
    >

      <Typography 
        variant="caption" 
        sx={{ 
          fontSize: '10px', 
          display: 'block', 
          mb: 0.5, 
          textAlign: 'center',
          color: 'secondary.main',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
      >
        {currency}
      </Typography>
      
      <Stack 
        direction="row" 
        alignItems="center" 
        justifyContent="space-between" 
        spacing={0.5}
      >
        <IconButton 
          size="small" 
          sx={{ 
            bgcolor: 'background.default', 
            borderRadius: '8px', 
            width: 28, 
            height: 28, 
            p: 0,
            '&:hover': { bgcolor: 'divider' }
          }}
        >
          <Remove sx={{ fontSize: '16px', color: 'primary.main' }} />
        </IconButton>

        <Typography 
          sx={{ 
            fontWeight: 800, 
            fontSize: { xs: '13px', sm: '15px' },
            color: 'primary.main',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            flexShrink: 1,
            mx: 0.5,
            textAlign: 'center'
          }}
        >
          {value}
        </Typography>

        <IconButton 
          size="small" 
          sx={{ 
            bgcolor: 'background.default', 
            borderRadius: '8px', 
            width: 28, 
            height: 28, 
            p: 0,
            '&:hover': { bgcolor: 'divider' }
          }}
        >
          <Add sx={{ fontSize: '16px', color: 'primary.main' }} />
        </IconButton>
      </Stack>
    </Paper>
  </Box>
);