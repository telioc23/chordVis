import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SpiralComponent } from './spiral/spiral.component';
import { SpiralSvgComponent } from './spiral-svg/spiral-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SpiralComponent,
    SpiralSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
