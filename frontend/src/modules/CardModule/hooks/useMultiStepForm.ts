import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cardSchemaFirst, cardSchemaSecond, CardUpdateSecond } from '../types/cardSchema';
import { useCardCreate, useUpdateCard } from '../hooks';
import { CardDto } from '../types/cardDto';

type useMultiStepFormProps = {
  clearFormData: (id: number) => void;
  values?: CardDto;
  activeStep: number;
  resetStep: () => void;
  setIsOpenModal: (value: boolean) => void;
};

export const useMultiStepForm = ({
  clearFormData,
  values,
  activeStep,
  resetStep,
  setIsOpenModal,
}: useMultiStepFormProps) => {
  const createCard = useCardCreate();
  const updateCard = useUpdateCard();

  const methods = useForm<CardUpdateSecond>({
    resolver: zodResolver(activeStep === 1 ? cardSchemaSecond : cardSchemaFirst),
    defaultValues: {},
    values,
    mode: 'onTouched',
  });

  const { control, setError, reset } = methods;

  const onSubmit: SubmitHandler<CardUpdateSecond> = async (data) => {
    control._disableForm(true);

    try {
      if (data.id) {
        await updateCard.mutateAsync({ ...data, id: data.id });
        clearFormData(data.id);
        resetStep();
      } else {
        await createCard.mutateAsync(data);
        clearFormData(-1);
        resetStep();
        reset({ name: '' });
      }
      setIsOpenModal(true);
    } catch (error) {
      if (error instanceof Error) {
        setError('root', { message: `Произошла ошибка: ${error.message}` });
      } else {
        setError('root', { message: `Произошла ошибка:` });
      }
    } finally {
      control._disableForm(false);
    }
  };

  return { methods, onSubmit };
};
