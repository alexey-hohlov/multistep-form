import Input from '../common/Input/Input';

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
        <label>
          Buy
          <input type='checkbox' />
        </label>
        <label>
          Sell
          <input type='checkbox' />
        </label>
        <label>
          Partner
          <input type='checkbox' />
        </label>
      </div>
      <div className='flex flex-col gap-3'>
        Agreement
        <label>
          Yes
          <input type='radio' name='sex' />
        </label>
        <label>
          No
          <input type='radio' name='sex' />
        </label>
      </div>
    </div>
  );
};

export default ThirdStep;
