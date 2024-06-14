import Input from '../common/Input/Input';

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
        <label>
          Male
          <input type='radio' name='sex' />
        </label>
        <label>
          Female
          <input type='radio' name='sex' />
        </label>
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
