import { Box, Button } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { CardUpdateFirst, CardUpdateSecond } from '../../types/cardSchema';

type TStepNavigation = {
  activeStep: number;
  handleNext: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleBack: () => void;
  stepsLength: number;
};

export const StepNavigation = (props: TStepNavigation) => {
  const { activeStep, handleNext, stepsLength, handleBack } = props;

  const {
    formState: { isValid },
  } = useFormContext<CardUpdateFirst | CardUpdateSecond>();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
      <Button disabled={activeStep === 0} onClick={handleBack} variant='contained'>
        Назад
      </Button>
      {activeStep === stepsLength - 1 ? (
        <Button type='submit' disabled={!isValid} variant='contained'>
          Отправить
        </Button>
      ) : (
        <Button type='button' onClick={handleNext} disabled={!isValid} variant='contained'>
          Далее
        </Button>
      )}
    </Box>
  );
};
