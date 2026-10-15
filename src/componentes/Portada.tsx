import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { PERSONA } from '../contenido';

export function Portada() {
  return (
    <Box component="section" id="inicio" aria-labelledby="inicio-titulo" sx={{ py: { xs: 7, md: 12 } }}>
      <Container
        maxWidth="lg"
        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.35fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'center' }}
      >
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <Typography variant="overline" component="p" sx={{ color: 'text.secondary', mb: 2.5 }}>
            {PERSONA.rol}
          </Typography>
          <Typography variant="h1" id="inicio-titulo">
            Sistemas completos, del servidor a la pantalla.
          </Typography>
          <Typography variant="subtitle1" component="p" sx={{ color: 'text.secondary', mt: 3, maxWidth: 600 }}>
            {PERSONA.resumen}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1.5, mt: 4.5 }}>
            <Button href="#proyectos" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
              Ver proyectos
            </Button>
            <Button href="#contacto" variant="outlined" size="large">
              Contactarme
            </Button>
            <Box sx={{ display: 'flex', gap: 0.5, ml: { sm: 1 } }}>
              <IconButton href={PERSONA.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton href={PERSONA.github} target="_blank" rel="noopener" aria-label="GitHub">
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Box component="figure" sx={{ order: { xs: 1, md: 2 }, m: 0, justifySelf: { xs: 'start', md: 'end' }, width: { xs: 220, sm: 280, md: '100%' }, maxWidth: 420 }}>
          <Box
            component="img"
            src="/andres-perez.webp"
            alt={`Foto de ${PERSONA.nombre}`}
            width={640}
            height={800}
            sx={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: 2, border: 1, borderColor: 'divider' }}
          />
          <Box component="figcaption" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.75, mt: 1.5, color: 'text.secondary', fontSize: '0.875rem' }}>
            <PlaceOutlinedIcon aria-hidden sx={{ fontSize: 18 }} />
            {PERSONA.ciudad}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
