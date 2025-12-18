import React, { useState } from 'react';
import { Container, Stack, Box } from '@mui/material';
import { SectionTitle } from './components/SectionTitle';
import { VolumeInput } from './components/VolumeInput';
import { ProgressSegments } from './components/ProgressSegments';
import { MethodToggle } from './components/MethodToggle';
import { BankCard } from './components/BankCard';
import { RequisitesHeader } from './components/RequisitesHeader';
import { RequisitesForm } from './components/RequisitesForm';

function App() {
  const [activeVolume, setActiveVolume] = useState<'give' | 'get'>('give');
  const [method, setMethod] = useState('Банки');

  return (
    <Box sx={{ 
      bgcolor: 'background.default', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      py: { xs: 0, sm: 4 } 
    }}>
      <Container 
        disableGutters 
        sx={{ 
          maxWidth: '400px !important', 
          width: '100%',
          p: 2, 
          bgcolor: '#F8F9FA', 
          borderRadius: { xs: 0, sm: '24px' },
          minHeight: { xs: '100vh', sm: 'auto' }
        }}
      >
        <SectionTitle>Способ вывода</SectionTitle>
        <MethodToggle 
          methods={['Банки', 'Наличные', 'Курьер']} 
          current={method} 
          onChange={setMethod} 
        />
        <BankCard />

        <SectionTitle>Объемы</SectionTitle>
        <Stack direction="row" spacing={1.5} sx={{ mb: 1 }}>
          <VolumeInput 
            label="Отдаете (лот 1000)" 
            currency="Ethereum, ETH" 
            value="1 300.00000" 
            active={activeVolume === 'give'} 
            onClick={() => setActiveVolume('give')} 
          />
          <VolumeInput 
            label="Получаете (лот 1000)" 
            currency="Рубль, RUR" 
            value="1 200.00" 
            active={activeVolume === 'get'} 
            onClick={() => setActiveVolume('get')} 
          />
        </Stack>
        
        <ProgressSegments />
        <RequisitesHeader />
        <RequisitesForm />

      </Container>
    </Box>
  );
}

export default App;