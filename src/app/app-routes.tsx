import React, { lazy, Suspense } from 'react';

const Support = lazy(() => import('./support/support'));

export const routes = [
  {
    index: true,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Support />
      </Suspense>
    ),
    text: 'Support'
  },
];
