/**
 * Todo el texto del portafolio. Los clientes van siempre anónimos y no se muestran pantallas
 * reales de sus sistemas: cada caso se explica con el recorrido del día a día.
 */

export const PERSONA = {
  nombre: 'Andrés Pérez',
  rol: 'Desarrollador Full Stack',
  ciudad: 'Medellín, Colombia',
  resumen:
    'Más de tres años construyendo software empresarial de punta a punta: APIs en .NET y C#, interfaces en React y Next.js, aplicaciones móviles en React Native y diseño en Figma. Hoy trabajo en TCS sobre Azure y, por mi cuenta, desarrollo sistemas a la medida para negocios locales.',
  linkedin: 'https://www.linkedin.com/in/andrés-pérez0818',
  github: 'https://github.com/andres0818',
  correo: 'c.andres.perez.h@gmail.com',
  empresa: { nombre: 'Soluciones a la medida', url: 'https://soluoficial.com/?utm_source=portafolio&utm_medium=referencia' },
};

export type IconoPaso =
  | 'qr' | 'celular' | 'cocina' | 'caja'
  | 'reserva' | 'agenda' | 'servicio' | 'pago'
  | 'recibo' | 'laboratorio' | 'entrega' | 'equipo'
  | 'idea' | 'diseno' | 'revision' | 'publicar';

export type Caso = {
  id: string;
  sector: string;
  titulo: string;
  problema: string;
  aporte: string;
  estado: string;
  tecnologias: string[];
  recorrido: { icono: IconoPaso; titulo: string; texto: string }[];
};

export const CASOS: Caso[] = [
  {
    id: 'restaurante',
    sector: 'Restaurante de comidas rápidas',
    titulo: 'Pedidos por QR, cocina en tiempo real y caja',
    problema:
      'Los pedidos se tomaban a mano y no había control de existencias ni de caja. Las comandas se perdían en hora pico y el cierre no cuadraba.',
    aporte:
      'Diseñé y desarrollé el sistema completo: menú por QR en cada mesa, pantalla de cocina que se actualiza sola, inventario con alertas, caja con arqueo y reportes en lenguaje sencillo. También monté el despliegue automático con pruebas y copias de seguridad.',
    estado: 'En uso diario',
    tecnologias: ['.NET 10', 'PostgreSQL', 'React', 'Material UI', 'SignalR', 'Docker', 'GitHub Actions'],
    recorrido: [
      { icono: 'qr', titulo: 'El cliente escanea', texto: 'Cada mesa tiene su código QR.' },
      { icono: 'celular', titulo: 'Pide desde el celular', texto: 'Sin instalar nada.' },
      { icono: 'cocina', titulo: 'Cocina lo recibe', texto: 'La comanda llega al instante.' },
      { icono: 'caja', titulo: 'La caja cobra', texto: 'La cuenta ya está armada.' },
    ],
  },
  {
    id: 'barberias',
    sector: 'Plataforma para barberías',
    titulo: 'Reservas en línea, agenda por barbero y liquidaciones',
    problema:
      'Las citas se coordinaban por chat, los clientes no llegaban y las cuentas de cada barbero se hacían a mano al final de la semana.',
    aporte:
      'Desarrollé una plataforma donde cada barbería tiene su propia página, agenda y cuentas, con los datos separados de las demás. Incluye ingreso con Google, notificaciones al celular, citas sincronizadas con Google Calendar y liquidación automática.',
    estado: 'Plataforma para varias barberías',
    tecnologias: ['.NET 10', 'PostgreSQL', 'Next.js', 'Material UI', 'Firebase', 'Notificaciones web'],
    recorrido: [
      { icono: 'reserva', titulo: 'El cliente reserva', texto: 'Elige servicio, barbero y hora.' },
      { icono: 'agenda', titulo: 'Queda en la agenda', texto: 'Con recordatorio al celular.' },
      { icono: 'servicio', titulo: 'Se atiende y se cobra', texto: 'El cobro entra a la caja.' },
      { icono: 'pago', titulo: 'Se liquida al barbero', texto: 'Calculado por el sistema.' },
    ],
  },
  {
    id: 'optica',
    sector: 'Óptica',
    titulo: 'Ventas, inventario y órdenes de laboratorio',
    problema:
      'Ventas, existencias y pedidos al laboratorio se llevaban por separado, y nadie sabía con certeza en qué estado estaban los lentes de un cliente.',
    aporte:
      'Desarrollé un sistema que reúne las tres cosas: ventas con abonos y recibo, inventario de monturas y lentes, y seguimiento de cada orden. Cada persona entra con su usuario y lo que registra un equipo aparece al instante en los demás.',
    estado: 'Entregado al cliente',
    tecnologias: ['.NET 10', 'PostgreSQL', 'React', 'SignalR', 'Docker'],
    recorrido: [
      { icono: 'recibo', titulo: 'Venta con abono', texto: 'Queda el recibo y el saldo.' },
      { icono: 'laboratorio', titulo: 'Orden al laboratorio', texto: 'Con su estado a la vista.' },
      { icono: 'entrega', titulo: 'Entrega al cliente', texto: 'Se sabe qué está listo.' },
      { icono: 'equipo', titulo: 'Todos al día', texto: 'Cada equipo ve lo mismo.' },
    ],
  },
  {
    id: 'redes',
    sector: 'Automatización propia',
    titulo: 'Contenido para Instagram con inteligencia artificial',
    problema:
      'Publicar a diario en redes toma tiempo que un negocio pequeño no tiene, pero publicar sin revisar es arriesgado.',
    aporte:
      'Construí un sistema que cada semana propone las piezas: la inteligencia artificial escribe los textos, las imágenes y los videos salen de plantillas propias, y nada se publica sin aprobación en un panel privado. Publica solo por la API oficial de Instagram.',
    estado: 'En uso para Soluciones a la medida',
    tecnologias: ['TypeScript', 'Cloudflare Workers', 'API de Claude', 'API de Instagram', 'Playwright'],
    recorrido: [
      { icono: 'idea', titulo: 'Propone las piezas', texto: 'Textos escritos con IA.' },
      { icono: 'diseno', titulo: 'Arma el diseño', texto: 'Con plantillas propias.' },
      { icono: 'revision', titulo: 'Espera aprobación', texto: 'Nada sale sin revisión.' },
      { icono: 'publicar', titulo: 'Publica a su hora', texto: 'Por la API oficial.' },
    ],
  },
];

export type Proyecto = { titulo: string; descripcion: string; tecnologias: string[]; demo: string; codigo: string };

export const OTROS_PROYECTOS: Proyecto[] = [
  {
    titulo: 'Travels Antioquia',
    descripcion: 'Mapa interactivo de los municipios de Antioquia, con buscador y registro de visitas por pueblo.',
    tecnologias: ['React', 'TypeScript', 'Supabase', 'D3'],
    demo: 'https://andres0818.github.io/travelsAntioquia/',
    codigo: 'https://github.com/andres0818/travelsAntioquia',
  },
  {
    titulo: 'Ancestral Beach Club',
    descripcion: 'Página con flujo de reservas para un club de playa en Cartagena, con formulario de contacto.',
    tecnologias: ['React', 'TypeScript', 'Framer Motion', 'EmailJS'],
    demo: 'https://andres0818.github.io/ancestral/',
    codigo: 'https://github.com/andres0818/landingAncestral',
  },
  {
    titulo: 'EduLend Inventory',
    descripcion: 'Préstamos de inventario escolar, con servidor en FastAPI y despliegue automático con GitHub Actions.',
    tecnologias: ['React', 'FastAPI', 'Pandas', 'PostgreSQL'],
    demo: 'https://andres0818.github.io/Proyecto_web_II/',
    codigo: 'https://github.com/andres0818/Proyecto_web_II',
  },
];

export type Trabajo = { lugar: string; rol: string; fechas: string; puntos: string[]; tecnologias: string[] };

export const EXPERIENCIA: Trabajo[] = [
  {
    lugar: 'Tata Consultancy Services (TCS)',
    rol: 'Desarrollador Full Stack',
    fechas: 'Sep. 2026 – actualidad',
    puntos: [
      'Implemento APIs nuevas en C# y .NET y mantengo las existentes estables mientras evolucionan con el negocio.',
      'Construyo las interfaces con React y Next.js y las conecto con el servidor, validando cada funcionalidad de punta a punta.',
      'Diseño las pantallas en Figma y las implemento yo mismo en código.',
      'Trabajo en un equipo Scrum sobre infraestructura en Azure.',
    ],
    tecnologias: ['C#', '.NET', 'APIs REST', 'React', 'Next.js', 'Figma', 'Azure', 'Scrum'],
  },
  {
    lugar: 'Soluciones a la medida',
    rol: 'Fundador y desarrollador',
    fechas: 'Proyecto propio · actualidad',
    puntos: [
      'Sistemas a la medida para restaurantes, barberías y ópticas, de la primera conversación a la puesta en marcha.',
      'Diseño, desarrollo, despliegue, capacitación y soporte de cada sistema.',
    ],
    tecnologias: ['.NET', 'PostgreSQL', 'React', 'Next.js', 'Docker', 'Cloudflare'],
  },
  {
    lugar: 'Q10 S.A.S.',
    rol: 'Desarrollador Web Full Stack',
    fechas: 'Feb. 2024 – sep. 2026',
    puntos: [
      'Desarrollé mejoras y funcionalidades nuevas de la plataforma y de la aplicación móvil: vistas Razor y APIs REST en .NET, interfaces en React y React Native, y mis propios ajustes de base de datos en SQL.',
      'Refactoricé la página principal, q10.com: el rendimiento pasó de 60 % a 85 % y la calificación de SEO llegó a 99 %.',
      'En la plataforma educativa construí interfaces y APIs nuevas y corregí errores para mantenerla estable.',
      'Conecté métricas de Google Ads con tableros de Power BI y automaticé tareas con Google Apps Script.',
    ],
    tecnologias: ['.NET Core', '.NET Framework', 'C#', 'Razor', 'React', 'React Native', 'jQuery', 'SQL'],
  },
  {
    lugar: 'JKTIC Soluciones',
    rol: 'Desarrollador Web',
    fechas: 'Jun. 2023 – ene. 2024',
    puntos: [
      'Automaticé procesos financieros entre empresas con aplicaciones en PHP (CakePHP): órdenes de servicio y cruces de pagos que antes se hacían a mano.',
      'Construí formularios dinámicos que se adaptaban en tiempo real, conectados al servidor por APIs REST.',
    ],
    tecnologias: ['PHP', 'CakePHP', 'JavaScript', 'CSS', 'APIs REST'],
  },
];

export const FORMACION = 'Técnico en Desarrollo de Software — CESDE (2026)';

export const HERRAMIENTAS = [
  { grupo: 'Servidor', items: ['C#', '.NET', 'Entity Framework', 'APIs REST', 'SignalR', 'PHP'] },
  { grupo: 'Pantallas', items: ['React', 'React Native', 'Next.js', 'TypeScript', 'Material UI', 'Tailwind CSS', 'Sass'] },
  { grupo: 'Diseño', items: ['Figma', 'Prototipos', 'Diseño de interfaces'] },
  { grupo: 'Datos', items: ['PostgreSQL', 'SQL Server'] },
  { grupo: 'Entrega', items: ['Azure', 'Docker', 'GitHub Actions', 'Cloudflare', 'Git'] },
  { grupo: 'Otras', items: ['Scrum', 'Power BI', 'Google Apps Script', 'Desarrollo asistido por IA'] },
];
