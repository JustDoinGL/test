import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material';
import { useStep } from './hooks/useStep';
import { BaseStep, CategoryStep, StepNavigation } from './components';
import { cardSchemaFirst, cardSchemaSecond, CardUpdateSecond } from './@types/cardSchema';
import { useSearchParams } from 'react-router';

const steps = ['Основной шаг', 'Дополнительный шаг'];

export const MultiStepForm = () => {
  const { activeStep, handleNext, handleBack } = useStep();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const methods = useForm<CardUpdateSecond>({
    resolver: zodResolver(activeStep === 1 ? cardSchemaSecond : cardSchemaFirst),
    defaultValues: {},
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<CardUpdateSecond> = (data) => {
    if (activeStep === 1) {
      console.log('Форма отправлена:', data);
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
          {id ? 'Редактирование услуги' : 'Создание услуги'}
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
