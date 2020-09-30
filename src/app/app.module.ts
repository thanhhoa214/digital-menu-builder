import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [CardComponent],
  imports: [BrowserModule],
  entryComponents: [CardComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(CardComponent, { injector: injector });
    customElements.define('my-card', custom);
  }
  ngDoBootstrap() {}
}
