import { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stepper, Step, StepLabel } from '@mui/material';
import { cardSchema, CardUpdate } from './@types/schema';
import { BaseStep } from './components/Form/BaseStep';
import { CategoryStep } from './components/Form/CategoryStep';

const steps = ['Основной шаг', 'Категорийный шаг'];

export const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm<CardUpdate>({
    resolver: zodResolver(cardSchema),
    defaultValues: {},
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<CardUpdate> = (data) => {
    console.log('Форма отправлена:', data);
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <FormProvider {...methods}>
      <Box sx={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleSubmit(onSubmit)}>
          {activeStep === 0 && <BaseStep />}
          {activeStep === 1 && <CategoryStep />}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Назад
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button type='submit'>Отправить</Button>
            ) : (
              <Button onClick={handleNext}>Далее</Button>
            )}
          </Box>
        </form>
      </Box>
    </FormProvider>
  );
};
