import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import DevicesIcon from '@mui/icons-material/Devices';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import GitHubIcon from '@mui/icons-material/GitHub';
import PaletteIcon from '@mui/icons-material/Palette';
import PaymentsIcon from '@mui/icons-material/Payments';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import ScienceIcon from '@mui/icons-material/Science';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { CASOS, OTROS_PROYECTOS, type Caso, type IconoPaso } from '../contenido';
import { columnas, TARJETA } from '../tema';
import { Etiquetas, Seccion } from './Base';

const ICONOS: Record<IconoPaso, typeof QrCode2Icon> = {
  qr: QrCode2Icon,
  celular: SmartphoneIcon,
  cocina: SoupKitchenIcon,
  caja: PointOfSaleIcon,
  reserva: EventAvailableIcon,
  agenda: CalendarMonthIcon,
  servicio: ContentCutIcon,
  pago: PaymentsIcon,
  recibo: ReceiptLongIcon,
  laboratorio: ScienceIcon,
  entrega: VisibilityIcon,
  equipo: DevicesIcon,
  idea: AutoAwesomeIcon,
  diseno: PaletteIcon,
  revision: FactCheckIcon,
  publicar: ScheduleSendIcon,
};

/** Los pasos del día a día con el sistema, unidos por una línea. En celular va en vertical. */
function Recorrido({ pasos }: { pasos: Caso['recorrido'] }) {
  const ultimo = pasos.length - 1;
  return (
    <Box component="ol" aria-label="Cómo funciona" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gridTemplateColumns: { xs: '1fr', md: `repeat(${pasos.length}, 1fr)` } }}>
      {pasos.map((paso, indice) => {
        const Icono = ICONOS[paso.icono];
        return (
          <Box component="li" key={paso.titulo} sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: { xs: 2, md: 2 } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: '50%',
                  border: 1,
                  borderColor: 'text.primary',
                  ...(indice === ultimo && { bgcolor: 'text.primary', color: 'background.default' }),
                }}
              >
                <Icono aria-hidden sx={{ fontSize: 21 }} />
              </Box>
              {indice < ultimo && (
                <>
                  <Box aria-hidden sx={{ flex: 1, bgcolor: 'text.secondary', opacity: 0.4, width: { xs: '1px', md: 'auto' }, height: { xs: 'auto', md: '1px' }, minHeight: { xs: 16, md: 0 } }} />
                  <ChevronRightIcon aria-hidden sx={{ display: { xs: 'none', md: 'block' }, fontSize: 18, color: 'text.secondary', ml: -1, mr: 0.5 }} />
                </>
              )}
            </Box>
            <Box sx={{ pb: { xs: indice < ultimo ? 2 : 0, md: 0 }, pr: { md: 2 }, pt: { xs: 0.25, md: 0 } }}>
              <Typography variant="h4" component="p" sx={{ fontSize: '0.9375rem' }}>
                {paso.titulo}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                {paso.texto}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

function TarjetaCaso({ caso, indice }: { caso: Caso; indice: number }) {
  return (
    <Box component="article" aria-labelledby={`caso-${caso.id}`} sx={{ ...TARJETA, p: { xs: 3, md: 5 } }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 1 }}>
        <Typography variant="overline" component="p" sx={{ color: 'text.secondary' }}>
          {String(indice + 1).padStart(2, '0')} · {caso.sector}
        </Typography>
        <Typography component="p" sx={{ fontSize: '0.8125rem', fontWeight: 500, color: 'text.secondary' }}>
          {caso.estado}
        </Typography>
      </Box>
      <Typography variant="h3" component="h3" id={`caso-${caso.id}`} sx={{ fontSize: { xs: '1.375rem', md: '1.625rem' }, mt: 1 }}>
        {caso.titulo}
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 2.5, md: 5 }, mt: 3 }}>
        <div>
          <Typography variant="h4" component="h4">
            El problema
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.75 }}>
            {caso.problema}
          </Typography>
        </div>
        <div>
          <Typography variant="h4" component="h4">
            Lo que hice
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.75 }}>
            {caso.aporte}
          </Typography>
        </div>
      </Box>

      <Box sx={{ borderTop: 1, borderColor: 'divider', mt: 4, pt: 4 }}>
        <Recorrido pasos={caso.recorrido} />
      </Box>

      <Box sx={{ mt: 4 }}>
        <Etiquetas items={caso.tecnologias} />
      </Box>
    </Box>
  );
}

export function Proyectos() {
  return (
    <Seccion
      id="proyectos"
      etiqueta="Proyectos"
      titulo="Sistemas que usan negocios reales."
      descripcion="Por confidencialidad, los clientes van sin nombre y no muestro sus pantallas: cada caso se explica con el problema, lo que construí y cómo funciona en el día a día."
      alterna
    >
      <Box sx={{ display: 'grid', gap: { xs: 2.5, md: 3 } }}>
        {CASOS.map((caso, indice) => (
          <TarjetaCaso key={caso.id} caso={caso} indice={indice} />
        ))}
      </Box>
    </Seccion>
  );
}

export function OtrosProyectos() {
  return (
    <Seccion id="otros" etiqueta="Más proyectos" titulo="Proyectos personales y de estudio." descripcion="Con demostración en línea y código abierto.">
      <Box sx={columnas(3)}>
        {OTROS_PROYECTOS.map((proyecto) => (
          <Box component="article" key={proyecto.titulo} sx={{ ...TARJETA, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h3">{proyecto.titulo}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, mb: 2.5 }}>
              {proyecto.descripcion}
            </Typography>
            <Etiquetas items={proyecto.tecnologias} />
            <Box sx={{ display: 'flex', gap: 1, mt: 'auto', pt: 3 }}>
              <Button href={proyecto.demo} target="_blank" rel="noopener" variant="contained" size="small" endIcon={<ArrowOutwardIcon />}>
                Ver demostración
              </Button>
              <Button href={proyecto.codigo} target="_blank" rel="noopener" variant="outlined" size="small" startIcon={<GitHubIcon />}>
                Código
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Seccion>
  );
}
