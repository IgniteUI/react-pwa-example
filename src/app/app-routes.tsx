import { redirect } from 'react-router-dom';
import Support from './support/support';

export const routes = [
  { index: true, element: <Support />, text: 'Support' },
  //{ path: 'support', element: <Support />, text: 'Support' }
];
