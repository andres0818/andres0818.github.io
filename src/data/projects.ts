export interface Project {
  id: string;
  title: string;
  stack: string[];
  description: string;
  type: 'live' | 'case-study';
  liveUrl?: string;
  repoUrl?: string;
  screenshot?: string;
  privateNote?: string;
}

export const projects: Project[] = [
  {
    id: 'travels-antioquia',
    title: 'Travels Antioquia',
    stack: ['React', 'TypeScript', 'Supabase', 'D3-geo'],
    description:
      'Mapa interactivo de los municipios de Antioquia, con buscador y registro de visitas por pueblo.',
    type: 'live',
    liveUrl: 'https://andres0818.github.io/travelsAntioquia/',
    repoUrl: 'https://github.com/andres0818/travelsAntioquia',
  },
  {
    id: 'ancestral-beach-club',
    title: 'Ancestral Beach Club',
    stack: ['React', 'TypeScript', 'Framer Motion', 'EmailJS'],
    description:
      'Landing page con flujo de reservas para un beach club en Cartagena, con formulario de contacto integrado.',
    type: 'live',
    liveUrl: 'https://andres0818.github.io/ancestral/',
    repoUrl: 'https://github.com/andres0818/landingAncestral',
  },
  {
    id: 'edulend-inventory',
    title: 'EduLend Inventory',
    stack: ['React', 'FastAPI', 'Pandas', 'PostgreSQL', 'Prisma'],
    description:
      'Gestión de préstamos de inventario escolar, con backend en FastAPI y CI/CD por GitHub Actions.',
    type: 'live',
    liveUrl: 'https://andres0818.github.io/Proyecto_web_II/',
    repoUrl: 'https://github.com/andres0818/Proyecto_web_II',
  },
  {
    id: 'optica',
    title: 'Sistema de Facturación e Inventario — Óptica',
    stack: ['ASP.NET Core', 'EF Core', 'SignalR', 'React', 'TypeScript', 'Docker'],
    description:
      'Sistema completo de facturación e inventario para un cliente del sector óptico — auth JWT, control de inventario y seguimiento de órdenes de laboratorio.',
    type: 'case-study',
    privateNote: 'Proyecto vendido a un cliente real — código y datos privados.',
  },
];
