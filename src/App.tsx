import { Encabezado, Pie } from './componentes/Base';
import { Contacto, Experiencia, Herramientas } from './componentes/Perfil';
import { Portada } from './componentes/Portada';
import { OtrosProyectos, Proyectos } from './componentes/Proyectos';

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Proyectos />
        <OtrosProyectos />
        <Experiencia />
        <Herramientas />
        <Contacto />
      </main>
      <Pie />
    </>
  );
}
