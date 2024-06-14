import { Input } from '../';

const FirstStep: React.FC = () => {
  return (
    <div className='flex flex-col gap-3'>
      <Input
        name='firstName'
        validations={''}
        label={'First Name'}
        classNameLabel='flex flex-col gap-2'
      />
      <Input
        name='lastName'
        validations={''}
        label={'Last Name'}
        classNameLabel='flex flex-col gap-2'
      />
      <Input
        name='email'
        validations={''}
        label={'Email'}
        classNameLabel='flex flex-col gap-2'
      />
      <Input
        name='phone'
        validations={''}
        label={'Phone'}
        classNameLabel='flex flex-col gap-2'
      />
    </div>
  );
};

export default FirstStep;
