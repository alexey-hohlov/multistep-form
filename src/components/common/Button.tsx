interface Props {
  label: string;
  className?: string;
}

const Button: React.FC<Props> = ({ label, className = '' }) => {
  return <button className={`button ${className}`}>{label}</button>;
};

export default Button;
