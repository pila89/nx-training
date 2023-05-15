import { Route } from '@angular/router';

export const appRoutes: Route[] = [
      {
    path: 'auth',
    loadChildren: () =>
      import('./auth/src/lib/src-app-auth.module').then(
        (m) => m.SrcAppAuthModule
      ),
  },
];
