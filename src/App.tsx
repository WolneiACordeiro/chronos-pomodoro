import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react';

export function App() {
    return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae omnis distinctio modi, hic molestias a dolores nihil, voluptatibus iste assumenda officiis molestiae! Praesentium expedita dolorem quisquam cumque nesciunt vero suscipit.
      </p>
    </>
    );
}