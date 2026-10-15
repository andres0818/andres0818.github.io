import { createTheme } from '@mui/material/styles';

const FAMILIA_TIPOGRAFICA = '"Inter Variable", "Helvetica Neue", Arial, sans-serif';

/** La misma escala de grises de soluoficial.com: el único "color" es el contraste entre negro y blanco. */
export const GRISES = {
  blanco: '#ffffff',
  50: '#fafafa',
  100: '#f4f4f5',
  200: '#e4e4e7',
  300: '#d4d4d8',
  400: '#a1a1aa',
  500: '#71717a',
  600: '#52525b',
  700: '#3f3f46',
  800: '#27272a',
  900: '#18181b',
  negro: '#09090b',
} as const;

const titular = (peso: number, espaciado: string) => ({ fontWeight: peso, letterSpacing: espaciado });

/** Tema claro y oscuro con variables CSS; el modo sigue la preferencia del dispositivo. */
export const tema = createTheme({
  cssVariables: { colorSchemeSelector: 'data' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: GRISES.negro, contrastText: GRISES.blanco },
        secondary: { main: GRISES[600], contrastText: GRISES.blanco },
        background: { default: GRISES.blanco, paper: GRISES[50] },
        text: { primary: GRISES.negro, secondary: GRISES[600] },
        divider: GRISES[200],
      },
    },
    dark: {
      palette: {
        primary: { main: GRISES[50], contrastText: GRISES.negro },
        secondary: { main: GRISES[400], contrastText: GRISES.negro },
        background: { default: GRISES.negro, paper: GRISES[900] },
        text: { primary: GRISES[50], secondary: GRISES[400] },
        divider: GRISES[800],
      },
    },
  },
  breakpoints: { values: { xs: 0, sm: 600, md: 840, lg: 1200, xl: 1600 } },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: FAMILIA_TIPOGRAFICA,
    h1: { ...titular(600, '-0.04em'), fontSize: 'clamp(2.5rem, 6vw, 4.25rem)', lineHeight: 1.04 },
    h2: { ...titular(600, '-0.03em'), fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', lineHeight: 1.12 },
    h3: { ...titular(600, '-0.015em'), fontSize: '1.25rem', lineHeight: 1.3 },
    h4: { ...titular(600, '-0.01em'), fontSize: '1.0625rem', lineHeight: 1.35 },
    subtitle1: { fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)', lineHeight: 1.55 },
    body1: { fontSize: '1rem', lineHeight: 1.65 },
    body2: { fontSize: '0.9375rem', lineHeight: 1.6 },
    overline: { fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', lineHeight: 1.6 },
    button: { fontWeight: 600, textTransform: 'none', letterSpacing: 0 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 20 },
        sizeLarge: { paddingBlock: 12, paddingInline: 26, fontSize: '1rem' },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
    MuiChip: {
      styleOverrides: { root: { borderRadius: 8, fontWeight: 500 } },
    },
  },
});

export const TARJETA = {
  border: 1,
  borderColor: 'divider',
  borderRadius: 1.5,
  bgcolor: 'background.default',
  p: { xs: 3, md: 3.5 },
} as const;

export const columnas = (md: number, sm = 2) => ({
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', sm: `repeat(${sm}, 1fr)`, md: `repeat(${md}, 1fr)` },
  gap: { xs: 2, md: 2.5 },
});
