import { FormProvider, useForm } from 'react-hook-form';
import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import { Button, FirstStep, SecondStep, ThirdStep } from '../';
import staticText from '../../assets/static.json';

const text = staticText.button;

const Form: React.FC = () => {
  const methods = useForm({ mode: 'onSubmit' });
  const { handleSubmit } = methods;
  const { Steps, back, next, isFirstStep, isLastStep } = useMultiStepForm([
    FirstStep,
    SecondStep,
    ThirdStep,
  ]);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    back();
  };

  const handleFinish = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const onSubmit = (formData: any) => {
    if (isLastStep) {
      console.log('submit');
    }
    next();
  };

  return (
    <FormProvider {...methods}>
      <form
        className='rounded-lg flex flex-col bg-zinc-100 h-full p-4 gap-3 shadow-xl max-w-sm w-full'
        onSubmit={handleSubmit(onSubmit)}
      >
        {<Steps />}
        <div className='flex justify-between mt-6'>
          <Button
            label={text.back}
            className='button-dark-outline max-w-20 w-full'
            disabled={isFirstStep}
            onClick={handleBack}
          />
          <Button
            label={isLastStep ? text.submit : text.next}
            className='button-dark max-w-20 w-full'
            onClick={() => {
              isLastStep ? handleFinish : null;
            }}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
