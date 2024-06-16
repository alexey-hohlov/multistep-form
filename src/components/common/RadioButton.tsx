import { useController } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  classNameLabel?: string;
  checked?: boolean;
  value: string;
}

const RadioButton: React.FC<Props> = ({
  label,
  name,
  classNameLabel,
  checked = false,
  value,
}) => {
  const { field } = useController({
    name,
    defaultValue: checked && value,
  });
  return (
    <div className='radio-button'>
      <label className={classNameLabel}>
        <span className='radio-button-label' onClick={e => e.preventDefault()}>
          {label}
        </span>
        <input {...field} type='radio' defaultChecked={checked} value={value} />
        <span className='radio-button-checkmark'></span>
      </label>
    </div>
  );
};

export default RadioButton;
