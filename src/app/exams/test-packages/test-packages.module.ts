import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPackagesPageRoutingModule } from './test-packages-routing.module';

import { TestPackagesPage } from './test-packages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPackagesPageRoutingModule
  ],
  declarations: [TestPackagesPage]
})
export class TestPackagesPageModule {}
