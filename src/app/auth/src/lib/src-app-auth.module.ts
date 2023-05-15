import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { srcAppAuthRoutes } from './lib.routes';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(srcAppAuthRoutes),
    RouterModule.forChild(srcAppAuthRoutes),
  ],
  declarations: [LoginComponent, RegisterComponent],
})
export class SrcAppAuthModule {}
