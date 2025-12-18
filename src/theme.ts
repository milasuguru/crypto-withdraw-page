import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
    h6: { fontSize: '18px', fontWeight: 800, color: '#1A1C1E', letterSpacing: '-0.4px' },
    body2: { fontSize: '14px', fontWeight: 500 },
    caption: { fontSize: '12px', color: '#8E8E93' },
  },
  shape: {
    borderRadius: 12,
  },
  palette: {
    background: { default: '#F2F2F7', paper: '#FFFFFF' },
    primary: { main: '#1A1C1E' },
    secondary: { main: '#8E8E93' },
    warning: { main: '#FFD600' }, 
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)',
          border: '1px solid #F2F2F7', 
          backgroundImage: 'none',
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          '& fieldset': { border: '1px solid #F2F2F7' },
          '&:hover fieldset': { borderColor: '#E5E5EA !important' },
          '&.Mui-focused fieldset': { borderWidth: '1px !important', borderColor: '#007AFF' },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#E5E5EA',
          '&.Mui-checked': { color: '#FFD600' },
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#E5E5EA',
          '&.Mui-checked': { color: '#FFD600' },
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: 'sm',
      },
    },
  },
});