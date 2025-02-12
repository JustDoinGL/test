import { PATHS } from '@/assets';
import { MultiStepForm } from '@/modules';

export const FormPage = () => {
  return (
    <div data-testid={PATHS.formPage}>
      <MultiStepForm />
    </div>
  );
};
