import { useEffect, useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  Container,
  styled,
} from '@mui/material';
import { FormProvider } from 'react-hook-form';
import { BaseStep, CategoryStep, StepNavigation } from './MultiFormComponents';
import { useStep, useSaveLocalFormData } from '../hooks';
import { CustomError, CustomModal, CustomSpinner } from '@/ui';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import { CardDto } from '../types/cardDto';
import { Link } from 'react-router';
import { PATHS } from '@/assets';

const steps = ['Основной шаг', 'Дополнительный шаг'];

const StyledForm = styled('form')(() => ({
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  border: '5px solid white',
  borderRadius: '15px',
  background: 'rgb(11, 20, 31)',
}));

const StyledStepper = styled(Stepper)(() => ({
  marginBottom: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  '@media (max-width: 440px)': {
    display: 'none',
  },
}));

const StyledModalContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: '30px',
  maxWidth: '300px',
  margin: '0 auto',
}));

type MultiStepFormProps = {
  defaultValues?: CardDto;
  isEditing: boolean;
};

export const MultiStepForm = ({ defaultValues, isEditing }: MultiStepFormProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { activeStep, handleNext, handleBack, resetStep } = useStep();
  const { formData, saveFormData, clearFormData, isSavedData } =
    useSaveLocalFormData(defaultValues);
  const { methods, onSubmit } = useMultiStepForm({
    clearFormData,
    activeStep,
    values: formData,
    resetStep,
    setIsOpenModal,
  });

  const { watch, formState, handleSubmit } = methods;
  const { errors, isSubmitting } = formState;

  useEffect(() => {
    const subscription = watch((value) => {
      saveFormData(value as CardDto);
    });

    return () => subscription.unsubscribe();
  }, [saveFormData, watch]);

  return (
    <>
      <FormProvider {...methods}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {isSavedData && (
            <Typography component='h4' sx={{ mb: '20px', fontSize: '30px' }}>
              Даннные взяты из черновика
            </Typography>
          )}

          <Typography component='h4' sx={{ mb: '20px', fontSize: '30px' }}>
            {isEditing ? 'Редактирование услуги' : 'Создание услуги'}
          </Typography>

          <StyledStepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </StyledStepper>

          <Box>
            {activeStep === 0 && <BaseStep />}
            {activeStep === 1 && <CategoryStep />}

            <Container sx={{ marginTop: '10px' }}>
              {errors.root && <CustomError errorType='warning' errorText={errors.root?.message} />}
              {isSubmitting && <CustomSpinner size={50} />}
            </Container>

            <StepNavigation
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
              stepsLength={steps.length}
            />
          </Box>
        </StyledForm>
      </FormProvider>

      <CustomModal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <StyledModalContainer>
          <Typography variant='h4'>
            {isEditing ? 'Задача отредактирована успещно' : 'Задача создана успещно'}
          </Typography>

          <Button component={Link} to={PATHS.mainPage} variant='contained'>
            На главную страницу
          </Button>
        </StyledModalContainer>
      </CustomModal>
    </>
  );
};
