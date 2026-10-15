import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

import { PERSONA } from '../contenido';

const NAVEGACION = [
  { texto: 'Proyectos', destino: '#proyectos' },
  { texto: 'Experiencia', destino: '#experiencia' },
  { texto: 'Herramientas', destino: '#herramientas' },
];

export function Encabezado() {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 'appBar',
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: 'color-mix(in srgb, var(--mui-palette-background-default) 82%, transparent)',
        backdropFilter: 'saturate(180%) blur(12px)',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', height: 64, gap: 3 }}>
        <Link href="#inicio" underline="none" color="text.primary" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mr: 'auto', fontWeight: 600 }}>
          <Box
            component="span"
            aria-hidden
            sx={{ width: 28, height: 28, borderRadius: 1, display: 'grid', placeItems: 'center', bgcolor: 'text.primary', color: 'background.default', fontSize: '0.8125rem', fontWeight: 700 }}
          >
            AP
          </Box>
          {PERSONA.nombre}
        </Link>
        <Box component="nav" aria-label="Secciones" sx={{ display: { xs: 'none', md: 'flex' }, gap: 3.5 }}>
          {NAVEGACION.map((enlace) => (
            <Link key={enlace.destino} href={enlace.destino} underline="none" sx={{ color: 'text.secondary', fontSize: '0.9375rem', fontWeight: 500, '&:hover': { color: 'text.primary' } }}>
              {enlace.texto}
            </Link>
          ))}
        </Box>
        <Button href="#contacto" variant="contained" size="small" sx={{ py: 0.875, whiteSpace: 'nowrap' }}>
          Hablemos
        </Button>
      </Container>
    </Box>
  );
}

type PropsSeccion = {
  id: string;
  etiqueta: string;
  titulo: string;
  descripcion?: string;
  /** Fondo gris suave para alternar con las secciones blancas. */
  alterna?: boolean;
  children: ReactNode;
};

export function Seccion({ id, etiqueta, titulo, descripcion, alterna = false, children }: PropsSeccion) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={`${id}-titulo`}
      sx={{ py: { xs: 9, md: 14 }, bgcolor: alterna ? 'background.paper' : 'background.default', borderTop: 1, borderColor: 'divider', scrollMarginTop: 64 }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 680, mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" component="p" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {etiqueta}
          </Typography>
          <Typography variant="h2" id={`${id}-titulo`}>
            {titulo}
          </Typography>
          {descripcion && (
            <Typography variant="subtitle1" component="p" sx={{ color: 'text.secondary', mt: 2.5 }}>
              {descripcion}
            </Typography>
          )}
        </Box>
        {children}
      </Container>
    </Box>
  );
}

/** Lista de tecnologías como etiquetas discretas. */
export function Etiquetas({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, listStyle: 'none', p: 0, m: 0 }}>
      {items.map((item) => (
        <Box
          component="li"
          key={item}
          sx={{ px: 1.25, py: 0.5, border: 1, borderColor: 'divider', borderRadius: 1, fontSize: '0.8125rem', fontWeight: 500, color: 'text.secondary', bgcolor: 'background.default' }}
        >
          {item}
        </Box>
      ))}
    </Box>
  );
}

export function Pie() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', py: 4 }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 2, color: 'text.secondary', fontSize: '0.875rem' }}>
        <span>
          © {new Date().getFullYear()} {PERSONA.nombre} · {PERSONA.ciudad}
        </span>
        <Link href={PERSONA.empresa.url} target="_blank" rel="noopener" color="inherit" underline="hover">
          {PERSONA.empresa.nombre}
        </Link>
      </Container>
    </Box>
  );
}
