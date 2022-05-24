import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// esa linea indica e que modulo se debe de cargar el primer componente a poner a funcionar
platformBrowserDynamic().bootstrapModule(AppModule) //arranca con el compoenete que tenemos en el modulo de app modulo el que estre en boostrap[]
  .catch(err => console.error(err));
