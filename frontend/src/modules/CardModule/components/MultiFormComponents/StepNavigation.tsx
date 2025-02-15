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

  const { formState, trigger } = useFormContext<CardUpdateFirst, CardUpdateSecond>();
  const { isValid, isSubmitting } = formState;

  const validateFirstStep = async () => {
    const fieldsToValidate = ['name', 'description', 'location', 'type'];
    return await trigger(fieldsToValidate as unknown as keyof CardUpdateFirst);
  };

  const handleNextStep = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const isFirstStepValid = await validateFirstStep();

    if (isFirstStepValid) {
      handleNext(e);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
      <Button disabled={activeStep === 0 || isSubmitting} onClick={handleBack} variant='contained'>
        Назад
      </Button>
      {activeStep === stepsLength - 1 ? (
        <Button type='submit' variant='contained' disabled={isSubmitting || !isValid}>
          Отправить
        </Button>
      ) : (
        <Button type='button' onClick={handleNextStep} variant='contained'>
          Далее
        </Button>
      )}
    </Box>
  );
};
