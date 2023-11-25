import { Navigation } from './types';
import { ROUTES } from '@/router';

export const SITE_NAVIGATIONS: Array<Navigation> = [
  { text: 'site menu1', to: ROUTES.product.fullPath },
  { text: 'site menu02', to: ROUTES.product.fullPath },
];
