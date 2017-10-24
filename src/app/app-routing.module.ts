import { NgModule }                       from '@angular/core';
import { RouterModule, Routes }           from '@angular/router';

import { ComposeMessageComponent }        from './compose-message.component';
import { PageNotFoundComponent }          from './not-found.component';

import { CanDeactivateGuard }             from './login/guard/auth.deactivate.service';
import { AuthGuard }                      from './login/guard/auth.guard.service';
import { SelectivePreloadingStrategy }    from './selective-preloading-strategy';

const appRoutes: Routes = [
   {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'site',
    loadChildren: './site/site.module#SiteModule',
    canActivate: [AuthGuard]
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
