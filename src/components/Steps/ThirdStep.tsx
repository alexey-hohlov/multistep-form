import { RadioButton, Input, Checkbox } from '../';

const ThirdStep: React.FC = () => {
  return (
    <div className='flex flex-col gap-3'>
      <Input
        name='password'
        validations={''}
        label={'Password'}
        classNameLabel='flex flex-col gap-2'
      />
      <Input
        name='confirmPassword'
        validations={''}
        label={'Confirm Password'}
        classNameLabel='flex flex-col gap-2'
      />
      <div className='flex flex-col gap-3'>
        Role
        <div className='flex gap-3'>
          <Checkbox label={'Buy'} lablelClassName={'flex flex-col gap-1'} />
          <Checkbox label={'Sell'} lablelClassName={'flex flex-col gap-1'} />
          <Checkbox label={'Partner'} lablelClassName={'flex flex-col gap-1'} />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        Agreement
        <div className='flex gap-3'>
          <RadioButton
            label='Yes'
            name='agreement'
            value='yes'
            classNameLabel={'flex gap-1 items-center'}
          />
          <RadioButton
            label='No'
            name='agreement'
            value='no'
            classNameLabel={'flex gap-1 items-center'}
            checked={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
