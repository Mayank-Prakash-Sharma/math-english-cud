import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamsPage } from './exams.page';

const routes: Routes = [
  {
    path: '',
    component: ExamsPage
  },
  {
    path: 'test-packages',
    loadChildren: () => import('./test-packages/test-packages.module').then( m => m.TestPackagesPageModule)
  },
  //Setting up dynamic route for the user to click on a exam on the previous page and pass on the id of that exam in the URL to the next page. Colon represents dynamic parameter. Different test packages  will obviously have different ids. (Dynamc paths must be below the hardcoded paths)
  {
    path: ':examId',
    loadChildren: () => import('./test-packages/test-packages.module').then( m => m.TestPackagesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamsPageRoutingModule {}
