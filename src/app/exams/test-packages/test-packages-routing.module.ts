import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestPackagesPage } from './test-packages.page';

const routes: Routes = [
  {
    path: '',
    component: TestPackagesPage
  },
  {
    path: 'tests',
    loadChildren: () => import('./tests/tests.module').then( m => m.TestsPageModule)
  },
  //Setting up dynamic route for the user to click on a test package on the previous page and pass on the id of that test package in the URL to the next page. Colon represents dynamic parameter. Different test packages  will obviously have different ids. (Dynamc paths must be below the hardcoded paths)
  {
    path: ':packageId',
    loadChildren: () => import('./tests/tests.module').then( m => m.TestsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPackagesPageRoutingModule {}
