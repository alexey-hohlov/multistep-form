import { Button, Input } from '../';
import staticText from '../../assets/static.json';

const text = staticText.button;

const Form: React.FC = () => {
  return (
    <form className='rounded-lg flex flex-col bg-zinc-100 h-full p-4 gap-3'>
      <h1>TEST CAPTION</h1>
      <Input />
      <Input />
      <Input />
      <div className='flex justify-between'>
        <Button label={text.back} className='button-red'/>
        <Button label={text.next} className='button-green'/>
      </div>
    </form>
  );
};

export default Form;
