const fontSizes = {
  xl: '1.25rem',
  l: '1.125rem',
  base: '1rem',
  s: '0.875rem',
  xs: '0.8125rem',
  xxs: '0.75rem',
};

const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  bold: 700,
};

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  error: '#BA1A1A',
  primary9: '#820037',
  primary8: '#A4003C',
  primary7: '#B8003E',
  primaryMain: '#CC0041',
  primary5: '#DB0742',
  primary4: '#E3335B',
  primary3: '#EA5877',
  primary2: '#F2889D',
  primary1: '#F8B6C3',
  primary0: '#FCE2E7',
  secondary9: '#006022',
  secondary8: '#008038',
  secondary7: '#009244',
  secondary6: '#00A451',
  secondary5: '#00B35B',
  secondary4: '#00C072',
  secondary3: '#00CC8B',
  secondary2: '#76DAAD',
  secondary1: '#B0E9CD',
  secondary0: '#DEF6EB',
  gray9: '#212121',
  gray8: '#424242',
  gray7: '#616161',
  gray6: '#757575',
  gray5: '#9E9E9E',
  gray4: '#BDBDBD',
  gray3: '#E0E0E0',
  gray2: '#EEEEEE',
  gray1: '#F5F5F5',
  gray0: '#FAFAFA',
  blue: '#1E88E5',
  red: '#E53935',
};

const devices = {
  desktop: '1440px',
  laptop: '1024px',
  tablet: '902px',
  mobile: '425px',
};

const media = {
  desktop: `max-width:${devices.desktop}`,
  laptop: `max-width:${devices.laptop}`,
  tablet: `max-width:${devices.tablet}`,
  mobile: `max-width:${devices.mobile}`,
};

const GlobalTheme = {
  fontSizes,
  fontWeights,
  colors,
  media,
};

export default GlobalTheme;
