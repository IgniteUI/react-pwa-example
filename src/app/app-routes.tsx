import { redirect } from 'react-router-dom';
import Support from './support/support';

export const routes = [
  { index: true, loader: () => redirect('support') },
  { path: 'support', element: <Support />, text: 'Support' }
];
