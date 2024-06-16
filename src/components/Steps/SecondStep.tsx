import { Input, RadioButton } from '../';

const SecondStep: React.FC = () => {
  return (
    <div className='flex flex-col gap-3'>
      <Input
        name='birthDate'
        validations={''}
        label={'Birth Date'}
        classNameLabel='flex flex-col gap-2'
      />
      <div className='flex flex-col gap-3'>
        Sex
        <div className='flex gap-3'>
          <RadioButton
            label='Male'
            name='sex'
            value='male'
            checked={true}
            classNameLabel={'flex gap-1 items-center'}
          />
          <RadioButton
            label='Female'
            name='sex'
            value='female'
            classNameLabel={'flex gap-1 items-center'}
          />
        </div>
      </div>
      <Input
        name='address'
        validations={''}
        label={'Address'}
        classNameLabel='flex flex-col gap-2'
      />
    </div>
  );
};

export default SecondStep;
