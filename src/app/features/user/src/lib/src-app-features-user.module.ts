import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { srcAppFeaturesUserRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(srcAppFeaturesUserRoutes),
    RouterModule.forChild(srcAppFeaturesUserRoutes),
  ],
})
export class SrcAppFeaturesUserModule {}
