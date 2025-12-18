import { Stack, Box } from '@mui/material';

interface Props {
  methods: string[];
  current: string;
  onChange: (val: string) => void;
}

export const MethodToggle = ({ methods, current, onChange }: Props) => (
  <Stack 
    direction="row" 
    spacing={1} 
    sx={{ 
      mb: 3,
      width: '100%' 
    }}
  >
    {methods.map((name) => {
      const isActive = current === name;
      return (
        <Box 
          key={name}
          onClick={() => onChange(name)}
          sx={{ 
            flex: 1,
            textAlign: 'center',
            px: 2, 
            py: 1.5, 
            cursor: 'pointer',
            borderRadius: '12px', 
            fontWeight: 700, 
            fontSize: '14px',
            transition: 'all 0.2s ease-in-out',
            
            bgcolor: isActive ? 'primary.main' : 'background.paper', 
            color: isActive ? 'background.paper' : 'primary.main', 
            border: '1px solid',
            borderColor: isActive ? 'primary.main' : 'divider',
            
            boxShadow: isActive ? '0px 4px 12px rgba(0,0,0,0.1)' : 'none',
            
            '&:hover': {
              bgcolor: isActive ? 'primary.main' : 'grey.50',
            }
          }}
        >
          {name}
        </Box>
      );
    })}
  </Stack>
);