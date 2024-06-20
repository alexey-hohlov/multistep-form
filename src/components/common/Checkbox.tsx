interface Props {
  label: string;
  lablelClassName?: string;
}

const Checkbox: React.FC<Props> = ({ label, lablelClassName }) => {
  return (
    <label className={`checkbox ${lablelClassName}`}>
      {label}
      <input type='checkbox' />
    </label>
  );
};

export default Checkbox;
