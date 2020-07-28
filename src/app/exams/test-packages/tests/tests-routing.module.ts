import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsPage } from './tests.page';

const routes: Routes = [
  {
    path: '',
    component: TestsPage
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
   //Setting up dynamic route for the user to click on a test on the previous page and pass on the id of that test in the URL to the next page. Colon represents dynamic parameter. Different tests  will obviously have different ids. (Dynamc paths must be below the hardcoded paths)
   {
    path: ':testId',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsPageRoutingModule {}
