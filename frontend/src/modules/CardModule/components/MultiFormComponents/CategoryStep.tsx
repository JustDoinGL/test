import { Box } from '@mui/material';
import { useFormContext, useWatch } from 'react-hook-form';
import { AutoForm, RealEstateForm, ServiceForm } from './CategoryStepHelper';
import { CardUpdateFirst } from '../../types/cardSchema';
import { CardTypes } from '@/assets';
import { SearchFormValues } from '../../types/searchSchema';

export const CategoryStep = ({ isRequiredRows = true }: { isRequiredRows?: boolean }) => {
  const { control } = useFormContext<CardUpdateFirst | SearchFormValues>();

  const type = useWatch<CardUpdateFirst | SearchFormValues, 'type'>({
    control,
    name: 'type',
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {type === CardTypes.REAL_ESTATE && <RealEstateForm />}
      {type === CardTypes.AUTO && <AutoForm isRequiredRows={isRequiredRows} />}
      {type === CardTypes.SERVICES && <ServiceForm isRequiredRows={isRequiredRows} />}
    </Box>
  );
};
