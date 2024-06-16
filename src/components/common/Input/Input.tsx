import { useController } from 'react-hook-form';
import { defaultMessage } from '../../../utils/validations';
import { ErrorIcon } from '../../../assets';

interface Props {
  name: string;
  label?: string;
  classNameInput?: string;
  classNameLabel?: string;
  isRequired?: boolean;
  validations: any;
}

const Input: React.FC<Props> = ({
  name,
  label = '',
  classNameInput = '',
  classNameLabel,
  isRequired = false,
  validations,
}) => {
  const handleValidations = () => {
    switch (isRequired) {
      case true:
        return {
          ...validations,
          required: { value: true, message: defaultMessage },
        };
      case false:
        return {
          ...validations,
          required: isRequired,
        };
    }
  };

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    rules: handleValidations(),
    defaultValue: '',
  });

  return (
    <label className={classNameLabel}>
      {label}
      <div className='input-container'>
        <input
          {...field}
          className={`input ${classNameInput} ${error && 'error'}`}
        />
        {error && <ErrorIcon className='error-icon' />}
      </div>
    </label>
  );
};

export default Input;
