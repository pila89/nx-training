import { SrcAppAuthModule } from './auth/src/lib/src-app-auth.module';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SrcAppFeaturesProductModule } from './features/product/src';
import { SrcAppFeaturesUserModule } from './features/user/src';
import { CartModule } from './features/cart/src';

@Component({
  standalone: true,
  imports: [ RouterModule,SrcAppAuthModule,SrcAppFeaturesProductModule, SrcAppFeaturesUserModule,CartModule],
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ecommerce';
}
