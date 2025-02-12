import { Box } from '@mui/material';
import { useFormContext, useWatch } from 'react-hook-form';
import { AutoForm, RealEstateForm, ServiceForm } from './CategoryStepHelper';
import { CardUpdateFirst } from '../../@types/cardSchema';

export const CategoryStep = () => {
  const { control } = useFormContext<CardUpdateFirst>();

  const type = useWatch<CardUpdateFirst, 'type'>({
    control,
    name: 'type',
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {type === 'Недвижимость' && <RealEstateForm />}
      {type === 'Авто' && <AutoForm />}
      {type === 'Услуги' && <ServiceForm />}
    </Box>
  );
};
