import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BoxComponent } from './box/box.component';
import { TemplateComponent } from './template/template.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BoxOneComponent } from './box-one/box-one.component';
import { BoxTwoComponent } from './box-two/box-two.component';
import { BoxThreeComponent } from './box-three/box-three.component';

@NgModule({
  imports: [BrowserModule],
  bootstrap: [TemplateComponent],
  declarations: [
    BoxComponent,
    TemplateComponent,
    ProductListComponent,
    BoxOneComponent,
    BoxTwoComponent,
    BoxThreeComponent,
  ],
})
export class AppModule {}
