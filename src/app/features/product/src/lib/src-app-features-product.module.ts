import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { srcAppFeaturesProductRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(srcAppFeaturesProductRoutes),
    RouterModule.forChild(srcAppFeaturesProductRoutes),
  ],
})
export class SrcAppFeaturesProductModule {}
