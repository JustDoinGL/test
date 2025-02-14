import { useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material';
import { useStep } from '../hooks/useStep';
import { BaseStep, CategoryStep, StepNavigation } from './Form';
import { cardSchemaFirst, cardSchemaSecond, CardUpdateSecond } from '../types/cardSchema';
import { CardDto } from '../types/cardDto';
import { useFormData } from '../hooks/useFormData';

const steps = ['Основной шаг', 'Дополнительный шаг'];

type MultiStepFormProps = {
  defaultValues?: CardDto;
  isEditing: boolean;
};

export const MultiStepForm = ({ defaultValues, isEditing }: MultiStepFormProps) => {
  const { activeStep, handleNext, handleBack } = useStep();
  const { formData, saveFormData, clearFormData } = useFormData(defaultValues);

  const methods = useForm<CardUpdateSecond>({
    resolver: zodResolver(activeStep === 1 ? cardSchemaSecond : cardSchemaFirst),
    defaultValues: formData,
    values: formData,
    mode: 'onTouched',
  });
  const { handleSubmit, watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      saveFormData(value as CardDto);
    });

    return () => subscription.unsubscribe();
  }, [watch, saveFormData]);

  const onSubmit: SubmitHandler<CardUpdateSecond> = (data) => {
    if (data.id) {
      clearFormData(data.id);
    } else {
      clearFormData(-1);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box
        sx={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
          border: '5px solid white',
          borderRadius: '15px',
          background: 'rgb(11, 20, 31)',
        }}
      >
        <Typography component='h4' sx={{ mb: '20px', fontSize: '30px' }}>
          {isEditing ? 'Редактирование услуги' : 'Создание услуги'}
        </Typography>

        <Stepper
          activeStep={activeStep}
          sx={{
            mb: '15px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            '@media (max-width: 440px)': {
              display: 'none',
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
          {activeStep === 0 && <BaseStep />}
          {activeStep === 1 && <CategoryStep />}

          <StepNavigation
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            stepsLength={steps.length}
          />
        </Box>
      </Box>
    </FormProvider>
  );
};
