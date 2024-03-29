// my-theme.ts

export const theme = {
  fonts: {
    inter: "'Inter', sans-serif;",
    syncopate: "'Syncopate', sans-serif;",
    poppins: "'Poppins', sans-serif;",
    firaCode: "'Fira Code', monospace;",
    playfairDisplay: "'Playfair Display', serif;",
    cardo: "'Cardo', serif;",
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    backgroundColor: '#0C0E13',
    lightViolet: '#9892E3',
  },
  breakpoints: {
    lg: '64rem',
    md: '58.125rem',
    sm: '48rem',
    xs: '31.25rem',
  },
};

export type MyProps = {
  theme: typeof theme;
};
