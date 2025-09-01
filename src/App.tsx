import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'

export function App() {
    return (
    <>
      <Heading attr={123} attr2='String'>Olá mundo!</Heading>
      <Heading>Olá!</Heading>
      <Heading>!</Heading>
      <Heading>mundo!</Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae omnis distinctio modi, hic molestias a dolores nihil, voluptatibus iste assumenda officiis molestiae! Praesentium expedita dolorem quisquam cumque nesciunt vero suscipit.
      </p>
    </>
    );
}