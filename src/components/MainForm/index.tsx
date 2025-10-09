import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import type { HomeProps } from '../../pages/Home';

export function MainForm({state, setState}: HomeProps) {
  function handleCliclk() {
    setState((prevState) => ({
      ...prevState,
      config: {
        ...prevState.config,
        workTime: 34,
      },
      formattedSecondsRemaining: '23:34'
    }));
  }

  return (
    <form className='form' action=''>
      <div>
        <button type='button' onClick={handleCliclk}>
          Clicar
        </button>
      </div>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de {state.config.workTime} minutos.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}