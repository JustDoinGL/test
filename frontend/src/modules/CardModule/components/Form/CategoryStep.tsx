import { Box } from '@mui/material';
import { useFormContext, useWatch } from 'react-hook-form';
import { AutoForm, RealEstateForm, ServiceForm } from './CategoryStepHelper';
import { CardUpdateFirst } from '../../types/cardSchema';
import { CardTypes } from '@/assets';

export const CategoryStep = () => {
  const { control } = useFormContext<CardUpdateFirst>();

  const type = useWatch<CardUpdateFirst, 'type'>({
    control,
    name: 'type',
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {type === CardTypes.REAL_ESTATE && <RealEstateForm />}
      {type === CardTypes.AUTO && <AutoForm />}
      {type === CardTypes.SERVICES && <ServiceForm />}
    </Box>
  );
};
