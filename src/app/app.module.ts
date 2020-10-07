import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BoxComponent } from './box/box.component';
import { TemplateComponent } from './template/template.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [BrowserModule],
  bootstrap: [TemplateComponent],
  declarations: [BoxComponent, TemplateComponent, ProductListComponent],
})
export class AppModule {}
