import { TextField, InputAdornment } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface DetailsFieldProps {
  placeholder: string;
}

export const DetailsField = ({ placeholder }: DetailsFieldProps) => (
  <TextField
    fullWidth
    placeholder={placeholder}
    sx={{
      '& .MuiInputBase-input': {
        height: '22px', 
      }
    }}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <EditIcon sx={{ color: 'secondary.main', fontSize: 18, cursor: 'pointer' }} />
        </InputAdornment>
      ),
    }}
  />
);