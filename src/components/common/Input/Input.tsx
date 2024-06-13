import { useController } from 'react-hook-form';
import { defaultMessage } from '../../../utils/validations';

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
  isRequired = true,
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
    // fieldState: { error, isDirty },
  } = useController({
    name,
    rules: handleValidations(),
    defaultValue: '',
  });

  return (
    <label className={classNameLabel}>
      {label}
      <input className={`input ${classNameInput}`} />
    </label>
  );
};

export default Input;
