import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { EXPERIENCIA, FORMACION, HERRAMIENTAS, PERSONA } from '../contenido';
import { TARJETA } from '../tema';
import { Etiquetas, Seccion } from './Base';

export function Experiencia() {
  return (
    <Seccion id="experiencia" etiqueta="Experiencia" titulo="Dónde he trabajado." alterna>
      <Box component="ol" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gap: { xs: 2.5, md: 3 } }}>
        {EXPERIENCIA.map((trabajo, indice) => (
          <Box
            component="li"
            key={trabajo.lugar}
            sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '220px 1fr' }, gap: { xs: 1.5, md: 4 } }}
          >
            <Box sx={{ pt: { md: 3.5 }, display: 'flex', flexDirection: { xs: 'row', md: 'column' }, alignItems: { xs: 'center', md: 'flex-start' }, gap: 1 }}>
              <Box
                aria-hidden
                sx={{ width: 10, height: 10, borderRadius: '50%', border: 1.5, borderColor: 'text.primary', ...(indice === 0 && { bgcolor: 'text.primary' }) }}
              />
              <Typography component="p" sx={{ fontSize: '0.875rem', fontWeight: 500, color: 'text.secondary', fontVariantNumeric: 'tabular-nums' }}>
                {trabajo.fechas}
              </Typography>
            </Box>
            <Box component="article" sx={TARJETA}>
              <Typography variant="overline" component="p" sx={{ color: 'text.secondary' }}>
                {trabajo.rol}
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mt: 0.5 }}>
                {trabajo.lugar === PERSONA.empresa.nombre ? (
                  <Link href={PERSONA.empresa.url} target="_blank" rel="noopener" color="inherit" underline="hover" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
                    {trabajo.lugar}
                    <ArrowOutwardIcon aria-hidden sx={{ fontSize: 18 }} />
                  </Link>
                ) : (
                  trabajo.lugar
                )}
              </Typography>
              <Box component="ul" sx={{ color: 'text.secondary', mt: 2, mb: 2.5, pl: 2.5, display: 'grid', gap: 1, fontSize: '0.9375rem' }}>
                {trabajo.puntos.map((punto) => (
                  <li key={punto}>{punto}</li>
                ))}
              </Box>
              <Etiquetas items={trabajo.tecnologias} />
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 4, color: 'text.secondary', fontSize: '0.9375rem' }}>
        <SchoolOutlinedIcon aria-hidden sx={{ fontSize: 20 }} />
        {FORMACION}
      </Box>
    </Seccion>
  );
}

export function Herramientas() {
  return (
    <Seccion id="herramientas" etiqueta="Herramientas" titulo="Con qué trabajo." descripcion="Programo de la forma tradicional y también con asistentes de inteligencia artificial, revisando y probando cada cambio.">
      <Box sx={{ display: 'grid', gap: 0 }}>
        {HERRAMIENTAS.map((grupo) => (
          <Box
            key={grupo.grupo}
            sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '160px 1fr' }, gap: { xs: 1.25, sm: 3 }, alignItems: 'center', py: 2.5, borderTop: 1, borderColor: 'divider' }}
          >
            <Typography variant="h4" component="h3">
              {grupo.grupo}
            </Typography>
            <Etiquetas items={grupo.items} />
          </Box>
        ))}
      </Box>
    </Seccion>
  );
}

export function Contacto() {
  return (
    <Box component="section" id="contacto" aria-labelledby="contacto-titulo" sx={{ py: { xs: 9, md: 14 }, bgcolor: 'text.primary', color: 'background.default', scrollMarginTop: 64 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="overline" component="p" sx={{ opacity: 0.7, mb: 1.5 }}>
          Contacto
        </Typography>
        <Typography variant="h2" id="contacto-titulo">
          ¿Tienes un proyecto o un cargo donde pueda aportar?
        </Typography>
        <Typography variant="subtitle1" component="p" sx={{ opacity: 0.75, mt: 2.5 }}>
          Escríbeme y hablamos.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5, mt: 4.5 }}>
          <Button href={`mailto:${PERSONA.correo}`} size="large" startIcon={<MailOutlineIcon />} sx={{ bgcolor: 'background.default', color: 'text.primary', '&:hover': { bgcolor: 'background.paper' } }}>
            Escribir un correo
          </Button>
          <Button href={PERSONA.linkedin} target="_blank" rel="noopener" size="large" variant="outlined" startIcon={<LinkedInIcon />} sx={{ color: 'inherit', borderColor: 'currentColor' }}>
            LinkedIn
          </Button>
          <Button href={PERSONA.github} target="_blank" rel="noopener" size="large" variant="outlined" startIcon={<GitHubIcon />} sx={{ color: 'inherit', borderColor: 'currentColor' }}>
            GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
